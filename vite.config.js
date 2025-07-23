import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
    server: {
      host: '0.0.0.0',
      port: 3000,
      allowedHosts: ['.dev.acdm.space'],
      hmr: {
        host: 'vite-irina.dev.acdm.space',
      },
    },
  };
});
