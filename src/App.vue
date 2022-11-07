<script setup>
import NavbarItem from "@/components/NavbarItem.vue";
import SearchBar from "@/components/SearchBar.vue";
</script>

<template>
  <div class="flex justify-between">
    <video autoplay muted loop id="myVideo">
      <source
        src="https://ik.imagekit.io/bayc/assets/club-landing.mp4"
        type="video/mp4"
      />
    </video>
    <div class="px-6 py-4 space-y-[5rem] flex flex-col w-3/4 grow">
      <NavbarItem />

      <SearchBar />
      <div class="nft-slots-container w-full border">
        <div></div>
      </div>
    </div>
    <!--Left bar ends here -->
    <div
      class="border-4 border-green flex flex-col px-2 py-2 h-screen w-1/4 max-w-[20%] bg-black bg-opacity-60"
    ></div>
    <!--Right bar ends here -->
  </div>
</template>
<style scoped>
#myVideo {
  position: absolute;
  z-index: -1;

  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
