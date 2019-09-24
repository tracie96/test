<template>
  <div>
    <sidebar></sidebar>
    <topbar></topbar>
    <div class="pagecontent">
      <div class="top-page-content">
        <div class="row ml-1">
          <div>
            <router-link to="/albums" class="">
              <div class="goback">
                <i class="fa fa-arrow-circle-left"></i> Go Back
              </div>
            </router-link>
          </div>
        </div>
        <div class="row mt-4 ml-1 mb-100">
          <p>
            Create Album
          </p>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control form-control-lg"
              placeholder="Enter Album name"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <div class="input-group-append">
              <span class="input-group-text" id="basic-addon2"
                >+ Create Album</span
              >
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
export default {
  name: "create-album",
  components: {
    sidebar,
    topbar,
    Footer
  }
};
</script>
<style scoped>
.goback {
  color: #b58000 !important;
}
.input-group-text {
  background-color: #ffb503 !important;
  border: 1px solid #ffb503 !important;
}
.mb-100 {
  margin-bottom: 100px;
}
</style>
