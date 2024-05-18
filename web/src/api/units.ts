import type { Unit } from "~/@types/entities";
import request from "~/utils/request";

type CreateUnit = Omit<Unit, "id" | "launchDate">;

type UpdateUnit = Omit<Unit, "id" | "launchDate">;

const endpoints = {
  create: (data: CreateUnit) => request.post("/units", data),
  findById: (id: number) => request.get(`/units/${id}`),
  update: (id: number, data: UpdateUnit) => request.put(`/units/${id}`, data),
  delete: (id: number) => request.delete(`/units/${id}`),
};

export default endpoints;
