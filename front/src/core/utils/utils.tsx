import { type UiRenderIf } from "./interface";

export const RenderIf = ({ children, isTrue }: UiRenderIf): typeof children | null => {
  return isTrue ? children : null;
};

export const copyToClipboard = async (text: string): Promise<void> => {
  await navigator.clipboard.writeText(text);
};

export const getHours = (timestamp: number): number => {
  const date = new Date(timestamp);
  return date.getHours();
};
