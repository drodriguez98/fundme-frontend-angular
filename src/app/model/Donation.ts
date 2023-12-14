import { User } from "./User"
import { Project } from "./Project"

export class Donation {
    donationId: number;
    userId: User;
    projectId: Project;
    dateAdded: Date;
    amount: number;
}