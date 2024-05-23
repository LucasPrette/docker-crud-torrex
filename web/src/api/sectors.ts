import type { Sector } from "~/@types/entities";
import type { Optional } from "~/@types/utils";
import cache, { type Invalidate } from "~/utils/cache";
import request from "~/utils/request";
import { sectorsCacheKeys } from "./cache-keys";

type UpInsertSector = Omit<Sector, "id" | "launchDate">;

const invalidate: Invalidate = async (fn, id) => {
  const res = await fn();
  cache.invalidate(sectorsCacheKeys.list());

  if (id) {
    cache.invalidate(sectorsCacheKeys.single(id));
  }

  return res;
};

const endpoints = {
  create: (data: UpInsertSector) => request.post<Sector>("/sectors", data),
  findAll: () => request.get<Sector[]>("/sectors", sectorsCacheKeys.list()),
  findById: (id: number) =>
    request.get<Optional<Sector>>(
      `/sectors/${id}`,
      sectorsCacheKeys.single(id)
    ),
  update: (id: number, data: UpInsertSector) =>
    invalidate(() => request.put<Sector>(`/sectors/${id}`, data), id),
  delete: (id: number) =>
    invalidate(() => request.delete<void>(`/sectors/${id}`), id),
};

export default endpoints;
