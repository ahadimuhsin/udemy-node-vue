import { Router } from "express";
import { AuthenticatedUser, Login, Logout, Register, UpdateInfo, UpdatePassword } from "./controller/auth.controller";
import { authMiddleware } from "./middleware/auth.middleware";

export const routes = (router: Router) => {
    router.post('/api/admin/register', Register);
    router.post('/api/admin/login', Login);
    router.get('/api/admin/user', authMiddleware ,AuthenticatedUser);
    router.post('/api/admin/logout', authMiddleware ,Logout);
    router.put('/api/admin/users/info', authMiddleware, UpdateInfo);
    router.put('/api/admin/users/password', authMiddleware, UpdatePassword);
}