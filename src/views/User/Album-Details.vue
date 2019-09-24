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
        <div class="row mt-4 ml-1 mb-2">
          <p>
            Efemena and Christopher Wedding
          </p>
        </div>
        <div class="row mb-100">
          <div class="col-md-12">
            <section id="gal-sec">
              <div data-fancybox="gallery" class="di">
                <div class="row" id="uploads"></div>
                <!-- <i :style="{paddingBottom:img.height/img.width*100+'%'}"></i> -->
                <!-- <img class="gal" :src="img.url" alt=""> -->
              </div>
            </section>
            <div class="dzone" id="dzone">Drop Files to upload here</div>

            <!-- <vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions"></vue-dropzone> -->
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
  },
  data: function() {
    return {};
  },
  mounted() {
    var dropzone = document.getElementById("dzone");

    function uploadFile(file, i) {
      var url = "https://httpbin.org/post";
      var xhr = new XMLHttpRequest();
      var formData = new FormData();
      xhr.open("POST", url, true);
      xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");

      // Update progress (can be used to show progress indicator)
      xhr.upload.addEventListener("progress", function(e) {
        var loaded = e.loaded;
        var total = e.total;
        var percentage_complete = (loaded / total) * 100;
        var percent_uploaded = Math.floor(percentage_complete);
        let span = document.createElement("span");
        span.id = "percentage-text";
        document.getElementById("uploads").appendChild(span);
        document.getElementById("percentage-text").textContent =
          percent_uploaded + "%";
      });

      xhr.addEventListener("load", function(e) {
        if (xhr.status == 200) {
          previewFile(file);
        } else if (xhr.status != 200) {
          // Error. Inform the user
        }
      });
      formData.append("file", file);
      xhr.send(formData);
    }
    dropzone.ondrop = function(e) {
      e.preventDefault();
      this.className = "dzone";
      handleDrop(e);
    };
    function handleDrop(e) {
      var dt = e.dataTransfer;
      var files = dt.files;
      handleFiles(files);
    }
    function handleFiles(files) {
      files = [...files];
      files.forEach(uploadFile);
    }
    dropzone.ondragover = function() {
      this.className = "dzone dragover";
      return false;
    };
    dropzone.ondragleave = function() {
      this.className = "dzone";
      return false;
    };
    function previewFile(file) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = function() {
        let img = document.createElement("img");
        img.src = reader.result;
        img.className = "col-md-3";
        document.getElementById("uploads").appendChild(img);
      };
    }
  }
};
</script>
<style scoped>
#percentage-text {
  font-size: 30px;
}
img:not([draggable]) {
  max-width: 0 !important;
}
.dzone {
  width: 100%;
  height: 300px;
  border: 2px dashed #ccc;
  color: #ccc;
  line-height: 300px;
  text-align: center;
}

.dzone.dragover {
  border-color: #000;
  color: #000;
}

#gal-sec {
  display: flex;
  flex-wrap: wrap;
}

#gal-sec::after {
  content: "";
  flex-grow: 999999999;
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

.goback {
  color: #b58000 !important;
}

#dropzone {
  height: 70vh !important;
}

.input-group-text {
  background-color: #ffb503 !important;
  border: 1px solid #ffb503 !important;
}

.mb-100 {
  margin-bottom: 100px;
}
</style>
