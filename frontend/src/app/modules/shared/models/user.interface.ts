export interface CreateUser {
  name: string;
  email: string;
  password: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  userRole: Role;
}

export enum Role{
  Admin = 1,
  Moderator = 2,
  Basic = 3
}
