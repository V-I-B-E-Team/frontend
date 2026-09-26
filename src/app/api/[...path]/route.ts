import { NextResponse } from "next/server";

const bodylessMethods = new Set(["GET", "HEAD"]);

type RouteContext = {
  params: Promise<{ path: string[] }>;
};

async function proxy(request: Request, context: RouteContext) {
  const { path } = await context.params;
  const backendUrl =
    process.env.BACKEND_URL ??
    (process.env.NODE_ENV === "production"
      ? "http://server:8000"
      : "http://localhost:8000");
  const targetUrl = new URL(
    `/api/${path.map(encodeURIComponent).join("/")}${new URL(request.url).search}`,
    backendUrl,
  );
  const headers = new Headers(request.headers);

  headers.delete("host");
  headers.delete("content-length");

  const response = await fetch(targetUrl, {
    method: request.method,
    headers,
    body: bodylessMethods.has(request.method)
      ? undefined
      : await request.arrayBuffer(),
    redirect: "manual",
  });

  return new NextResponse(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: response.headers,
  });
}

export const GET = proxy;
export const HEAD = proxy;
export const POST = proxy;
export const PUT = proxy;
export const PATCH = proxy;
export const DELETE = proxy;