export { default } from "next-auth/middleware";

// Защищеные пути, нельзя перейти без авторизации
export const config = { matcher: ["/"] };