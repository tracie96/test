<template>
  <div>
    <Header />
    <Banner :name="this.photographerData.name" />
    <section class="xs-section-padding mb-4">
      <div class="container">
        <div
          class=" float-left"
          style="margin-top: -50px; margin-left: -90px; font-size: 16px; font-weight: bold; color: #B7840A"
        >
          <router-link
            class="back"
            to="/photographer"
            style="color: rgb(183, 132, 10) !important;"
          >
            << Go Back
          </router-link>
        </div>
        <div class="row ">
          <div class="row desktop">
            <div
              class="col-3"
              style="padding-right: 0 !important; padding-left: 0 !important;"
              v-for="(img, key) in imgs"
              :key="key"
            >
              <GPortfolio :imgs="img.url"></GPortfolio>
            </div>
          </div>
        </div>
        <!-- .row end -->
      </div>
      <!-- .container END -->
    </section>
    <!-- end business info section -->
    <Footer />
    <Menu />
  </div>
</template>
<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import CommunityHeader from "../components/community-header";
import Banner from "../components/Banner";
import { mdbInput } from "mdbvue";
import GPortfolio from "../components/Gallery-portfolio";

export default {
  name: "photographer-portfolio",
  components: {
    Banner,
    Header,
    Footer,
    Menu,
    CommunityHeader,
    mdbInput,
    GPortfolio
  },
  methods: {
    goBack() {}
  },
  data: function() {
    return {
      photographerData: { name: "Afroshots" },
      imgs: [
        {
          title: "Beauty",
          url: "images/top-one.png"
        },
        {
          title: "Beauty",
          url: "images/top-two.png"
        },
        {
          title: "Beauty",
          url: "images/third-top.png"
        },
        {
          title: "Art",
          url: "images/top-fourth.png"
        },
        {
          title: "Fashion",
          url: "images/bottom-one.png"
        },
        {
          title: "Fashion",
          url: "images/bottom-two.png"
        },
        {
          title: "Fashion",
          url: "images/bottom-third.png"
        },
        {
          title: "Fashion",
          url: "images/bottom-fourth.png"
        }
      ]
    };
  }
};
</script>
<style scoped>
.card {
  cursor: pointer;
}

@media screen and (max-width: 480px) {
  .xs-section-padding {
    padding-top: 50px !important;
  }

  .desktop-only {
    display: none;
  }

  .mb-15 {
    margin-bottom: 30px !important;
  }
}
</style>
