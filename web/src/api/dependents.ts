import type { Dependent } from "~/@types/entities";
import request from "~/utils/request";
import { dependentsCacheKeys } from "./cache-keys";
import cache, { type Invalidate } from "~/utils/cache";
import type { Optional } from "~/@types/utils";

type UpInsertDependent = Omit<Dependent, "id">;

const invalidate: Invalidate = async (fn, id) => {
  const res = await fn();
  cache.invalidate(dependentsCacheKeys.list());

  if (id) {
    cache.invalidate(dependentsCacheKeys.single(id));
  }

  return res;
};

const endpoints = {
  create: (data: UpInsertDependent) =>
    invalidate(() => request.post<Dependent>("/dependents", data)),
  findAll: () =>
    request.get<Dependent[]>("/dependents", dependentsCacheKeys.list()),
  findById: (id: number) =>
    request.get<Optional<Dependent>>(
      `/dependents/${id}`,
      dependentsCacheKeys.single(id)
    ),
  update: (id: number, data: UpInsertDependent) =>
    invalidate(() => request.put<Dependent>(`/dependents/${id}`, data), id),
  delete: (id: number) =>
    invalidate(() => request.delete<void>(`/dependents/${id}`), id),
};

export default endpoints;
