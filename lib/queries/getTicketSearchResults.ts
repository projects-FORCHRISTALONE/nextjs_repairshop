// BY GOD'S GRACE ALONE

import { db } from "@/db";
import { tickets, customers } from "@/db/schema";
import { eq, ilike, or, sql, asc } from "drizzle-orm";
import { email } from "zod";

export async function getTicketSearchResults(searchText:string){
    const results = await db.select({
        id: tickets.id ,
        ticketDate: tickets.createdAt,
        title: tickets.title,
        firstname: customers.firstname,
        lastname: customers.lastname,
        email: customers.email,
        tech: tickets.tech,
        completed: tickets.completed
    })
        .from(tickets)
        .leftJoin(customers, eq(tickets.customerId, customers.id))
        .where(or(
            ilike(tickets.title, `%${searchText}%`),
            ilike(tickets.tech, `%${searchText}%`),
            ilike(customers.email, `%${searchText}%`),
            ilike(customers.phone, `%${searchText}%`),
            ilike(customers.city, `%${searchText}%`),
            ilike(customers.zip, `%${searchText}%`),
            sql`
                lower(${customers.firstname} || ' ' || ${customers.lastname})
                LIKE ${`%${searchText.toLowerCase().replace(/\s+/g, '%')}%`}
                `
        ))
        .orderBy(asc(tickets.createdAt))

    return results


}

export type TicketSearchResultsType = Awaited<ReturnType<typeof getTicketSearchResults>>