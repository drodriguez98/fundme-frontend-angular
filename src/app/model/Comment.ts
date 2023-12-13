import { User } from "./User"
import { Project } from "./Project"

export class Comment {
    userId: User;
    projectId: Project;
    dateAdded: Date;
    content: string;
}