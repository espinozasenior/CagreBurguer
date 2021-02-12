export interface Auth {
  username?: string;
  email?: string;
  password?: string;
}

export interface User {
  userId?: number;
  name?: string;
}

export interface UserAuthenticated {
  userId ?: number;
  name?: string;
  token ?: string;
  logged?: boolean;
}
