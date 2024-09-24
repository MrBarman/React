import config from "../conf/config";
import { Client, Account, ID, Databases, Storage, Query } from "appwrite";

export class Service {
     client = new Client()
     databases;
     bucket;

     constructor(){
        this.client
        .setEndpoint(config.appWriteUrl)
        .setProject(config.appWriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client)
     }

     async createPost({title, slug, content, featuredImage, status, userId}) {
        try{
            return await this.databases.createDocument(
                config.appWriteDatabaseId,
                config.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        }catch (error){
            console.log("Appwrite Service :: createPost :: error", error);
        }
     }

     async updatePost(slug, {title, content, featuredImage, status, userId}) {
        try{
            return await this.databases.updateDocument(
                config.appWriteDatabaseId,
                config.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        }catch (error){
            console.log("Appwrite Service :: updatePost :: error", error);
        }
     }

     async deletePost(slug) {
        try{
            await this.databases.deleteDocument(
                config.appWriteDatabaseId,
                config.appWriteCollectionId,
                slug
            )
            return true
        }catch (error){
            console.log("Appwrite Service :: deletePost :: error", error);
            return false
        }
     }

     async getPost(slug) {
        try{
           return await this.databases.getDocument(
                config.appWriteDatabaseId,
                config.appWriteCollectionId,
                slug
            )
          
        }catch (error){
            console.log("Appwrite Service :: getPost :: error", error);
        }
     }

     async getPostsByQuery(queries = [Query.equal("status","active")]) {
        try{
           return await this.databases.listDocuments(
                config.appWriteDatabaseId,
                config.appWriteCollectionId,
                queries,
            )
          
        }catch (error){
            console.log("Appwrite Service :: getPostsByQuery :: error", error);
        }
     }

     async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                config.appWriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite Service :: uploadFile :: error", error);
            return file
        }
     }

     async deleteFile(fileId) {
        try {
            return await this.bucket.deleteFile(
                config.appWriteBucketId,
                fileId
            )
        } catch (error) {
            console.log("Appwrite Service :: deleteFile :: error", error);
            return false
        }
     }

      getFilePreview(fileId) {
        try {
            return this.bucket.getFilePreview(
                config.appWriteBucketId,
                fileId
            )
        } catch (error) {
            console.log("Appwrite Service :: getFilePreview :: error", error);
        }
     }
}


const service = new Service()

export default service