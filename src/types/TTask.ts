export interface ITask {
    id: string;
    status: string;
    label: string;
    description: string;
}

export interface IOneTaskProps extends ITask { }