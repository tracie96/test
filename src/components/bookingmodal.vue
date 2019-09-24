<template>
  <div>
    <successmodal
      :show="showOrdersuccessfulModal"
      @close="showOrdersuccessfulModal = false"
    ></successmodal>
    <transition name="modal">
      <div class="modal-mask" v-show="show">
        <div class="modal-container">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <i class="fa fa-times close-btn" @click="close"></i>
              <div class="row">
                <div class="col-md-12">
                  <div>
                    <form
                      class="form-m"
                      id="bookingForm"
                      @submit.prevent="submitForm"
                    >
                      <p>
                        Booking
                      </p>
                      <div v-if="!locationDetails">
                        <p id="p-d">
                          Personal Details
                        </p>
                        <div class="row">
                          <div class="col-md-6">
                            <mdb-input
                              type="text"
                              name="firstname"
                              label="First name"
                              outline
                            />
                            <mdb-input
                              type="number"
                              name="phone"
                              label="Phone number"
                              outline
                            />
                          </div>
                          <div class="col-md-6">
                            <mdb-input
                              type="text"
                              name="lastname"
                              label="Last name"
                              outline
                            />
                            <mdb-input
                              type="email"
                              name="email"
                              label="Email"
                              outline
                            />
                          </div>
                          <a
                            style="width: 100%"
                            v-on:click="locationDetails = true"
                            class="btn btn-p btn-rounded btn-peexoo btn-new-peexo"
                            >NEXT</a
                          >
                        </div>
                      </div>
                      <div v-if="locationDetails">
                        <p class="p-d">
                          Shoot Location Details
                        </p>
                        <div class="row">
                          <div class="col-md-6">
                            <select class="custom-select custom-select-lg">
                              <option selected>Country</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                          <div class="col-md-6">
                            <select class="custom-select custom-select-lg ">
                              <option selected>State</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-12">
                            <mdb-input
                              type="text"
                              name="lastname"
                              label="More address description"
                              outline
                            />
                          </div>
                        </div>
                        <p class="p-d">
                          Shoot Details
                        </p>
                        <div class="row">
                          <div class="col-md-12">
                            <select class="custom-select custom-select-lg">
                              <option selected
                                >What kind of service do you require?
                              </option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                        </div>
                        <div class="row mt-3">
                          <div class="col-md-6">
                            <select class="custom-select custom-select-lg">
                              <option selected>Shoot start date</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                          <div class="col-md-6">
                            <select class="custom-select custom-select-lg">
                              <option selected>Shoot end date</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                        </div>
                        <div class="row mt-3">
                          <div class="col-md-12">
                            <div class="checkbox">
                              <label class="check-label">
                                <input type="checkbox" /> It’s a one day shoot
                              </label>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-12">
                            <mdb-input
                              type="textarea"
                              placeholder="What other details would you like us to know about"
                              outline
                              :rows="3"
                            />
                          </div>
                          <div class="col-md-6">
                            <a
                              style="width:100%;margin:0"
                              v-on:click="locationDetails = false"
                              class="btn btn-p btn-rounded btn-peexoo btn-new-peexo"
                              >BACK</a
                            >
                          </div>
                          <div class="col-md-6">
                            <button
                              style="width:100%;margin:0"
                              class="btn btn-p btn-rounded btn-peexoo btn-new-peexo"
                            >
                              PLACE ORDER
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import { mdbInput } from "mdbvue";
import successmodal from "./Order-successful";

export default {
  name: "booking-modal",
  props: ["show"],
  components: {
    mdbInput,
    successmodal
  },
  data: function() {
    return {
      locationDetails: false,
      bookingForm: {
        email: "",
        password: ""
      },
      showloginModal: false,
      showOrdersuccessfulModal: false,
      loading: true
    };
  },
  mounted: function() {
    document.addEventListener("keydown", e => {
      if (this.show && e.keyCode == 27) {
        this.close();
      }
    });
    // console.log('first time component :' + this.show)
    // //console.log('After click :' + this.show)
    // document.addEventListener("keydown", (e) => {
    //     if (this.showloginModal && e.keyCode == 27) {
    //         this.close();
    //     }
    // });
  },
  updated: function() {
    //locationDetails = false
  },
  methods: {
    close: function() {
      this.$emit("close");
    },

    submitForm(e) {
      // axios.post('/api/auth/register', this.registerForm).then(response => {
      //     toastr['success'](response.data.message);
      //     //this.$router.push('/user');
      // }).catch(error => {
      //     toastr['error'](error.response.data.message);
      // });
      this.close();
      this.showOrdersuccessfulModal = true;
    }
  }
};
</script>
<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
}

.md-form.md-outline label {
  font-size: 13px !important;
  top: 5px !important;
}

.col-md-6,
.col-md-12 {
  padding-right: 5px !important;
  padding-left: 5px !important;
}

.btn.btn-peexoo {
  border-radius: 8px !important;
}

.custom-select-lg {
  font-size: 1rem !important;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3) !important;
  display: flex;
  align-items: center;
  justify-content: center;
}

#confirm-modal {
  background: #fefbf3;
}

.close-btn {
  position: absolute;
  right: -1rem;
  top: -1rem;
  z-index: 1000;
  background: #d8d8d8;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  color: #4f4f4f;
  font-weight: normal;
  padding: 10px 12px;
}

.fa-times {
  font-size: 20px;
}

.form-m {
  padding: 44px 40px 27px 40px;
  background: #fefbf3;
}

.form-m p {
  font-family: Lora;
  font-size: 38px;
  font-weight: bold;
  color: #4d4d4d;
}

.form-m p.p-d {
  font-family: Lora;
  font-size: 24px;
  font-weight: bold;
  color: #4d4d4d;
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
}

.check-label {
  font-family: "Montserrat";
  font-size: 16px;
}

.width-15 {
  width: 15% !important;
}

.width-85 {
  width: 85% !important;
}
</style>
