import configureMockStore, { MockStoreEnhanced } from 'redux-mock-store';
import thunk from 'redux-thunk';
import { authMockData } from '../../../core/data';
import { signIn } from "../asyncActions"
import { initialState, authenticationActions } from '../authenticationSlice';

const mockAuthStore = configureMockStore([thunk])

describe('authenticationSlice', () => {
    
    let store : MockStoreEnhanced<any,any>;
    beforeEach(() => {
        store = mockAuthStore(initialState);
    })

    it('Debería fallar el ingresar con los datos incorrectos', async () => {
        
        const payload = {
            email : "mark",
            password : "123"
        }
        expect(store.getActions()).toHaveLength(0);
        await store.dispatch(signIn(payload));

        const [ loadingAction , resultAction ] = store.getActions();
        expect(loadingAction.type).toBe(authenticationActions.signInLoading.toString());
        expect(resultAction.type).toBe(authenticationActions.signInFailed.toString());
    });
    
    it('Puede ingresar al sistema satisfactoriamente', async () => {
        
        const payload = {
            email : authMockData.email,
            password : authMockData.password
        }

        await store.dispatch(signIn(payload));
        const [ loadingAction , resultAction ] = store.getActions();
        expect(loadingAction.type).toBe(authenticationActions.signInLoading.toString());
        expect(resultAction.type).toBe(authenticationActions.signInSuccess.toString());

    });
})
