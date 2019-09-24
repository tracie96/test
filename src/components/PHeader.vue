<template>
  <div>
    <login-register
      :show="showloginModal"
      @close="showloginModal = false"
    ></login-register>
    <header class="xs-header header-transparent header-style2 desktop">
      <div class=" ">
        <nav class="xs-menus clearfix fixed-head">
          <div class="nav-header">
            <router-link to="/" class="nav-brand">
              <img src="../assets/images/asset-7.png" alt="" />
            </router-link>
            <div class="nav-toggle"></div>
          </div>
          <div class="nav-menus-wrapper align-to-right">
            <!-- menu list -->
            <ul class="nav-menu">
              <li class="a-l">
                <router-link to="/photographers"
                  >I am a Photographer</router-link
                >
              </li>

              <li class="a-l">
                <router-link to="/photographers/search"
                  >Find a Photographer</router-link
                >
              </li>
              <li class="a-l">
                <a href="">Find my photos</a>
              </li>
              <li>
                <a
                  class="log"
                  @click="showloginModal = true"
                  style="color:#b58000"
                  >Login or Register</a
                >
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <!-- .container END -->
    </header>
    <!-- End header section -->
    <header
      v-if="isLoggedIn"
      class="xs-header header-transparent header-style2 desktop"
    >
      <div class=" ">
        <nav class="xs-menus clearfix fixed-head">
          <div class="nav-header">
            <router-link to="/" class="nav-brand">
              <img src="../assets/images/asset-7.png" alt="" />
            </router-link>
            <div class="nav-toggle"></div>
          </div>
          <div class="nav-menus-wrapper align-to-right">
            <!-- menu list -->
            <ul class="nav-menu">
              <li class="a-l">
                <router-link to="/photos/explore">Explore Photos</router-link>
              </li>
              <li class="a-l">
                <router-link to="/photographers/search"
                  >Find a Photographer</router-link
                >
              </li>
              <li class="a-l">
                <a href="">Find my photos</a>
              </li>
              <li class="a-l">
                <a class="top-text" href="#about">
                  <i class="fa fa-file"></i>
                </a>
              </li>
              <li class="a-l">
                <a class="top-text" href="#about">
                  <i class="fa fa-bell-o"></i>
                </a>
              </li>
              <li class="a-l">
                <a class="top-text" href="#about">
                  <i class="fa fa-envelope-o"></i>
                </a>
              </li>
              <li>
                <a class="top-text" href="#about">
                  <img
                    src="../assets/images/bitmap.png"
                    alt=""
                    style="width: 31px; height:31px"
                  />
                </a>
              </li>
              <li class="">
                <a
                  style="color:#fff !important"
                  class=" dropdown-toggle"
                  data-toggle="dropdown"
                >
                  {{ currentUser.email }}
                </a>
                <div class="dropdown-menu">
                  <router-link to="/profile" class="dropdown-item"
                    >Profile</router-link
                  >
                  <a class="dropdown-item" href="#">Link 2</a>
                  <a
                    class="dropdown-item log"
                    @click="logout"
                    style="color:#b58000"
                    >logout</a
                  >
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <!-- .container END -->
    </header>
    <!-- End header section -->

    <!--Navbar-->
    <mdb-navbar class="mobile-head" animated animation="1">
      <!-- Navbar brand -->
      <mdb-navbar-brand class="left">
        <router-link class="" to="/">
          <img src="../assets/images/asset-7.png" alt="" />
        </router-link>
      </mdb-navbar-brand>
      <mdb-navbar-toggler>
        <mdb-navbar-nav right>
          <mdb-nav-item waves-fixed>
            <router-link class="" to="/photographers"
              >I am a Photographer</router-link
            >
          </mdb-nav-item>
          <<<<<<< HEAD
          <mdb-nav-item waves-fixed>
            <router-link class="" to="/photos/explore"
              >Exlpore Photos</router-link
            >
          </mdb-nav-item>
          =======
          <!-- <mdb-nav-item waves-fixed>
                        <router-link class="" to="/photos/explore">Exlpore Photos</router-link>
                    </mdb-nav-item> -->
          >>>>>>> removednodeModule
          <mdb-nav-item waves-fixed>
            <router-link class="" to="/photographers/search"
              >Find a Photographer</router-link
            >
          </mdb-nav-item>
          <mdb-nav-item waves-fixed>
            <router-link class="" to="/">Find my photos</router-link>
          </mdb-nav-item>
          <mdb-nav-item waves-fixed>
            <router-link class="log" to="/login">Login</router-link>
          </mdb-nav-item>
          <mdb-nav-item waves-fixed>
            <router-link class="log" to="/signup">Register</router-link>
          </mdb-nav-item>
        </mdb-navbar-nav>
      </mdb-navbar-toggler>
    </mdb-navbar>
  </div>
</template>
<script>
import LoginRegister from "./login-register";
import {
  mdbNavbar,
  mdbNavItem,
  mdbNavbarNav,
  mdbNavbarToggler,
  mdbNavbarBrand
} from "mdbvue";
export default {
  props: ["show"],
  data: function() {
    return {
      showloginModal: false,
      loading: true
    };
  },
  components: {
    LoginRegister,
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbNavbarBrand
  },
  computed: {
    name: function() {
      return this.$store.state.user;
    },
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    },
    currentUser: function() {
      return this.$store.getters.currentUser;
    }
  },
  methods: {
    logout: function() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/");
      });
    }
  }
};
</script>

<style scoped>
.dropdown-menu {
  top: -28px !important;
}
.a-l a {
  color: #fff !important;
}

a {
  color: #4d4d4d !important;
}

.log {
  color: #b58000 !important;
  cursor: pointer !important;
}

.text-white {
  color: #fff !important;
}

input:internal-autofill-selected {
  background: #fff !important;
}

button {
  box-shadow: none !important;
  height: 42px !important;
  line-height: 42px !important;
}

.pass-label {
  color: #b58000 !important;
  font-family: "Montserrat";
  font-size: 12px;
  float: right;
}

.check-label {
  font-family: "Montserrat";
  font-size: 12px;
}

.width-15 {
  width: 15% !important;
}

.width-85 {
  width: 85% !important;
}
</style>
