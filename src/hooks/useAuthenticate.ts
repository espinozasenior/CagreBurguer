import { shallowEqual, useSelector } from 'react-redux';
import { RootState } from '../store';

export default function useAuthenticate() {
    const isAuth = useSelector<RootState,boolean>(state => state.authentication.auth,shallowEqual);
    return {
        isAuth
    }
}
