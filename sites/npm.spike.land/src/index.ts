import { default as npmAns } from "@spike.land/cf-npm-site";
import { version } from "@spike.land/blog-artifacts/package.json";

const fetch = npmAns("@spike.land/blog-artifacts", version, "public");

export default {
  fetch,
};
