<script setup>
//import { onMounted } from "vue";
import NavbarItem from "@/components/NavbarItem.vue";
import SearchBar from "@/components/SearchBar.vue";
import CardHolder from "@/components/CardHolder.vue";
import FeaturedCard from "@/components/FeaturedCard.vue";

import { useNftStore } from "@/stores/NftStore.js";
/*onMounted(() => {
  const swipperContainer =
    document.querySelector(".swipper-container").clientWidth;
  const swipper = document.querySelector(".swipper").clientWidth;
  const button = document.querySelector(".slide");
  console.log(swipper, swipperContainer, button);

  button.onclick = () => {
    document.querySelector(".swipper-container").scrollLeft += 300;
  };
});*/
let nfts = useNftStore();
nfts.fill();
</script>

<template>
  <div class="flex justify-between text-white font-inter text-white">
    <video autoplay muted loop id="myVideo">
      <source
        src="https://ik.imagekit.io/bayc/assets/club-landing.mp4"
        type="video/mp4"
      />
    </video>
    <div
      class="px-6 py-4 space-y-[2rem] sm:space-y-[3rem] md:space-y-[5rem] flex flex-col w-3/4 grow"
    >
      <NavbarItem />

      <SearchBar />

      <CardHolder />
    </div>

    <!--Left bar ends here -->
    <FeaturedCard />
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
.button-shadow {
  box-shadow: 3px 3px 6px rgba(10, 10, 10, 0.51);
}
.bidButton {
  margin: 20px;
}
</style>
