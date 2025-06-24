import { Session, User } from "next-auth";
import { JWT } from "next-auth/jwt";
// types/IRegister.ts
export interface IRegister {
  fullName: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface ILogin {
  identifier: string;
  password: string;
}

interface IActivation {
  code: string;
}

interface SessionExtended extends Session {
  accessToken?: string
}

interface UserExtended extends User {
  accessToken?: string;
  role?: string;
}

interface JWTExtended extends JWT {
  user?: UserExtended;

}


export type {IRegister, IActivation,  UserExtended, JWTExtended, SessionExtended, ILogin} ;