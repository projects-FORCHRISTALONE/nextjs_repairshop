// BY GOD'S GRACE ALONE

import {createInsertSchema, createSelectSchema} from 'drizzle-zod'
import { customers } from '@/db/schema'
import {z} from "zod"

export const insertCustomerSchema = createInsertSchema(customers, {
    firstname : (schema) => schema.min(1, "First name is required"),
    lastname : (schema) => schema.min(1, "Last name is required"),
    address1 : (schema) => schema.min(1, "Address is required"),
    city : (schema) => schema.min(1, "City is required"),
    state: (schema) => schema.length(2, "State must be exactly 2 characters" ),
    email: (schema) => schema.email("Invalid email address"),
    zip : z.string().regex(/^\d{5}(-\d{4}|\s\d{4})?$/, "Invalid Zip code. Use 5 digits or 5 digits followed by hyphen and  digits"),
    phone : z.string().regex(/^\d{3}-\d{3}-\d{4}$/, "Invalid phone number format. Use XXX-XXX-XXXX"),


})

export const selectCustomerSchema = createSelectSchema(customers)

export type insertCustomerSchemaType = z.infer<typeof insertCustomerSchema >

export type selectCustomerSchemaType = z.infer<typeof selectCustomerSchema>

