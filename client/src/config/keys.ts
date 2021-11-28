import { keysProd } from "./prod";
import { keysDev } from "./dev";
import { TKeys } from "./typedef";

let keys: TKeys;

if (process.env.NODE_ENV === "production") {
  keys = keysProd;
} else {
  keys = keysDev;
}

export default keys;
