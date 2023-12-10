import { User } from "./User"
import { Area } from "./Area"

export class Project {
    user_id: User;
    title: string;
    date_added: Date;
    area_id: Area; 
    description: string;
    total_amount: number;
}