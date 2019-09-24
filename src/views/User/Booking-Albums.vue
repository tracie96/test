<template>
  <div>
    <sidebar></sidebar>
    <topbar></topbar>
    <div class="pagecontent">
      <div class="top-page-content">
        <div class="row ml-1">
          <div>
            <router-link to="/bookings" class="">
              <div class="goback">
                <i class="fa fa-arrow-circle-left"></i> Go Back
              </div>
            </router-link>
          </div>
          <div class="ml-auto mr-3">
            <button
              @click="showCompleted"
              style="border-radius:5px !important;color:#fff"
              class="btn btn-peexoo"
              type=""
            >
              MARK BOOKING AS COMPLETED
            </button>
          </div>
        </div>
        <div class="row mt-5 ml-1">
          <div class="book-title col-md-6 peexo-body-text">
            <span>Wedding photography for my Son (Oghenetega and Juliana)</span>
            <span class="book-type">ONGOING</span>
          </div>
          <div class="peexo-body-text photo-name ml-auto mr-3">
            Photographer: Obi Somto Photography
          </div>
        </div>
        <hr />
        <!-- <div class="row">
                    <div class="col-md-10 item-icon">
                        <span class="mr-4"> <i class="fa fa-picture-o"></i> View Albums</span>
                        <span class="mr-4"> <i class="fa fa-file-text-o"></i> View Invoice </span>
                        <span @click="makePayment" class="mr-4"> <i class="fa fa-credit-card-alt"></i> Make payment
                        </span>
                        <span @click="cancelBooking" class="mr-4"> <i class="fa fa-times-circle-o"></i> Cancel Booking
                        </span>
                        <span @click="reportPhotographer" class="mr-4"> <i class="fa fa-exclamation-triangle"></i>
                            Report Photographer </span>

                    </div>
                </div> -->
        <div class="row">
          <div class="col-md-3" v-for="(album, index) in albums" :key="index">
            <albumcard
              :id="album.id"
              :name="album.name"
              :videos="album.videos"
              :images="album.images"
              :src="album.imgurl"
            />
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
export default {
  name: "booking-albums",
  props: ["show"],
  components: {
    sidebar,
    topbar,
    Footer,
    albumcard
  },
  data: function() {
    return {
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
        }
      ]
    };
  },
  methods: {
    showCompleted() {
      this.$swal({
        text:
          "You are about to mark this booking as completed. This action can not be reverted. Do you want to continue?",
        background: "#FFFDF7",
        padding: "40px",
        showCancelButton: true,
        reverseButtons: true,
        confirmButtonColor: "#FFB603",
        cancelButtonColor: "#FFB603",
        confirmButtonText: "CONTINUE",
        cancelButtonText: "GO BACK"
      }).then(result => {
        if (result.value) {
          console.log("mark as completed");
        }
      });
    },
    makePayment() {
      this.showmakepayment = true;
    },
    cancelBooking() {
      this.$swal({
        text:
          "Are you sure you want to cancel this booking? This action can not be reverted. And only $% of your deposit will be refunded.",
        background: "#FFFDF7",
        padding: "40px",
        showCancelButton: true,
        reverseButtons: true,
        confirmButtonColor: "#FFB603",
        cancelButtonColor: "#FFB603",
        confirmButtonText: "CONTINUE",
        cancelButtonText: "GO BACK"
      }).then(result => {
        if (result.value) {
          console.log("mark as completed");
        }
      });
    },
    reportPhotographer() {
      this.showReportModal = true;
      // inputOptions can be an object or Promise
    }
  }
};
</script>
<style scoped>
.card-empty-text {
  top: 47%;
  position: relative;
}

.top-page-content p {
  font-size: 18px !important;
}

.progress-txt {
  display: inline;
  float: left;
  margin-right: 20px;
}

.progress {
  margin-top: 5px !important;
  width: 50%;
}

.goback {
  color: #b58000;
}

.shaded-tr {
  background: #fff2d3 !important;
}

.only-card {
  background: #fff;
  box-shadow: 0 1px 2px 0 rgba(226, 226, 226, 0.5) !important;
  padding: 20px 7px;
  margin-bottom: 20px;
  border-radius: 5px !important;
}

.card {
  box-shadow: 0 1px 2px 0 rgba(226, 226, 226, 0.5) !important;
  padding: 11px !important;
}

.book-title span {
  font-family: Lora !important;
  font-size: 24px;
  font-weight: 700 !important;
}

.photo-name {
  font-family: "Montserrat";
  font-size: 14px;
  font-weight: 500 !important;
}

.item-icon span {
  font-family: "Montserrat" !important;
  color: #b58000 !important;
  font-size: 14px !important;
  cursor: pointer;
}

.book-title span.book-type {
  background-color: #ffb603;
  font-size: 10px !important;
  padding: 5px;
  border-radius: 4px;
  color: #fff !important;
  font-family: "Montserrat" !important;
  margin-left: 10px;
}

thead {
  background: #797979;
  color: #fff !important;
}

tbody > tr {
  background: #fff !important;
  color: #4d4d4d !important;
  font-weight: 400 !important;
}

.prgwarning {
  background-color: #ffae42 !important;
}

.table-bordered td {
  border-top-color: transparent !important;
}
</style>
