interface JwtUser {
  id: string;
  iat: number;
}

interface Context {
  user?: JwtUser | null;
}
