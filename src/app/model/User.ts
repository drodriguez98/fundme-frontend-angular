import { Country } from "./Country"

export class User {
    userId: number;
    name: string;
    password: string;
    dateAdded: Date;
    countryId: Country;
    postalCode: number;
    email: string;
    phone: string;
    active: boolean;
    admin: boolean;
    username: string;
}