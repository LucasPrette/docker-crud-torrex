"use client";
import type { Dependent } from "~/@types/entities";
import { FormProps } from "../shared/types";
import Input from "../shared/Input";
import Form from "../shared/Form";
import Submit from "../shared/Submit";
import GoBack from "../shared/GoBack";

interface DependentFormProps extends FormProps<Dependent> {}

function DependentForm({ data }: DependentFormProps) {
  return (
    <Form>
      <Input
        name="name"
        label="Nome"
        onChange={() => {}}
        placeholder="John Doe"
        value=""
      />
      <div className="flex items-center gap-x-4">
        <Input
          name="birth"
          label="Data de nascimento"
          onChange={() => {}}
          placeholder="18/11/2000"
          type="date"
          value=""
        />
        <Input
          name="employeeId"
          label="ID do colaborador"
          onChange={() => {}}
          placeholder="131231"
          type="number"
          value=""
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
