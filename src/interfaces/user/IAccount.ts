import { IUser } from './IUser';

export interface IAccount {
    user: Partial<IUser>;
    accountIsConnected: boolean;
    accountIsLoading: boolean;
}
