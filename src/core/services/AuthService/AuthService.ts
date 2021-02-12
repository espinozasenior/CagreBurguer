import { authMockData, userAuthenticatedMockData } from "../../data";
import { Auth, UserAuthenticated } from "../../entities";
import { IAuthService } from "./AuthService.types";

export default class AuthService implements IAuthService{
    async signIn(props : Auth) : Promise<UserAuthenticated> {
        if(props.email === authMockData.email && props.password === authMockData.password){
            return userAuthenticatedMockData;
        }
        return {
            logged: false,
        };
    }
}