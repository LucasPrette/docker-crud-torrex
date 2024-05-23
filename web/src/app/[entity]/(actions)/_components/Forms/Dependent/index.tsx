"use client";
import type { Dependent } from "~/@types/entities";
import { FormProps } from "../shared/types";
import Input from "../shared/Input";
import Form from "../shared/Form";
import Submit from "../shared/Submit";
import GoBack from "../shared/GoBack";
import { useForm } from "react-hook-form";

interface DependentFormProps extends FormProps<Dependent> {}

function DependentForm({ data }: DependentFormProps) {
  const { register } = useForm<Dependent>({
    defaultValues: {
      birth: data?.birth,
      idEmployee: data?.idEmployee,
      name: data?.name,
      id: data?.id,
    },
    mode: "onBlur",
    reValidateMode: "onBlur",
  });

  return (
    <Form>
      <Input label="Nome" placeholder="John Doe" {...register("name")} />
      <div className="flex items-center gap-x-4">
        <Input
          label="Data de nascimento"
          placeholder="18/11/2000"
          type="date"
          {...register("birth")}
        />
        <Input
          label="ID do colaborador"
          placeholder="131231"
          type="number"
          {...register("idEmployee")}
        />
      </div>
      <div className="self-end flex gap-x-3">
        <GoBack />
        <Submit type={data ? "update" : "create"} />
      </div>
    </Form>
  );
}

export default DependentForm;
