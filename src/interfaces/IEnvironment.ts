import { IEnvironmentItem } from './IEnvironmentItem';

export interface IEnvironment {
    list: IEnvironmentItem[];
    selectedEnvId: string;
    infos?: any;
}
