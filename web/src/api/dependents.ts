import type { Dependent } from "~/@types/entities";
import request from "~/utils/request";

type CreateDependent = Omit<Dependent, "id">;

type UpdateDependent = Omit<Dependent, "id">;

const endpoints = {
  create: (data: CreateDependent) => request.post("/dependents", data),
  findById: (id: number) => request.get(`/dependents/${id}`),
  update: (id: number, data: UpdateDependent) =>
    request.put(`/dependents/${id}`, data),
  delete: (id: number) => request.delete(`/dependents/${id}`),
};

export default endpoints;
