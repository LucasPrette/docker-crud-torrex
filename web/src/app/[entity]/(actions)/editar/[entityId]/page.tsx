import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { type ComponentType } from "react";
import { PageParams } from "~/@types/router";
import api from "~/api";
import type { Entities } from "~/constants/entities";
import { getMetadata, isValidEntity } from "~/utils/entities";
import type { FormProps } from "../../components/Forms/shared/types";
import Title from "~/app/components/Title";
import { isIdentifier } from "~/utils/number";

interface Params {
  entityId: string;
  entity: string;
}

const FORMS: Record<Entities, ComponentType<FormProps<any>>> = {
  employees: dynamic(() => import("../../components/Forms/Employee")),
  dependents: dynamic(() => import("../../components/Forms/Dependent")),
  sectors: dynamic(() => import("../../components/Forms/Sector")),
  units: dynamic(() => import("../../components/Forms/Unit")),
};

async function Page({ params }: PageParams<Params>) {
  if (!isValidEntity(params.entity) || isIdentifier(params.entityId)) {
    return notFound();
  }

  const { icon, title, domain } = getMetadata(params.entity);
  const domainId = Number(params.entityId);

  const data = await api[domain].findById(domainId);

  if (!data) {
    return notFound();
  }

  const Form = FORMS[domain];

  return (
    <>
      <Title icon={icon}>{title}</Title>
      <Form data={data} />
    </>
  );
}

export default Page;
