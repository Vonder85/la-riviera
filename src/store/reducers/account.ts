import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAccount } from '../../interfaces/user/IAccount';
import { IUser } from '../../interfaces/user/IUser';
import { Authentication } from '../../services/Authentication';

const initialState: IAccount = {
    user: Authentication.toJSON(),
    accountIsConnected: false,
    accountIsLoading: true,
};

const slicer = createSlice({
    name: 'account',
    initialState,
    reducers: {
        onUserSync: (state, action: PayloadAction<Partial<IUser>>) => {
            state.user = action.payload;
            state.accountIsLoading = Authentication.isLoading;
            return state;
        },
    },
});

export const { onUserSync } = slicer.actions;

export default slicer.reducer;
