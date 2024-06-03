export interface ImageFile {
  name: string;
  data: Uint8Array;
  width: number;
  height: number;
  format: string;
  data_url: string;
}
