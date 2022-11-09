<script setup>
import NftCard from "@/components/NftCard.vue";
import { useNftStore } from "@/stores/NftStore.js";
let nfts = useNftStore();
function changeSelectedNft(data) {
  if (
    nfts.getSelectedNft.id !== data.id ||
    Object.keys(nfts.getSelectedNft).length === 0
  ) {
    nfts.changeSelectedNft({});

    nfts.changeSelectedNft(data);
  } else if (nfts.getSelectedNft.id === data.id) {
    nfts.changeSelectedNft({});
  }
}
</script>
<template>
  <div
    class="nft-slots-container swipper-container relative overflow-x-auto h-[10rem] scroll-smooth"
    id="style-4"
  >
    <div
      class="swipper flex space-x-2 absolute z-1 scroll-smooth"
      ref="containerIt"
      id="style-4"
    >
      <NftCard
        @selected="changeSelectedNft"
        v-for="nft in nfts.nfts"
        :key="nft.id"
        :data="nft"
      />
    </div>
  </div>
</template>
<style scoped>
@media only screen and (min-width: 600px) {
  *::-webkit-scrollbar {
    width: 100%;

    height: 12px;
    border: 2px solid #b2b51e;
  }
  #style-4::-webkit-scrollbar-thumb {
    background-color: #000000;
  }
}
</style>
