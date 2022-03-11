import { NextFetchEvent, NextRequest, NextResponse,  } from "next/server";

export default function middleware(
  request: NextRequest,
  event: NextFetchEvent
) {
  console.log(request.nextUrl.href);
  console.log(JSON.stringify(request.geo));
  console.log(JSON.stringify(request.ip));
  console.log(JSON.stringify(request.ua));
  console.log(JSON.stringify(request.headers));
  return NextResponse.json({
    geo: request.geo,
    ip: request.ip,
    ua: request.ua,
    headers: request.headers,
  })
}
