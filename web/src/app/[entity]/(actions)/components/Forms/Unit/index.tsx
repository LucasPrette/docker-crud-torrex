"use client";
import type { Unit } from "~/@types/entities";
import type { FormProps } from "../shared/types";
import Input from "../shared/Input";
import Form from "../shared/Form";
import Submit from "../shared/Submit";
import GoBack from "../shared/GoBack";

interface UnitFormProps extends FormProps<Unit> {}

function UnitForm({ data }: UnitFormProps) {
  return (
    <Form>
      <Input
        name="name"
        label="Nome"
        onChange={() => {}}
        placeholder="Matriz Bauru, SP"
        value=""
      />
      <div className="self-end flex gap-x-3">
        <GoBack />
        <Submit type={data ? "update" : "create"} />
      </div>
    </Form>
  );
}

export default UnitForm;
