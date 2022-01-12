const { MongoClient } = require("mongodb");

import log4js = require('log4js');
const logger = log4js.getLogger('MongoDB Utils');
import { InvalidInputError } from '../errors/InvalidInputError';

export class MongoDBUtils {
    private connectionURI =  null;
    private client = null;
    private database = null;
    private collection = null

    private clientIdentity: any = null;

    constructor(obj?: any) {
        if(obj) {this.clientIdentity = obj.clientIdentity;}
    }
    
    async connect() {
        try {
            if(process.env.MONGODB_USERNAME === null) { throw new InvalidInputError('MongoDB username is empty'); }
            if(process.env.MONGODB_PASSWORD === null) { throw new InvalidInputError('MongoDB password is empty'); }
            if(process.env.MONOGDB_HOST === null) { throw new InvalidInputError('MongoDB host is empty'); }
            
            this.connectionURI = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}`;
            this.client = new MongoClient(this.connectionURI);
            await this.client.connect();
            logger.debug("connected successfully to mongo server");
            this.database = this.client.db(process.env.MONGODB_DATABASE);
            // this.collection = this.database.collection(process.env.MONGODB_COLLECTION);

        } catch (error) {
            throw new Error(error);
        }
    }

    /**
     * 
     * @param identifier 
     * @param collectionName 
     * @returns 
     */
    async get(identifier: string, collectionName: string): Promise<any> {
       try {
            if(!this.client) { await this.connect(); }
            this.collection = this.database.collection(collectionName);
            let result = await this.collection.findOne({_id: identifier})
            return result;
       } catch (error) {
           throw new Error(error);
       }
    } 

    /**
     * Search distinct claims based upon the criteria
     * @param selector 
     * @param collectionName 
     */
    async filter(selector: any, collectionName: string ): Promise<any[]> {
        try {
            if(!this.client) { await this.connect(); }
            this.collection = this.database.collection(collectionName);
            return await this.collection.find(selector).toArray();
        } catch(error) {
            logger.error(error);
            throw new Error(error);
        }
    }

    /**
     * TO insert new document in the mongo collection
     * @param value 
     * @param collectionName 
     */
    async insert(value: any, collectionName: string ) {
       try {
        if(!this.client) { await this.connect(); }
        this.collection = this.database.collection(collectionName);
        this.collection.insertOne(value);
       } catch (error) {
            throw new Error(error);
       }
    }

    /**
     * To update existing document in the mongo collection
     * @param documentId 
     * @param value 
     * @param collectionName 
     */
    async update(documentId: string, value: any, collectionName: string ) {
        try {
            if(!this.client) { await this.connect(); }
            this.collection = this.database.collection(collectionName);
            if(documentId) { value._id = documentId;}
            this.collection.updateOne({_id: documentId}, {$set: value}, {upsert: true});
        } catch (error) {
            throw new Error(error);
        }
    }

    /**
     * 
     * @param value 
     * @param collectionName 
     */
    async delete(value: any, collectionName: string) {
        try {
            if(!this.client) { await this.connect(); }
            this.collection = this.database.collection(collectionName);
            value._isDeleted = true;
            this.collection.updateOne({_id: value._id}, {$set: value}, {upsert: true});
        } catch (error) {
            throw new Error(error);
        }
    }

    close() {
        if(this.client) { this.client.close(); }
    }


    /**
     * Getter $clientIdentity
     * @return {any }
     */
	public get $clientIdentity(): any  {
		return this.clientIdentity;
	}

    /**
     * Setter $clientIdentity
     * @param {any } value
     */
	public set $clientIdentity(value: any ) {
		this.clientIdentity = value;
	}
} ;
