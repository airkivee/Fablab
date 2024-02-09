import { Role } from "./types";

const RedirectRules = [
  { route: { path: "/", exact: true } },
  { route: { path: "/authPage"} },
  { route: { path: "/search"} },
  { route: { path: "/user", exact: true } },
  { route: { path: "/user-viwer/"} },
  { route: { path: "/manager" }, only: [Role.MANAGER] },
  { route: { path: "/admin" }, only: [Role.ADMIN] },
  { route: { path: "/admin-manager" }, only: [Role.ADMIN, Role.MANAGER] }
];

export { RedirectRules };