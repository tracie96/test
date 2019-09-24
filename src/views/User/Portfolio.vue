<template>
  <div>
    <uploadporfolio
      :show="showUploadPortfolio"
      @close="showUploadPortfolio = false"
      v-on:submit-modal="shownextModal"
    ></uploadporfolio>
    <uploadporfolioimages
      :show="uploadPortfolioModal"
      @close="uploadPortfolioModal = false"
      v-on:go-back="showPreviousModal"
    ></uploadporfolioimages>
    <sidebar></sidebar>
    <topbar></topbar>

    <div v-if="portfolios.length === 0">
      <div class="pagecontent">
        <div class="top-page-content">
          <p>
            Portfolio
          </p>
          <div class="text-center mt-100 mb-100">
            <span class=" peexo-highlight-text fa-3x fas fa-briefcase"></span>
            <p class="pack mt-3">
              Your Portfolio is currently empty
            </p>

            <button
              @click="addPortfolio"
              style="border-radius: 5px !important;color:#fff !important"
              class="mr-4 btn btn-peexoo"
            >
              <i class="fa fa-plus"></i> Add a new image
            </button>
          </div>
        </div>
      </div>
      <div class="div-footer mt-5">
        <Footer />
      </div>
    </div>
    <div v-else>
      <sidebar></sidebar>
      <topbar></topbar>
      <div class="pagecontent">
        <div class="top-page-content">
          <p>
            Portfolio
          </p>
        </div>
        <div class="row">
          <label class="col-sm-12 col-md-9"></label>
          <div class="">
            <button
              @click="addPortfolio"
              style="border-radius: 5px !important;color:#fff !important;padding:0 25px !important"
              class="btn btn-peexoo"
            >
              <i class="fa fa-plus"></i> Upload Images
            </button>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-md-3" v-for="(pot, index) in portfolios" :key="index">
            <portfoliocard
              :id="pot.id"
              :name="pot.name"
              :videos="pot.videos"
              :images="pot.images"
              :src="pot.src"
            />
          </div>
          <div class="col-md-3">
            <div class="row">
              <a @click="addPortfolio" style="width: 100%" class="">
                <div class="card empty-card">
                  <div class="text-center card-empty-text">
                    + Upload Image
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="div-footer mt-5">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
// const base_url = 'http://abf44a84.ngrok.io';
import sidebar from "../../components/Admin-components/Sidebar";
import topbar from "../../components/Admin-components/Topbar";
import Footer from "../../components/Admin-components/footer";
import uploadporfolio from "../../components/Admin-components/UploadPorfolio";
import uploadporfolioimages from "../../components/Admin-components/Upload-images-modal";
import portfoliocard from "../../components/Admin-components/portfolio-card";
import axios from "axios";
export default {
  name: "portfolio",
  components: {
    sidebar,
    topbar,
    Footer,
    uploadporfolio,
    uploadporfolioimages,
    portfoliocard
  },
  data: function() {
    return {
      showUploadPortfolio: false,
      uploadPortfolioModal: false,
      portfolios: [
        {
          id: 1,
          name: "Peexoo Wedding",
          src: "http://peexoo.ai/images/slides/02.jpg",
          videos: 7,
          images: 230
        },
        {
          id: 2,
          name: "Peexoo Wedding",
          src: "http://peexoo.ai/images/slides/02.jpg",
          videos: 7,
          images: 230
        },
        {
          id: 3,
          name: "Landscape Wedding",
          src: "http://peexoo.ai/images/slides/02.jpg",
          videos: 7,
          images: 230
        }
      ]
    };
  },
  mounted: function() {},
  methods: {
    addPortfolio: function() {
      this.showUploadPortfolio = true;
    },
    shownextModal: function() {
      this.showUploadPortfolio = false;
      this.uploadPortfolioModal = true;
    },
    showPreviousModal: function() {
      this.showUploadPortfolio = true;
      this.uploadPortfolioModal = false;
    }
  },
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    },
    currentUser: function() {
      return this.$store.getters.currentUser;
    }
  }
};
</script>

<style scoped>
.mt-100 {
  margin-top: 100px;
}

p.pack {
  font-size: 16px !important;
}

.empty-card {
  height: 245px;
}

.card-empty-text {
  top: 47%;
  position: relative;
}

.mb-100 {
  margin-bottom: 100px;
}

.search-in {
  background: #fffefc !important;
}

.btn-new-peexo {
  border-radius: 5px !important;
}
</style>
