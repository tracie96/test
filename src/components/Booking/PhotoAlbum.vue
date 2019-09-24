<template>
  <div
    class="tab-pane fade"
    id="pills-albums"
    role="tabpanel"
    aria-labelledby="pills-albums-tab"
  >
    <div class="col-md-3 mt-5">
      <div class="box" @click="createAlbum">
        <div class="upload section pt-5">
          <i class="el-icon-upload upload-size pt-5"> </i>
          <div class="el-upload__text pt-0">Create New Album</div>
        </div>
      </div>
    </div>
    <hr />

    <h5 class="pt-3"><span class="text-muted"></span>{{ categorytitle1 }}</h5>
    <div class="row my-5">
      <div class="col-md-3" v-for="court in courts" :key="court.id">
        <div class="card">
          <img :src="court.image" class="card-img-top img-fluid" alt="..." />
          <div class="card-body">
            <p class="card-text">{{ court.title }}</p>
            <p class="card-text pt-2">
              <small class="text-muted">{{ court.imageQuantity }}</small>
            </p>
          </div>
        </div>
      </div>
    </div>

    <h5><span class="text-muted pt-3"></span>{{ categorytitle2 }}</h5>
    <div class="row my-5">
      <div class="col-md-3" v-for="white in whites" :key="white.id">
        <div class="card">
          <img :src="white.image" class="card-img-top img-fluid" alt="..." />
          <div class="card-body">
            <p class="card-text">{{ white.title }}</p>
            <p class="card-text pt-2">
              <small class="text-muted">{{ white.imageQuantity }}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      categorytitle1: "Court Wedding",
      categorytitle2: "White Wedding",
      courts: [
        {
          id: 1,
          image: "/image/img2.jpg",
          title: "Court Wedding Primary Images",
          imageQuantity: "28 images"
        },
        {
          id: 2,
          image: "/image/img2.jpg",
          title: "Court Wedding Edit Videos (1) ",
          imageQuantity: "28 images"
        },
        {
          id: 3,
          image: "/image/img2.jpg",
          title: "Court Wedding Edit Images (1)",
          imageQuantity: "28 images"
        },
        {
          id: 4,
          image: "/image/img2.jpg",
          title: "Court Wedding Primary Images",
          imageQuantity: "28 images"
        }
      ],

      whites: [
        {
          id: 1,
          image: "/image/img2.jpg",
          title: "White Wedding Primary Images",
          imageQuantity: "28 images"
        },
        {
          id: 2,
          image: "/image/img2.jpg",
          title: "White Wedding Videos Edit (1)",
          imageQuantity: "28 images"
        },
        {
          id: 3,
          image: "/image/img2.jpg",
          title: "Court Wedding Primary Images",
          imageQuantity: "28 images"
        },
        {
          id: 4,
          image: "/image/img2.jpg",
          title: "Court Wedding Primary Images",
          imageQuantity: "28 images"
        }
      ]
    };
  },
  methods: {
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

<style scoped>
.badge {
  font-size: 50% !important;
}
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  background-color: transparent !important;
  color: #c9a245 !important;
}
a {
  color: #898989 !important;
}
.box {
  width: 250px !important;
  height: 230px !important;
  background-color: #fff;
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.el-icon-upload:before {
  content: "\E6D9" !important;
}
.text-brown {
  color: #b58000 !important;
}
.btn-yellow {
  background-color: #ffb603;
  color: #fff;
}
.icon-circle {
  width: 50px;
  height: 50px;
  background: #b58000 !important;
  border-radius: 50% !important;
}
</style>
