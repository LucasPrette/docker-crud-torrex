type HttpMethods = "GET" | "POST" | "PUT" | "DELETE";

type Body = Record<string, unknown>;

type Requester =
  | (<T>(endpoint: string) => Promise<T>)
  | (<T>(endpoint: string, data: Body) => Promise<T>);

async function requester<T>(
  endpoint: string,
  method: HttpMethods,
  body?: Body
): Promise<T> {
  const url = process.env.API_URL + endpoint;
  const headers = new Headers();
  const fetchArgs: RequestInit = { method, headers };

  try {
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
    throw new Error("request error");
  }
}

const request = {
  get: <T>(endpoint: string) => requester<T>(endpoint, "GET"),
  post: <T>(endpoint: string, data: Body) =>
    requester<T>(endpoint, "POST", data),
  put: <T>(endpoint: string, data: Body) => requester<T>(endpoint, "PUT", data),
  delete: async <T>(endpoint: string) => requester<T>(endpoint, "DELETE"),
} satisfies Record<Lowercase<HttpMethods>, Requester>;

export default request;
