<template>
  <div v-if="albums.length === 0">
    <sidebar></sidebar>
    <topbar></topbar>
    <div class="pagecontent">
      <div class="top-page-content">
        <p>
          Albums
        </p>
        <div class="text-center mt-100 mb-100">
          <span class="fa peexo-highlight-text fa-3x fa-camera-retro"></span>
          <p class="book mt-3">
            You currently do not have any album.
          </p>
          <router-link to="/albums/create" class="">
            <button
              style="border-radius: 5px !important;color:#fff !important"
              class="mr-4 btn btn-peexoo"
            >
              <i class="fa fa-plus"></i> Create Album
            </button>
          </router-link>

          <button
            style="border-radius: 5px !important;color:#fff !important"
            class="btn btn-peexoo"
          >
            <i class="fa fa-upload"></i> Upload Images
          </button>
        </div>
      </div>
    </div>
    <div class="div-footer">
      <Footer />
    </div>
  </div>
  <div v-else>
    <uploadmodal
      :caption="caption"
      :nextlineCaption="nextlineCaption"
      :cancelbtnText="cancelbtnText"
      :submitbuttonText="submitbuttonText"
      :show="showUploadImageModal"
      :icon="icon"
      @close="showUploadImageModal = false"
      v-on:submit-modal="uploadImages"
    >
    </uploadmodal>
    <sidebar></sidebar>
    <topbar></topbar>
    <div class="pagecontent">
      <div class="top-page-content">
        <p>
          Albums
        </p>
        <div class="row">
          <div class="col-sm-12 col-md-2">
            <select class="custom-select custom-select-lg mb-3">
              <option selected>Sort by</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div class="mr-3 col-sm-12 col-md-5 serach-f">
            <div class="input-group">
              <input
                class="form-control form-control-lg search-in py-2 border-right-0 border"
                type="search"
                value="search"
                id="example-search-input"
              />
              <span class="input-group-append">
                <div class="input-group-text search-in">
                  <i class="fa fa-search"></i>
                </div>
              </span>
            </div>
          </div>
          <div class="">
            <router-link to="/albums/create" class="">
              <button
                style="border-radius: 5px !important;color:#fff !important;margin-right:10px !important"
                class=" btn btn-peexoo"
              >
                <i class="fa fa-plus"></i> Create Album
              </button>
            </router-link>
            <button
              @click="showuploadImages"
              style="border-radius: 5px !important;color:#fff !important"
              class="btn btn-peexoo"
            >
              <i class="fa fa-upload"></i> Upload Images
            </button>
          </div>
        </div>
        <nav>
          <div class="nav nav-tabs mb-3" id="nav-tab" role="tablist">
            <a
              class="nav-item nav-link active"
              id="nav-albums-tab"
              data-toggle="tab"
              href="#nav-albums"
              role="tab"
              aria-controls="nav-albums"
              aria-selected="true"
              >My Albums</a
            >
            <a
              class="nav-item nav-link"
              id="nav-shared-tab"
              data-toggle="tab"
              href="#nav-shared"
              role="tab"
              aria-controls="nav-shared"
              aria-selected="false"
              >Shared Albums
            </a>
          </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
          <div
            class="tab-pane fade show active"
            id="nav-albums"
            role="tabpanel"
            aria-labelledby="nav-albums-tab"
          >
            <div class="row">
              <div
                class="col-md-3"
                v-for="(album, index) in albums"
                :key="index"
              >
                <albumcard
                  :id="album.id"
                  :name="album.name"
                  :videos="album.videos"
                  :images="album.images"
                  :src="album.imgurl"
                />
              </div>
              <div class="col-md-3">
                <div class="row">
                  <router-link style="width: 100%" to="/albums/create" class="">
                    <div class="card empty-card">
                      <div class="text-center card-empty-text">
                        + Create Album
                      </div>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="nav-shared"
            role="tabpanel"
            aria-labelledby="nav-shared-tab"
          >
            <div class="row">
              <div
                class="col-md-3"
                v-for="(album, index) in albums"
                :key="index"
              >
                <albumcard
                  :id="album.id"
                  :name="album.name"
                  :videos="album.videos"
                  :images="album.images"
                  :src="album.imgurl"
                />
              </div>
              <div class="col-md-3">
                <div class="row">
                  <router-link style="width: 100%" to="/albums/create" class="">
                    <div class="card empty-card">
                      <div class="text-center card-empty-text">
                        + Create Album
                      </div>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="div-footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import sidebar from "../../components/Admin-components/Sidebar";
import topbar from "../../components/Admin-components/Topbar";
import Footer from "../../components/Admin-components/footer";
import albumcard from "../../components/Admin-components/album-card";
import uploadmodal from "../../components/genericmodal";

export default {
  name: "bookings",
  components: {
    sidebar,
    topbar,
    Footer,
    albumcard,
    uploadmodal
  },
  data: function() {
    return {
      active: false,
      caption: "You are about to upload images",
      nextlineCaption: "into a new album",
      cancelbtnText: "Go Back",
      submitbuttonText: "Uplaod Images",
      icon: "upload",
      showUploadImageModal: false,
      albums: [
        {
          id: 1,
          name: "lorem hjhjhdgfajhsgdfja hagsjdhfgajsgdfj ",
          imgurl: "http://peexoo.ai/images/slides/05.jpg",
          images: 3,
          videos: 1
        },
        {
          id: 2,
          name: "lorem hjhjhdgfajhsgdfja hagsjdhfgajsgdfj ",
          imgurl: "http://peexoo.ai/images/slides/02.jpg",
          images: 30,
          videos: 1
        },
        {
          id: 3,
          name: "lorem hjhjhdgfajhsgdfja hagsjdhfgajsgdfj ",
          imgurl: "http://peexoo.ai/images/slides/03.jpg",
          images: 25,
          videos: 1
        },
        {
          id: 4,
          name: "lorem hjhjhdgfajhsgdfja hagsjdhfgajsgdfj ",
          imgurl: "http://peexoo.ai/images/slides/04.jpg",
          images: 3,
          videos: 1
        },
        {
          id: 5,
          name: "lorem hjhjhdgfajhsgdfja hagsjdhfgajsgdfj ",
          imgurl: "http://peexoo.ai/images/slides/04.jpg",
          images: 19,
          videos: 1
        },
        {
          id: 6,
          name: "lorem hjhjhdgfajhsgdfja hagsjdhfgajsgdfj ",
          imgurl: "http://peexoo.ai/images/slides/04.jpg",
          images: 23,
          videos: 1
        },
        {
          id: 7,
          name: "lorem hjhjhdgfajhsgdfja hagsjdhfgajsgdfj ",
          imgurl: "http://peexoo.ai/images/slides/04.jpg",
          images: 13,
          videos: 1
        }
      ]
    };
  },
  methods: {
    mouseover: function(index) {
      this.active = !this.active;
    },
    mouseleave: function(index) {
      this.active = !this.active;
    },
    showuploadImages() {
      this.showUploadImageModal = true;
    },
    uploadImages() {
      console.log("nice cofig");
    }
  }
};
</script>
<style scoped>
.mt-100 {
  margin-top: 100px;
}

.empty-card {
  height: 260px;
}

.card-empty-text {
  top: 47%;
  position: relative;
}

.mb-100 {
  margin-bottom: 100px;
}

div.pagecontent {
  margin-left: 22%;
  padding: 1px 25px;
  z-index: 0 !important;
  position: relative;
}

.div-footer {
  margin-left: 22%;
}

.fa-green {
  color: green;
}

.top-page-content {
  margin-top: 150px;
}

.top-page-content p {
  font-family: Lora !important;
  font-size: 24px;
  font-weight: bold;
  color: #4d4d4d !important;
}

.top-page-content h6 {
  font-family: "Montserrat" !important;
  font-size: 16px;
  color: #4d4d4d;
  font-weight: 400 !important;
}

.book {
  font-family: "Montserrat" !important;
  font-size: 16px;
  font-weight: 400 !important;
  color: #4d4d4d;
}

.search-in {
  background: #fffefc !important;
}

.btn-new-peexo {
  border-radius: 5px !important;
}

.cd {
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 1px 2px 0 rgba(226, 226, 226, 0.5);
}

#nav-tab {
  border-bottom: 1px solid #d4d4d4;
}

.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
  color: #495057;
  background-color: transparent !important;
  border-color: #ffb600 !important;
  border-left: transparent !important;
  border-right: transparent !important;
  border-top: transparent !important;
  border-bottom: 3px solid #ffb600;
}

.nav-tabs .nav-link:focus,
.nav-tabs {
  border-left: transparent !important;
  border-right: transparent !important;
  border-top: transparent !important;
}

.nav-link:hover {
  border-color: transparent !important;
  border-left: transparent !important;
  border-right: transparent !important;
  border-top: transparent !important;
}

.btn.btn-peexoo {
  padding: 0 16px !important;
}
</style>
