"use client";
import type { Unit } from "~/@types/entities";
import type { FormProps } from "../shared/types";
import Input from "../shared/Input";
import Form from "../shared/Form";
import Submit from "../shared/Submit";
import GoBack from "../shared/GoBack";
import { useForm } from "react-hook-form";

interface UnitFormProps extends FormProps<Unit> {}

function UnitForm({ data }: UnitFormProps) {
  const { register } = useForm<Unit>({
    defaultValues: {
      id: data?.id,
      launchDate: data?.launchDate,
      name: data?.name,
    },
    mode: "onBlur",
    reValidateMode: "onBlur",
  });

  return (
    <>
      <Input
        label="Nome"
        name="test"
        onChange={() => {}}
        placeholder="Matriz Bauru, SP"
        // {...register("name")}
      />
      {/* <div className="self-end flex gap-x-3">
        <GoBack />
        <Submit type={data ? "update" : "create"} />
      </div> */}
    </>
  );
}

export default UnitForm;
