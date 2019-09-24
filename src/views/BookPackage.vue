<template>
  <div>
    <Header />

    <section class=" mb-4 mobile-only">
      <ul class="list-group-custom">
        <li
          class="mb-2"
          style="background-color: #4D4D4D; height: 90px !important;"
        >
          <div>
            <h1
              class="pt-4 ml-3"
              style="color: #FFB503;font-family: Montserrat;font-size: 26px;font-weight: 500;line-height: 19px; text-align: left"
            >
              Prewedding Gold
            </h1>
          </div>
          <div
            class="ml-3"
            style=" color: #FFFFFF;font-family: Montserrat;font-size: 20px;font-weight: 500;line-height: 19px;text-align: left; margin-top: -30px; "
          >
            N230,000
          </div>
        </li>
        <li class="mb-2">
          <div>
            <h1 class="pt-4 ml-3 list-group-custom-font">
              150 soft copies of images
            </h1>
          </div>
          <div class="ml-3 list-group-custom-font-inner">
            No extra charge
          </div>
        </li>
        <li class="mb-2">
          <div>
            <h1 class="pt-4 ml-3 list-group-custom-font">
              50 professional edits
            </h1>
          </div>
          <div class="ml-3 list-group-custom-font-inner">
            No extra charge
          </div>
        </li>
        <li class="mb-2">
          <div>
            <h1 class="pt-4 ml-3 list-group-custom-font">5 retouched images</h1>
          </div>
          <div class="ml-3 list-group-custom-font-inner">
            No extra charge
          </div>
        </li>
        <li class="mb-2">
          <div>
            <h1 class="pt-4 ml-3 list-group-custom-font">12 * 8" frame</h1>
          </div>
          <div class="ml-3 list-group-custom-font-inner">
            N60,000
          </div>
          <span
            style="float: right; background-color: rgb(255, 192, 4); height: inherit; width: 40px; margin-top: -72px;"
            ><i
              class="fa fa-trash-o mt-5 ml-3"
              style="color:white; font-size:25px; cursor: pointer"
            ></i
          ></span>
        </li>
      </ul>
      <div class="container">
        <div>
          <ul>
            <li>
              <div>
                <h1 class="pt-4 ml-3 list-group-custom-font">Photobook</h1>
              </div>
              <div class="ml-3 list-group-custom-font-inner">
                N18,000
              </div>
              <span
                style="float: right; height: inherit; width: 40px; margin-top: -72px;"
                ><i
                  class="fa fa-trash-o mt-5 ml-3"
                  style="color:#FFB503; font-size:25px; cursor: pointer"
                ></i
              ></span>
            </li>
          </ul>
        </div>
        <mdb-input label="Insert an addon" />
        <mdb-input label="Add comment" />
        <div class="mt-5 row">
          <button
            style="color:#fff;"
            class="btn btn-outline-primary btn-p btn-rounded btn-peexoo ml-4 mr-4"
          >
            Reset Package
          </button>
          <button style="color:#fff;" class="btn btn-p btn-rounded btn-peexoo ">
            Book Package
          </button>
        </div>
      </div>
    </section>
    <!-- end business info section -->

    <Footer />
    <Menu />
  </div>
</template>
<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Banner from "../components/Banner";
import { mdbInput, mdbContainer, mdbRow, mdbCol } from "mdbvue";

export default {
  name: "book-package",
  components: {
    Header,
    Footer,
    Menu,
    mdbInput,
    mdbContainer,
    mdbRow,
    mdbCol
  },
  methods: {},
  data: function() {
    return {};
  }
};
</script>
<style scoped>
.card {
  cursor: pointer;
}

@media screen and (max-width: 480px) {
  .xs-section-padding {
    padding-top: 50px !important;
  }

  .desktop-only {
    display: none;
  }

  .mb-15 {
    margin-bottom: 30px !important;
  }
}

.overlay {
  height: 100%;
  width: 100%;
  display: none;
  position: fixed;
  z-index: 12;
  top: 0;
  left: 0;
  /*background-color: rgb(0,0,0);*/
  /*background-color: rgba(0,0,0, 0.9);*/
  background-color: #fefbf3;
  opacity: 0.98;
}

.overlay-content {
  position: relative;
  top: 25%;
  width: 100%;
  text-align: center;
  margin-top: 30px;
}

.overlay a {
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.overlay a:hover,
.overlay a:focus {
  color: #f1f1f1;
}

.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 40px !important;
  color: #4d4d4d !important;
}

.overlay .closebtn:hover {
  color: #ffb503 !important;
}

.btn {
  white-space: nowrap !important;
}

.btn-outline-primary {
  border: 2px solid #ffb503 !important;
  background-color: transparent !important;
  color: #ffb503 !important;
}

.btn-outline-primary:not([disabled]):not(.disabled):active,
.btn-outline-primary:not([disabled]):not(.disabled).active,
.show > .btn-outline-primary.dropdown-toggle {
  border-color: #ffb503 !important;
}

.list-group-custom li {
  background-color: white;
  height: 82px;
}

@media screen and (max-height: 450px) {
}

.mobile-only {
  display: none;
}

@media (max-width: 480px) {
  .mobile-only {
    display: block;
    width: 100%;
  }

  .overlay a {
    font-size: 20px;
  }

  .overlay .closebtn {
    font-size: 40px;
    top: 15px;
    right: 35px;
  }
}

.list-group-custom-font {
  color: #4d4d4d;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: bold;
  line-height: 19px;
  text-align: left;
}
.list-group-custom-font-inner {
  color: #4d4d4d;
  font-family: Montserrat;
  font-size: 15px;
  font-weight: 500;
  line-height: 19px;
  text-align: left;
  margin-top: -30px;
  font-style: italic;
}
/*.custom-control-label::after{*/
/*background-color: #b88710 !important;*/
/*}*/
</style>
