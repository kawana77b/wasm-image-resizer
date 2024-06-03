pub enum SupportedImageFormat {
    Png,
    Jpeg,
    WebP,
    Avif,
    Ico,
    Unknown,
}

pub struct ImageFormat {
    pub format: SupportedImageFormat,
}

impl ImageFormat {
    pub fn from_str(format: &str) -> ImageFormat {
        match format {
            "png" => ImageFormat::new(SupportedImageFormat::Png),
            "jpeg" => ImageFormat::new(SupportedImageFormat::Jpeg),
            "webp" => ImageFormat::new(SupportedImageFormat::WebP),
            "avif" => ImageFormat::new(SupportedImageFormat::Avif),
            "ico" => ImageFormat::new(SupportedImageFormat::Ico),
            _ => ImageFormat::new(SupportedImageFormat::Unknown),
        }
    }

    pub fn from_image_format(format: image::ImageFormat) -> ImageFormat {
        match format {
            image::ImageFormat::Png => ImageFormat::new(SupportedImageFormat::Png),
            image::ImageFormat::Jpeg => ImageFormat::new(SupportedImageFormat::Jpeg),
            image::ImageFormat::WebP => ImageFormat::new(SupportedImageFormat::WebP),
            image::ImageFormat::Avif => ImageFormat::new(SupportedImageFormat::Avif),
            image::ImageFormat::Ico => ImageFormat::new(SupportedImageFormat::Ico),
            _ => ImageFormat::new(SupportedImageFormat::Unknown),
        }
    }

    pub fn new(format: SupportedImageFormat) -> Self {
        Self { format }
    }

    pub fn to_string(&self) -> String {
        match self.format {
            SupportedImageFormat::Png => "png",
            SupportedImageFormat::Jpeg => "jpeg",
            SupportedImageFormat::WebP => "webp",
            SupportedImageFormat::Avif => "avif",
            SupportedImageFormat::Ico => "ico",
            SupportedImageFormat::Unknown => "unknown",
        }
        .to_string()
    }

    pub fn to_image_format(&self) -> image::ImageFormat {
        match self.format {
            SupportedImageFormat::Png => image::ImageFormat::Png,
            SupportedImageFormat::Jpeg => image::ImageFormat::Jpeg,
            SupportedImageFormat::WebP => image::ImageFormat::WebP,
            SupportedImageFormat::Avif => image::ImageFormat::Avif,
            SupportedImageFormat::Ico => image::ImageFormat::Ico,
            SupportedImageFormat::Unknown => panic!("Unsupported image format."),
        }
    }

    pub fn is_unknown(&self) -> bool {
        match self.format {
            SupportedImageFormat::Unknown => true,
            _ => false,
        }
    }
}
