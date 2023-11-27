<script setup>
import { useStoreModule } from '../stores/store';

const appConfig = useAppConfig();
console.log('this is appConfig', appConfig.theme);

const store = useStoreModule();
console.log('this is store', store.url);
/* Increment */
const number = ref(0);
const increment = () => {
  number.value++
}

/* Show Alert Button */
const showAlert = () => {
  alert('hello world');
};
</script>

<template>
  <h1>{{ number }}</h1>
  <button
    style="margin-right: 10px;"
    @click="increment"
  >
    increment
  </button>

  <slot name="buttonCustom">
    <button
      style="background: green;"
      @click="showAlert"
    >
      click me
    </button>
  </slot> 
</template>