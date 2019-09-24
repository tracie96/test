<template>
  <div>
    <downloadmodal
      :caption="caption"
      :nextlineCaption="nextlineCaption"
      :cancelbtnText="cancelbtnText"
      :submitbuttonText="submitbuttonText"
      :show="showDownloadModal"
      @close="showDownloadModal = false"
      v-on:submit-modal="download"
    ></downloadmodal>
    <addcollectionmodal
      :caption="collectioncaption"
      :cancelbtnText="collectioncancelbtnText"
      :submitbuttonText="collectionsubmitbuttonText"
      :show="showcollectionModal"
      @close="showcollectionModal = false"
      v-on:submit-modal="handlePayment"
    ></addcollectionmodal>
    <paymentsuccess
      :show="showpaymentsuccessmodal"
      @close="showpaymentsuccessmodal = false"
    ></paymentsuccess>
    <PHeader />
    <div class="black-header">
      <h3>FindMyFace</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
    <div class="row" v-if="albums.length === 0">
      <div class="col-md-6"></div>
      <div class="col-md-6 ">
        <div
          class="selfie-box mr-10 mt-12"
          v-if="!processing && !error"
          @click="openFileInput"
        >
          <div class="text-icon">
            <input
              @change="previewImage"
              style="display:none"
              name="file"
              type="file"
              id="imgInp"
            />
            <p><i class="fa fa-3x fa-camera peexo-highlight-text"></i></p>
            <span class="peexo-body-text">Click here to take a selfie</span>
          </div>
        </div>

        <!-- <div class="image-preview" v-if="imageData.length > 0">
                        <img style="width:100%" :src="imageData" alt="your image" />
                    </div> -->

        <div class="selfie-box mr-10 mt-12" v-if="processing">
          <div class="processing">
            <p>
              <i class="fa fa-3x fa-spinner fa-spin peexo-highlight-text"></i>
            </p>
            <span class="peexo-body-text"
              >Wait while we search our bank of images for your
              pictures...</span
            >
          </div>
        </div>
        <div class="selfie-box mr-10 mt-12" v-if="error">
          <div class="processing">
            <p><i class="fa fa-3x fa-times-circle text-red"></i></p>
            <span class="peexo-body-text"
              >We couldn’t find any image of you in our database</span
            >

            <p @click="tryAgain" class="peexo-faded-text mt-2">
              Try again
            </p>
          </div>
        </div>
        <p class="mt-4 mb-5 mr-10 text-center peexo-body-text">
          Find exclusive pictures of yourself in different events that you
          attended. Each event cost 500 for all images in the event
        </p>
      </div>
    </div>
    <div class="container mt-5 mb-5" v-else>
      <div class="row">
        <div class="col-md-3" v-for="(face, index) in albums" :key="index">
          <mdb-card>
            <mdb-view>
              <div>
                <mdb-card-image
                  class="face-img"
                  :src="face.imgurl"
                  alt="Card image cap"
                ></mdb-card-image>
              </div>
              <div class="p-3">
                <router-link :to="'/albums/findface/' + face.id" class="">
                  <div class="card-text mb-3 h36">{{ face.name }}</div>
                </router-link>
                <div class="clearfix">
                  <div
                    class="float-right peexo-faded-text card-inner-text"
                    :face="face"
                    @click="onDivCick(face)"
                  >
                    {{ !hasPaid ? "ADD TO COLLECTION" : "DOWNLOAD" }}
                  </div>
                  <!-- <div class="float-right peexo-faded-text card-inner-text" :face="face" @click="addToCollection">
                                        {{!hasPaid ? 'ADD TO COLLECTION': 'DOWNLOAD' }}
                                    </div> -->
                  <div class="float-left card-inner-text">
                    {{ face.images }} images
                  </div>
                </div>
              </div>
            </mdb-view>
          </mdb-card>
        </div>
      </div>
    </div>
    <Footer />
    <Menu />
  </div>
</template>

<script>
import store from "../store";
import downloadmodal from "../components/downloadmodal";
import addcollectionmodal from "../components/addcollectionmodal";
import paymentsuccess from "../components/findface-paymentsuccess";
import PHeader from "../components/PHeader";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import {
  mdbCard,
  mdbCardImage,
  mdbCardBody,
  mdbCardTitle,
  mdbCardText,
  mdbView
} from "mdbvue";

export default {
  name: "find-my-face",
  props: ["face"],
  components: {
    downloadmodal,
    addcollectionmodal,
    paymentsuccess,
    PHeader,
    Footer,
    Menu,
    mdbCard,
    mdbCardImage,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbView
  },
  data: function() {
    return {
      hasPaid: false,
      caption: "You are about to download",
      nextlineCaption: "$AlbumName",
      cancelbtnText: "Go Back",
      submitbuttonText: "Download",
      collectioncaption: "Pay N500 to add event to your collection",
      collectioncancelbtnText: "GO BACK",
      collectionsubmitbuttonText: "MAKE PAYMENT",
      showDownloadModal: false,
      showcollectionModal: false,
      showpaymentsuccessmodal: false,
      processing: false,
      error: false,
      imageData: "",
      albums: [
        {
          id: 1,
          name: "lorem ipsum ",
          imgurl: "http://peexoo.ai/images/slides/05.jpg",
          images: 3
        },
        {
          id: 2,
          name: "lorem hjhjhdgfajhsgdfja hagsjdhfgajsgdfj ",
          imgurl: "http://peexoo.ai/images/slides/02.jpg",
          images: 30
        },
        {
          id: 3,
          name: "lorem hjhjhdgfajhsgdfja hagsjdhfgajsgdfj ",
          imgurl: "http://peexoo.ai/images/slides/03.jpg",
          images: 25
        },
        {
          id: 4,
          name: "lorem hjhjhdgfajhsgdfja hagsjdhfgajsgdfj ",
          imgurl: "http://peexoo.ai/images/slides/04.jpg",
          images: 3
        }
      ]
    };
  },
  methods: {
    onDivCick(face) {
      if (this.hasPaid) {
        this.handleDownload(face);
      } else {
        this.addToCollection();
      }
    },
    openFileInput() {
      $("#imgInp").click();
    },
    handleDownload(face) {
      this.nextlineCaption = face.name;
      this.showDownloadModal = true;
    },
    addToCollection() {
      this.showcollectionModal = true;
    },
    download() {
      console.log("downloaded");
    },
    handlePayment() {
      this.showcollectionModal = false;
      this.hasPaid = true;
      this.showpaymentsuccessmodal = true;
    },
    tryAgain() {
      this.error = false;
      this.processing = false;
    },
    previewImage: function(event) {
      // Reference to the DOM input element
      var input = event.target;
      // Ensure that you have a file before attempting to read it
      if (input.files && input.files[0]) {
        // create a new FileReader to read this image and convert to base64 format
        var reader = new FileReader();
        // Define a callback function to run, when FileReader finishes its job
        reader.onload = e => {
          // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
          // Read image as base64 and set to imageData
          this.imageData = e.target.result;
        };
        // Start the reader job - read file as a data url (base64 format)
        reader.readAsDataURL(input.files[0]);
        this.processing = true;
      }
    }
  }
};
</script>

<style scoped>
.h36 {
  height: 36px;
}
.mt-12 {
  margin-top: 120px;
}
.col-md-3 {
  padding-right: 0 !important;
  padding-left: 0 !important;
}
.text-red {
  color: red;
}
.card-text {
  font-size: 14px !important;
}

.card-inner-text {
  font-size: 10px;
  color: #4d4d4d;
}
.card {
  height: 262px !important;
}
.mr-10 {
  margin-right: 100px;
}

.selfie-box {
  background: #ffffff;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 400px;
  text-align: center;
}

.selfie-box > .text-icon {
  top: 40%;
  left: 29%;
  position: absolute;
}

.selfie-box > .processing {
  top: 40%;
  position: relative;
  padding: 0 25px;
}

.black-header {
  height: 350px !important;
  /* background-image: url('../assets/images/hero.png') !important; */
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
