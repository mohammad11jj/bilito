export type User = {
  id: string;
  phone: string;
  firstName?: string;
  lastName?: string;
  avatar?: string;
};

export type AuthStep = 'phone' | 'otp' | 'success';