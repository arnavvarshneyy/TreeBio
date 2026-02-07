"use server";

import {db} from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { LinkFormData } from "../components/link-form";
import { SocialLinkFormData } from "../components/social-link-modal";



export const createLinkByUser = async (data:LinkFormData)=>{
    const user = await currentUser();

    if(!user) return { success: false, error: "No authenticated user found" };

    const link = await db.link.create({
        data:{
            title:data.title,
            url:data.url,
            description:data.description,
            clickCount:0,
            user:{
                connect:{
                    clerkId:user.id
                }
            }
        }
    })

      return {
        sucess:true,
        message:"Link created successfully",
        data:link
    }
}


export const getAllLinkForUser = async ()=>{
    const user = await currentUser()

    const links = await db.link.findMany({
        where:{
            user:{
                clerkId:user?.id
            }
        },
        select:{
              id:true,
            title:true,
            description:true,
            url:true,
            clickCount:true,
            createdAt:true,
        }
    })

     return {
        success:true,
        message:"Gets All Link successfully",
        data:links
    }

}

export const addSocialLink = async(data:SocialLinkFormData)=>{
    const user = await currentUser()

      if (!user) return { success: false, error: "No authenticated user found" };

      const socialLink = await db.socialLink.create({
        data:{
            platform:data.platform,
            url:data.url,
            user:{
                connect:{
                    clerkId:user.id
                }
            }
        }
      })

      return {
                sucess:true,
        message:"Social link added successfully",
        data:socialLink
    }
}

export const editSocialLink = async(data:SocialLinkFormData,socialLinkId:string)=>{
    const user = await currentUser();

    if (!user) return { success: false, error: "No authenticated user found" };

        // ensure the social link belongs to the current user
        const existing = await db.socialLink.findFirst({ where: { id: socialLinkId, user: { clerkId: user.id } } });
        if (!existing) return { success: false, error: "Social link not found or not authorized" };

        const updated = await db.socialLink.update({ where: { id: socialLinkId }, data });
        return { sucess: true, success: true, message: "Social link updated successfully!", data: updated };
}

export const deleteSocialLink = async (socialLinkId: string) => {
    const user = await currentUser();
    if (!user) return { success: false, error: "No authenticated user found" };

    const existing = await db.socialLink.findFirst({ where: { id: socialLinkId, user: { clerkId: user.id } } });
    if (!existing) return { success: false, error: "Social link not found or not authorized" };

    await db.socialLink.delete({ where: { id: socialLinkId } });
    return { sucess: true, success: true, message: "Social link deleted" };
}

export const updateLink = async (data: LinkFormData, linkId: string) => {
    const user = await currentUser();
    if (!user) return { success: false, error: "No authenticated user found" };

    const existing = await db.link.findFirst({ where: { id: linkId, user: { clerkId: user.id } } });
    if (!existing) return { success: false, error: "Link not found or not authorized" };

    const updated = await db.link.update({ where: { id: linkId }, data: { title: data.title, url: data.url, description: data.description } });
    return { sucess: true, success: true, message: "Link updated successfully", data: updated };
}

export const deleteLink = async (linkId: string) => {
    const user = await currentUser();
    if (!user) return { success: false, error: "No authenticated user found" };

    const existing = await db.link.findFirst({ where: { id: linkId, user: { clerkId: user.id } } });
    if (!existing) return { success: false, error: "Link not found or not authorized" };

    await db.link.delete({ where: { id: linkId } });
    return { sucess: true, success: true, message: "Link deleted" };
}