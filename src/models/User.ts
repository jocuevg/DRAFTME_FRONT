import type { Rol } from "@/enums/Rol"

export interface User{
    username: string
    passwordHash: string
    rol: Rol
}