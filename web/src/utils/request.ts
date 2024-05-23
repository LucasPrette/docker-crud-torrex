import type { CacheKey } from "./cache";

type HttpMethods = "GET" | "POST" | "PUT" | "DELETE";

type Body = Record<string, unknown>;

interface RequesterInput {
  endpoint: string;
  method: HttpMethods;
  body?: Body;
  cacheKey?: CacheKey;
}

type Requester =
  | (<T>(endpoint: string, cacheKey: CacheKey) => Promise<T>)
  | (<T>(endpoint: string, data: Body) => Promise<T>);

async function requester<T>({
  endpoint,
  method,
  body,
  cacheKey,
}: RequesterInput): Promise<T> {
  // TODO: fix it
  const url = "http://localhost:8080" + endpoint;
  // const url = process.env.API_URL + endpoint;
  const headers = new Headers();
  const fetchArgs: RequestInit = {
    method,
    headers,
    next: { revalidate: 3 * 1000 },
  };

  try {
    if (cacheKey) {
      // @ts-ignore
      fetchArgs.next.tags = JSON.stringify(cacheKey);
    }

    if (body) {
      headers.append("Content-Type", "application/json");

      fetchArgs.body = JSON.stringify(body);
      fetchArgs.headers = headers;
    }

    const res = await fetch(url, fetchArgs);
    const json = await res.json();

    if (res.status === 404) {
      return null as T;
    }

    if (!res.ok) {
      throw new Error(json);
    }

    return json as T;
  } catch (error) {
    console.log(error);
    throw new Error("request error");
  }
}

const request = {
  get: <T>(endpoint: string, cacheKey: CacheKey) =>
    requester<T>({ endpoint, method: "GET", cacheKey }),
  post: <T>(endpoint: string, data: Body) =>
    requester<T>({ endpoint, method: "POST", body: data }),
  put: <T>(endpoint: string, data: Body) =>
    requester<T>({ endpoint, method: "PUT", body: data }),
  delete: async <T>(endpoint: string) =>
    requester<T>({ endpoint, method: "DELETE" }),
} satisfies Record<Lowercase<HttpMethods>, Requester>;

export default request;
