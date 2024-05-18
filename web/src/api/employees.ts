import type { Employee } from "~/@types/entities";
import request from "~/utils/request";

type CreateEmployee = Omit<Employee, "id" | "date">;

type UpdateEmployee = Omit<Employee, "id" | "date">;

const endpoints = {
  create: (data: CreateEmployee) => request.post("/employees", data),
  findById: (id: number) => request.get(`/employees/${id}`),
  update: (id: number, data: UpdateEmployee) =>
    request.put(`/employees/${id}`, data),
  delete: (id: number) => request.delete(`/employees/${id}`),
};
export default endpoints;
