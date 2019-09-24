<template>
  <div>
    <PHeader />
    <div class="black-header">
      <h3>Join the Community</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
    <div class="mt-5 mb-5">
      <p class="text-center con-text">
        Congratulations! You are now part of the biggest photography community
        in Africa.
      </p>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-8 offset-md-2 col-12">
          <div class="row mb-5 mobi-row">
            <div class="col-md-4 col-4">
              <img src="../assets/images/1-st-rectangle.png" alt="" />
            </div>
            <div class="col-md-4 col-4">
              <img src="../assets/images/2-nd-rectangle.png" alt="" />
            </div>
            <div class="col-md-4 col-4">
              <img src="../assets/images/3-rd-rectangle.png" alt="" />
            </div>
          </div>
          <router-link to="/photos/explore">
            <p class="text-center peexo-faded-text explore">Explore photos</p>
          </router-link>
        </div>
      </div>
    </div>

    <Footer />
    <Menu />
  </div>
</template>
<script>
import PHeader from "../components/PHeader";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import CommunityHeader from "../components/community-header";

export default {
  name: "join-community",
  components: {
    PHeader,
    Footer,
    Menu,
    CommunityHeader
  }
};
</script>
<style scoped>
.black-header {
  height: 310px !important;
  /* background-image: url('../assets/images/hero.png') !important; */
}

.black-header p {
  padding: 10px 350px 0 350px;
  font-weight: normal !important;
}
.btn.btn-peexoo {
  padding: 0 36px !important;
}
p {
  margin-bottom: 3px !important;
}
.con-text {
  font-family: "Montserrat" !important;
  font-size: 1.5rem;
  font-weight: 400 !important;
  line-height: 1.63;
  color: #4d4d4d !important;
  padding: 0 350px 0 350px;
}
.explore {
  font-family: "Montserrat";
  font-size: 1rem;
  font-weight: 500;
  line-height: 2.44;
  padding-bottom: 50px;
}
@media (max-width: 480px) {
  .black-header {
    height: 240px !important;
    padding-top: 44px !important;
    /* background-image: url('../assets/images/hero.png') !important; */
  }
  .black-header p {
    padding: 10px;
  }
  .con-text {
    padding: 0 20px 0 20px !important;
  }
  .col-4 {
    padding-right: 5px !important;
    padding-left: 5px !important;
  }
  .mobi-row {
    margin: 0 5px 50px 5px !important;
  }
}
</style>
