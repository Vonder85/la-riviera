import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IEnvironment } from '../../interfaces/IEnvironment';

const initialState: IEnvironment = {
    list: [
        {
            id: 'integration',
            name: 'Integration',
            apiUrl: 'https://sticky-integration-internal.sncfvoyages-dev.aws.vsct.fr',
            apiKey: 'EVTECH-b5bdfdcc-e675-4c55-815d-u0moco5i31a2103',
        },
        {
            id: 'local',
            name: 'Local',
            apiUrl: 'http://localhost:8085/dev',
            apiKey: 'EVTECH-b5bdfdcc-e675-4c55-815d-u0moco5i31a2103',
        },
    ],
    selectedEnvId: 'local',
    infos: undefined,
};

const slicer = createSlice({
    name: 'environment',
    initialState,
    reducers: {
        onEnvSync: (state, action: PayloadAction<string>) => {
            state.selectedEnvId = action.payload;
            state.infos = undefined;
            return state;
        },
        onEnvInfos: (state, action: PayloadAction<any>) => {
            state.infos = action.payload;
            return state;
        },
    },
});

export const { onEnvSync, onEnvInfos } = slicer.actions;

export default slicer.reducer;
