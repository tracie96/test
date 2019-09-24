<template>
  <div>
    <sidebar></sidebar>
    <topbar></topbar>
    <div class="pagecontent">
      <div class="mt-5 pt-2">
        <div class="container">
          <div class="row mt-5">
            <div class="col-md-4 col-4 col-sm-4 col-lg-4">
              <router-link to="/add/Booking" class="text-brown"
                ><span class="rounded icon-circle px-2 py-1"
                  ><i class="fas fa-arrow-left text-white"></i
                ></span>
                Go back</router-link
              >
            </div>
            <div class="col-md-8 col-8 col-sm-8 col-lg-8">
              <p class="text-muted float-right small">
                Wedding Photography for my son (Oghenetaga and Juliana) > Court
                Wedding > Court Wedding images
              </p>
            </div>
          </div>

          <div class="row pt-5">
            <div class="col-md-8 col-8 col-sm-8 col-lg-8">
              <h4><span class="test text-muted"></span>{{ title }}</h4>
            </div>
            <div class="col-md-4 col-4 col-sm-4 col-lg-4">
              <p class="float-right">
                Customer: {{ customer }}
                <span><i class="fas fa-envelope 2x"></i></span>
              </p>
            </div>
          </div>
          <hr class="pt-0 mt-0" />

          <div class="row">
            <div class="col-md-6 col-6 col-sm-6 col-lg-6 ">
              <small class="text-brown pt-0 mt-0">
                <em>{{ comment }} comment</em></small
              >
            </div>
            <div class="col-md-6 col-12 col-sm-12 col-lg-6">
              <div class="float-right">
                <div class="form-check form-check-inline text-brown">
                  <router-link to="/add/Booking" class="text-brown"
                    ><i class="fas fa-upload"></i><em>Upload</em></router-link
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="row py-3">
            <div class="col-md-4" v-for="image in allImages" :key="image.id">
              <img :src="image.image" class="img-fluid" />
            </div>
            <div class="col-md-4">
              <div class="box" @click="createAlbum">
                <div class="upload section pt-5">
                  <i class="el-icon-upload upload-size pt-5"> </i>
                  <div class="el-upload__text pt-0">Create Shoot</div>
                </div>
              </div>
            </div>
          </div>

          <a
            class="nav-link btn-primary"
            href="#"
            tabindex=""
            @click="moveImage"
            >Move Image</a
          >
          <a
            class="nav-link btn-secondary-outline"
            href="#"
            tabindex="-1"
            @click="deleteImage"
            >Delete</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import BookNavbar from './BookNavbar'
export default {
  name: "MainBook",

  components: {
    // BookNavbar
  },
  data() {
    return {
      title: "Court Wedding (Images) Edit 1",
      customer: "Steven Miracle",
      comment: 0,
      allImages: [
        {
          id: 1,
          image: "/image/img1.jpg"
        },
        { id: 2, image: "/image/img2.jpg" },
        { id: 3, image: "/image/img3.jpg" }
      ],
      imageUrl: ""
    };
  },
  methods: {
    moveImage() {
      this.$swal({
        title: "Move image",
        text: "Move image",
        input: "select",
        inputOptions: {
          option1: "court wedding",
          option2: "birthday"
        },
        inputPlaceholder: "Select album to move photo to",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "Cancel",
        confirmButtonText: "Move image!"
      }).then(result => {
        if (result.value) {
          this.$swal("", "Image moved successfully", "success");
        }
      });
    },
    createAlbum() {
      this.$swal({
        title: "Create Album",
        text: "",
        input: "select",
        inputOptions: {
          option1: "court wedding",
          option2: "birthday"
        },
        inputPlaceholder: "Select an event to create a new album",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "Cancel",
        confirmButtonText: "Create Album"
      }).then(result => {
        if (result.value) {
          this.$swal("", "Album created successfully", "success");
        }
      });
    }
  }
};
</script>

<style>
.test:after {
  content: "\2807";
  font-size: 20px;
}

.text-brown {
  color: #ceaa54;
}
.tab-container input {
  display: true;
}
.tab-container label {
  display: block;
  float: left;
  padding: 5px 10px;
  cursor: pointer;
}
.tab-container input:checked + label {
  background: black;
  color: white;
  cursor: default;
}
.tab-container .tab {
  display: none;
  padding: 5px 10px;
  clear: left;
}
.tab-container input:nth-of-type(1):checked ~ .tab:nth-of-type(1),
.tab-container input:nth-of-type(2):checked ~ .tab:nth-of-type(2),
.tab-container input:nth-of-type(3):checked ~ .tab:nth-of-type(3) {
  display: block;
}
.el-upload-dragger {
  width: 250px !important;
  height: 230px !important;
}
.el-icon-upload:before {
  content: "\E6D9" !important;
}
.upload-size {
  font-size: 14px !important;
}
</style>
