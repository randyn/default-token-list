import {
  TOKEN_IMAGE_WIDTH_TARGET,
  asset_files,
  getAssetFilePath,
  readImgFromFile,
} from "./utils/tokenAssets";

import sharp from "sharp";

for (let asset_file of asset_files) {
  sharp(readImgFromFile(asset_file))
    .resize(TOKEN_IMAGE_WIDTH_TARGET, TOKEN_IMAGE_WIDTH_TARGET)
    .toFile(getAssetFilePath(asset_file))
    .catch(console.error);
}
