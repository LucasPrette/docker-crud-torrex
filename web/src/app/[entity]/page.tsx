import { notFound } from "next/navigation";
import type { PageParams } from "~/@types/router";
import {
  ENTITIES_META,
  type TranslatedEntities,
  type EntityMeta,
  Entities,
} from "~/constants/entities";
import { isValidEntity } from "~/utils/entities";
import Toolbar from "./components/Toolbar";
import Table from "./components/Table";
import api from "~/api";

const getMetadata = (entity: TranslatedEntities) =>
  ENTITIES_META.find((e) => e.key === entity) as EntityMeta<string>;

const objToTableRow = <T extends object>(
  data: T,
  order: string[]
): (string | number)[] =>
  order.map((key) => (data as Record<string, string | number>)[key]);

async function Page({ params }: PageParams<{ entity: string }>) {
  if (!isValidEntity(params.entity)) {
    return notFound();
  }

  const {
    icon: Icon,
    title,
    domain,
    columns,
    translatedColumns,
  } = getMetadata(params.entity);

  const data = await api[domain as Entities].findAll();
  const rows = data.map((d) => objToTableRow(d, columns));

  return (
    <>
      <h1 className="flex gap-x-2 text-2xl items-center mb-8">
        <Icon />
        {title}
      </h1>
      <Toolbar />
      <Table
        domain={domain}
        className="mt-4"
        columns={translatedColumns}
        rows={rows}
      />
    </>
  );
}

export default Page;
