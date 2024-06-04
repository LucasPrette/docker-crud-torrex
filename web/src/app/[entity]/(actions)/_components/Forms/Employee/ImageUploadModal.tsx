import { type ChangeEvent, useRef, useState } from "react";
import api from "~/api";

interface ImageUploadModalProps {
  employeeId: number;
  onUpload: () => void;
  onClose: () => void;
}

function ImageUploadModal({
  employeeId,
  onUpload,
  onClose,
}: ImageUploadModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  async function onSelectFile(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target;

    if (!files) {
      return;
    }

    const image = files[0];

    await api.employees.upload({ employeeId, image });

    onUpload();
    onClose();
  }

  return (
    <dialog
      className="bg-zinc-800 text-start text-gray-200 px-6 py-4 rounded-md max-w-lg"
      ref={dialogRef}
    >
      <h2 className="text-2xl mb-4 font-bold">Enviar imagem</h2>
      <p>Selecione a imagem desejada</p>
      <input
        type="file"
        className="px-6 py-3 transition-all duration-300 hover:bg-emerald-800 bg-emerald-600 rounded-md"
        onChange={onSelectFile}
        accept="image/png, image/jpeg, image/jpg"
      />
    </dialog>
  );
}

export default ImageUploadModal;
