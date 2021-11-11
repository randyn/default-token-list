import {
  TOKEN_IMAGE_WIDTH_TARGET,
  asset_files,
  getAssetFilePath,
  readImgFromFile,
  isWithinTargetSize,
} from "./utils/tokenAssets";

import sharp from "sharp";
import path from "path";

const resizeTokens = async () => {
  for (let asset_file of asset_files) {
    let image = sharp(readImgFromFile(asset_file));
    if (!(await isWithinTargetSize(image))) {
      let file_type = path.extname(asset_file);
      let write_file =
        file_type === ".png"
          ? asset_file
          : asset_file.replace(file_type, ".png");
      image
        .resize(TOKEN_IMAGE_WIDTH_TARGET, TOKEN_IMAGE_WIDTH_TARGET)
        .toFile(getAssetFilePath(write_file));
    }
  }
};

resizeTokens().catch(console.error);
