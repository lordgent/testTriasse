/* eslint-disable @next/next/no-server-import-in-page */
import { NextResponse } from "next/server";
import Cookies from "js-cookie";
export default function middleware(req) {
  const token = Cookies.get("token");
  console.log(token + " this token in middleware");
  console.log(token);
  if ((token && req.url === "/login") || "/register") {
    NextResponse.redirect("/");
  }
}
