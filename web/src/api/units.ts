import type { Unit } from "~/@types/entities";
import type { Optional } from "~/@types/utils";
import request from "~/utils/request";
import { unitsCacheKeys } from "./cache-keys";
import cache, { type Invalidate } from "~/utils/cache";

type UpInsertUnit = Omit<Unit, "id" | "launchDate">;

const invalidate: Invalidate = async (fn, id) => {
  const res = await fn();
  cache.invalidate(unitsCacheKeys.list());

  if (id) {
    cache.invalidate(unitsCacheKeys.single(id));
  }

  return res;
};

const endpoints = {
  create: (data: UpInsertUnit) => request.post<Unit>("/units", data),
  findAll: () => request.get<Unit[]>("/units", unitsCacheKeys.list()),
  findById: (id: number) => () =>
    request.get<Optional<Unit>>(`/units/${id}`, unitsCacheKeys.single(id)),
  update: (id: number, data: UpInsertUnit) =>
    invalidate(() => request.put<Unit>(`/units/${id}`, data), id),
  delete: (id: number) =>
    invalidate(() => request.delete<void>(`/units/${id}`), id),
};

export default endpoints;
