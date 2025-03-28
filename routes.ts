/**
 * An array of routes that are accessible to the public
 * The routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = [
  "/",
  "/auth/new-verification",
  "/auth/new-password",
];

/**
 * An array of routes that are used for authentication
 * This routes will redirect loggedin users to settings
 * @type {string[]}
 */

export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "/auth/new-verification",
  "/auth/reset",
  "/auth/new-password",
];

/**
 * The prefix for api authentication routes
 * Routes that start with this prefix are used for API
 * authentication purposes
 * @type {string}
 */

export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after loggin in
 * @type {string}
 */

export const DEFAULT_LOGIN_REDIRECT = "/dashboard";
