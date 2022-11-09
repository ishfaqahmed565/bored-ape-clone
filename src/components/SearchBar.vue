<script setup></script>
<template>
  <div class="flex flex-col flex space-y-5 items-start ml-8 pb-[2rem]">
    <div class="relative search-bar">
      <input
        type="text"
        class="border-4 border-green rounded-md py-2 px-3 w-[15rem] text-xs placeholder-gray-300"
        placeholder="Search here.."
      />
      <button
        class="absolute object-contain top-0 right-0 flex items-center h-full"
      >
        <div
          class="mr-1 border border-gray-600 bg-black rounded text-xs h-[81%] text-gray-400 px-3 flex items-center"
        >
          /
        </div>
      </button>
    </div>
    <h2 class="text-green italic text-4xl font-extrabold w-1/2 leading-[3rem]">
      Mint your bored ape
    </h2>
  </div>
</template>
<style scoped>
h2 {
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}
</style>
