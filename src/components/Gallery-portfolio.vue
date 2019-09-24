<template>
  <figure>
    <img
      :src="getImgUrl(imgs)"
      :imgs="imgs"
      class="img-fluid"
      alt=""
      @click="onImageClick()"
    />
  </figure>
</template>
<script>
import router from "../router";

export default {
  name: "GalleryPage",
  props: ["imgs"],
  data() {
    return {
      visible: false,
      index: 0
    };
  },
  methods: {
    getImgUrl(pic) {
      return require("../assets/" + pic);
    },
    onImageClick() {
      if (router.currentRoute.path === "/photographer") {
        router.push("/photographer/portfolio");
        return;
      }
    }
  }
};
</script>

<style scoped>
figure {
  margin: 0 !important;
}
@media (min-width: 768px) {
  .carousel-multi-item-2 .col-md-3 {
    float: left;
    width: 25%;
    max-width: 100%;
  }
}

.carousel-multi-item-2 .card img {
  border-radius: 2px;
}

figure {
  cursor: pointer;
}
</style>
