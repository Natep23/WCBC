import {mutation, query} from "./_generated/server";
import {v} from "convex/values";

export const addMessage = mutation({
    args: {
        firstName : v.string(), 
        lastName: v.string(), 
        email: v.optional(v.string()), 
        message: v.string()
    },
    handler: async (ctx, args) => {
        const newMessage = await ctx.db.insert("ContactMessages", {
            firstName:args.firstName, 
            lastName: args.lastName, 
            email: args.email, 
            message: args.message
        });
    }
})

export const getMessage = query({
    handler: async (ctx, args) => {
        const newMessages = await ctx.db
        .query("ContactMessages")
        .collect()
        return newMessages
    }
})