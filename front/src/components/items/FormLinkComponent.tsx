import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { BsInstagram } from "react-icons/bs";

interface InputForm {
  link: string;
  title: string;
  item: any;
}

const FormLinkComponent = (): JSX.Element => {
  const { register, handleSubmit } = useForm();
  const [choiceItem, setChoiceItem] = useState<any>("");
  return (
    <div className="p-5">
      <form>
        <div className="flex flex-wrap ">
          <div className="flex-auto w-3/5 flex flex-wrap justify-center">
            {new Array(9).fill(0).map((t, i) => {
              return (
                <div className="flex-auto  item-choice-container min-w-[170px] max-w-[220px] p-3 w-1/3 h-48" key={i}>
                  <div className="item-choice min-w-[170px] border h-full bg-[#E4405F] p-3 rounded-2xl flex justify-between flex-col">
                    <div className="flex gap-3 ">
                      <div className="flex-0 w-14 h-14 p-1 flex items-center justify-center border rounded-xl bg-white">
                        <BsInstagram size={42} />
                      </div>
                      <h3 className="text-[#F2A6B5]">Instagram</h3>
                    </div>
                    <div className="mb-3 text-[#F2A6B5]">
                      <p>partager vos photo et reels</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex-auto min-w-[300px] w-2/5 p-5">form</div>
        </div>
      </form>
    </div>
  );
};

export default FormLinkComponent;
