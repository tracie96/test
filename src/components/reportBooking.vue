<template>
  <div>
    <success
      :show="showSuccessModal"
      @close="showSuccessModal = false"
    ></success>
    <transition name="modal">
      <div class="modal-mask" v-show="show">
        <div class="modal-container">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="alert-contain">
                <p class="text-inside">
                  Help us understand the problem. What issue with Kelechi Amadi
                  Obi are you reporting?
                </p>
                <div class="form-check mb-2">
                  <input
                    class="form-check-input"
                    v-model="reason"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios1"
                    value="option1"
                    checked
                  />
                  <label class="form-check-label" for="exampleRadios1">
                    He didn’t deliver as expected.
                  </label>
                </div>
                <div class="form-check mb-2">
                  <input
                    class="form-check-input"
                    v-model="reason"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios2"
                    value="option2"
                    checked
                  />
                  <label class="form-check-label" for="exampleRadios2">
                    He was rude and uncouth
                  </label>
                </div>
                <div class="form-check mb-2">
                  <input
                    class="form-check-input"
                    v-model="reason"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios3"
                    value="option3"
                    checked
                  />
                  <label class="form-check-label" for="exampleRadios3">
                    He was never puntual
                  </label>
                </div>
                <div class="form-check mb-2">
                  <input
                    class="form-check-input"
                    v-model="reason"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios4"
                    value="option4"
                    checked
                  />
                  <label class="form-check-label" for="exampleRadios4">
                    Others
                  </label>
                </div>
                <div class="form-group" v-show="reason === 'option4'">
                  <textarea
                    placeholder="Kindly comment on the issue that are you reporting."
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
                <div class="text-center mb-5 mt-4">
                  <button
                    @click="close"
                    style="border-radius: 5px !important"
                    class="mr-3 btn btn-rounded btn-peexoo text-white"
                  >
                    GO BACK
                  </button>
                  <button
                    @click="report"
                    style="border-radius: 5px !important"
                    class="btn btn-rounded btn-peexoo text-white"
                  >
                    REPORT
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
import success from "./success-modal";
export default {
  name: "report-photographer",
  props: ["show"],
  components: { success },

  data: function() {
    return {
      reason: "option1",
      showSuccessModal: false
    };
  },
  mounted: function() {
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
    report: function() {
      this.close();
      this.showSuccessModal = true;
    }
  }
};
</script>
<style scoped>
input[type="radio"] {
  -webkit-appearance: none;
  width: 16px;
  height: 16px;
  border: 1px solid #ffb603;
  border-radius: 50%;
  outline: none;
}
input[type="radio"]:before {
  content: "";
  display: block;
  width: 60%;
  height: 60%;
  margin: 22%;
  border-radius: 50%;
}

input[type="radio"]:checked:before {
  background: #ffb603;
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
  padding-left: 30px !important;
  padding-right: 30px !important;
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
  padding: 35px 0 10px;
}
</style>
