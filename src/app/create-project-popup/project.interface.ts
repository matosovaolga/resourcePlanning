export abstract class ProjectClass {
    user_id: number;
    project_id: number;
    start_time: string = new Date().toString();
    end_time: string = new Date().toString();
    percent = 0;
    note: string;
    approved = 0;
    planning_updated: number;

    constructor() {}
}

export interface IProjectForm {
    user_id: number;
    project_id: number;
    start_time: string;
    end_time: string;
    percent: number;
    note: string;
    approved: number;
    planning_updated: number;
}

