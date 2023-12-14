import { User } from "./User"
import { Area } from "./Area"

export class Project {
    projectId: number;
    userId: User;
    title: string;
    dateAdded: Date;
    areaId: Area;
    description: string;
    totalAmount: number;
}