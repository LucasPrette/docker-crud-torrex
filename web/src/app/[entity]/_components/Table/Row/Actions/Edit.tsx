import NextLink from "next/link";
import { SquarePen } from "lucide-react";
import type { Entities } from "~/constants/entities";

interface EditProps {
  domain: Entities;
  domainId: number;
}

function Edit({ domain, domainId }: EditProps) {
  return (
    <NextLink
      href={`${domain}/editar/${domainId}`}
      className="bg-orange-500 inline-block rounded-md p-1 hover:bg-orange-700 transition-all duration-300"
      aria-label="Editar"
    >
      <SquarePen size={24} />
    </NextLink>
  );
}

export default Edit;
