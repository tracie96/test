<template>
  <div>
    <PHeader />
    <div class="for-mobile">
      <div style="float:right">
        <router-link class="back" to="/photographer">
          Profile << Booking</router-link
        >
      </div>
      <br />
      <br />
      <div class="col-12 user-title">
        Afroshots
        <img
          style="width:4%"
          class="ml-2"
          src="../assets/images/google-verified.svg"
          alt=""
        />
        <div v-if="!locationDetails">
          <p class="mt-2">
            Personal Details
          </p>

          <mdb-input
            class="monteserat"
            type="text"
            name="firstname"
            label="First name"
            outline
          />
          <mdb-input
            class="monteserat"
            type="text"
            name="lastname"
            label="Last name"
            outline
          />
          <mdb-input
            class="monteserat"
            type="email"
            name="email"
            label="Email"
            outline
          />
          <mdb-input
            class="monteserat"
            type="number"
            name="phone"
            label="Phone number"
            outline
          />
          <a
            style="width: 100%;margin:0"
            v-on:click="locationDetails = true"
            class="monteserat btn btn-p btn-rounded btn-peexoo btn-new-peexo"
            >NEXT</a
          >
        </div>
        <div v-if="locationDetails">
          <p class="mt-2">
            Shoot Location Details
          </p>

          <select class="monteserat custom-select custom-select-lg mb-3">
            <option selected>Country</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <select class="monteserat custom-select custom-select-lg mt-2">
            <option selected>State</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <mdb-input
            class="monteserat"
            type="text"
            name="description"
            label="More address "
            outline
          />
          <p class="mt-2">
            Shoot Details
          </p>
          <select class=" monteserat custom-select custom-select-lg mb-3">
            <option selected>What kind of service?</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <select class="monteserat custom-select custom-select-lg mt-2">
            <option selected>Shoot starting date</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>

          <div class="checkbox mt-2">
            <label class="monteserat check-label">
              <input type="checkbox" /> It’s a one day shoot
            </label>
          </div>
          <select class="monteserat custom-select custom-select-lg mt-3">
            <option selected>Shoot ending date</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <mdb-input
            class="monteserat"
            type="textarea"
            placeholder="What other details would you like us to know about"
            outline
            :rows="3"
          />
          <div class="row">
            <div class="col-6">
              <a
                style="width:100%;margin:0"
                v-on:click="locationDetails = false"
                class="monteserat btn btn-p btn-rounded btn-peexoo btn-new-peexo"
                >BACK</a
              >
            </div>
            <div class="col-6">
              <a
                style="width:100%;margin:0"
                class="monteserat btn btn-p btn-rounded btn-peexoo btn-new-peexo"
                >PLACE ORDER</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    <Menu />
  </div>
</template>
<script>
import PHeader from "../components/PHeader";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import { mdbInput } from "mdbvue";

export default {
  name: "booking",
  components: {
    PHeader,
    Footer,
    Menu,
    mdbInput
  },
  data: function() {
    return {
      locationDetails: false
    };
  }
};
</script>
<style scoped>
.back {
  color: #b58000 !important;
}
.monteserat {
  font-family: "Montserrat" !important;
}
.for-mobile {
  margin-top: 20px !important;
  padding: 0 15px 0 15px !important;
}
.user-title {
  font-family: Lora;
  font-size: 24px !important;
  font-weight: bold;
  color: #4d4d4d !important;
}
.user-title p {
  font-size: 20px !important;
}
.btn.btn-peexoo {
  border-radius: 6px !important;
  padding: 0 20px !important;
}
.custom-select-lg {
  font-size: 1rem !important;
}
.check-label {
  font-size: 14px !important;
  font-weight: 500;
  color: #979797 !important;
}
</style>
