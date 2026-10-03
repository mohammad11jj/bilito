// src/shared/lib/api.ts
import axios from 'axios';

// آدرس API — الان شبیه‌ساز (MSW) روی همین آدرس جواب می‌ده
// بعداً این آدرس رو به آدرس بک‌اند .NET همکارت تغییر می‌دی
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// می‌تونی اینترسپتورها رو برای توکن و مدیریت خطا هم اضافه کنی
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;