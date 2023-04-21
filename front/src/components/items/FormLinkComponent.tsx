import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { type ILinkItemChoice } from "../../core/utils/interface";
import { LinkChoiceMap } from "../../core/utils/linkData";

interface InputForm {
  link: string;
  title: string;
  item: ILinkItemChoice;
}

const FormLinkComponent = (): JSX.Element => {
  const isSelectedChoice = (choice: ILinkItemChoice): boolean => {
    return choice.name === choiceItem?.name;
  };

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
            <div className="choice h-40 border rounded-lg p-3 mb-5 bg-background">{choiceItem?.name}</div>
            <div className="flex flex-col gap-5">
              <div className="relative">
                <input type="text" placeholder=" " id="input" required className="input-cal input-base" />
                <label id="label-input">Ajouter un lien</label>
              </div>
              <div className="relative">
                <input type="text" placeholder=" " id="input" required className="input-cal rounded-lg input-base" />
                <label id="label-input">Titre du lien</label>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormLinkComponent;
