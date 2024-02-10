export type ApiLinkItem = {
  id: string;
  name: string;
  type: string;
  description: string;
  link: string;
  position: ApiPosition;
};

export type ApiMediaItem = {
  id: string;
  title: string;
  key: string;
};

export type ApiPosition = {
  id: string | number;
  width: number; // TODO: crete position enum -> WIDTH.lg ...
  heigth: number; // TODO: crete position enum -> HEIGHT.lg ...
  x: number;
  y: number;
};

export type ApiUser = {
  id: string;
  name: string;
  username: string;
  linkItems: ApiLinkItem[];
  medias: ApiMediaItem[];
  theme: string;
  profilePic: string;
  email: string;
  phone: string;
};
