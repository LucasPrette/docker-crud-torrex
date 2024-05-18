import type { Sector } from "~/@types/entities";
import request from "~/utils/request";

type CreateSector = Omit<Sector, "id" | "launchDate">;

type UpdateSector = Omit<Sector, "id" | "launchDate">;

const endpoints = {
  create: (data: CreateSector) => request.post("/sectors", data),
  findById: (id: number) => request.get(`/sectors/${id}`),
  update: (id: number, data: UpdateSector) =>
    request.put(`/sectors/${id}`, data),
  delete: (id: number) => request.delete(`/sectors/${id}`),
};

export default endpoints;
