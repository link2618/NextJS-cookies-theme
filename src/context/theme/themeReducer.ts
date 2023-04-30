import { ThemeState } from "./";

type ThemeActionType =
    | { type: '[Theme] - Change'; payload: string };

export const themeReducer = (state: ThemeState, action: ThemeActionType): ThemeState => {
    switch (action.type) {
        case '[Theme] - Change':
            return {
                ...state,
                theme: action.payload
            };
        default:
            return state;
    }
};