import { User } from "./User"
import { Project } from "./Project"

export class Notification {
    notificationId: number;
    userId: User;
    message: string;
    createdDate: Date;
    read: boolean;
    relatedUser: User;
    relatedProject: Project;
}