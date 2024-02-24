import { defineSchema, defineTable } from "convex/server";
import {v} from "convex/values";

export default defineSchema({
    Annoucements: defineTable({
        imageUrl: v.string(),
        description: v.string()
    }),
    ContactMessages: defineTable({
        firstName: v.string(),
        lastName: v.string(),
        email: v.optional(v.string()),
        message: v.string()
    })
})