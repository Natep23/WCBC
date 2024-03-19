import {action, mutation, query} from "./_generated/server";
import {v} from "convex/values";
import { Id } from "./_generated/dataModel";
import { Annoucement } from "../CustomProps/AnnouncementCard";
import { useQuery } from "convex/react";
import { api } from "./_generated/api";



export const genUploadURL = mutation(async (ctx) => {
    return await ctx.storage.generateUploadUrl()
})

export const getStorageLink = query({
    // args: {},
    handler: async (ctx) => {
       const lastData = await ctx.db.system
       .query("_storage")
       .order('desc')
       .take(1)

       const returnedData = await Promise.all(lastData.map(async (data) => {
           const url = await ctx.storage.getUrl(data._id)
           return  url
       }))
        return returnedData
    } 
})

export const getStorageID = query({
    args: {},
    handler: async (ctx) => {
        const ID = await ctx.db.system
        .query("_storage")
        .order('desc')
        .take(1).then((data) => data.map((data) => data._id))


        return ID
    }
})

export const deleteImg = mutation({
    args: { storageNum: v.id('_storage')},
    handler: async (ctx,args) => {
        return await ctx.storage.delete(args.storageNum)
    }
})

export const addAnnoucments = mutation({ 
    args: {imageUrl : v.string(), description : v.string(), storageId: v.id('_storage')},
    handler: async (ctx, args) => {
       const event = await ctx.db.insert("Annoucements", {imageUrl: args.imageUrl, description: args.description, stoargeNum: args.storageId})
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