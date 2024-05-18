type HttpMethods = "GET" | "POST" | "PUT" | "DELETE";

type Body = Record<string, unknown>;

type Requester =
  | ((endpoint: string) => Promise<void>)
  | ((endpoint: string, data: Body) => Promise<void>);

async function requester(endpoint: string, method: HttpMethods, body?: Body) {
  const url = process.env.API_URL + endpoint;
  const headers = new Headers();
  const fetchArgs: RequestInit = { method, headers };

  if (body) {
    headers.append("Content-Type", "application/json");

    fetchArgs.body = JSON.stringify(body);
    fetchArgs.headers = headers;
  }

  fetch(url, fetchArgs);
}

const request = {
  get: (endpoint: string) => requester(endpoint, "GET"),
  post: (endpoint: string, data: Body) => requester(endpoint, "POST", data),
  put: (endpoint: string, data: Body) => requester(endpoint, "PUT", data),
  delete: (endpoint: string) => requester(endpoint, "DELETE"),
} satisfies Record<Lowercase<HttpMethods>, Requester>;

export default request;
