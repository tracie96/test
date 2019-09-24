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
        <div>
          <p class="mt-4 text-center">
            Order was placed successfully
          </p>

          <p class="text-center monteserat">
            Thank you for trusting us. kindly check your email for more details
            of your order

            <router-link
              style="width:100%"
              class="mt-5 monteserat btn btn-p btn-rounded btn-peexoo btn-new-peexo"
              to="/photos/explore"
              >EXPLORE PHOTOS</router-link
            >
          </p>
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
export default {
  name: "booking",
  components: {
    PHeader,
    Footer,
    Menu
  },
  data: function() {
    return {
      locationDetails: false
    };
  }
};
</script>
<style scoped>
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
  font-weight: 400;
}

.btn.btn-peexoo {
  color: #fff !important;
  border-radius: 6px !important;
  padding: 0 20px !important;
  margin: 3rem 0 0 0 !important;
}

.custom-select-lg {
  font-size: 1rem !important;
}

.check-label {
  font-size: 14px !important;
  font-weight: 500;
  color: #979797 !important;
}
.back {
  color: #b7840a !important;
}
</style>
