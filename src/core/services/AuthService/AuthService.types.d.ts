import { Auth, UserAuthenticated } from "../../entities";

export interface IAuthService {
   signIn(props : Auth) :  Promise<UserAuthenticated>;
}