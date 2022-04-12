import axios, { AxiosInstance } from 'axios';
import { onEnvInfos } from '../store/reducers/environment';
import { store } from '../store/store';

export class Serverless {
    private static isRequesting = false;
    private static client: AxiosInstance;
    private static serviceRoute = '/serverless/info';

    public static async getInfo(id: string): Promise<void> {
        const { environment } = store.getState();
        const envItem = environment.list.find(item => item.id === id);
        if (!envItem) {
            throw new Error('Environment not defined');
        }

        // Skip that request while fetching datas
        if (this.isRequesting) {
            return;
        }

        // Set isRequesting flag
        this.isRequesting = true;

        // Request serverless infos for envirnment
        console.log(environment.list, envItem);
        const url = `${envItem.apiUrl}${this.serviceRoute}`;
        console.log(url);
        const { data } = await axios.get(url, {
            headers: {
                'X-API-KEY': envItem.apiKey,
            },
        });

        // Dispatch results to redux store
        store.dispatch(onEnvInfos(data));

        // Reset isRequesting flag
        this.isRequesting = false;
    }
}
