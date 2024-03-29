import { API_URL } from "../utils/constante";

import { type LinkItem } from "../utils/interface.ui";

import axiosInstance from "./ApiInterceptor";

const LinkService = (): ILinkService => {
  return {
    async addLink(payload: LinkPayload): Promise</* ILinkItem<null> */ any> {
      return await axiosInstance.post(`${API_URL}/link/add`, payload).then((site) => {
        return {
          id: site.data.id,
          name: site.data.name,
          userId: site.data.userId,
          type: "",
        };
      });
    },

    async remove(siteId: string): Promise<void> {
      await axiosInstance.delete(`${API_URL}/site/remove`, { params: { siteId } }).then((site) => {
        console.log("site supprimé");
      });
    },

    async getAllLinks(siteId: string): Promise<any[]> {
      return await axiosInstance
        .get<any[]>(`${API_URL}/event/getEvents`, {
          params: {
            siteId,
          },
        })
        .then((eventsBatch) => {
          return eventsBatch.data.map((events) => {
            return events;
          });
        });
    },
  };
};

interface ILinkService {
  addLink: (payload: LinkPayload) => Promise<LinkItem<any>>;
  remove: (siteId: string) => Promise<void>;
  getAllLinks: (siteId: string) => Promise<any[]>;
}

export default LinkService;

export interface LinkPayload {
  name: string;
  userId: string;
}
