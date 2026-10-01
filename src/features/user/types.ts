export type User = {
  id: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  phone: string;
  gender: 'male' | 'female';
  nationalId: string;
};