import { keysProd } from "./prod";
import { keysDev } from "./dev";

let keys: any;

if (process.env.NODE_ENV === "production") {
  keys = keysProd;
} else {
  keys = keysDev;
}

export default keys;
