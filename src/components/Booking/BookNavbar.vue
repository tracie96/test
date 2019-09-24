<template>
  <div class="shadow-sm bg-white mt-5">
    <ul class="nav justify-content-end py-3">
      <li class="nav-item">
        <a
          class="nav-link text-muted"
          href="#"
          id="dropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          >Visibilty
        </a>

        <div
          class="dropdown-menu shadow-sm text-muted"
          aria-labelledby="dropdownMenuLink"
          style="min-width:4rem;"
        >
          <a class="dropdown-item text-muted" href="#">Hide</a>
          <a class="dropdown-item text-muted" href="#" @click="hideImage"
            >Unhide</a
          >
        </div>
      </li>
      <li class="nav-item">
        <a
          class="nav-link text-muted"
          href="#"
          id="dropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Privacy
        </a>

        <div
          class="dropdown-menu shadow-sm"
          aria-labelledby="dropdownMenuLink"
          style="min-width:6rem;"
        >
          <a class="dropdown-item text-muted" href="#">Make Public</a>
          <a class="dropdown-item text-muted" href="#" @click="makePrivate"
            >Make Private</a
          >
        </div>
      </li>
      <li class="nav-item">
        <a
          class="nav-link text-muted"
          href="#"
          id="dropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup=""
          aria-expanded="false"
        >
          Watermark
        </a>

        <div class="dropdown-menu shadow-sm" aria-labelledby="dropdownMenuLink">
          <a class="dropdown-item text-muted" href="#" @click="addWatermark"
            >Add Watermark</a
          >
          <a class="dropdown-item text-muted" href="#">Remove Water</a>
        </div>
      </li>
      <li class="nav-item">
        <a
          class="nav-link text-muted"
          href="#"
          tabindex="-1"
          @click="deleteImage"
          >Delete</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    hideImage() {
      this.$swal({
        title: "",
        text: "image hidden successfully",
        type: "success",
        confirmButtonText: "Done",
        confirmButtonColor: "#FFB603!important"
      });
    },
    makePrivate() {
      this.$swal({
        title: "",
        text: "image made private successfully",
        type: "success",
        confirmButtonText: "Done",
        confirmButtonColor: "#FFB603!important"
      });
    },
    addWatermark() {
      this.$swal({
        title: "",
        text: "Watermark added successfully",
        type: "success",
        confirmButtonText: "Done",
        confirmButtonColor: "#FFB603!important"
      });
    },
    deleteImage() {
      this.$swal({
        title: "",
        text: "Do you want to permanently delete images",
        type: "",
        showCancelButton: true,
        cancelButtonColor: "",
        confirmButtonColor: "#FFB603",
        confirmButtonText: "Delete"
      }).then(result => {
        if (result.value) {
          this.$swal("Deleted!", "image deleted successfully", "success");
        }
      });
    }
  }
};
</script>

<style>
.swal2-styled.swal2-confirm {
  background-color: #ffb603 !important;
  margin-top: 10px !important;
  border: 0 !important;
}
.swal2-styled {
  padding: 5px 40px !important;
}
.swal2-styled.swal2-cancel {
  border-color: #ffb603 !important;
  color: #ffb603 !important;
  background-color: #fff !important;
  border: 2px solid #ffb603 !important;
}
.swal2-popup {
  background-color: #fefbf3 !important;
  width: 40em !important;
  padding: 4em !important;
}
</style>
