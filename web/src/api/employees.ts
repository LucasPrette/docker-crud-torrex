import type { Employee } from "~/@types/entities";
import request from "~/utils/request";

type CreateEmployee = Omit<Employee, "id" | "date">;

type UpdateEmployee = Omit<Employee, "id" | "date">;

const endpoints = {
  create: (data: CreateEmployee) => request.post<Employee>("/employees", data),
  findAll: () => request.get<Employee[]>("/employees"),
  findById: (id: number) => request.get<Employee>(`/employees/${id}`),
  update: (id: number, data: UpdateEmployee) =>
    request.put<Employee>(`/employees/${id}`, data),
  delete: (id: number) => request.delete<void>(`/employees/${id}`),
};
export default endpoints;
