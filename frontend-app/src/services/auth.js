import api from './api';

export const authService = {
    async login(email, password) {
        const response = await api.post('/users/login', { email, password });
        const { token } = response.data;
        localStorage.setItem('token', token);
        return response.data;
    },

    async register(userData) {
        const response = await api.post('/users/create', userData);
        return response.data;
    },

    logout() {
        localStorage.removeItem('token');
    },

    isAuthenticated() {
        return !!localStorage.getItem('token');
    }
}; 