import {
  TOKEN_IMAGE_WIDTH_TARGET,
  asset_files,
  readImgFromFile,
  isWithinTargetSize,
} from "./utils/tokenAssets";

import sharp from "sharp";

const lintAssets = async () => {
  for (let assetFile of asset_files) {
    let image = sharp(readImgFromFile(assetFile));
    if (!(await isWithinTargetSize(image))) {
      console.error(
        assetFile,
        `should have a width of ${TOKEN_IMAGE_WIDTH_TARGET}, but has a width of`,
        await image.metadata().then((metadata) => metadata.width)
      );
      throw new Error("asset larger than optimal: " + assetFile);
    }
  }
};

lintAssets().catch(console.error);
