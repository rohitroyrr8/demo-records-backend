export class MemberInfo {
    private name: string;
    private dob: string;
    private memberId: string;
    private bloodType: string;

    constructor(obj: any) {
        this.name = obj.name;
        this.dob = obj.dob;
        this.memberId = obj.memberId;
        this.bloodType = obj.bloodType;

    }

    /**
     * Getter $name
     * @return {string}
     */
	public get $name(): string {
		return this.name;
	}

    /**
     * Getter $dob
     * @return {string}
     */
	public get $dob(): string {
		return this.dob;
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
     * Setter $name
     * @param {string} value
     */
	public set $name(value: string) {
		this.name = value;
	}

    /**
     * Setter $dob
     * @param {string} value
     */
	public set $dob(value: string) {
		this.dob = value;
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

}