import type { Sector } from "~/@types/entities";
import request from "~/utils/request";

type CreateSector = Omit<Sector, "id" | "launchDate">;

type UpdateSector = Omit<Sector, "id" | "launchDate">;

const endpoints = {
  create: (data: CreateSector) => request.post<Sector>("/sectors", data),
  findAll: () => request.get<Sector[]>("/sectors"),
  findById: (id: number) => request.get<Sector>(`/sectors/${id}`),
  update: (id: number, data: UpdateSector) =>
    request.put<Sector>(`/sectors/${id}`, data),
  delete: (id: number) => request.delete<void>(`/sectors/${id}`),
};

export default endpoints;
