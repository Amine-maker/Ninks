import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface InputForm {
  link: string;
  title: string;
  item: any;
}

const FormLinkComponent = (): JSX.Element => {
  const { register, handleSubmit } = useForm();
  return (
    <div>
      <form>
        <div></div>
        <div></div>
      </form>
    </div>
  );
};

export default FormLinkComponent;
