import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    console.log(req.nextUrl.pathname);
    console.log(req.nextauth.token.role);
    const url = req.nextUrl;
    const permit = req.nextUrl.pathname.split('/')[1]
    if (
      permit && (req.nextauth.token.role[0] != 'admin') && 
      !req.nextauth.token.role.includes(permit)
    ) {
      url.pathname = "/auth/denied";
      return NextResponse.rewrite(url);
    }
    return null
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
    // pages: {
    //   signIn: '/auth/signin'
    // }
  }
);

export const config = {
  matcher: ["/private/(.*)"],
};
