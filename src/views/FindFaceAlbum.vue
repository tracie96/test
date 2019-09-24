<template>
  <div>
    <PHeader />
    <div class="black-header">
      <h3>FindMyFace</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
    <transition name="fade">
      <div class="container-fluid d-div w-bg" v-if="chosenimages.length >= 1">
        <div class="download-section">
          <span
            v-if="chosenimages.length == 1"
            @click="shareImage"
            class="icon-span"
          >
            <i class="fa fa-share-alt"></i>
            Share
          </span>
          <span @click="downloadImage" class="icon-span">
            <i class="fa fa-download"></i>
            Download
          </span>
        </div>
      </div>
    </transition>

    <div class="container ">
      <div class="row" :class="{ 'face-div': chosenimages.length == 0 }">
        <div class="checkbox">
          <label>
            <input
              @click="checkAll()"
              v-model="isCheckAll"
              type="checkbox"
              value=""
            />
            <span class="cr"><i class="cr-icon"></i></span>
            Select All
          </label>
        </div>
        <section id="gal-sec">
          <div
            :href="img.url"
            class="di"
            v-for="(img, index) in imageList"
            :key="index"
            :data-index="index"
            :style="{
              flexGrow: (img.width * 200) / img.height,
              width: (img.width * 200) / img.height + 'px'
            }"
          >
            <i
              :style="{ paddingBottom: (img.height / img.width) * 100 + '%' }"
            ></i>
            <div class="checkbox change-checkbox-position">
              <label>
                <input
                  v-bind:value="img"
                  v-model="chosenimages"
                  @change="updateCheckall()"
                  type="checkbox"
                  value=""
                />
                <span class="cr"><i class="cr-icon"></i></span>
              </label>
            </div>
            <img class="gal" :src="img.url" alt="" />
          </div>
        </section>
      </div>
    </div>
    <div class="text-center">
      <button class="btn btn-p  btn-peexoo-outline">LOAD MORE</button>
    </div>
    <Footer />
    <Menu />
  </div>
</template>

<script>
import PHeader from "../components/PHeader";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
export default {
  name: "findface-album",
  components: {
    PHeader,
    Footer,
    Menu
  },
  data: function() {
    return {
      isCheckAll: false,
      chosenimages: [],
      imageList: [
        {
          id: 1,
          url:
            "https://cdn.pixabay.com/photo/2017/08/03/21/48/drinks-2578446__340.jpg",
          width: 509,
          height: 340
        },
        {
          id: 2,
          url:
            "https://cdn.pixabay.com/photo/2015/09/02/12/39/child-918582__340.jpg",
          width: 226,
          height: 340
        },
        {
          id: 3,
          url:
            "https://cdn.pixabay.com/photo/2015/07/02/10/06/sparklers-828570__340.jpg",
          width: 2000,
          height: 1333
        },
        {
          id: 4,
          url:
            "https://cdn.pixabay.com/photo/2019/03/26/02/51/woman-4081760__340.jpg",
          width: 510,
          height: 340
        },
        {
          id: 5,
          url:
            "https://cdn.pixabay.com/photo/2017/08/03/21/48/drinks-2578446__340.jpg",
          width: 2000,
          height: 1333
        },
        {
          id: 6,
          url:
            "https://cdn.pixabay.com/photo/2019/03/26/02/51/woman-4081760__340.jpg",
          width: 510,
          height: 340
        },
        {
          id: 7,
          url:
            "https://cdn.pixabay.com/photo/2015/09/02/12/39/child-918582__340.jpg",
          width: 226,
          height: 340
        },
        {
          id: 8,
          url:
            "https://cdn.pixabay.com/photo/2015/07/02/10/06/sparklers-828570__340.jpg",
          width: 510,
          height: 340
        },
        {
          id: 9,
          url:
            "https://cdn.pixabay.com/photo/2019/04/08/04/22/glasses-4111357__340.jpg",
          width: 666,
          height: 1000
        },
        {
          id: 10,
          url:
            "https://cdn.pixabay.com/photo/2016/11/21/16/55/adult-1846436__340.jpg",
          width: 775,
          height: 1170
        }
      ]
    };
  },
  mounted() {},
  methods: {
    checkAll: function() {
      this.isCheckAll = !this.isCheckAll;
      this.chosenimages = [];
      if (this.isCheckAll) {
        // Check all
        for (var key in this.imageList) {
          this.chosenimages.push(this.imageList[key]);
        }
      }
    },
    updateCheckall: function() {
      if (this.chosenimages.length == this.imageList.length) {
        this.isCheckAll = true;
      } else {
        this.isCheckAll = false;
      }
    },
    shareImage() {},
    downloadImage() {}
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
    .fade-leave-to

    /* .fade-leave-active below version 2.1.8 */
 {
  opacity: 0;
}

.face-div {
  margin-top: 50px;
}

.icon-span {
  color: #4d4d4d;
}

.icon-span > i {
  display: inline !important;
  color: #4d4d4d;
}

.w-bg {
  background: #fff !important;
}

.d-div {
  height: 80px;
  padding-top: 20px;
}

.checkbox label:after {
  content: "";
  display: table;
  clear: both;
}

.change-checkbox-position {
  position: absolute !important;
  top: 10px !important;
  z-index: 1 !important;
  left: 10px !important;
}

.checkbox .cr {
  position: relative;
  display: inline-block;
  border: 2px solid #ffb503;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin-right: 0.5em;
  bottom: -5px;
}

.checkbox .cr .cr-icon {
  position: absolute;
  font-size: 0.8em;
  line-height: 0;
  top: 50%;
  left: 15%;
}

.checkbox label input[type="checkbox"] {
  display: none;
}

.checkbox label input[type="checkbox"] + .cr {
  opacity: 1;
  background: white;
}

.checkbox label input[type="checkbox"]:checked + .cr {
  opacity: 1;
  background: #ffb603;
  border: 3px solid white;
}

.checkbox label input[type="checkbox"]:disabled + .cr {
  opacity: 0.5;
}

#gal-sec {
  display: flex;
  flex-wrap: wrap;
}

#gal-sec::after {
  content: "";
  flex-grow: 999999999;
  /* min-width: 200px;
        height: 0; */
}

div.di {
  margin: 3px;
  background-color: #fefbf3;
  position: relative;
  cursor: pointer;
}

div.di:last-child {
  flex-grow: 0 !important;
}

i {
  display: block;
}

.di > img {
  position: absolute;
  top: 0;
  width: 100%;
  vertical-align: bottom;
}

.advert {
  padding: 20px;
  margin-top: 20px;
  width: 97%;
  height: 700px;
  background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.5),
      #ffb400 43%,
      #ffb503
    ),
    linear-gradient(to bottom, #ffb503, #ffb503);
}

.advert p {
  font-family: Lora;
  font-size: 28px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  margin-top: 20px;
}

.p-title-category {
  font-family: "Montserrat";
  font-size: 18px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #4d4d4d;
  margin-top: 28px;
}

h4 {
  font-family: "Montserrat" !important;
  font-size: 24px !important;
  font-weight: normal !important;
  color: #4d4d4d !important;
  margin-left: -15px !important;
  margin-bottom: 20px;
}

/* enable absolute positioning */
.inner-addon {
  position: relative;
}

/* style glyph */
.inner-addon .fa {
  position: absolute;
  padding: 10px;
  pointer-events: none;
}

.right-addon .fa {
  right: 0px;
}

.right-addon input {
  padding-right: 30px;
}

.download-section {
  overflow: auto;
}

.download-section > span {
  float: right;
  margin: 0 35px 10px 0;
  /* for demo only */
}

.black-header {
  height: 350px !important;
  /* background-image: url('../assets/images/hero.png') !important; */
}

.btn.btn-peexoo-outline {
  background: #fff !important;
  border: 1px solid #ffb503 !important;
  color: #ffb503 !important;
  border-radius: 5px !important;
}

.black-header p {
  padding: 10px 350px 10px 350px;
  font-weight: normal !important;
}

@media (max-width: 480px) {
  .black-header p {
    padding: 10px;
  }
}
</style>
