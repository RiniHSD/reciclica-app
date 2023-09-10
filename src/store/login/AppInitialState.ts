import { AppState } from "../AppState";
import { RegisterState } from "../register/RegisterState";

export const AppInitialState: AppState ={
    loading: {
        show: false
    },
    login: {
        error: null,
        isLoggedIn: false,
        isLoggingIn: false,
        isRecoveredPassword: false,
        isRecoveringPassword: false,
    },
    register: new RegisterState
}