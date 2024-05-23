import type { Employee } from "~/@types/entities";
import type { Invalidate } from "~/utils/cache";
import request from "~/utils/request";
import { employeesCacheKeys } from "./cache-keys";
import cache from "~/utils/cache";
import type { Optional } from "~/@types/utils";

type UpInsertEmployee = Omit<Employee, "id" | "date">;

const invalidate: Invalidate = async (fn, id) => {
  const res = await fn();
  cache.invalidate(employeesCacheKeys.list());

  if (id) {
    cache.invalidate(employeesCacheKeys.single(id));
  }

  return res;
};

const endpoints = {
  create: (data: UpInsertEmployee) =>
    invalidate(() => request.post<Employee>("/employees", data)),
  findAll: () =>
    request.get<Employee[]>("/employees", employeesCacheKeys.list()),
  findById: (id: number) =>
    request.get<Optional<Employee>>(
      `/employees/${id}`,
      employeesCacheKeys.single(id)
    ),
  update: (id: number, data: UpInsertEmployee) =>
    invalidate(() => request.put<Employee>(`/employees/${id}`, data), id),
  delete: (id: number) =>
    invalidate(() => request.delete<void>(`/employees/${id}`), id),
};

export default endpoints;
