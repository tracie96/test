<template>
  <div>
    <uploadmodal
      :show="showuploadModal"
      @close="showuploadModal = false"
    ></uploadmodal>
    <verifybvn
      :show="showverifybvn"
      @close="showverifybvn = false"
      v-on:submit-modal="verifyBvn"
    ></verifybvn>
    <bvnsuccess
      :successMessage="successMessage"
      :closebtnText="closebtnText"
      :show="showBvnSuccessVerification"
      @close="showBvnSuccessVerification = false"
    ></bvnsuccess>
    <sidebar></sidebar>
    <topbar></topbar>
    <div class="pagecontent">
      <div class="top-page-content">
        <p>
          Profile Update
        </p>
        <div class="d-flex flex-row-reverse">
          <div>
            <h6 class="">
              ID Approval pending
              <span
                class="mr-2 btn-circle bg-black cursor-pointer text-white h-25 w-20px red-tooltip"
                data-toggle="tooltip"
                data-placement="right"
                title="BVN is required to have a complete profile"
              >
                ?</span
              >
              <button
                type="button"
                class="btn bg-black text-white ml-4 px-5"
                style="background: #4D4D4D!important;border-radius:5px;margin-right:15px !important"
              >
                Upload ID
              </button>
              <button
                type="button"
                class="btn bg-primary-yellow text-white ml-4 px-5"
                style="border-radius:5px"
              >
                Upload BVN
              </button>
            </h6>
          </div>
        </div>
        <div
          class="alert alert-light shadow-sm alert-dismissible fade show p-3"
          role="alert"
        >
          Your profile isn't updated,
          <span class="primary-yellow">
            <a
              href="#exampleModal"
              class="peexo-faded-text"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              update now
            </a>
          </span>
          <button
            type="button"
            class="close p-3"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <div
          class="alert alert-light shadow-sm alert-dismissible fade show p-3"
          role="alert"
        >
          Your haven't uploaded any government ID card
          <span class="primary-yellow">
            <a @click="openUpload" class="peexo-faded-text">
              upload now
            </a>
          </span>
          <button
            type="button"
            class="close p-3"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div
          class="alert alert-light shadow-sm alert-dismissible fade show p-3"
          role="alert"
        >
          Your haven't verified your BVN,
          <span class="primary-yellow">
            <a class="peexo-faded-text" @click="openVerifyBvn">
              verify now
            </a>
          </span>
          <button
            type="button"
            class="close p-3"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <h6 v-if="isUpdated">
          <i class="fa-green fa fa-check-circle mr-2"></i> Profile updated
          successfully..
        </h6>
        <p class="mt-4">
          Images
        </p>
        <div class="row mt-4">
          <div class="col-md-2">
            <form
              id="form1"
              class="dropzone dropzone-area"
              @mouseover="active = !active"
              @mouseout="active = !active"
            >
              <div class="fallback">
                <input
                  @change="previewImage"
                  style="display:none"
                  name="file"
                  type="file"
                  id="imgInp"
                />
              </div>
              <div
                class="image-preview"
                v-if="updated.profile_image.length > 0"
              >
                <img
                  style="width:100%"
                  :src="updated.profile_image"
                  alt="your image"
                />
              </div>
              <div v-show="active" id="blah" class="text-center">
                <i class="fa fa-camera"></i> Update Photo
              </div>
            </form>
          </div>
          <div class="col-md-5">
            <div class="img-wrap">
              <img :src="updated.cover_image" alt="" srcset="" />
              <i class="far fa-clone"></i>
            </div>

            <div class="img-label">
              Profile cover image
            </div>
          </div>
          <div class="col-md-5">
            <div class="img-wrap">
              <img :src="updated.page_slider_image" alt="" srcset="" />
              <i class="far fa-clone"></i>
            </div>

            <div class="img-label">
              Home page slider image
              <span
                class="btn-circle bg-black cursor-pointer text-white h-25 w-20px red-tooltip"
                data-toggle="tooltip"
                data-placement="right"
                title="BVN is required to have a complete profile"
                style="width: 1.5rem !important"
              >
                ?</span
              >
            </div>
          </div>
        </div>
        <p class="mt-5">
          Personal Data
        </p>
      </div>

      <div class="row mb-3 mt-5">
        <div class="col-md-6">
          <input
            class="form-control form-control-lg"
            v-model="updated.first_name"
            type="text"
            placeholder="Firstname"
          />
        </div>
        <div class="col-md-6">
          <input
            class="form-control form-control-lg"
            v-model="updated.last_name"
            type="text"
            placeholder="Lastname"
          />
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-6">
          <input
            class="form-control form-control-lg"
            v-model="updated.email"
            type="text"
            placeholder="Email"
          />
        </div>
        <div class="col-md-6">
          <input
            class="form-control form-control-lg"
            v-model="updated.tel_number"
            type="text"
            placeholder="Enter your phone number"
          />
        </div>
      </div>
      <div class="row mb-5">
        <div class="col-md-6">
          <input
            class="form-control form-control-lg"
            type="text"
            placeholder="Enter job title"
          />
        </div>
        <div class="col-md-6">
          <select
            class="form-control form-control-lg browser-default custom-select"
          >
            <option selected>Select Photographer type</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      <div class="text-center">
        <button
          @click="updateProfile"
          style="border-radius:5px !important"
          class="btn btn-peexoo text-white"
        >
          UPDATE PROFILE
        </button>
      </div>
    </div>
    <div class="div-footer mt-5">
      <Footer />
    </div>
  </div>
</template>
<script>
const base_url = "http://abf44a84.ngrok.io";
import sidebar from "../../components/Admin-components/Sidebar";
import topbar from "../../components/Admin-components/Topbar";
import Footer from "../../components/Admin-components/footer";
import uploadmodal from "../../components/Admin-components/upload-ID";
import verifybvn from "../../components/Admin-components/verify-bvn";
import bvnsuccess from "../../components/Admin-components/generic-successful-modal";
import axios from "axios";

export default {
  name: "Profile",
  components: {
    sidebar,
    topbar,
    Footer,
    uploadmodal,
    verifybvn,
    bvnsuccess
  },
  data: function() {
    return {
      showuploadModal: false,
      showverifybvn: false,
      showBvnSuccessVerification: false,
      isBvnVerified: false,
      closebtnText: "Done",
      successMessage: "Congratulations your BVN has been verified",
      updated: {
        first_name: this.$store.getters.currentUser.first_name,
        last_name: this.$store.getters.currentUser.last_name,
        email: this.$store.getters.currentUser.email,
        tel_number: "",
        profile_image:
          "https://higherlogicdownload.s3.amazonaws.com/AHIMA/MessageImages/87727fb0ad0546b58b5350d1b1f8a2a7.png",
        cover_image: "https://pexoor.firebaseapp.com/img/hero.40c75ddb.png",
        page_slider_image:
          "https://pexoor.firebaseapp.com/img/hero.40c75ddb.png"
      },
      active: false,
      isUpdated: false
    };
  },
  mounted: function() {
    $("#blah").click(function() {
      $("#imgInp").click();
    });
  },
  updated() {
    setTimeout(() => (this.isUpdated = false), 5000);
  },
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    },
    currentUser: function() {
      return this.$store.getters.currentUser;
    }
  },
  methods: {
    verifyBvn: function() {
      console.log("BVN verified");
      this.showverifybvn = false;
      this.showBvnSuccessVerification = true;
    },
    openUpload: function() {
      this.showuploadModal = true;
    },
    openVerifyBvn: function() {
      this.showverifybvn = true;
    },
    mouseOver: function() {
      this.active = !this.active;
    },
    updateProfile() {
      let token = this.$store.getters.user_token;
      axios({
        url: `${base_url}/api/user/update`,
        headers: { Authorization: `Bearer ${token}` },
        data: this.updated,
        method: "PATCH"
      }).then(resp => {
        console.log(resp);
        this.isUpdated = true;
      });
    },
    previewImage: function(event) {
      var input = event.target;
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = e => {
          this.updated.profile_image = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    }
  }
};
</script>

<style scoped>
.img-wrap > .far {
  top: 14px;
  position: absolute;
  right: 28px;
  color: #fff;
}
.bg-black {
  background: #4d4d4d !important;
}
.img-label {
  background-color: #ffffff;
  border-radius: 2px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12);
  padding: 10px;
  text-align: center;
}
.img-label:hover {
  box-shadow: 0 4px 15px 2px rgba(0, 0, 0, 0.12) !important;
}
.shadow-sm {
  -webkit-box-shadow: 0 0.125rem 0.25rem 0 rgba(58, 59, 69, 0.2) !important;
  box-shadow: 0 0.125rem 0.25rem 0 rgba(58, 59, 69, 0.2) !important;
}

/* Page content. The value of the margin-left property should match the value of the sidebar's width property */
div.pagecontent {
  margin-left: 22%;
  padding: 1px 25px;
  z-index: 0 !important;
  position: relative;
}

.fa-green {
  color: green;
}

.dropzone {
  min-height: 150px;
  border: 0.5px solid #cfd4da4d !important;
  padding: 0;
}

.btn {
  height: 47px !important;
  margin: 0 !important;
}

#blah {
  position: relative;
  padding: 8px 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  cursor: pointer;
  /* width: 100%; */
  /* margin-top: 122px; */
}

img.preview {
  width: 200px;
  background-color: white;
  border: 1px solid #ddd;
  padding: 5px;
}
</style>
