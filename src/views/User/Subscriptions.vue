<template v-if="subscriptions.length === 0">
  <div>
    <sidebar></sidebar>
    <topbar></topbar>
    <div class="pagecontent">
      <div class="top-page-content">
        <p>
          Subscriptions
        </p>
        <div class="text-center mt-100">
          <span class="fa peexo-highlight-text fa-3x fa-shopping-bag"></span>
          <p class="book mt-3">
            You have no active subscription
          </p>
          <button
            @click="showAlert"
            style="border-radius: 5px !important"
            class="btn btn-peexoo"
          >
            SUBSCRIBE NOW
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
          Subscriptions
        </p>
        <p class="current-sub">
          Current Subscription
        </p>
        <div class="row">
          <div class="col-md-6">
            <div class="card cad-span p-3 ">
              <span>6 months subscription for Peexomemories</span> <br />
              <span><b>Subscribed on:</b> 2nd May, 2019</span> <br />
              <span><b>Subscription due date on:</b> 2nd May, 2019</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 col-md-3">
            <select class="custom-select custom-select-lg mb-3">
              <option selected>Sort by</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <label for="" class="col-md-3"></label>
          <div class="col-sm-12 col-md-6 serach-f">
            <div class="input-group">
              <input
                placeholder="search subscriptions"
                class="form-control form-control-lg search-in py-2 border-right-0 border"
                type="search"
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

        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Subscription</th>
              <th scope="col">Subscribed on</th>
              <th scope="col">Subscription due date</th>
            </tr>
          </thead>
          <tbody>
            <tr class="cd" v-for="(sub, index) in subscriptions" :key="index">
              <td>{{ index + 1 }}</td>
              <router-link :to="'/bookings/details/' + sub.id" class="">
                <td v-text="sub.title"></td>
              </router-link>

              <td v-text="sub.subscriptiondate"></td>
              <td v-text="sub.duedate"></td>
            </tr>
          </tbody>
        </table>
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
  name: "subscriptions",
  components: {
    sidebar,
    topbar,
    Footer
  },
  data: function() {
    return {
      subscriptions: [
        {
          id: 1,
          title: "6 months subscription for Peexoomemories",
          subscriptiondate: "Afsdfas Gehj",
          duedate: "2019/03/01"
        },
        {
          id: 2,
          title: "6 months subscription for Peexoomemories",
          subscriptiondate: "Afsdfas Gehj",
          duedate: "2019/03/01"
        },
        {
          id: 3,
          title: "6 months subscription for Peexoomemories",
          subscriptiondate: "Afsdfas Gehj",
          duedate: "2019/03/01"
        },
        {
          id: 4,
          title: "6 months subscription for Peexoomemories",
          subscriptiondate: "Afsdfas Gehj",
          duedate: "2019/03/01"
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

.top-page-content p.current-sub {
  font-size: 18px !important;
  margin-bottom: 10px !important;
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
.card {
  margin-bottom: 70px !important;
}
.cad-span {
  border-bottom: 5px solid #4bb543;
}
.cad-span span {
  color: #4d4d4d !important;
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
