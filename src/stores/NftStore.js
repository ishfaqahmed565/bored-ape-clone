import { defineStore } from "pinia";
export const useNftStore = defineStore("nft", {
  state: () => ({
    nfts: [],
    selectedNft: {},
  }),
  actions: {
    async fill() {
      let r = await import("@/apes.json");
      this.$state.nfts = r.default.nfts;
    },
    changeSelectedNft(nftData) {
      this.$state.selectedNft = nftData;
    },
  },
  getters: {
    getSelectedNft: (state) => {
      return state.selectedNft;
    },
  },
});
