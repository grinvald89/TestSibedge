import { IUser } from "./container/i-user";

export interface IResponse {
    info: IInfo;
    results: IUser[];
}

interface IInfo {
    page: number;
    results: number;
    seed: string;
    version: string;
}
