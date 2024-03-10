import InstagramService, { TwitterService } from "@/core/service/external-api/InstagramService";
import {
  type IActionsBase,
  type IAction,
  type TypedServiceMap,
} from "@/core/utils/actionLinkInterface";
import { type LinkPatternName } from "@/core/utils/interface.ui";

const servicesMap = new Map<LinkPatternName, TypedServiceMap>();

servicesMap.set("Instagram", InstagramService);
servicesMap.set("Twitter", TwitterService);

const BaseExternalApiService = (): UiBaseExternalApiService => {
  return {
    getService(name) {
      const service = servicesMap.get(name);
      if (typeof service === "undefined")
        throw new Error("The service doesnt exist or is not available" + name);
      return service;
    },
    getActions(name) {
      const service = this.getService(name);
      if (service().actions.length === 0)
        throw new Error("The service doesnt exist or is not available" + name);
      return service().actions;
    },
    remove: () => null, // call another service to manipulate database
    update: () => null, // call another service to manipulate database
  };
};

type UiBaseExternalApiService = IActionsBase & {
  getActions: (name: LinkPatternName) => IAction[];
  inject?: () => void;
  getService: (name: LinkPatternName) => TypedServiceMap;
};

export default BaseExternalApiService;
