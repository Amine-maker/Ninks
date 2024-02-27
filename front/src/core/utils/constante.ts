import { HEIGHT, WIDTH } from "@/core/utils/enum";

export const envLocal = import.meta.env;
export const API_URL = envLocal.VITE_API_URL;
export const DEFAULT_LINKS_CONFIG = {
  w: WIDTH.sm,
  h: HEIGHT.sm,
  minH: HEIGHT.sm,
  minW: WIDTH.sm,
  maxW: WIDTH.lg,
  maxH: HEIGHT.lg,
};
