import { UserType } from "aws-sdk/clients/workdocs";
import { CommonUtils } from "../utils/CommonUtils";
import { Cover } from "./Cover";

export class UserDetails {
    private _id: string;
    private userId: string;
    private name: string;
    private dateOfBirth: Date;
    private memberId: string;
    private bloodType: string;
    private password: string;
    private userType: UserType;
    private emailAddress: string;
    private balance: number;
    private availableCovers: Cover[];


    constructor(obj: any) {
        this._id = obj._id;
        this.userId = obj._id;
        this.name = obj.name;
        this.dateOfBirth = new Date(obj.dateOfBirth);
        this.memberId = obj.memberId;
        this.bloodType = obj.bloodType;
        this.balance = obj.balance;
        this.emailAddress = obj.emailAddress;
        this.password = obj.password;
        this.userType = obj.userType;
        this.availableCovers = [];
        if(obj.availableCovers) {
            for(const row of obj.availableCovers) {
                this.availableCovers.push(obj.availableCovers);
            }
        }
    }


    /**
     * Getter $password
     * @return {string}
     */
	public get $password(): string {
		return this.password;
	}

    /**
     * Getter $userType
     * @return {UserType}
     */
	public get $userType(): UserType {
		return this.userType;
	}

    /**
     * Setter $password
     * @param {string} value
     */
	public set $password(value: string) {
		this.password = value;
	}

    /**
     * Setter $userType
     * @param {UserType} value
     */
	public set $userType(value: UserType) {
		this.userType = value;
	}


    /**
     * Getter $userId
     * @return {string}
     */
	public get $userId(): string {
		return this.userId;
	}

    /**
     * Setter $userId
     * @param {string} value
     */
	public set $userId(value: string) {
		this.userId = value;
	}

    /**
     * Getter $balance
     * @return {number}
     */
	public get $balance(): number {
		return this.balance;
	}

    /**
     * Setter $balance
     * @param {number} value
     */
	public set $balance(value: number) {
		this.balance = value;
	}
    
    /**
     * Getter id
     * @return {string}
     */
	public get $_id(): string {
		return this._id;
	}

    /**
     * Getter $name
     * @return {string}
     */
	public get $name(): string {
		return this.name;
	}

    /**
     * Getter $dateOfBirth
     * @return {Date}
     */
	public get $dateOfBirth(): Date {
		return this.dateOfBirth;
	}

    /**
     * Getter $memberId
     * @return {string}
     */
	public get $memberId(): string {
		return this.memberId;
	}

    /**
     * Getter $bloodType
     * @return {string}
     */
	public get $bloodType(): string {
		return this.bloodType;
	}

    /**
     * Getter $emailAddress
     * @return {string}
     */
	public get $emailAddress(): string {
		return this.emailAddress;
	}

    /**
     * Setter id
     * @param {string} value
     */
	public set $_id(value: string) {
		this._id = value;
	}

    /**
     * Setter $name
     * @param {string} value
     */
	public set $name(value: string) {
		this.name = value;
	}

    /**
     * Setter $dateOfBirth
     * @param {Date} value
     */
	public set $dateOfBirth(value: Date) {
		this.dateOfBirth = value;
	}

    /**
     * Setter $memberId
     * @param {string} value
     */
	public set $memberId(value: string) {
		this.memberId = value;
	}

    /**
     * Setter $bloodType
     * @param {string} value
     */
	public set $bloodType(value: string) {
		this.bloodType = value;
	}

    /**
     * Setter $emailAddress
     * @param {string} value
     */
	public set $emailAddress(value: string) {
		this.emailAddress = value;
	}

    /**
     * Getter $availableCovers
     * @return {Cover[]}
     */
	public get $availableCovers(): Cover[] {
		return this.availableCovers;
	}

    /**
     * Setter $availableCovers
     * @param {Cover[]} value
     */
	public set $availableCovers(value: Cover[]) {
		this.availableCovers = value;
	}
    
}