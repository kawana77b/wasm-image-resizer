use image::io::Reader as ImageReader;

use image::GenericImageView;
use serde_json::json;

use std::io::Cursor;
use wasm_bindgen::prelude::*;

mod converter;
use converter::format;
use converter::model;

use base64::{engine::general_purpose, Engine as _};

fn load_image_from_bytes(image: &[u8]) -> (image::DynamicImage, image::ImageFormat) {
    let src = ImageReader::new(Cursor::new(image))
        .with_guessed_format()
        .unwrap();
    let src_format = src.format().unwrap();
    let src_img = src.decode().unwrap();

    (src_img, src_format)
}

/// Analyze the image and return the image information in JSON format.
/// - `format`: The image format.
/// - `width`: The width of the image.
/// - `height`: The height of the image.
/// - `data_url`: The thumbnail data URL of the webp image.
#[wasm_bindgen]
pub fn analyze_image(image: &[u8]) -> String {
    const THUMB_SIZE: u32 = 300;

    let (image, format) = load_image_from_bytes(image);
    let (width, height) = image.dimensions();

    let conv = converter::ImageConverter::new(image);
    let thumbnail = conv.resize(
        std::cmp::min(width, THUMB_SIZE),
        std::cmp::min(height, THUMB_SIZE),
        format::ImageFormat::from_str("webp"),
    );
    let data_url = format!(
        "data:image/webp;base64,{}",
        general_purpose::STANDARD.encode(&thumbnail)
    );

    let image = model::ImageInfo {
        format: format::ImageFormat::from_image_format(format).to_string(),
        width,
        height,
        data_url,
    };

    json!(image).to_string()
}

/// Resize the image and return the resized image.
#[wasm_bindgen]
pub fn resize_image(image: &[u8], width: u32, height: u32, format: &str) -> Vec<u8> {
    let (src_img, src_format) = load_image_from_bytes(image);

    // If the format is empty, the format is determined from the source image format.
    let dst_format = if format.is_empty() {
        format::ImageFormat::from_image_format(src_format).to_image_format()
    } else {
        format::ImageFormat::from_str(format).to_image_format()
    };

    let conv = converter::ImageConverter::new(src_img);
    conv.resize_exact(
        width,
        height,
        format::ImageFormat::from_image_format(dst_format),
    )
}

#[cfg(test)]
mod tests {
    #[test]
    fn test_analyze_image() {
        let src = include_bytes!("../tests/data/chara.png");
        let json = super::analyze_image(src);
        let image: super::model::ImageInfo = serde_json::from_str(&json).unwrap();

        // check if the data URL is correct
        assert!(image.data_url.starts_with("data:image/webp;base64,"));

        assert_eq!(image.format, "png");
        assert_eq!(image.width, 300);
        assert_eq!(image.height, 300);
    }

    #[test]
    fn test_resize_image() {
        let image = include_bytes!("../tests/data/chara.png");
        let resized_image = super::resize_image(image, 100, 128, "jpeg");

        let json = super::analyze_image(&resized_image);
        let image: super::model::ImageInfo = serde_json::from_str(&json).unwrap();

        assert_eq!(image.format, "jpeg");
        assert_eq!(image.width, 100);
        assert_eq!(image.height, 128);
    }

    #[test]
    fn test_png_to_ico() {
        let image = include_bytes!("../tests/data/chara.png");
        let resized_image = super::resize_image(image, 300, 300, "ico");

        let json = super::analyze_image(&resized_image);
        let image: super::model::ImageInfo = serde_json::from_str(&json).unwrap();

        assert_eq!(image.format, "ico");
        assert_eq!(image.width, 256);
        assert_eq!(image.height, 256);
    }
}
