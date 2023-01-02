<template>
  <router-view />
</template>

<style>
@import url("assets/css/style.css");
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-out;
}
</style>
