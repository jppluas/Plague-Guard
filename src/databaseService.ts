// src/databaseService.ts
import { ref, push, set } from 'firebase/database';
import { database } from './firebaseConfig';

type Trap = {
  id: string;
  name: string;
  location: string;
  status: string;
  pheromones: number;
  plagues: number;
};

export const addTrapToUser = async (userId: string, trap: Trap) => {
  try {
    const userTrapsRef = ref(database, `users/${userId}/objects`);
    const newTrapRef = push(userTrapsRef);
    await set(newTrapRef, trap);
  } catch (error) {
    throw error;
  }
};

export const addObjectToUser = async (userId: string, object: { name: string, value: string }) => {
  try {
    const userObjectsRef = ref(database, 'users/' + userId + '/objects');
    const newObjectRef = push(userObjectsRef);
    await set(newObjectRef, object);
  } catch (error) {
    throw error;
  }
};
