"use client";
import type { Employee } from "~/@types/entities";
import type { FormProps } from "../shared/types";
import Input from "../shared/Input";
import Form from "../shared/Form";
import Submit from "../shared/Submit";
import GoBack from "../shared/GoBack";
import { useForm } from "react-hook-form";
import api from "~/api";
import { useRouter } from "next/navigation";

interface EmployeeFormProps extends FormProps<Employee> {}

function EmployeeForm({ data }: EmployeeFormProps) {
  const router = useRouter();
  const { register, handleSubmit } = useForm<Employee>({
    defaultValues: {
      name: data?.name,
      date: data?.date,
      idUnit: data?.idUnit,
      idSector: data?.idSector,
      id: data?.id,
    },
    mode: "onBlur",
    reValidateMode: "onBlur",
  });

  const onSubmit = async (formData: Employee) => {
    try {
      if (data) {
        await api.employees.update(formData.id, formData);
      } else {
        await api.employees.create(formData);
      }

      router.push("/colaboradores");
      router.refresh();
    } catch (err) {
      console.log({ here: true, err });
      // do nothing
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input label="Nome" placeholder="John Doe" {...register("name")} />
      <Input
        label="Data de nascimento"
        placeholder="18/11/2000"
        type="date"
        {...register("date")}
      />
      <div className="flex items-center gap-x-4">
        <Input
          label="ID do setor"
          placeholder="131231"
          type="number"
          {...register("idSector")}
        />
        <Input
          label="ID da unidade"
          placeholder="131231"
          type="number"
          {...register("idUnit")}
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
