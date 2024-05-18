"use client";
import type { Employee } from "~/@types/entities";
import type { FormProps } from "../shared/types";
import Input from "../shared/Input";
import Form from "../shared/Form";
import Submit from "../shared/Submit";
import GoBack from "../shared/GoBack";

interface EmployeeFormProps extends FormProps<Employee> {}

function EmployeeForm({ data }: EmployeeFormProps) {
  return (
    <Form>
      <Input
        name="name"
        label="Nome"
        onChange={() => {}}
        placeholder="John Doe"
        value=""
      />
      <Input
        name="date"
        label="Data de nascimento"
        onChange={() => {}}
        placeholder="18/11/2000"
        type="date"
        value=""
      />
      <div className="flex items-center gap-x-4">
        <Input
          name="sectorId"
          label="ID do setor"
          onChange={() => {}}
          placeholder="131231"
          type="number"
          value=""
        />
        <Input
          name="unitId"
          label="ID da unidade"
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

export default EmployeeForm;
