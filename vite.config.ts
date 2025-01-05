import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { default as react } from "@vitejs/plugin-react-swc";
import { UserConfig, defineConfig } from "vite";
import { default as tsconfigPaths } from "vite-tsconfig-paths";

/**
 * @see https://vite.dev/config/
 */
const config: UserConfig = {
  plugins: [react(), vanillaExtractPlugin(), tsconfigPaths()],
};

export default defineConfig(config);
