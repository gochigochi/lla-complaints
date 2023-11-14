import { z } from "zod"

export const userZodSchema = z.object({
    user: z.string(),
    password: z.string(),
})

export const complaintZodSchema = z.object({
    full_name: z.string(),
    dni: z.string(),
    school: z.string(),
    table: z.string(),
    city: z.string(),
    province: z.string(),
    postal_code: z.string(),
})