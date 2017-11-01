export class Users {
    firstname: string;
    group_id: number;
    id: number;
    lastname: string;
    salt: string;
    status: number;
    plans: string[];
    constructor(firstname: string,
    group_id: number,
    id: number,
    lastname: string,
    salt: string,
    status: number) {
        this.firstname = firstname;
        this.group_id = group_id;
        this.id = id;
        this.lastname = lastname;
        this.salt = salt;
        this.status = status;
        this.plans = [];
    }
}