import { User } from "./User"
import { Project } from "./Project"

export class Notification {
    userId: User;
    message: string;
    createdDate: Date;
    read: boolean; 
    relatedUser: User;
    relatedProject: Project;
}