import { hide, show } from "./loading.actions"
import { LoadingReducer } from "./loading.reducers"
import { LoadingState } from "./LoadingState";

describe('Loading store', () => {

    it('show', () => {
        const initialState: LoadingState = {show: false};
        const newState = LoadingReducer(initialState, show());

        expect(newState).toEqual({show: true});
    })

    it('hide', () => {
        const initialState: LoadingState = {show: true};
        const newState = LoadingReducer(initialState, hide());

        expect(newState).toEqual({show: false});
    })

    it('should keep state if action is unknows', () => {
        const initialState: LoadingState = {show: true};
        const action = createAction("UNKNOWN")
        const newState = LoadingReducer(initialState, action);

        expect(newState).toEqual({show: true});
    })

})

function createAction(arg0: string) {
    throw new Error("Function not implemented.");
}
