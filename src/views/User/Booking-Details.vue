<template>
  <div>
    <reportmodal
      :show="showReportModal"
      @close="showReportModal = false"
    ></reportmodal>
    <payment
      :show="showmakepayment"
      :caption="caption"
      :nextlineCaption="nextlineCaption"
      :cancelbtnText="cancelbtnText"
      :submitbuttonText="submitbuttonText"
      :icon="icon"
      v-on:submit-modal="makepayment"
      @close="showmakepayment = false"
    ></payment>
    <paymentsuccess
      :show="showpaymentsuccessmodal"
      @close="showpaymentsuccessmodal = false"
    ></paymentsuccess>

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
        <div class="row">
          <div class="col-md-10 item-icon">
            <router-link to="/bookings/albums" class="">
              <span class="mr-4">
                <i class="fa fa-picture-o"></i> View Albums</span
              >
            </router-link>

            <span class="mr-4">
              <i class="fa fa-file-text-o"></i> View Invoice
            </span>
            <span @click="showmakePayment" class="mr-4">
              <i class="fa fa-credit-card-alt"></i> Make payment
            </span>
            <span @click="cancelBooking" class="mr-4">
              <i class="fa fa-times-circle-o"></i> Cancel Booking
            </span>
            <span @click="reportPhotographer" class="mr-4">
              <i class="fa fa-exclamation-triangle"></i> Report Photographer
            </span>
          </div>
        </div>
        <p class="mt-4">
          Booking Personal Details
        </p>
        <div class="row">
          <div class="col-md-6">
            <div class="peexo-body-text card">First name: Jonathan</div>
          </div>
          <div class="col-md-6">
            <div class="peexo-body-text card">First name: Jonathan</div>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col-md-6">
            <div class="peexo-body-text card">
              Phone number: +234 814 071 2523
            </div>
          </div>
          <div class="col-md-6">
            <div class="peexo-body-text card">
              Email address: tega_joe@hotmail.com
            </div>
          </div>
        </div>
        <p class="mt-4">
          Shoot Location Details
        </p>
        <div class="row">
          <div class="col-md-6">
            <div class="peexo-body-text card">Country: Nigeria</div>
          </div>
          <div class="col-md-6">
            <div class="peexo-body-text card">State: Lagos</div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="peexo-body-text card">
              Address: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
        </div>
        <p class="mt-4">
          Shoot Details
        </p>
        <div class="row">
          <div class="col-md-12">
            <div class="peexo-body-text card">
              Type of service: Photography and Cinematography
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="peexo-body-text card">
              Shoot start date: 22nd October 2019
            </div>
          </div>
          <div class="col-md-6">
            <div class="peexo-body-text card">
              Shoot end date: 22nd October 2019
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="peexo-body-text card">
              More details: Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
        </div>
        <p class="mt-4">
          Shoot Details
        </p>
        <div class="row">
          <div class="col-md-12">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Description</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="cd"
                  v-for="(shoot, index) in shootDetails"
                  :key="index"
                >
                  <td v-text="shoot.desc"></td>
                  <td class="text-right" v-text="shoot.quantity"></td>
                  <td class="text-right" v-text="shoot.amount"></td>
                </tr>
                <tr class="shaded-tr">
                  <td colspan="2">Total</td>
                  <td class="text-right">450,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-md-12">
            <table class="table table-bordered">
              <tbody>
                <tr class="">
                  <td colspan="2">
                    <div class="progress-txt">Payment made</div>
                    <div class="progress">
                      <div
                        class="prgwarning progress-bar"
                        role="progressbar"
                        style="width:65%"
                        aria-valuenow="65"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        65%
                      </div>
                    </div>
                  </td>
                  <td class="text-right">450,000</td>
                </tr>
                <tr class="">
                  <td colspan="2">
                    <div class="progress-txt">Balance</div>
                    <div class="progress">
                      <div
                        class="prgwarning progress-bar"
                        role="progressbar"
                        style="width:65%"
                        aria-valuenow="65"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        65%
                      </div>
                    </div>
                  </td>
                  <td class="text-right">450,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="mt-3 only-card peexo-body-text row ml-1 mr-1">
          <div>
            Delivery date
          </div>
          <div class="ml-auto">
            2019/20/19
          </div>
        </div>
        <div class="text-center mt-5 mb-5">
          <button
            @click="showmakePayment"
            style="border-radius:5px !important;color:#fff"
            class="btn btn-peexoo"
            type=""
          >
            MAKE PAYMENT
          </button>
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
import reportmodal from "../../components/reportBooking";
import payment from "../../components/genericmodal";
import paymentsuccess from "../../components/paymentsuccess";
export default {
  name: "booking-details",
  props: ["show"],
  components: {
    sidebar,
    topbar,
    Footer,
    reportmodal,
    payment,
    paymentsuccess
  },
  data: function() {
    return {
      showmakepayment: false,
      showReportModal: false,
      showpaymentsuccessmodal: false,
      caption: "Kindly pay your outstanding to complete this action.",
      nextlineCaption: "Outstanding: ₦250,000",
      cancelbtnText: "Cancel ",
      submitbuttonText: "make payment",
      icon: "credit-card-alt",
      shootDetails: [
        {
          desc: "Pre-weddding",
          quantity: "2",
          amount: "75,000"
        },
        {
          desc: "Photobook",
          quantity: "2",
          amount: "55,000"
        },
        {
          desc: "Pre-weddding",
          quantity: "2",
          amount: "75,000"
        },
        {
          desc: "White wedding",
          quantity: "1",
          amount: "35,000"
        },
        {
          desc: "Pre-weddding",
          quantity: "2",
          amount: "2,000"
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
    showmakePayment() {
      this.showmakepayment = true;
    },
    close() {
      this.showmakepayment = false;
    },
    makepayment() {
      console.log("payment made");
      this.close();
      this.showpaymentsuccessmodal = true;
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
