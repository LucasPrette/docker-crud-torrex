"use client";

import { Trash2 } from "lucide-react";

interface DeleteProps {
  id: number;
}

function Delete({ id }: DeleteProps) {
  return (
    <button
      className="bg-red-500 inline-block hover:bg-red-700 transition-all duration-300 p-1 rounded-sm"
      onClick={() => console.log(id, "deleted!")}
      aria-label="Deletar"
    >
      <Trash2 size={24} />
    </button>
  );
}

export default Delete;
