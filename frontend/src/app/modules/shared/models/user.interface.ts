export interface CreateUser {
  userName: string;
  fullName: string;
  email: string;
  role: string;
  password: string;
}

export interface User {
  id: number;
  userName: string;
  fullName: string;
  email: string;
  role: Role;
}

export enum Role{
  Admin = 1,
  Moderator = 2,
  Basic = 3
}
