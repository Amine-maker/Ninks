import { type UiRenderIf } from "./interface";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const RenderIf = ({ children, isTrue }: UiRenderIf) => {
  return isTrue ? children : null;
};

export const copyToClipboard = async (text: string): Promise<void> => {
  await navigator.clipboard.writeText(text);
};

export const getHours = (timestamp: number): number => {
  const date = new Date(timestamp);
  return date.getHours();
};
