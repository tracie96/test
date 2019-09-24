<template v-if="billings.length === 0">
  <div>
    <sidebar></sidebar>
    <topbar></topbar>
    <div class="pagecontent">
      <div class="top-page-content">
        <p>
          Billings
        </p>
        <div class="text-center mt-100">
          <span class="fa peexo-highlight-text fa-3x fa-camera-retro"></span>
          <p class="book mt-3">
            You currently haven’t made any payment.
          </p>
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
          Billings
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
          <div class="col-sm-12 col-md-5 serach-f">
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
        </div>
        <nav>
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <a
              class="nav-item nav-link active"
              id="nav-pending-tab"
              data-toggle="tab"
              href="#nav-pending"
              role="tab"
              aria-controls="nav-pending"
              aria-selected="true"
              >Pending Payment</a
            >
            <a
              class="nav-item nav-link"
              id="nav-ongoing-tab"
              data-toggle="tab"
              href="#nav-ongoing"
              role="tab"
              aria-controls="nav-ongoing"
              aria-selected="false"
              >Ongoing Payment</a
            >
            <a
              class="nav-item nav-link"
              id="nav-previous-tab"
              data-toggle="tab"
              href="#nav-previous"
              role="tab"
              aria-controls="nav-previous"
              aria-selected="false"
              >Previous Payment</a
            >
          </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
          <div
            class="tab-pane fade show active"
            id="nav-pending"
            role="tabpanel"
            aria-labelledby="nav-pending-tab"
          >
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Payment for</th>
                  <th scope="col">Type name</th>
                  <th scope="col">Date</th>
                  <th scope="col">Payment made</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="cd"
                  v-for="(billing, index) in billings"
                  :key="index"
                >
                  <td>{{ index + 1 }}</td>
                  <router-link :to="'/bookings/details/' + billing.id" class="">
                    <td v-text="billing.title"></td>
                  </router-link>

                  <td v-text="billing.type"></td>
                  <td v-text="billing.date"></td>
                  <!-- <td v-text="booking.payment"></td> -->
                  <td>
                    <div class="progress">
                      <div
                        v-bind:class="{
                          prgred: billing.payment <= 40,
                          prgwarning:
                            billing.payment > 40 && billing.payment <= 60,
                          prgsuccess: billing.payment > 60
                        }"
                        class="progress-bar"
                        role="progressbar"
                        :style="{ width: billing.payment + '%' }"
                        :aria-valuenow="billing.payment"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        {{ billing.payment }}%
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            class="tab-pane fade"
            id="nav-ongoing"
            role="tabpanel"
            aria-labelledby="nav-ongoing-tab"
          >
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Payment for</th>
                  <th scope="col">Type name</th>
                  <th scope="col">Date</th>
                  <th scope="col">Payment made</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="cd"
                  v-for="(billing, index) in billings"
                  :key="index"
                >
                  <td>{{ index + 1 }}</td>
                  <router-link :to="'/bookings/details/' + billing.id" class="">
                    <td v-text="billing.title"></td>
                  </router-link>

                  <td v-text="billing.type"></td>
                  <td v-text="billing.date"></td>
                  <!-- <td v-text="booking.payment"></td> -->
                  <td>
                    <div class="progress">
                      <div
                        v-bind:class="{
                          prgred: billing.payment <= 40,
                          prgwarning:
                            billing.payment > 40 && billing.payment <= 60,
                          prgsuccess: billing.payment > 60
                        }"
                        class="progress-bar"
                        role="progressbar"
                        :style="{ width: billing.payment + '%' }"
                        :aria-valuenow="billing.payment"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        {{ billing.payment }}%
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
                  <th scope="col">Payment for</th>
                  <th scope="col">Type name</th>
                  <th scope="col">Date</th>
                  <th scope="col">Payment made</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="cd"
                  v-for="(billing, index) in billings"
                  :key="index"
                >
                  <td>{{ index + 1 }}</td>
                  <router-link :to="'/bookings/details/' + billing.id" class="">
                    <td v-text="billing.title"></td>
                  </router-link>

                  <td v-text="billing.type"></td>
                  <td v-text="billing.date"></td>
                  <!-- <td v-text="booking.payment"></td> -->
                  <td>
                    <div class="progress">
                      <div
                        v-bind:class="{
                          prgred: billing.payment <= 40,
                          prgwarning:
                            billing.payment > 40 && billing.payment <= 60,
                          prgsuccess: billing.payment > 60
                        }"
                        class="progress-bar"
                        role="progressbar"
                        :style="{ width: billing.payment + '%' }"
                        :aria-valuenow="billing.payment"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        {{ billing.payment }}%
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
      billings: [
        {
          id: 1,
          title: "lorem hjhjhdgfajhsgdfja hagsjdhfgajsgdfj ",
          type: "Photoshoot",
          date: "2019/03/01",
          payment: 30
        },
        {
          id: 2,
          title: "lorem hjhjhdgfajhsgdfja hagsjdhfgajsgdfj ",
          type: "Photoshoot",
          date: "2019/03/01",
          payment: 26
        },
        {
          id: 3,
          title: "lorem hjhjhdgfajhsgdfja hagsjdhfgajsgdfj ",
          type: "Photoshoot",
          date: "2019/03/01",
          payment: 40
        },
        {
          id: 4,
          title: "lorem hjhjhdgfajhsgdfja hagsjdhfgajsgdfj ",
          type: "Photoshoot",
          date: "2019/03/01",
          payment: 55
        },
        {
          id: 5,
          title: "lorem hjhjhdgfajhsgdfja hagsjdhfgajsgdfj ",
          type: "Peexoomemories",
          date: "2019/03/01",
          payment: 80
        },
        {
          id: 6,
          title: "lorem hjhjhdgfajhsgdfja hagsjdhfgajsgdfj ",
          type: "Peexoomemories",
          date: "2019/03/01",
          payment: 26
        },
        {
          id: 7,
          title: "lorem hjhjhdgfajhsgdfja hagsjdhfgajsgdfj ",
          type: "Peexoomemories",
          date: "2019/03/01",
          payment: 40
        },
        {
          id: 8,
          title: "lorem hjhjhdgfajhsgdfja hagsjdhfgajsgdfj ",
          type: "Photoshoot",
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
