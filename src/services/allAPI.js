import { commonAPI } from "./commonAPI";
import { serverURL } from "./serverURL";


//1 1st request - upload a video to the server - post ->req body

export const uploadVideo = async(reqBody)=>{
    //make  post http request to 'http://localhost:4000/videos' to add video in json server return response to add Component
    return await commonAPI("post",`${serverURL}/videos`,reqBody)
}

//get all videos from json server

export const getAllVideos = async()=>{
      //make  post http request to 'http://localhost:4000/videos' to add video in json server return response to view Component
        return await commonAPI("get",`${serverURL}/videos`,"")
}

//get a particular video from json server
export const getAVideo= async(id)=>{
    //make  post http request to 'http://localhost:4000/videos/id' to add video in json server return response to VideoCard Component
    return await commonAPI("get",`${serverURL}/videos/${id}`,"")
}

//Delete a particular video
export const deleteAVideo=async(id)=>{
       //make  post http request to 'http://localhost:4000/videos' to add video in json server return response to view Component
    return await commonAPI("delete",`${serverURL}/videos/${id}`,{})
}

export const addToHistory=async(videoDetails)=>{
    return await commonAPI("post",`${serverURL}/history`,videoDetails)

}

export const getHistory=async()=>{
    return await commonAPI("get",`${serverURL}/history`,"")

}

export const addCategory=async(reqBody)=>{
    return await commonAPI("post",`${serverURL}/category`,reqBody)

}
export const getAllCategory=async()=>{
    return await commonAPI("get",`${serverURL}/category`,"")

}

export const deleteCategory=async(id)=>{
    return await commonAPI("delete",`${serverURL}/category/${id}`,{})

}

export const updateCategory=async(id,body)=>{
    return await commonAPI("put",`${serverURL}/category/${id}`,body)

}