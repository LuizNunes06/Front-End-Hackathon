import {ref, computed} from 'vue';
import { defineStore } from 'pinia';
import AuthService from '@/services/auth';
export const useAuthStore = defineStore('auth', () => {
  const user = ref(null);
  const token = ref(null);
  const isLogged = computed(() => !!token.value); 


  async function login(credentials) {
    try {
      const data = await AuthService.login(credentials);
      token.value = data.access; 
      user.value = { email: credentials.email, password: credentials.password };
      localStorage.setItem('token', token.value); 
    } catch (error) {
      console.error('Login failed:', error);
      logout(); 
      throw error;
    }
  }
  

  
  function logout() {
    user.value = null;
    token.value = null;
    localStorage.removeItem('token');
  }

  function loadToken() {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      token.value = storedToken;
    }
  }

  return { user, token, isLogged, login, logout, loadToken };
});
