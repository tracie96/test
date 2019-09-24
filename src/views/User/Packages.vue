<template v-if="packages.length === 0">
  <div>
    <sidebar></sidebar>
    <topbar></topbar>
    <div class="pagecontent">
      <div class="top-page-content">
        <p>
          Pricing Package
        </p>
        <div class="text-center mt-100 mb-100">
          <p class="pack mt-3">
            You currently do not have any Pricing Package
          </p>
          <router-link to="/packages/create" class="">
            <button
              style="border-radius: 5px !important;color:#fff !important"
              class="mr-4 btn btn-peexoo"
            >
              <i class="fa fa-plus"></i> Add Pricing Package
            </button>
          </router-link>
        </div>
      </div>
    </div>
    <div class="div-footer mt-5">
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
          Pricing Package
        </p>
        <div class="row">
          <div class="col-sm-12 col-md-2">
            <select class="custom-select custom-select-lg mb-3">
              <option selected>Sort by</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <label for="" class="col-md-2"></label>
          <div class=" col-sm-12 col-md-5 serach-f">
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
          <div class="">
            <router-link to="/packages/create" class="">
              <button
                style="border-radius: 5px !important;color:#fff !important;"
                class=" btn btn-peexoo"
              >
                <i class="fa fa-plus"></i> Add Pricing Package
              </button>
            </router-link>
          </div>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Package Title</th>
              <th scope="col">Category</th>
              <th scope="col">Items</th>
              <th scope="col">Amount</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr class="cd" v-for="(pack, index) in packages" :key="index">
              <td>{{ index + 1 }}</td>

              <td v-text="pack.title"></td>
              <td v-text="pack.category"></td>
              <td v-text="pack.items"></td>
              <td v-text="pack.amount"></td>
              <td>
                <span
                  ><i class="peexo-highlight-text far fa-trash-alt"></i
                ></span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="div-footer mt-5">
      <Footer />
    </div>
  </div>
</template>

<script>
const base_url = "http://abf44a84.ngrok.io";
import sidebar from "../../components/Admin-components/Sidebar";
import topbar from "../../components/Admin-components/Topbar";
import Footer from "../../components/Admin-components/footer";
import axios from "axios";
export default {
  name: "Packages",
  components: {
    sidebar,
    topbar,
    Footer
  },
  data: function() {
    return {
      packages: [
        {
          id: 1,
          title: "Prewedding Premium",
          category: "wedding",
          items: 7,
          amount: 130000
        },
        {
          id: 2,
          title: "Prewedding Premium",
          category: "wedding",
          items: 7,
          amount: 130000
        },
        {
          id: 3,
          title: "Prewedding Premium",
          category: "wedding",
          items: 4,
          amount: 140000
        },
        {
          id: 4,
          title: "Prewedding Premium",
          category: "wedding",
          items: 3,
          amount: 230000
        }
      ]
    };
  },
  mounted: function() {},
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    },
    currentUser: function() {
      return this.$store.getters.currentUser;
    }
  }
};
</script>

<style scoped>
.mt-100 {
  margin-top: 100px;
}

p.pack {
  font-size: 16px !important;
}

.empty-card {
  height: 261px;
}

.card-empty-text {
  top: 47%;
  position: relative;
}

.mb-100 {
  margin-bottom: 100px;
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
table {
  border-collapse: separate !important;
  border-spacing: 0px 6px !important;
}
thead > tr > th {
  color: #4d4d4d !important;
  font-weight: 700 !important;
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
