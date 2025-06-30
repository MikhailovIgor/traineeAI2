import axios from 'axios';
import type { User } from '../types/user';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

class ApiService {
  private api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // Get all users
  async getUsers(): Promise<User[]> {
    try {
      const response = await this.api.get<User[]>('/users');
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw new Error('Failed to fetch users');
    }
  }

  // Get a single user by ID
  async getUserById(id: number): Promise<User> {
    try {
      const response = await this.api.get<User>(`/users/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching user ${id}:`, error);
      throw new Error(`Failed to fetch user ${id}`);
    }
  }

  // Create a new user
  async createUser(userData: Omit<User, 'id'>): Promise<User> {
    try {
      const response = await this.api.post<User>('/users', userData);
      return response.data;
    } catch (error) {
      console.error('Error creating user:', error);
      throw new Error('Failed to create user');
    }
  }

  // Update an existing user
  async updateUser(id: number, userData: Partial<User>): Promise<User> {
    try {
      const response = await this.api.put<User>(`/users/${id}`, userData);
      return response.data;
    } catch (error) {
      console.error(`Error updating user ${id}:`, error);
      throw new Error(`Failed to update user ${id}`);
    }
  }

  // Delete a user
  async deleteUser(id: number): Promise<void> {
    try {
      await this.api.delete(`/users/${id}`);
    } catch (error) {
      console.error(`Error deleting user ${id}:`, error);
      throw new Error(`Failed to delete user ${id}`);
    }
  }
}

export const apiService = new ApiService(); 