import { RegisterUserPayload, CreateUserPayload } from "../models/payloads/register-user.payload";
import { UserProxy } from "../models/proxies/user.proxy";

export const userService = {
  getAll,
  getById,
  create,
  login,
  getMe,
  invitedUser
}

function getAll(): UserProxy[] {
  return localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
}

function getById(id: string): UserProxy | undefined {
  const users = getAll();
  return users.find((user) => user.id === id);
}

function getByEmail(email: string): UserProxy | undefined {
  const users = getAll();
  return users.find((user) => user.email === email);
}

function create(user: Omit<RegisterUserPayload, 'confirmPassword'>) {
  const users = getAll();

  const hasUser = users.find((us) => us.email === user.email);

  if (hasUser)
    return false;

  const newUser: UserProxy = {
    ...user as UserProxy,
    id: self.crypto.randomUUID(),
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users));
  localStorage.setItem('loggedUser', JSON.stringify(newUser));
  return true;
}

function update(id, user: Partial<UserProxy>) {
}

function remove(id: string) {
}

function login(user: CreateUserPayload): boolean {
  const us = verifyLogin(user);
  if (us) {
    setLogin(us);
    return true;
  } else {
    return false;
  }
}

function verifyLogin(user: CreateUserPayload) {
  const users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];

  return users.find((us) => us.email === user.email && us.password === user.password);
}

function setLogin(user: UserProxy) {
  localStorage.setItem('users', JSON.stringify(user));
  localStorage.setItem('loggedUser', JSON.stringify(user));
}

function getMe(): UserProxy | undefined {
  return localStorage.getItem('loggedUser') ? JSON.parse(localStorage.getItem('loggedUser')) : undefined;
}

function invitedUser(user: UserProxy): void {
  localStorage.setItem('loggedUser', JSON.stringify(user));
}