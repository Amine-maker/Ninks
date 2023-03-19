import React, { useEffect, useState } from "react";
import LinkService, { type LinkPayload } from "../core/service/LinkService";
import UserService from "../core/service/UserService";
import { type Link } from "../core/utils/interface";
import { useAuth } from "../hooks/AuthHook";

export const LinkContext = React.createContext<LinkContextType>(null!);

function LinkProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const { user } = useAuth();
  const [sites, setLinks] = useState<Link[] | undefined>([]);
  if (user?.sites[0] === null) user.sites = [];

  const { getCurrentUser } = UserService();
  const siteService = LinkService();

  useEffect(() => {
    if (user != null) {
      setLinks(user.sites);
    }
  }, [user]);

  const addLink = async (sitePayload: LinkPayload, callback: VoidFunction): Promise<void> => {
    await siteService.addLink(sitePayload);
    void getCurrentUser().then((user) => {
      setLinks(user?.sites);
    });
    callback();
  };
  const deleteLink = async (siteId: string, callback?: VoidFunction): Promise<void> => {
    await siteService.remove(siteId);
    void getCurrentUser().then((user) => {
      setLinks(user?.sites);
    });
    if (callback != null) callback();
  };

  const getEvents = async (siteId: string): Promise<any[]> => {
    // definir l'interface d'un lien
    return await siteService.events(siteId);
  };

  const value = { sites, addLink, deleteLink, getEvents };

  return <LinkContext.Provider value={value}>{children}</LinkContext.Provider>;
}

export interface LinkContextType {
  sites?: Link[];
  addLink: (payload: LinkPayload, callback: VoidFunction) => void;
  deleteLink: (siteId: string, callback?: VoidFunction) => void;
  getEvents: (siteId: string) => Promise<any[]>;
}
export default LinkProvider;
