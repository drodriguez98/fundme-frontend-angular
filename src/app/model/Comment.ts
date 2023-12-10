import { User } from "./User"
import { Project } from "./Project"

export class Product {
    user_id : User;
    project_id: Project;
    date_added: Date;
    content: string;
}