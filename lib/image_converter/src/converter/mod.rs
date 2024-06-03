use std::io::Cursor;

pub mod format;
pub mod model;

pub struct ImageConverter {
    data: image::DynamicImage,
}

impl ImageConverter {
    pub fn new(data: image::DynamicImage) -> Self {
        Self { data }
    }

    pub fn resize(&self, width: u32, height: u32, format: format::ImageFormat) -> Vec<u8> {
        if format.is_unknown() {
            panic!("Unsupported image format.");
        }

        let (width, height) = self.adjust_size(width, height, &format);

        let resized_image = self
            .data
            .resize(width, height, image::imageops::FilterType::Nearest);

        let mut bytes = Cursor::new(Vec::new());
        match format.format {
            // If the format is JPEG, convert the image to RGB8 format because alpha channel is not supported.
            format::SupportedImageFormat::Jpeg => {
                let rgb_image = resized_image.into_rgb8();
                let _ = rgb_image.write_to(&mut bytes, image::ImageFormat::Jpeg);
            }
            _ => {
                let _ = resized_image.write_to(&mut bytes, format.to_image_format());
            }
        };

        bytes.into_inner()
    }

    pub fn resize_exact(&self, width: u32, height: u32, format: format::ImageFormat) -> Vec<u8> {
        if format.is_unknown() {
            panic!("Unsupported image format.");
        }

        let (width, height) = self.adjust_size(width, height, &format);

        let resized_image =
            self.data
                .resize_exact(width, height, image::imageops::FilterType::Nearest);

        let mut bytes = Cursor::new(Vec::new());
        match format.format {
            // If the format is JPEG, convert the image to RGB8 format because alpha channel is not supported.
            format::SupportedImageFormat::Jpeg => {
                let rgb_image = resized_image.into_rgb8();
                let _ = rgb_image.write_to(&mut bytes, image::ImageFormat::Jpeg);
            }
            _ => {
                let _ = resized_image.write_to(&mut bytes, format.to_image_format());
            }
        };

        bytes.into_inner()
    }

    fn adjust_size(&self, width: u32, height: u32, format: &format::ImageFormat) -> (u32, u32) {
        match format.format {
            // Adjust size to 256 or less due to ICO format limitations
            format::SupportedImageFormat::Ico => {
                let max_size = 256;
                let w = if width > max_size { max_size } else { width };
                let h = if height > max_size { max_size } else { height };

                (w, h)
            }
            _ => (width, height),
        }
    }
}
