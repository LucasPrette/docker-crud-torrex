import { revalidateTag } from "next/cache";

export type CacheKey = (string | number | boolean)[];

export type Invalidate = <T extends Function>(fn: T, id?: number) => Promise<T>;

export const invalidate = (cacheKey: CacheKey) =>
  revalidateTag(JSON.stringify(cacheKey));

const cache = {
  invalidate,
};

export default cache;
