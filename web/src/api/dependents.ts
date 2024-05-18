import type { Dependent } from "~/@types/entities";
import request from "~/utils/request";

type CreateDependent = Omit<Dependent, "id">;

type UpdateDependent = Omit<Dependent, "id">;

const endpoints = {
  create: (data: CreateDependent) =>
    request.post<Dependent>("/dependents", data),
  findAll: () => request.get<Dependent[]>("/dependents"),
  findById: (id: number) => request.get<Dependent>(`/dependents/${id}`),
  update: (id: number, data: UpdateDependent) =>
    request.put<Dependent>(`/dependents/${id}`, data),
  delete: (id: number) => request.delete<void>(`/dependents/${id}`),
};

export default endpoints;
