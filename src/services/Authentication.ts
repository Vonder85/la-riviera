import { IUser } from '../interfaces/user/IUser';
import { onUserSync } from '../store/reducers/account';
import { store } from '../store/store';
import localforage from 'localforage';

export class Authentication {
    public static readonly storageKey = 'auth';
    public static isLoading = true;
    public static isConnected = false;
    public static token: string | undefined;
    public static user: Partial<IUser>;

    // Mock Datas
    public static mockToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';
    public static mockDatas: IUser = {
        uid: '0x00000000000000000000000000000001',
        email: 'guillaume_delarue@ext.connect-tech.sncf',
        firstName: 'Guillaume',
        lastName: 'DE LA RUE',
    };

    public static async init() {
        const auth = await localforage.getItem(this.storageKey);
        console.log('Authentication:init', auth);
        return new Promise(resolve => {
            if (auth) {
                // Simulate login with mock datas (and a 1s delay to show the beautiful loading screen)
                this.onLogin(this.mockDatas, this.mockToken).then(() => {
                    setTimeout(() => {
                        this.sync().then(thunk => resolve(thunk.payload));
                    }, 1000);
                });
            } else {
                resolve(this.sync());
            }
        });
    }

    public static async login() {
        this.isLoading = true;
        return this.onLogin(this.mockDatas, this.mockToken).then(() => {
            this.sync().then(thunk => thunk.payload);
        });
    }

    public static async logout() {
        return this.onLogout().then(() => this.sync().then(thunk => thunk.payload));
    }

    private static async onLogin(user: IUser, token: string) {
        this.user = Object.assign({}, user);
        this.token = token;
        this.isConnected = true;
        await localforage.setItem(this.storageKey, this.token);
        return this.user;
    }

    private static async onLogout() {
        this.user = {};
        this.token = undefined;
        this.isConnected = false;
        await localforage.removeItem(this.storageKey);
    }

    private static async sync() {
        this.isLoading = false;
        return store.dispatch(onUserSync(this.toJSON()));
    }

    public static toJSON(): Partial<IUser> {
        return this.user;
    }
}
