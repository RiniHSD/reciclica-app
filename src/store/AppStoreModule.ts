import { StoreModule } from "@ngrx/store"
import { LoadingReducer } from "./loading/loading.reducers"
import { loginReducer } from "./login/login.reducers"

export const AppStoreModule = [
    StoreModule.forRoot([]),
    StoreModule.forFeature("loading", LoadingReducer),
    StoreModule.forFeature("login", loginReducer)
]