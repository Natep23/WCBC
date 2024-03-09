import {mutation, query} from "./_generated/server";
import {v} from "convex/values";


export const genUploadURL = mutation(async (ctx) => {
    return await ctx.storage.generateUploadUrl()
})

export const addAnnoucments = mutation({ 
    args: {imageUrl : v.string(), description : v.string()},
    handler: async (ctx, args) => {
       const event = await ctx.db.insert("Annoucements", {imageUrl: args.imageUrl, description: args.description})
    }
}) 

export const getAnnoucments = query({ 
    handler: async (ctx) => {
       const annoucemnetlist = await ctx.db
       .query("Annoucements")
       .order("desc")
       .collect()
        return annoucemnetlist
    }
})

export const get3Annoucments = query({ 
    handler: async (ctx) => {
       const annoucemnetlist = await ctx.db
       .query("Annoucements")
       .order("desc")
       .take(3)
        return annoucemnetlist
    }
})


export const getAnnoucmentIds = query({ 
    handler: async (ctx) => {
       const annoucemnetlist = await ctx.db
       .query("Annoucements")
       .collect()
        const filter = annoucemnetlist.map((q) => q._id)
        return filter
    }
})

export const getAnnoucmentImgUrls = query({ 
    handler: async (ctx) => {
       const annoucemnetlist = await ctx.db
       .query("Annoucements")
       .collect()
        const filter = annoucemnetlist.map((q) => q.imageUrl)
        return filter
    }
})

export const getAnnoucmentDescriptions = query({ 
    handler: async (ctx) => {
       const annoucemnetlist = await ctx.db
       .query("Annoucements")
       .collect()
        const filter = annoucemnetlist.map((q) => q.description)
        return filter
    }
})

export const deleteAnnoucment = mutation({
    args: {id : v.id("Annoucements")},
    handler: async (ctx, args) => {
        await ctx.db.delete(args.id)
    }
})