import React, { useEffect, useState } from "react";
import LinkService, { type LinkPayload } from "@service/LinkService";
import UserService from "@service/UserService";
import { useAuth } from "../hooks/AuthHook";
import { type LinkItem } from "../core/utils/interface.ui";

export const LinkContext = React.createContext<LinkContextType>(null!);
function LinkProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const { user } = useAuth();
  const [links, setLinks] = useState<Array<LinkItem<any>> | undefined>([]);
  if (user?.links[0] === null) user.links = [];

  const { getCurrentUser } = UserService();
  const siteService = LinkService();

  useEffect(() => {
    if (user != null) {
      setLinks(user.links);
    }
  }, [user]);

  const addLink = async (sitePayload: LinkPayload, callback: VoidFunction): Promise<void> => {
    await siteService.addLink(sitePayload);
    void getCurrentUser().then((user) => {
      setLinks(user?.links);
    });
    callback();
  };
  const deleteLink = async (siteId: string, callback?: VoidFunction): Promise<void> => {
    await siteService.remove(siteId);
    void getCurrentUser().then((user) => {
      setLinks(user?.links);
    });
    if (callback != null) callback();
  };

  const getLinks = (siteId: string): void => {
    // definir l'interface d'un lien
  };

  const value = { links, addLink, deleteLink, getLinks };

  return <LinkContext.Provider value={value}>{children}</LinkContext.Provider>;
}

export interface LinkContextType {
  sites?: Array<LinkItem<any>>;
  addLink: (payload: LinkPayload, callback: VoidFunction) => void;
  deleteLink: (siteId: string, callback?: VoidFunction) => void;
  getLinks: (siteId: string) => void;
}
export default LinkProvider;
