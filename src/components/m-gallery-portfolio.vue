<template>
  <figure class="portfolio-img">
    <img :src="getImgUrl(imgs)" :imgs="imgs" class="img-fluid" alt="" />
    <div
      class="text-center"
      style="font-size: 14px;color:#4d4d4d;background:#fff;padding:25px"
      :title="title"
    >
      {{ title }}
    </div>
  </figure>
</template>
<script>
export default {
  name: "GalleryPage",
  props: ["imgs", "title"],
  data() {
    return {
      visible: false,
      index: 0
    };
  },
  methods: {
    getImgUrl(pic) {
      return require("../assets/" + pic);
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
figure img {
  transition: transform 0.2s; /* Animation */
}
figure img:hover {
  transform: scale(1.5);
}
</style>
