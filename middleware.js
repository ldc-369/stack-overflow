import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

export default clerkMiddleware(/* async (auth, req) => {
  const { userId, redirectToSignIn } = await auth()
  if (!userId) {
    return redirectToSignIn()
  }
} */)

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|sign-in|sign-up).*)'
  ]
}
