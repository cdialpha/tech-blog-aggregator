export { auth as middleware } from "@/auth"

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|static/).*)'],
};

// const origFetch = global.fetch;
// global.fetch = async (...args) => {
//   console.log("[DEBUG fetch]", args[0]);
//   return origFetch(...args);
// };