import {
  TOKEN_IMAGE_WIDTH_TARGET,
  asset_files,
  readImgFromFile,
} from "./utils/tokenAssets";

import sharp from "sharp";

const isWithinTargetSize = async (sharp_image: sharp.Sharp) => {
  let image_data = await sharp_image.metadata();
  return image_data.width && image_data.width <= TOKEN_IMAGE_WIDTH_TARGET;
};

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
