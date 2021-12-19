import multer from "multer";
import multerS3 from "multer-s3";
import AWS from "aws-sdk";

import keys from "../config/keys";

AWS.config.update({
  accessKeyId: keys.AWS_ACCESS_KEY_ID,
  secretAccessKey: keys.AWS_SECRET_ACCESS_KEY,
});

const s3 = new AWS.S3();
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: keys.AWS_BUCKET_NAME,
    key: function (req, file: any, cb: any) {
      const filename = `${Date.now().toString()}-${file.originalname}`;
      cb(null, filename);
    },
  }),
});

export default upload;
