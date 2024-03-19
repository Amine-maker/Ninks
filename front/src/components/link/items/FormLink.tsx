import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { type LinkItemChoice } from "../../../core/utils/interface.ui";
import { LinkChoiceMap } from "../../../core/utils/linkData";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const LinkInputSchema = z.object({
  link: z.string(),
  title: z.string(),
  message: z.optional(z.string()),
  createdAt: z.coerce.date(),
});

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
  const [choiceItem, setChoiceItem] = useState<LinkItemChoice | undefined>(
    LinkChoiceMap.get("Instagram"),
  );
  return (
    <div className="p-5">
      <form>
        <div className="flex flex-wrap">
          <div className="flex w-3/5 flex-auto flex-wrap justify-center">
            {iterableLinkChoiceMap.map((choice, i) => {
              return (
                <div
                  className={`item-choice-container min-w-[170px] flex-auto ${choice.fw ?? false ? "w-full" : ""} h-44 w-1/3 p-2`}
                  key={i}
                >
                  <div
                    onClick={() => {
                      setChoiceItem(iterableLinkChoiceMap[i]);
                    }}
                    className={`item-choice transition-base ring-paragraph-25 min-w-[170px] cursor-pointer border bg-opacity-20 ring-offset-2 active:ring-4 ${choice.borderColor} h-full ${choice.bgColor} flex flex-col justify-between rounded-2xl p-3`}
                  >
                    <div className="flex gap-3">
                      <div className="flex-0 flex h-14 w-14 items-center justify-center rounded-xl border bg-white p-1 shadow-min">
                        {choice.icon}
                      </div>
                      <h3 className={`${choice.textColor} place-self-center font-bold`}>
                        {choice.name}
                      </h3>
                    </div>
                    <div className={`p-2 text-sm ${choice.textColor}`}>
                      <p className="opacity-80">{choice.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-2/5 min-w-[300px] flex-auto px-4 py-3">
            <div className="choice mb-5 h-40 rounded-lg border bg-background p-3">
              <div
                className={
                  "item-choice  flex h-full min-w-[170px] flex-col justify-between rounded-2xl bg-opacity-20"
                }
              >
                <div className="flex gap-3">
                  <div className="flex-0 flex h-14 w-14 items-center justify-center rounded-xl border bg-white p-1 shadow-min">
                    {choiceItem?.icon}
                  </div>
                  <h3 className="place-self-center font-bold">{choiceItem?.name}</h3>
                </div>
                <div className={"p-2 text-sm"}>
                  <p className="opacity-80">{choiceItem?.description}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex">
                <span className="inline-flex items-center rounded-l-lg border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400">
                  {choiceItem?.baseLink}
                </span>
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder=" "
                    required
                    className="input-cal input-base input rounded-l-none"
                  />
                  <label className="label-input">Ajouter un lien</label>
                </div>
              </div>
              <div className="relative">
                <input type="text" placeholder="" required className="input-cal input-base input" />
                <label className="label-input">Titre du lien</label>
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder=" "
                  required
                  className="input-cal input-base input"
                />
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
