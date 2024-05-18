"use client";
import type { Sector } from "~/@types/entities";
import type { FormProps } from "../shared/types";
import Input from "../shared/Input";
import Form from "../shared/Form";
import Submit from "../shared/Submit";
import GoBack from "../shared/GoBack";

interface SectorFormProps extends FormProps<Sector> {}

function SectorForm({ data }: SectorFormProps) {
  return (
    <Form>
      <Input
        name="name"
        label="Nome"
        onChange={() => {}}
        placeholder="Engenharia e Produto"
        value=""
      />
      <div className="self-end flex gap-x-3">
        <GoBack />
        <Submit type={data ? "update" : "create"} />
      </div>
    </Form>
  );
}

export default SectorForm;
