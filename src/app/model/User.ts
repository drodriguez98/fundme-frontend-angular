import { Country } from "./Country"

export class User {
    name : string;
    password: string;
    date_added: Date;
    country_id: Country;
    postal_code: number;
    email: string;
    phone: string;
    active: boolean;
    admin: boolean;
    username: string;
}