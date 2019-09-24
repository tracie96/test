<template>
  <div>
    <div id="myNav" class="overlay">
      <a class="closebtn" @click="cancelBooking = true"
        ><i class="fa fa-times-circle" aria-hidden="true"></i
      ></a>
      <div class="overlay-content">
        <div class="row justify-content-center">
          <div v-if="!cancelBooking" class="col-md-4 col-sm-8">
            <div class="pb-4">
              <i
                class="fa fa-mobile "
                style="color:#FFB503; border: 3px solid #FFB503; border-radius: 100%; height: 74px; width: 74px; font-size: 70px"
                aria-hidden="true"
              ></i>
            </div>

            <div class="pt-4 mb-4">
              <h6
                style="color: #4D4D4D; font-family: Montserrat; font-size: 16px; font-weight: 400; line-height: 24px; text-align: center;"
              >
                Kindly enter your phone number to continue booking
              </h6>
            </div>

            <div class="pb-5 pt-2">
              <mdb-input type="text" label="Enter your phone number" outline />
              <button
                style="width: 60%;color:#fff"
                class="btn btn-p btn-rounded btn-peexoo"
                @click="bookNow()"
              >
                Enter
              </button>
            </div>
            <div class="mt-5">
              <p
                style="color: #4D4D4D; font-family: Montserrat; font-size: 12px; font-weight: 400; line-height: 24px; text-align: center;"
              >
                Tip: Your number would be collected ones. You can change your
                phone numberanytime by going to Update Profile
              </p>
            </div>
          </div>
          <div v-if="cancelBooking" class="col-md-4 col-sm-8">
            <div class="pb-4">
              <i
                class="fa fa-mobile "
                style="color:#FFB503; border: 3px solid #FFB503; border-radius: 100%; height: 74px; width: 74px; font-size: 70px"
                aria-hidden="true"
              ></i>
            </div>

            <div class="pt-4 mb-4">
              <h6
                style="color: #4D4D4D; font-family: Montserrat; font-size: 16px; font-weight: 400; line-height: 24px; text-align: center;"
              >
                Cancelling this will stop this booking? are you sure you want to
                cancel?
              </h6>
            </div>

            <div class="pb-5 pt-2">
              <button
                style="width: 40%;color:#fff"
                class="btn btn-p btn-rounded btn-peexoo btn-outline-primary mr-4"
                @click="closeOverlay()"
              >
                Cancel
              </button>
              <button
                style="width: auto;color:#fff"
                class="btn btn-p btn-rounded btn-peexoo"
                @click="cancelBooking = false"
              >
                Enter phone number
              </button>
            </div>
            <div class="mt-5">
              <p
                style="color: #4D4D4D; font-family: Montserrat; font-size: 12px; font-weight: 400; line-height: 24px; text-align: center;"
              >
                Tip: Your number would be collected ones. You can change your
                phone numberanytime by going to Update Profile
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Header />
    <Banner :name="this.photographerData.name" />

    <section class="xs-section-padding mb-4">
      <div class="container">
        <div
          class=" float-left desktop"
          style="margin-top: -50px; margin-left: -90px; font-size: 16px; font-weight: bold; color: #B7840A"
        >
          <router-link
            class="back"
            to="/photographer"
            style="color: rgb(183, 132, 10) !important;"
          >
            {{ this.isSuccessful ? "<< Go back to profile" : "<< Go Back" }}
          </router-link>
        </div>
        <div class="row justify-content-center">
          <div v-if="!preferenceIsSelected">
            <div class="col-12">
              <h6
                class="mb-4 text-center"
                style="font-family: Lora;font-size: 36px; font-weight: bold; color:#4D4D4D"
              >
                Book a Shoot
              </h6>
              <div class="text-center mb-5">
                <h6
                  style="color: #4D4D4D; font-family: Montserrat; font-size: 16px; font-weight: 400; line-height: 19px;"
                >
                  Do you want to choose a package or you do not want a package
                </h6>
              </div>

              <div class="row">
                <div class="col">
                  <div
                    class="card"
                    style="min-width: 25rem;"
                    @click="showBookingFormWithPackage()"
                  >
                    <div class="card-body text-center">
                      <div class="col-12" style="margin-top: 75px !important;">
                        <h5
                          class="card-title "
                          style="font-family: Montserrat; font-size: 16px; font-weight: 400; line-height: 19px;"
                        >
                          I want a package
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div
                    class="card"
                    style="min-width: 25rem;"
                    @click="showBookingFormWithOutPackage()"
                  >
                    <div class="card-body text-center">
                      <div
                        class="col-12"
                        style="    margin-top: 75px !important;"
                      >
                        <h5
                          class="card-title  "
                          style="   font-family: Montserrat; font-size: 16px; font-weight: 400; line-height: 19px;"
                        >
                          I do not want a package
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class=" col-md-6 col-sm-12" v-if="preferenceIsSelected">
            <div v-if="isSuccessful" class="mt-15 mb-15">
              <div class="text-center">
                <span class=""
                  ><i
                    style="  color: #4BB543; font-size: 60px"
                    class=" mb-5 fa fa-check-circle-o"
                  ></i
                ></span>
              </div>
              <p class="text-center">
                Your booking request was successful
                <strong> Afroshots</strong> would get to you shortly
              </p>
            </div>

            <form v-if="!isSuccessful && preferenceIsSelected">
              <h6
                class="mb-4 text-center"
                style="font-family: Lora;font-size: 36px; font-weight: bold; color:#4D4D4D"
              >
                Book a Shoot
              </h6>
              <div class="text-center">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit,incididunt dolore magna aliqua.
                </p>
              </div>

              <div v-if="formWithPackage">
                <div class="container desktop">
                  <mdb-row>
                    <mdb-col>
                      <mdb-input type="text" label="Prewedding Gold" outline />
                    </mdb-col>
                  </mdb-row>

                  <mdb-row>
                    <mdb-col>
                      <mdb-input type="text" label="Wedding" outline />
                    </mdb-col>
                  </mdb-row>

                  <mdb-row>
                    <mdb-col>
                      <mdb-input type="text" label="Country" outline />
                    </mdb-col>
                    <mdb-col>
                      <mdb-input type="text" label="State" outline />
                    </mdb-col>
                  </mdb-row>

                  <mdb-row>
                    <mdb-col>
                      <mdb-input type="number" label="Address Line 1" outline />
                    </mdb-col>
                  </mdb-row>
                  <mdb-row>
                    <mdb-col>
                      <mdb-input type="number" label="Address Line 2" outline />
                    </mdb-col>
                  </mdb-row>
                  <mdb-row>
                    <mdb-col>
                      <mdb-input type="text" label="Shoot start date" outline />
                    </mdb-col>
                    <mdb-col>
                      <mdb-input type="text" label="Shoot end date" outline />
                    </mdb-col>
                  </mdb-row>
                  <mdb-row>
                    <mdb-col>
                      <div class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="defaultUnchecked"
                        />
                        <label
                          class="custom-control-label"
                          for="defaultUnchecked"
                          >It's a one day shoot</label
                        >
                      </div>
                    </mdb-col>
                  </mdb-row>

                  <mdb-input
                    type="textarea"
                    placeholder="Enter more shoot details"
                    outline
                    :rows="6"
                  />
                </div>

                <!--MOBILE VIEW-->

                <div class="container mobile-only">
                  <mdb-input label="Prewedding Gold" />
                  <mdb-input label="Wedding" />
                  <mdb-input label="Country" />
                  <mdb-input label="State" />
                  <mdb-input label="Address Line 1" />
                  <mdb-input label="Address Line 2" />
                  <mdb-input label="Shoot start date" />
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="defaultUnchecked"
                    />
                    <label class="custom-control-label" for="defaultUnchecked"
                      >It's a one day shoot</label
                    >
                  </div>
                  <mdb-input label="Shoot end date" />
                  <mdb-input label="Enter more shoot detail" />
                </div>
                <!--- MOBILE VIEW -->
              </div>

              <div v-else>
                <div class="container desktop">
                  <mdb-row>
                    <mdb-col>
                      <mdb-input
                        type="text"
                        label="Choose a category"
                        outline
                      />
                    </mdb-col>
                  </mdb-row>

                  <mdb-row>
                    <mdb-col>
                      <mdb-input type="text" label="Country" outline />
                    </mdb-col>
                    <mdb-col>
                      <mdb-input type="text" label="State" outline />
                    </mdb-col>
                  </mdb-row>

                  <mdb-row>
                    <mdb-col>
                      <mdb-input type="number" label="Address Line 1" outline />
                    </mdb-col>
                  </mdb-row>
                  <mdb-row>
                    <mdb-col>
                      <mdb-input type="number" label="Address Line 2" outline />
                    </mdb-col>
                  </mdb-row>
                  <mdb-row>
                    <mdb-col>
                      <mdb-input type="text" label="Shoot start date" outline />
                    </mdb-col>
                    <mdb-col>
                      <mdb-input type="text" label="Shoot end date" outline />
                    </mdb-col>
                  </mdb-row>
                  <mdb-row>
                    <mdb-col>
                      <div class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="defaultUnchecked2"
                        />
                        <label
                          class="custom-control-label"
                          for="defaultUnchecked2"
                          >It's a one day shoot</label
                        >
                      </div>
                    </mdb-col>
                  </mdb-row>

                  <mdb-input
                    type="textarea"
                    placeholder="Enter more shoot details"
                    outline
                    :rows="6"
                  />
                </div>

                <!--MOBILE VIEW-->

                <div class="container mobile-only">
                  <mdb-input label="Choose a category" />
                  <mdb-input label="Country" />
                  <mdb-input label="State" />
                  <mdb-input label="Address Line 1" />
                  <mdb-input label="Address Line 2" />
                  <mdb-input label="Shoot start date" />
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="defaultUnchecked"
                    />
                    <label class="custom-control-label" for="defaultUnchecked"
                      >It's a one day shoot</label
                    >
                  </div>
                  <mdb-input label="Shoot end date" />
                  <mdb-input label="Enter more shoot detail" />
                </div>
                <!--- MOBILE VIEW -->
              </div>

              <div class="text-center mt-4">
                <button
                  type="button"
                  style="width: 40%;color:#fff"
                  class="btn btn-p btn-rounded btn-peexoo btn-outline-primary mr-5"
                >
                  CANCEL
                </button>
                <button
                  type="button"
                  style="width: 40%;color:#fff"
                  @click="openOverlay()"
                  class="btn btn-p btn-rounded btn-peexoo"
                >
                  BOOK NOW
                </button>
              </div>
            </form>
          </div>
        </div>
        <!-- .row end -->
      </div>
      <!-- .container END -->
    </section>
    <!-- end business info section -->

    <Footer />
    <Menu />
  </div>
</template>
<script>
function opn() {}

import Header from "../components/Header";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import CommunityHeader from "../components/community-header";
import Banner from "../components/Banner";
import { mdbInput, mdbContainer, mdbRow, mdbCol } from "mdbvue";

export default {
  name: "book-a-shot",
  components: {
    Banner,
    Header,
    Footer,
    Menu,
    CommunityHeader,
    mdbInput,
    mdbContainer,
    mdbRow,
    mdbCol
  },
  methods: {
    bookNow() {
      this.closeOverlay();
      this.isSuccessful = true;
    },
    showBookingFormWithPackage() {
      this.preferenceIsSelected = true;
      this.formWithPackage = true;
    },
    showBookingFormWithOutPackage() {
      this.preferenceIsSelected = true;
      this.formWithPackage = false;
    },
    openOverlay() {
      document.getElementById("myNav").style.display = "block";
      return false;
    },
    closeOverlay() {
      this.cancelBooking = false;
      document.getElementById("myNav").style.display = "none";
      return false;
    },
    goBack() {}
  },
  data: function() {
    return {
      photographerData: { name: "Afroshots" },
      isSuccessful: false,
      preferenceIsSelected: false,
      formWithPackage: false,
      cancelBooking: false
    };
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
/*.custom-control-label::after{*/
/*background-color: #b88710 !important;*/
/*}*/
</style>
