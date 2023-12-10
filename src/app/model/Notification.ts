import { User } from "./User"
import { Project } from "./Project"

export class Notification {
    user_id: User;
    message: string;
    created_date: Date;
    read: boolean; 
    related_user_id: User;
    related_project_id: Project;
}