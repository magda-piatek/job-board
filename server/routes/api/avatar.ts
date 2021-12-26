import AWS from "aws-sdk";
import express from "express";

import keys from "../../config/keys";
import checkIfAuth from "../../middleware/auth";

const router = express.Router();
const s3 = new AWS.S3();

router.get("/:key", checkIfAuth, (req, res: any) => {
  const params = { Bucket: keys.AWS_BUCKET_NAME, Key: req.params.key };

  s3.getObject(params, (err, data) => {
    if (err) {
      return res.send({ error: err });
    }
    const buffer = Buffer.from(data.Body as any);

    const base64String = buffer.toString("base64");
    res.status(200).send(base64String);
  });
});

export default router;
