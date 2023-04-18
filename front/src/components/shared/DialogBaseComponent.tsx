import { Dialog, Transition } from "@headlessui/react";
import React, { useState, Fragment } from "react";

interface Props {
  children: JSX.Element;
  open: boolean;
  dataStyle?: React.CSSProperties;
  setOpen: (value: boolean) => void;
  closeCallback?: () => void;
  actions: ActionDialog[];
}

export interface ActionDialog {
  label: string;
  className: string;
  clickCallback?: () => void;
}

const DialogBaseComponent = (props: Props): JSX.Element => {
  const close = (): void => {
    props.setOpen(false);
    props.closeCallback?.();
  };

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
                <Dialog.Panel style={props.dataStyle} className="w-full max-w-5xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3" className="text-2xl font-medium leading-6 text-gray-900">
                    Ajouter un lien
                  </Dialog.Title>
                  {/* content */}
                  {props.children}
                  <div className="mt-4 flex flex-row-reverse gap-2">
                    {props.actions != null && props.actions?.length > 0
                      ? props.actions.map((action) => {
                          return (
                            <button
                              key={action.label}
                              autoFocus={false}
                              type="button"
                              className={action.className}
                              onClick={() => {
                                action.clickCallback?.();
                                close();
                              }}
                            >
                              {action.label}
                            </button>
                          );
                        })
                      : null}
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

export default DialogBaseComponent;
