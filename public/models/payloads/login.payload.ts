import { UserProxy } from "../proxies/user.proxy";

export class LoginPayload extends UserProxy {
  email: string;
  password: string;
}