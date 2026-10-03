import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User } from '../types';

type AuthState = {
  user: User | null;
  token: string | null;
  isLoggedIn: boolean;
  login: (user: User, token: string) => void;
  logout: () => void;
  updateUser: (user: Partial<User>) => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isLoggedIn: false,

      login: (user, token) => {
        set({ user, token, isLoggedIn: true });
        // ذخیره توکن برای axios
        localStorage.setItem('token', token);
      },

      logout: () => {
        set({ user: null, token: null, isLoggedIn: false });
        localStorage.removeItem('token');
      },

      updateUser: (updatedUser) => {
        set((state) => ({
          user: state.user ? { ...state.user, ...updatedUser } : null,
        }));
      },
    }),
    {
      name: 'auth-storage', // نام کلید در localStorage
    },
  ),
);