<template>
  <div>
    <div class="banner-header desktop">
      <!--<img src="../assets/images/hero.png" alt="" height="300px" style="width:100%">-->

      <div class="row justify-content-center">
        <div class="banner-text col-12">
          {{ name }} <img src="../assets/images/google-verified.svg" alt="" />
        </div>
      </div>
    </div>

    <div class="banner-header mobile-only">
      <div class="row justify-content-center">
        <div class="banner-text col-12">
          <span class="float-left pl-4"
            ><a
              ><i
                class="fa fa-arrow-left"
                style="color: white"
                aria-hidden="true"
              ></i></a></span
          >{{ name }} <img src="../assets/images/google-verified.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "banner",
  props: ["name"]
};
</script>
<style scoped>
.banner-header {
  background-image: url("../assets/images/hero.png") !important;
  background-color: black;
  width: 100% !important;
  height: 320px !important;
  background-size: cover;
  position: relative;
  opacity: 1;
  z-index: 0;
}

.banner-text {
  font-family: Lora;
  color: #ffffff;
  font-size: 64px;
  font-weight: 700;
  line-height: 77px;
  position: absolute;
  /*top: 10px;*/
  margin-top: 160px;
  /*margin-left: 700px;*/
  text-align: center;
  /*z-index: 9;*/
  z-index: -2;
}

.mobile-only {
  display: none;
}

@media (max-width: 480px) {
  .mobile-only {
    display: flex;
    width: 100%;
  }
  .banner-header {
    height: 150px !important;
  }

  .banner-text {
    margin-top: 50px;
    font-size: 40px;
    margin-left: 190px;
    text-align: center;
    z-index: -2;
  }
}
</style>
