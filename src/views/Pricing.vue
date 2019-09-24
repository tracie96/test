<template>
  <div class="">
    <PHeader />
    <div class="pricing-div">
      <h3>Pricing</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>
    </div>
    <div class="container">
      <div class="row mobile-only">
        <div class="pr-t">
          Pricing
        </div>
        <div class="col-md-12 pr-head">
          Find my face
          <a href="#"
            ><i
              v-tooltip="{ html: 'find-face' }"
              class="text-white fa fa-question-circle"
            ></i
          ></a>
        </div>
        <div id="find-face">
          <h3>Find my face</h3>
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h4>
        </div>
        <div class="col-md-12 pr-detail">
          N500/event
        </div>
        <div class="col-md-12 pr-mem">
          Peexomemories
          <i
            v-tooltip="{ html: 'tooltipContent' }"
            class="text-white fa fa-question-circle"
          ></i>
        </div>
      </div>
      <div class="row mobile-only">
        <div class="mg-r  pr-mem-detail">
          N7,000 for 6 Months
        </div>
        <div class=" mg-r pr-mem-detail">
          N12,500 for 1 Year
        </div>
        <div class=" pr-mem-detail last">
          N15,000 for 2 Years
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
  name: "pricing",
  data: function() {
    return {
      msg: "Hello all"
    };
  },
  components: {
    PHeader,
    Footer,
    Menu
  }
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 480px) {
  .pr-t {
    display: block;
    font-family: Lora;
    font-size: 24px;
    font-weight: 700;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #414141;
    margin-top: 120px;
  }
  .pr-head {
    margin-top: 50px !important;
  }
  .pricing-div {
    display: none;
  }

  .mobile-only {
    margin-left: 10px;
    margin-right: 10px;
  }

  .pr-mem-detail {
    width: 100% !important;
    margin-bottom: 11px !important;
    margin-right: 0 !important;
  }

  .mobile-only .last {
    margin-bottom: 30px !important;
  }
}
.text-white {
  color: #fff !important;
}

#find-face h3 {
  font-family: "Montserrat";
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
}
#find-face h4 {
  font-family: "Montserrat";
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
}
.pr-head {
  height: 65px;
  background-color: #4d4d4d;
  font-size: 24px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  padding-top: 18px;
  padding-bottom: 18px;
  margin-top: 125px;
}

.pr-mem {
  height: 65px;
  background-color: #4d4d4d;
  font-size: 24px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  padding-top: 18px;
  padding-bottom: 18px;
  margin-top: 50px;
}

.pr-detail {
  height: 114px;
  box-shadow: 0 3px 12px -2px rgba(203, 203, 203, 0.5);
  background-color: #ffffff;
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #4d4d4d;
  padding-top: 49px;
  padding-bottom: 43px;
  margin-top: 10px;
}

.mg-r {
  margin-right: 18px;
}

.pr-mem-detail {
  width: 32.26%;
  height: 114px;
  box-shadow: 0 3px 12px -2px rgba(203, 203, 203, 0.5);
  background-color: #ffffff;
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #4d4d4d;
  padding-top: 49px;
  padding-bottom: 43px;
  margin-top: 10px;
  margin-bottom: 150px;
}

.pricing-div {
  height: 300px;
  width: 100%;
  text-align: center;
  opacity: 0.88;
  background-color: #141414;
  color: #ffffff;
  padding-top: 158px;
  padding-bottom: 65px;
}

.pricing-div h3 {
  font-family: Lora;
  font-size: 36px;
  font-weight: 700;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
}

.pricing-div p {
  font-size: 16px;
  font-weight: 400;
}
</style>
