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

          <div class="row py-3">
            <div class="col-md-8 col-8 col-sm-8 col-lg-8">
              <h4><span class="test text-muted"></span>{{ subtitle }}</h4>
            </div>
            <div class="col-md-4 col-4 col-sm-4 col-lg-4">
              <p class="float-right">
                Customer: {{ customer }}
                <span><i class="fas fa-envelope 2x"></i></span>
              </p>
            </div>
          </div>
          <hr class="pt-0 mt-0" />

          <div class="box" @click="createAlbum">
            <div class="upload section pt-5">
              <i class="el-icon-upload upload-size pt-5"> </i>
              <div class="el-upload__text pt-0">Create New Album</div>
            </div>
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
      subtitle: "Court Wedding (Images) Edit 1",
      customer: "Michael Steven"
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
