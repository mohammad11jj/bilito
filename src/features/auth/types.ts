export type User = {
  id: string;
  phone: string;
  firstName?: string;
  lastName?: string;
  avatar?: string;
  gender?: 'male' | 'female';
  nationalId?: string;
};

export type AuthStep = 'phone' | 'otp' | 'success';