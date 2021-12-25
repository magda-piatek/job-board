import nodemailer from "nodemailer";
import hbs from "nodemailer-express-handlebars";
import path from "path";

import keys from "../config/keys";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  service: "Gmail",
  port: 465,
  secure: true,
  auth: {
    user: "mag.pia13@gmail.com",
    pass: "zpjgjayjuoeuwctn",
  },
});

export default (to: string, emailToken: string) => {
  const options = {
    from: keys.EMAIL,
    to: to,
    subject: "Confirm",
    template: "confirm-email",
    context: {
      link: `${keys.URL}/confirmation/${emailToken}`,
    },
  };

  const handlebarOptions = {
    viewEngine: {
      extname: ".handlebars",
      layoutsDir: path.resolve("./views/"),
      defaultLayout: "confirm-email.handlebars",
    },
    viewPath: path.resolve("./views/"),
  };

  transporter.use("compile", hbs(handlebarOptions));

  return new Promise<void>(
    (resolve: (msg: any) => void, reject: (err: Error) => void) => {
      transporter.sendMail(options, (error, info) => {
        if (error) {
          reject(error);
        } else {
          resolve(`Message Sent ${info.response}`);
        }
      });
    }
  );
};
