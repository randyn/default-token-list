import fs from "fs";
import path from "path";

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
