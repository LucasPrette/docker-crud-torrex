import { notFound } from "next/navigation";
import type { PageParams } from "~/@types/router";
import {
  ENTITIES_META,
  type Entities,
  type EntityMeta,
} from "~/constants/entities";
import { isValidEntity } from "~/utils/entities";
import Toolbar from "./components/Toolbar";
import Table from "./components/Table";

const getMetadata = (entity: Entities) =>
  ENTITIES_META.find((e) => e.key === entity) as EntityMeta<string>;

function Page({ params }: PageParams<{ entity: string }>) {
  if (!isValidEntity(params.entity)) {
    return notFound();
  }

  const {
    icon: Icon,
    title,
    columns,
    translatedColumns,
  } = getMetadata(params.entity);

  return (
    <>
      <h1 className="flex gap-x-2 text-2xl items-center mb-8">
        <Icon />
        {title}
      </h1>
      <Toolbar />
      <Table
        className="mt-4"
        columns={translatedColumns}
        rows={[
          [12, "Bauru", new Date().toUTCString()],
          [13, "Bauru", new Date().toUTCString()],
          [14, "Bauru", new Date().toUTCString()],
        ]}
      />
    </>
  );
}

export default Page;
