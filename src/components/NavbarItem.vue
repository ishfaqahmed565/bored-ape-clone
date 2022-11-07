<script setup></script>
<template>
  <nav class="flex items-center justify-between">
    <div>
      <a href="#">
        <img
          id="logo"
          src="https://ik.imagekit.io/bayc/assets/bayc-footer.png"
          alt="logo"
          class="rounded-full border-[2px] bg-black border-green w-20 h-20 object-contain"
        />
      </a>
    </div>
    <ul class="flex items-center space-x-4">
      <li>
        <a href="#">
          <i class="fa-brands fa-youtube text-white hover:text-green"></i>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fa-brands fa-instagram text-white hover:text-green"></i>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fa-brands fa-twitter text-white hover:text-green"></i>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fa-brands fa-discord text-white hover:text-green"></i>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
#logo {
  position: relative;
  animation: rotation 18s linear 2s infinite;
}
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>
