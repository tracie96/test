<template v-if="bookings.length === 0">
  <div>
    <sidebar></sidebar>
    <topbar></topbar>
    <div class="pagecontent">
      <div class="top-page-content">
        <p>
          Bookings
        </p>
        <div class="text-center mt-100">
          <span class="fa peexo-highlight-text fa-3x fa-camera-retro"></span>
          <p class="book mt-3">
            You haven’t booked any photographer.
          </p>
          <button
            @click="showAlert"
            style="border-radius: 5px !important"
            class="btn btn-peexoo"
          >
            START BOOKING
          </button>
        </div>
      </div>
    </div>
    <div class="div-footer">
      <Footer />
    </div>
  </div>
</template>
<template v-else>
  <div>
    <sidebar></sidebar>
    <topbar></topbar>
    <div class="pagecontent">
      <div class="top-page-content">
        <p>
          Bookings
        </p>
        <div class="row">
          <div class="col-sm-12 col-md-3">
            <select class="custom-select custom-select-lg mb-3">
              <option selected>Sort by</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <label for="" class="col-md-2"></label>
          <div class="col-sm-12 col-md-4 serach-f">
            <div class="input-group">
              <input
                class="form-control form-control-lg search-in py-2 border-right-0 border"
                type="search"
                value="search"
                id="example-search-input"
              />
              <span class="input-group-append">
                <div class="input-group-text search-in">
                  <i class="fa fa-search"></i>
                </div>
              </span>
            </div>
          </div>
          <div class="col-md-3">
            <a
              style="margin:0;border-radius:5px !important;color:#fff !important"
              class="monteserat btn btn-p btn-rounded btn-peexoo btn-new-peexo"
              >+ NEW BOOKING</a
            >
          </div>
        </div>
        <nav>
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <a
              class="nav-item nav-link active"
              id="nav-ongoing-tab"
              data-toggle="tab"
              href="#nav-ongoing"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
              >Ongoing Bookings</a
            >
            <a
              class="nav-item nav-link"
              id="nav-pending-tab"
              data-toggle="tab"
              href="#nav-pending"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
              >Pending Bookings</a
            >
            <a
              class="nav-item nav-link"
              id="nav-previous-tab"
              data-toggle="tab"
              href="#nav-previous"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
              >Previous Bookings</a
            >
            <a
              class="nav-item nav-link"
              id="nav-canceled-tab"
              data-toggle="tab"
              href="#nav-canceled"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
              >Canceled Bookings</a
            >
          </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
          <div
            class="tab-pane fade show active"
            id="nav-ongoing"
            role="tabpanel"
            aria-labelledby="nav-ongoing-tab"
          >
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Booking Title</th>
                  <th scope="col">Photographer name</th>
                  <th scope="col">Date</th>
                  <th scope="col">Payment made</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="cd"
                  v-for="(booking, index) in bookings"
                  :key="index"
                >
                  <td>{{ index + 1 }}</td>
                  <router-link :to="'/bookings/details/' + booking.id" class="">
                    <td v-text="booking.title"></td>
                  </router-link>

                  <td v-text="booking.photographername"></td>
                  <td v-text="booking.date"></td>
                  <!-- <td v-text="booking.payment"></td> -->
                  <td>
                    <div class="progress">
                      <div
                        v-bind:class="{
                          prgred: booking.payment <= 40,
                          prgwarning:
                            booking.payment > 40 && booking.payment <= 60,
                          prgsuccess: booking.payment > 60
                        }"
                        class="progress-bar"
                        role="progressbar"
                        :style="{ width: booking.payment + '%' }"
                        :aria-valuenow="booking.payment"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        {{ booking.payment }}%
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            class="tab-pane fade"
            id="nav-pending"
            role="tabpanel"
            aria-labelledby="nav-pending-tab"
          >
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Booking Title</th>
                  <th scope="col">Photographer name</th>
                  <th scope="col">Date</th>
                  <th scope="col">Payment made</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(booking, index) in bookings" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td v-text="booking.title"></td>
                  <td v-text="booking.photographername"></td>
                  <td v-text="booking.date"></td>
                  <!-- <td v-text="booking.payment"></td> -->
                  <td>
                    <div class="progress">
                      <div
                        v-bind:class="{
                          prgred: booking.payment <= 40,
                          prgwarning:
                            booking.payment > 40 && booking.payment <= 60,
                          prgsuccess: booking.payment > 60
                        }"
                        class="progress-bar"
                        role="progressbar"
                        :style="{ width: booking.payment + '%' }"
                        :aria-valuenow="booking.payment"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        {{ booking.payment }}%
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            class="tab-pane fade"
            id="nav-previous"
            role="tabpanel"
            aria-labelledby="nav-previous-tab"
          >
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Booking Title</th>
                  <th scope="col">Photographer name</th>
                  <th scope="col">Date</th>
                  <th scope="col">Payment made</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(booking, index) in bookings" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td v-text="booking.title"></td>
                  <td v-text="booking.photographername"></td>
                  <td v-text="booking.date"></td>
                  <!-- <td v-text="booking.payment"></td> -->
                  <td>
                    <div class="progress">
                      <div
                        v-bind:class="{
                          prgred: booking.payment <= 40,
                          prgwarning:
                            booking.payment > 40 && booking.payment <= 60,
                          prgsuccess: booking.payment > 60
                        }"
                        class="progress-bar"
                        role="progressbar"
                        :style="{ width: booking.payment + '%' }"
                        :aria-valuenow="booking.payment"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        {{ booking.payment }}%
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            class="tab-pane fade"
            id="nav-canceled"
            role="tabpanel"
            aria-labelledby="nav-canceled-tab"
          >
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Booking Title</th>
                  <th scope="col">Photographer name</th>
                  <th scope="col">Date</th>
                  <th scope="col">Payment made</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(booking, index) in bookings" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td v-text="booking.title"></td>
                  <td v-text="booking.photographername"></td>
                  <td v-text="booking.date"></td>
                  <!-- <td v-text="booking.payment"></td> -->
                  <td>
                    <div class="progress">
                      <div
                        v-bind:class="{
                          prgred: booking.payment <= 40,
                          prgwarning:
                            booking.payment > 40 && booking.payment <= 60,
                          prgsuccess: booking.payment > 60
                        }"
                        class="progress-bar"
                        role="progressbar"
                        :style="{ width: booking.payment + '%' }"
                        :aria-valuenow="booking.payment"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        {{ booking.payment }}%
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
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
  name: "bookings",
  components: {
    sidebar,
    topbar,
    Footer
  },
  data: function() {
    return {
      bookings: [
        {
          id: 1,
          title: "lorem hjhjhdgfajhsgdfja hagsjdhfgajsgdfj ",
          photographername: "Afsdfas Gehj",
          date: "2019/03/01",
          payment: 30
        },
        {
          id: 2,
          title: "lorem hjhjhdgfajhsgdfja hagsjdhfgajsgdfj ",
          photographername: "Afsdfas Gehj",
          date: "2019/03/01",
          payment: 26
        },
        {
          id: 3,
          title: "lorem hjhjhdgfajhsgdfja hagsjdhfgajsgdfj ",
          photographername: "Aib Gehj",
          date: "2019/03/01",
          payment: 40
        },
        {
          id: 4,
          title: "lorem hjhjhdgfajhsgdfja hagsjdhfgajsgdfj ",
          photographername: "Afolayan Gehj",
          date: "2019/03/01",
          payment: 55
        },
        {
          id: 5,
          title: "lorem hjhjhdgfajhsgdfja hagsjdhfgajsgdfj ",
          photographername: "Afsdfas Gehj",
          date: "2019/03/01",
          payment: 80
        },
        {
          id: 6,
          title: "lorem hjhjhdgfajhsgdfja hagsjdhfgajsgdfj ",
          photographername: "Afsdfas Gehj",
          date: "2019/03/01",
          payment: 26
        },
        {
          id: 7,
          title: "lorem hjhjhdgfajhsgdfja hagsjdhfgajsgdfj ",
          photographername: "Aib Gehj",
          date: "2019/03/01",
          payment: 40
        },
        {
          id: 8,
          title: "lorem hjhjhdgfajhsgdfja hagsjdhfgajsgdfj ",
          photographername: "Afolayan Gehj",
          date: "2019/03/01",
          payment: 95
        }
      ]
    };
  },
  methods: {
    showAlert() {
      this.$swal({
        text:
          "You are about to visit the search result page. Do you want to continue?",
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
          console.log("route back to the search page");
        }
      });
    }
  }
};
</script>
<style scoped>
.mt-100 {
  margin-top: 100px;
}

.top-page-content p {
  margin-bottom: 50px;
}

.book {
  font-family: "Montserrat" !important;
  font-size: 16px;
  font-weight: 400 !important;
  color: #4d4d4d;
}

.search-in {
  background: #fffefc !important;
}

.btn-new-peexo {
  border-radius: 5px !important;
}
.cd {
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 1px 2px 0 rgba(226, 226, 226, 0.5);
}
#nav-tab {
  border-bottom: 1px solid #d4d4d4;
}

.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
  color: #495057;
  background-color: transparent !important;
  border-color: #ffb600 !important;
  border-left: transparent !important;
  border-right: transparent !important;
  border-top: transparent !important;
  border-bottom: 3px solid #ffb600;
}

.nav-tabs .nav-link:focus,
.nav-tabs {
  border-left: transparent !important;
  border-right: transparent !important;
  border-top: transparent !important;
}

.nav-link:hover {
  border-color: transparent !important;
  border-left: transparent !important;
  border-right: transparent !important;
  border-top: transparent !important;
}
.prgred {
  background-color: #ff2323 !important;
}
.prgsuccess {
  background-color: #4bb543 !important;
}
.prgwarning {
  background-color: #ffae42 !important;
}
table {
  border-collapse: separate !important;
  border-spacing: 0px 6px !important;
}
thead > tr > th {
  color: #4d4d4d !important;
  font-weight: 500 !important;
}
.table td {
  border-top: none !important;
}
tbody > tr > td {
  color: #4d4d4d !important;
  font-weight: 400 !important;
}
.table thead th {
  border-bottom: none !important;
}
</style>
