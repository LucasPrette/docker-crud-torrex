"use client";
import NextLink from "next/link";
import { SquarePen } from "lucide-react";
import { usePathname } from "next/navigation";

interface EditProps {
  id: number;
}

function Edit({ id }: EditProps) {
  const pathname = usePathname();

  return (
    <NextLink
      href={`${pathname}/editar/${id}`}
      className="bg-orange-500 inline-block rounded-sm p-1 hover:bg-orange-700 transition-all duration-300"
      aria-label="Editar"
    >
      <SquarePen size={24} />
    </NextLink>
  );
}

export default Edit;
