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
    handler: async (ctx) => {
        const newMessages = await ctx.db
        .query("ContactMessages")
        .order("desc")
        .collect()
        return newMessages
    }
})

export const deleteMessage = mutation({
    args: {id: v.id("ContactMessages")},
    handler: async (ctx, args) => {
        await ctx.db.delete(args.id)
    }
})