<template>
  <div>
    <transition name="modal">
      <div class="modal-mask" v-show="show">
        <div class="modal-container">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="alert-contain">
                <div class="mt-4 mb-4 modal-top-text text-center">
                  Verify BVN
                </div>
                <div class="">
                  <mdb-input type="text" label="Enter BVN" outline />
                </div>
                <div class="text-center mb-5 mt-4">
                  <button
                    @click="close"
                    style="border-radius: 5px !important;padding: 0 35px !important;"
                    class="mr-3 btn btn-rounded btn-peexoo text-white"
                  >
                    Go Back
                  </button>
                  <button
                    @click="handleSubmit"
                    style="border-radius: 5px !important;padding: 0 30px !important;"
                    class="btn btn-rounded btn-peexoo text-white"
                  >
                    Verify BVN
                  </button>
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
import axios from "axios";
import { mdbInput } from "mdbvue";
export default {
  name: "verify-bvn",
  props: ["show"],
  components: { mdbInput },

  data: function() {
    return {};
  },
  mounted() {
    document.addEventListener("keydown", e => {
      if (this.show && e.keyCode == 27) {
        this.close();
      }
    });
  },

  methods: {
    close: function() {
      this.$emit("close");
    },
    handleSubmit: function() {
      this.$emit("submit-modal");
    }
  }
};
</script>
<style scoped>
.progress-bar {
  background: #ffb603 !important;
}
.prgsuccess {
  background: #4bb543 !important;
}
.modal-top-text {
  font-family: Lora !important;
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  color: #4d4d4d;
}
.modal-info-text {
  font-size: 16px;
  font-weight: 400;
  color: #4d4d4d;
}

.dzone {
  width: 100%;
  height: 300px;
  border: 2px dashed #ccc;
  color: #ccc;
  line-height: 300px;
  text-align: center;
  background: #fff;
}

.dzone.dragover {
  border-color: #000;
  color: #000;
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

.modal-content {
  padding-left: 50px !important;
  padding-right: 50px !important;
  background: #fffdf7 !important;
}

.log {
  color: #b58000 !important;
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

.width-15 {
  width: 15% !important;
}

.width-85 {
  width: 85% !important;
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

.alert-contain p.text-inside {
  font-family: "Montserrat";
  font-size: 16px;
  font-weight: normal;
  color: #4d4d4d !important;
  padding: 10px 0 10px;
}

.btn.btn-peexoo {
  padding: 0 20px !important;
  text-transform: none !important;
}

p {
  margin-bottom: 0 !important;
}
.modal-dialog {
  width: 600px !important;
}
</style>
