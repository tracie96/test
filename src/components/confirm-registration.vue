<template>
  <transition name="modal">
    <div class="modal-mask" v-show="show">
      <div class="modal-container">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <a> <i class="fa fa-times close-btn" @click="close"></i></a>

            <div class="alert-contain">
              <h5>Congratulations, you just got in</h5>

              <div class="container">
                <div class="row">
                  <div class="col-md-4">
                    <img
                      class="def-img"
                      src="../assets/images/afroshots.png"
                      alt="image"
                    />
                  </div>
                  <div class="col-md-4">
                    <img
                      class="def-img"
                      src="../assets/images/afroshots.png"
                      alt="image"
                    />
                  </div>
                  <div class="col-md-4">
                    <img
                      class="def-img"
                      src="../assets/images/afroshots.png"
                      alt="image"
                    />
                  </div>
                </div>
                <p class="text-center mt-4 mb-4">
                  <router-link class="peexo-faded-text" to="/photos/explore">
                    Explore more Photos
                  </router-link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
const base_url = "http://e3d115ec.ngrok.io";

import axios from "axios";
export default {
  name: "confirm-password",
  props: ["show"],
  components: {},

  data: function() {
    return {};
  },
  mounted: function() {
    document.addEventListener("keydown", e => {
      if (this.show && e.keyCode == 27) {
        this.close();
      }
    });
    let token = localStorage.getItem("auth_token", token);
  },
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    },
    currentUser: function() {
      return this.$store.getters.currentUser;
    }
  },
  methods: {
    close: function() {
      this.$emit("close");
    }
  }
};
</script>
<style scoped>
.def-img {
  height: 150px !important;
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

@media (min-width: 576px) {
  .modal-dialog {
    max-width: 600px !important;
    margin: 1.75rem auto;
  }
}

.modal-content {
  padding-left: 30px !important;
  padding-right: 30px !important;
}

.log {
  color: #b58000 !important;
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

.alert-contain h5 {
  font-family: Lora;
  font-size: 36px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #4d4d4d !important;
  padding-top: 50px;
}

.alert-contain p.text-inside {
  font-family: "Montserrat";
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #4d4d4d !important;
  padding: 35px 40px 0 40px;
}
</style>
