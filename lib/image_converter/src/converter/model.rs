use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
pub struct ImageInfo {
    pub format: String,
    pub width: u32,
    pub height: u32,
    pub data_url: String,
}
