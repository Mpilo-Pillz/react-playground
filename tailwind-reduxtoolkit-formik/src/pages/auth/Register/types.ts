export interface RegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  email: string;
  subscriptions: [];
  token: string;
  userId: string;
}
