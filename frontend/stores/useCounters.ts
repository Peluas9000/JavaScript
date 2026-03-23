// stores/useCounter.ts
import { defineStore } from "pinia";

// Tipado explícito del estado
interface CounterState {
  count: number;
  name: string;
}

export const useCounterStore = defineStore("counter", () => {
  // Estado reactivo (Composition API style)
  const count = ref<number>(0);
  const name = ref<string>("Mi contador");

  // Getters como computed
  const doubleCount = computed<number>(() => count.value * 2);

  // Actions como funciones
  function increment(): void {
    count.value++;
  }

  function decrement(): void {
    if (count.value > 0) count.value--;
  }

  function reset(): void {
    count.value = 0;
  }

  return { count, name, doubleCount, increment, decrement, reset };
});
