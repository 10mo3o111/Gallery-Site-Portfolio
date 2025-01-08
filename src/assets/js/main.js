import "normalize.css";
import "../styles/style.scss";
import "./vegas.js";
import "./hamburger.js";
import "./lightbox.js";
import "./pageTop.js";

import { createApp } from "vue";
import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";

const App = {
  data() {
    return {
      filter: "all",
    };
  },
  methods: {
    updateFilter(filterName) {
      this.filter = filterName;
    },
    updateMasonry() {
      const grid = this.$refs.photos;
      if (grid) {
        imagesLoaded(grid, () => {
          new Masonry(grid, {
            itemSelector: ".photos__item",
            columnWidth: ".photos__sizer",
            percentPosition: true,
            gutter: 15,
          });
        });
      }
    },
  },
  watch: {
    filter(newFilter) {
      this.$nextTick(() => {
        this.updateMasonry();
      });
    },
  },
  mounted() {
    this.updateMasonry();
  },
};

createApp(App).mount("#app");

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
