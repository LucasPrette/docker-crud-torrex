import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { type ComponentType } from "react";
import { PageParams } from "~/@types/router";
import type { Entities } from "~/constants/entities";
import { getMetadata, isValidEntity } from "~/utils/entities";
import type { Form } from "../components/Forms/shared";
import Title from "~/app/[entity]/components/Title";

interface Params {
  entityId: string;
  entity: string;
}

const FORMS: Record<Entities, ComponentType<Form<any>>> = {
  employees: dynamic(() => import("../components/Forms/Employee")),
  dependents: dynamic(() => import("../components/Forms/Dependent")),
  sectors: dynamic(() => import("../components/Forms/Sector")),
  units: dynamic(() => import("../components/Forms/Unit")),
};

async function Page({ params }: PageParams<Params>) {
  if (!isValidEntity(params.entity)) {
    return notFound();
  }

  const { icon, title, domain } = getMetadata(params.entity);
  const Form = FORMS[domain];

  return (
    <>
      <Title icon={icon}>{title}</Title>
      <Form />
    </>
  );
}

export default Page;
