import { User } from "./User"
import { Project } from "./Project"

export class Donation {
    user_id : User;
    project_id: Project;
    date_added: Date;
    amount: number;
}