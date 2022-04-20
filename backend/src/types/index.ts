export interface IJwtUser {
  id: string;
  iat: number;
}

export interface IContext {
  user?: IJwtUser | null;
}
