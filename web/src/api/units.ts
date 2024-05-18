import type { Unit } from "~/@types/entities";
import request from "~/utils/request";

type CreateUnit = Omit<Unit, "id" | "launchDate">;

type UpdateUnit = Omit<Unit, "id" | "launchDate">;

const endpoints = {
  create: (data: CreateUnit) => request.post<Unit>("/units", data),
  findAll: () => request.get<Unit[]>("/units"),
  findById: (id: number) => request.get<Unit>(`/units/${id}`),
  update: (id: number, data: UpdateUnit) =>
    request.put<Unit>(`/units/${id}`, data),
  delete: (id: number) => request.delete<void>(`/units/${id}`),
};

export default endpoints;
