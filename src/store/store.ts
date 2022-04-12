import { combineReducers, createStore } from '@reduxjs/toolkit';
import account from './reducers/account';
import { composeWithDevTools } from '@redux-devtools/extension';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import environment from './reducers/environment';

// Define store
export const store = createStore(
    combineReducers({
        account,
        environment,
    }),
    composeWithDevTools(),
);

// Hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
