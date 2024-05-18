import { notFound } from "next/navigation";
import type { PageParams } from "~/@types/router";
import { getMetadata, isValidEntity } from "~/utils/entities";
import Toolbar from "./_components/Toolbar";
import Table from "./_components/Table";
import api from "~/api";
import Title from "../_components/Title";

interface Params {
  entity: string;
}

const objToTableRow = <T extends object>(
  data: T,
  order: string[]
): (string | number)[] =>
  order.map((key) => (data as Record<string, string | number>)[key]);

async function Page({ params }: PageParams<Params>) {
  if (!isValidEntity(params.entity)) {
    return notFound();
  }

  const { icon, title, domain, columns, translatedColumns } = getMetadata(
    params.entity
  );

  const data = await api[domain].findAll();
  const rows = data.map((d) => objToTableRow(d, columns));

  return (
    <>
      <Title icon={icon}>{title}</Title>
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
