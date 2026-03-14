import type { EnvOptions } from "tnp/src";

const env: Partial<EnvOptions> = {
  website: {
    domain: "my-amazing-cli.example.domain.com",
    title: "My Amazing Cli",
    useDomain: true,
  },
  loading: {
    preAngularBootstrap: {
      background: "#fdebed",
      loader: { name: "lds-default" },
    },
  },
};
export default env;
