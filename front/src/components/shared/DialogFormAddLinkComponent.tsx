import { Dialog, Transition } from "@headlessui/react";
import React, { useState, Fragment } from "react";

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
  closeCallback?: () => void;
}

const DialogFormAddLinkComponent = (props: Props): JSX.Element => {
  return (
    <>
      <Transition appear show={props.open} as={Fragment}>
        <Dialog as="div" className="relative z-10" static onClose={() => null}>
          <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3" className="text-2xl font-medium leading-6 text-gray-900">
                    Ajouter un lien
                  </Dialog.Title>

                  {/* content */}

                  <div className="mt-2">
                    <p className="text-sm text-gray-500">form content a mettre</p>
                  </div>

                  <div className="mt-4 flex flex-row-reverse gap-2">
                    <button
                      autoFocus={false}
                      type="button"
                      className="btn-primary"
                      onClick={() => {
                        props.setOpen(false);
                        props.closeCallback?.();
                      }}
                    >
                      Ajouter
                    </button>
                    <button
                      autoFocus={false}
                      type="button"
                      className="btn-secondary"
                      onClick={() => {
                        props.setOpen(false);
                      }}
                    >
                      Annuler{" "}
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default DialogFormAddLinkComponent;
