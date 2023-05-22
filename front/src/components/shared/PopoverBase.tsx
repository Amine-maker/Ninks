import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import React, { Fragment, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { type IActionsBase } from "../../core/utils/actionLinkInterface";

interface IPopoverProps {
  actions: IActionsBase;
}

const PopoverBase = (props: IPopoverProps): JSX.Element => {
  return (
    <div className="">
      <Popover className="relative">
        {({ close }) => (
          <>
            <Popover.Button>
              <BsThreeDots className="rounded-full bg-white border shadow-md p-1 m-1" size={30} />
            </Popover.Button>
            <Transition as={Fragment} enter="transition ease-out duration-200" enterFrom="opacity-0 translate-y-1" enterTo="opacity-100 translate-y-0" leave="transition ease-in duration-150" leaveFrom="opacity-100 translate-y-0" leaveTo="opacity-0 translate-y-1">
              <Popover.Panel static className="absolute left-1/2 z-50 mt-3  -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative flex flex-col gap-8 bg-white p-7">
                    <div
                      onClick={() => {
                        close();
                        props.actions.remove(2);
                      }}
                      key={"supprimer"}
                      className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12"></div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">Supprimer</p>
                      </div>
                    </div>
                    <div
                      key={"modifier"}
                      onClick={() => {
                        close();
                        props.actions.update?.(1);
                      }}
                      className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12"></div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">Modifier</p>
                      </div>
                    </div>
                    <div key={"partager"} className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12"></div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">Partager</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
};

export default PopoverBase;
