import { StoreModule } from "@ngrx/store"
import { LoadingReducer } from "./loading/loading.reducers"

export const AppStoreModule = [
    StoreModule.forRoot([]),
    StoreModule.forFeature("loading", LoadingReducer)
]