import fs from "fs";
import path from "path";
import sharp from "sharp";

export const TOKEN_IMAGE_WIDTH_TARGET = 128;
export const asset_files = fs.readdirSync(
  path.join(__dirname, "..", "..", "assets")
);

export const getAssetFilePath = (asset_file: string) => {
  return path.join(__dirname, "..", "..", "assets", asset_file);
};

export const readImgFromFile = (asset_file: string) => {
  return fs.readFileSync(getAssetFilePath(asset_file));
};

export const isWithinTargetSize = async (sharp_image: sharp.Sharp) => {
  let image_data = await sharp_image.metadata();
  return image_data.width && image_data.width <= TOKEN_IMAGE_WIDTH_TARGET;
};
