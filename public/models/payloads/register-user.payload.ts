export interface CreateUserPayload {
  password: string;
  email: string;
}

export interface RegisterUserPayload extends CreateUserPayload {
  name: string;
  city: string;
  confirmPassword: string;
}