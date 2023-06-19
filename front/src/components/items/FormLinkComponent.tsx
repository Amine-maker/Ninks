import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { type ILinkItemChoice } from "../../core/utils/interface";
import { LinkChoiceMap } from "../../core/utils/linkData";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const LinkInputSchema = z.object({ link: z.string(), title: z.string(), message: z.optional(z.string()), createdAt: z.coerce.date() });

type LinkInputs = z.infer<typeof LinkInputSchema>;

const FormLinkComponent = (): JSX.Element => {
  // Récupère et valide les info du formulaire et passe les info aux parents qui vont instancier les liens et les passer à la fonction d'ajout du layout

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LinkInputs>({
    resolver: zodResolver(LinkInputSchema),
    defaultValues: {
      link: "",
      title: "",
      message: "",
      createdAt: new Date(),
    },
  });

  const [iterableLinkChoiceMap] = useState(Array.from(LinkChoiceMap.values()));
  // const { register, handleSubmit } = useForm();
  const [choiceItem, setChoiceItem] = useState<ILinkItemChoice | undefined>(LinkChoiceMap.get("Instagram"));
  return (
    <div className="p-5">
      <form>
        <div className="flex flex-wrap">
          <div className="flex-auto w-3/5 flex flex-wrap justify-center">
            {iterableLinkChoiceMap.map((choice, i) => {
              return (
                <div className={`flex-auto item-choice-container min-w-[170px] ${choice.fw ?? false ? "w-full" : ""} p-2 w-1/3 h-44`} key={i}>
                  <div
                    onClick={() => {
                      setChoiceItem(iterableLinkChoiceMap[i]);
                    }}
                    className={`item-choice transition-base active:ring-4 ring-offset-2 ring-paragraph-25 cursor-pointer bg-opacity-20 min-w-[170px] border ${choice.borderColor} h-full ${choice.bgColor} p-3 rounded-2xl flex justify-between flex-col`}
                  >
                    <div className="flex gap-3">
                      <div className="flex-0 w-14 h-14 p-1 flex items-center justify-center border rounded-xl bg-white shadow-min">{choice.icon}</div>
                      <h3 className={`${choice.textColor} place-self-center font-bold`}>{choice.name}</h3>
                    </div>
                    <div className={`p-2 text-sm ${choice.textColor}`}>
                      <p className="opacity-80">{choice.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex-auto min-w-[300px] w-2/5 px-4 py-3">
            <div className="choice h-40 border rounded-lg p-3 mb-5 bg-background">
              <div className={"item-choice  bg-opacity-20 min-w-[170px] h-full rounded-2xl flex justify-between flex-col"}>
                <div className="flex gap-3">
                  <div className="flex-0 w-14 h-14 p-1 flex items-center justify-center border rounded-xl bg-white shadow-min">{choiceItem?.icon}</div>
                  <h3 className="place-self-center font-bold">{choiceItem?.name}</h3>
                </div>
                <div className={"p-2 text-sm"}>
                  <p className="opacity-80">{choiceItem?.description}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-lg dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">{choiceItem?.baseLink}</span>
                <div className="relative w-full">
                  <input type="text" placeholder=" " required className="input-cal rounded-l-none input-base input" />
                  <label className="label-input">Ajouter un lien</label>
                </div>
              </div>
              <div className="relative">
                <input type="text" placeholder="" required className="input-cal input-base input" />
                <label className="label-input">Titre du lien</label>
              </div>
              <div className="relative">
                <input type="text" placeholder=" " required className="input-cal input-base input" />
                <label className="label-input">Message personnalisé (Optionnel)</label>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormLinkComponent;
