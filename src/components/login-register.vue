<template>
  <div>
    <modal
      :show="showConfirmPasswordModal"
      @close="showConfirmPasswordModal = false"
    ></modal>
    <transition name="modal">
      <div class="modal-mask" v-show="show">
        <div class="modal-container">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <a> <i class="fa fa-times close-btn" @click="close"></i></a>
              <div class="row">
                <div class="col-md-12">
                  <div>
                    <!-- Nav tabs -->
                    <ul class="nav nav-tabs nav-justified" role="tablist">
                      <li role="presentation" class="active li-m">
                        <a
                          href="#signin"
                          aria-controls="signin"
                          role="tab"
                          data-toggle="tab"
                          class="active"
                          >Sign in</a
                        >
                      </li>
                      <li role="presentation" class="li-m">
                        <a
                          href="#signup"
                          aria-controls="signup"
                          role="tab"
                          data-toggle="tab"
                          >Sign Up</a
                        >
                      </li>
                    </ul>
                    <!-- Tab panes -->
                    <div class="tab-content">
                      <div role="tabpanel" class="tab-pane active" id="signin">
                        <form
                          class="form-m"
                          id="loginform"
                          @submit.prevent="login"
                        >
                          <mdb-input
                            v-validate="'required|email'"
                            type="email"
                            v-model="loginForm.email"
                            name="email"
                            label="Enter your email"
                            outline
                          />
                          <span class="err">{{ errors.first("email") }}</span>

                          <mdb-input
                            v-validate="'required'"
                            type="password"
                            v-model="loginForm.password"
                            name="password"
                            label="Enter your password"
                            outline
                          />
                          <span class="err">{{
                            errors.first("password")
                          }}</span>
                          <div class="row">
                            <div class="col-md-6">
                              <div class="checkbox">
                                <label class="check-label">
                                  <input type="checkbox" /> keep me Logged in
                                </label>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <a class="pass-label" for=""
                                >Forgot your password?</a
                              >
                            </div>
                          </div>
                          <div class="row text-center" style="margin-top:20px">
                            <div class="col-md-6 offset-md-3">
                              <button
                                style="width:100%"
                                class="btn btn-rounded btn-peexoo text-white"
                              >
                                {{ signInText }}
                              </button>
                            </div>
                          </div>
                          <div
                            class="login-flex-parent"
                            style="margin-top:40px"
                          >
                            <div class="flex-child-edge"></div>
                            <div class="login-flex-child-text">
                              or sign in with
                            </div>
                            <div class="flex-child-edge"></div>
                          </div>
                          <div class="row text-center" style="margin-top:20px">
                            <div class="col-md-6 offset-md-3">
                              <a href="#"><i class="fa fa-facebook"></i></a>
                              <a href="#"><i class="fa fa-google"></i></a>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div role="tabpanel" class="tab-pane" id="signup">
                        <form
                          class="form-m"
                          id="registerform"
                          @submit.prevent="register"
                        >
                          <mdb-input
                            v-validate="'required'"
                            v-model="registerForm.first_name"
                            name="firstname"
                            type="text"
                            label="Enter your first name"
                            outline
                          />
                          <span class="err">{{
                            errors.first("firstname")
                          }}</span>

                          <mdb-input
                            v-validate="'required'"
                            v-model="registerForm.last_name"
                            name="lastname"
                            type="text"
                            label="Enter your last name"
                            outline
                          />
                          <span class="err">{{
                            errors.first("lastname")
                          }}</span>

                          <mdb-input
                            v-validate="'required|email'"
                            v-model="registerForm.email"
                            name="email"
                            type="email"
                            label="Enter your email"
                            outline
                          />
                          <span class="err">{{ errors.first("email") }}</span>

                          <mdb-input
                            v-validate="'required'"
                            v-model="registerForm.password"
                            name="password"
                            type="password"
                            label="Enter your password"
                            outline
                          />
                          <span class="err">{{
                            errors.first("password")
                          }}</span>
                          <div class="checkbox">
                            <label
                              ><input type="checkbox" v-model="isChecked" /> I
                              am a photographer</label
                            >
                          </div>
                          <mdb-input
                            v-if="isChecked"
                            v-model="registerForm.businessName"
                            name="businessName"
                            type="text"
                            label="Enter your Business name"
                            outline
                          />

                          <div class="row">
                            <div class="col-md-12">
                              <div class="checkbox">
                                <label class="check-label">
                                  <input v-model="checked" type="checkbox" /> I
                                  have agreed to the
                                  <a class="terms" href=""
                                    >terms and conditions </a
                                  >of peexo.ai
                                </label>
                              </div>
                            </div>
                          </div>
                          <div class="row text-center" style="margin-top:20px">
                            <div class="col-md-6 offset-md-3">
                              <button
                                :disabled="isDisabled"
                                style="width:100%"
                                class="btn btn-rounded btn-peexoo text-white"
                              >
                                {{ signUpText }}
                              </button>
                            </div>
                          </div>
                          <div
                            class="login-flex-parent"
                            style="margin-top:40px"
                          >
                            <div class="flex-child-edge"></div>
                            <div class="login-flex-child-text">
                              or sign up with
                            </div>
                            <div class="flex-child-edge"></div>
                          </div>
                          <div class="row text-center" style="margin-top:20px">
                            <div class="col-md-6 offset-md-3">
                              <a href="#"><i class="fa fa-facebook"></i></a>
                              <a href="#"><i class="fa fa-google"></i></a>
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
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import modal from "./confirm-password";
import { mdbInput } from "mdbvue";
import { mapActions } from "vuex";

export default {
  name: "login-register-modal",
  props: ["show"],
  components: {
    modal,
    mdbInput
  },
  data: function() {
    return {
      checked: "",
      isChecked: false,
      signUpText: "SIGN UP",
      signInText: "SIGN IN",
      loginForm: {
        email: "",
        password: ""
      },
      registerForm: {
        email: "",
        password: "",
        first_name: "",
        last_name: "",
        businessName: ""
      },
      showloginModal: false,
      showConfirmPasswordModal: false,
      loading: true
    };
  },
  computed: {
    isDisabled: function() {
      return !this.checked;
    }
  },
  mounted: function() {
    document.addEventListener("keydown", e => {
      if (this.showloginModal && e.keyCode == 27) {
        this.close();
      }
    });
  },
  methods: {
    ...mapActions("general", ["loginAction"]),
    close: function() {
      this.$emit("close");
      this.signInText = "SIGN IN";
      this.signUpText = "SIGN UP";
    },
    login(e) {
      if (this.loginForm.email && this.loginForm.password) {
        this.signInText = "Logging in...";
        this.$store
          .dispatch("general/login", this.loginForm)
          .then(() => {
            this.$router.push({
              name: "bookings"
            });
          })
          .catch(err => {
            console.log(err);
            this.signInText = "SIGN IN";
          });
      }
    },
    register(e) {
      if (
        this.registerForm.first_name &&
        this.registerForm.last_name &&
        this.registerForm.email &&
        this.registerForm.password
      ) {
        this.signUpText = "Signing up...";
        this.$store
          .dispatch("general/register", this.registerForm)
          .then(() => {
            this.close();
            this.showConfirmPasswordModal = true;
          })
          .catch(err => {
            console.log(err);
            this.signUpText = "SIGN UP";
          });
      }
    }
  }
};
</script>
<style scoped>
.err {
  font-size: 12px !important;
  color: red !important;
}

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

.li-m {
  padding-top: 15px;
  text-align: center;
  background: #fefbf3;
  justify-content: normal;
}

.li-m a {
  padding: 18px 75px;
  color: #4d4d4d !important;
}

a.active {
  background: #ffb503;
}

.form-m {
  padding: 44px 40px 27px 40px;
  background: #fefbf3;
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
  font-size: 12px;
}

.login-flex-parent {
  display: flex;
  width: 100%;
  height: 0px;
  align-items: center;
}

.login-flex-child-text {
  flex-basis: auto;
  flex-grow: 0;
  margin: 0px 25px 0px 25px;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  color: #4d4d4d;
}

.width-15 {
  width: 15% !important;
}

.width-85 {
  width: 85% !important;
}

.flex-parent {
  display: flex;
  width: 300px;
  height: 20px;
  align-items: center;
  margin-bottom: 20px;
}

.flex-child-edge {
  flex-grow: 2;
  height: 1px;
  background-color: #000;
  border: 1px #979797 solid;
}

.flex-child-text {
  flex-basis: auto;
  flex-grow: 0;
  margin: 0px 5px 0px 5px;
  text-align: center;
  font-size: 11px;
}

.fa-facebook {
  background: #3b5998;
  padding: 8px 12px 1px 12px;
  border-radius: 50%;
  color: #fff;
  height: 33px;
  margin-right: 10px;
}

.fa-google {
  background: #db4a39;
  padding: 8px 9px 0px 11px;
  border-radius: 50%;
  color: #fff;
  height: 33px;
}

.terms {
  color: #be7e00 !important;
  font-family: "Montserrat";
}
</style>
