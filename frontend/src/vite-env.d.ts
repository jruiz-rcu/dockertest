/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BACKEND_URL: string;
  readonly VITE_BACKEND_PORT: number;
  readonly VITE_ENV_TYPE: string;
  readonly VITE_NAME: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
