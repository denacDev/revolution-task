import { writable } from 'svelte/store';
export const allSchedules = writable([]);
export const allOperationsForSelectedSchedule = writable([]);
export const allOperations = writable([]);
