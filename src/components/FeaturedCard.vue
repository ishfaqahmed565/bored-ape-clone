<script setup>
import { useNftStore } from "@/stores/NftStore.js";
import { ref, watch } from "vue";
let nfts = useNftStore();

let transitionIn = ref(false);
let transitionOut = ref(false);
watch(nfts, function (newState) {
  if (Object.keys(newState.getSelectedNft).length > 0) {
    transitionIn.value = true;
    transitionOut.value = false;
    console.log(transitionIn.value);
  }
});

let style = ref(`${transitionIn.value ? "slideIn" : "right-[-40rem]"} `);
watch(transitionIn, (newX) => {
  if (newX === true) {
    console.log("2");
    style.value = "slideIn";
  }
});
watch(transitionOut, (newX) => {
  if (newX == true) {
    style.value = "slideOut";
  }
});
function back() {
  transitionOut.value = true;
  transitionIn.value = false;

  nfts.changeSelectedNft({});
}
</script>
<template>
  <div
    class="absolute bg-black bg-opacity-70 sm:right[0rem] sm:static border-4 border-green h-screen sm:min-w-[13rem] sm:max-w-[17rem] w-full"
    :class="style"
  >
    <Transition
      enter-from-class="opacity-0 scale-125"
      enter-to-class="opacity-100 scale-100"
      enter-active-class="transition duration-300"
      leave-active-class="transition duration-200"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-125"
    >
      <div
        v-if="Object.keys(nfts.getSelectedNft).length > 0"
        class="flex space-y-5 flex-col px-2 py-2"
      >
        <div class="flex justify-between text-white text-[9px]">
          <div class="flex space-x-1">
            <span> Bored Ape Yacht Club </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              class="w-3 h-3 text-blue-400 fill-current rounded-lg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div>{{ nfts.getSelectedNft.id }}</div>
        </div>
        <img
          :src="nfts.getSelectedNft.img"
          alt=""
          class="mx-auto object-fit md:w-[15rem] md:h-[22rem] w-[17rem] h-[19rem]"
        />
        <div class="flex justify-between">
          <div class="time-remaining font-normal text-sm text-white">
            <h3>20h: 25m: 08s</h3>
            <p class="font-medium text-[9px] text-white">Remaining time</p>
          </div>
          <div class="pricing font-semibold text-sm flex flex-col">
            <h3>{{ nfts.getSelectedNft.price }}</h3>
            <p class="font-medium text-[9px] text-white">Highest bid</p>
          </div>
        </div>
        <div class="flex space-x-2">
          <button
            @click="back"
            class="sm:hidden w-[2.5rem] rounded-full bidButton mt-20 w-full bg-transparent text-green border-2 border-green text-[17px] font-black py-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 mx-auto"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <button
            class="w-3/4 bidButton mt-20 w-full bg-transparent text-green border-2 border-green text-[17px] font-black rounded-md py-1"
          >
            Bid Now
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>
<style>
.bidButton {
  box-shadow: 2px 2.5px #b2b51e;
}
.bidButton:active {
  box-shadow: 1px 1px #b2b51e;
  transform: translate(2px, 3px);
}
.slideOut {
  animation: slide2 0.5s ease-out 0s 1 reverse forwards;
}
.slideIn {
  animation: slide 0.5s ease-in 0s 1 normal forwards;
}
@keyframes slide {
  0% {
    right: -40rem;
  }
  100% {
    right: 0rem;
  }
}
@keyframes slide2 {
  0% {
    right: -40rem;
  }
  100% {
    right: 0rem;
  }
}
</style>
