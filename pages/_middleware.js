import { NextResponse } from "next/server";
import Cookies from "js-cookie";
export default function middleware(req) {
  const token = Cookies.get("token");

  if ((token && req.url === "/login") || "/register") {
    NextResponse.redirect("/");
  }
}
