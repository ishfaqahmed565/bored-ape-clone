<script setup>
import { useNftStore } from "@/stores/NftStore.js";
let nfts = useNftStore();
let props = defineProps({
  data: Object,
});
</script>
<template>
  <div
    @click="$emit('selected', data)"
    :class="{
      'border-4 bottom-2.5 h-[8.6rem] min-w-[5rem] border-green rounded-xl scale-75':
        props.data.id == nfts.getSelectedNft.id,
    }"
    class="nft-card relative top-0 left-0 w-20 h-20 flex items-center flex-col"
  >
    <img :src="data.img" alt="bored ape" class="object-contain rounded-lg" />
    <div
      class="bg-white py-2 rounded-b-lg flex items-center flex-col relative w-full bottom-[5px]"
    >
      <h4 class="tag-no. font-bold text-[10px] text-black">{{ data.id }}</h4>
      <span
        class="text-center mb-1 text-gray-600 text-[6px] font-light w-[80%] overflow-hidden text-ellipsis whitespace-nowrap"
        >owned by {{ data.owner }}</span
      >
      <button
        class="hover:bottom-[2px] relative hover:animate-pulse button-shadow border-2 drop-shadow-2xl border-black bg-green px-2 text-[10px] text-black font-extrabold rounded-full"
      >
        {{ data.price }}
      </button>
    </div>
  </div>
</template>
