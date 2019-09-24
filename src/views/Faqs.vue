<template>
  <div>
    <PHeader />
    <div class="desktop">
      <div class="black-header">
        <h3>FAQs</h3>
        <p style="margin-top: -100px">
          Got any questions?
        </p>
      </div>
      <div class="row body-div">
        <div class="col-md-2">
          <ul class="mg-top">
            <a href="#">
              <li @click="current = 1" class="list-group-item">About</li>
            </a>
            <a href="#">
              <li v-on:click="reg" class="list-group-item" @click="current = 2">
                Booking
              </li>
            </a>
            <a href="#">
              <li class="list-group-item" @click="current = 3">Signing Up</li>
            </a>
            <a>
              <li class="list-group-item" @click="current = 4">Pricing</li>
            </a>
            <a>
              <li class="list-group-item" @click="current = 5">Safety</li>
            </a>
            <a>
              <li class="list-group-item" @click="current = 6">
                Booking and Review
              </li>
            </a>
            <a>
              <li class="list-group-item" @click="current = 7">
                Getting your Photos
              </li>
            </a>
            <a>
              <li class="list-group-item" @click="current = 8">Find my Face</li>
            </a>
            <a>
              <li class="list-group-item" @click="current = 9">
                FAQs - For Photographers
              </li>
            </a>
            <a>
              <li class="list-group-item" @click="current = 10">Signup</li>
            </a>
            <a>
              <li class="list-group-item" @click="current = 11">
                Creating a Profile
              </li>
            </a>

            <a>
              <li class="list-group-item" @click="current = 12">
                Compensation & Payment
              </li>
            </a>
            <a>
              <li class="list-group-item" @click="current = 13">
                Rating & Review
              </li>
            </a>
            <a>
              <li class="list-group-item" @click="current = 14">
                Customer Photos
              </li>
            </a>
          </ul>
        </div>
        <transition name="fade" mode="out-in">
          <AboutFAQ v-if="current === 1" />
          <BookingFAQ v-if="current === 2" />
          <signupFAQ v-if="current === 3" />
          <pricingFAQ v-if="current === 4" />
          <safetyFAQ v-if="current === 5" />
          <bookandreviewFAQ v-if="current === 6" />
          <gettingyourphotosFAQ v-if="current === 7" />
          <findmyfaceFAQ v-if="current === 8" />
          <generalFAQ v-if="current === 9" />
          <sigupFAQ v-if="current === 10" />
          <createprofileFAQ v-if="current === 11" />
          <compandpaymentFAQ v-if="current === 12" />
          <ratingandreviewFAQ v-if="current === 13" />
          <customerphotosFAQ v-if="current === 14" />
        </transition>
      </div>
    </div>

    <div class="for-mobile">
      <h3>
        FAQs
      </h3>
      <div class="row">
        <div class="col-6" v-for="(faq, key) in Faqs" :key="key">
          <div class="card faq-card-item">
            <router-link class="log" :to="{ path: '/faqs/mobile/' + faq.id }">{{
              faq.title
            }}</router-link>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    <Menu />
  </div>
</template>
<script>
0;
import PHeader from "../components/PHeader";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import AboutFAQ from "../components/faqs/about";
import BookingFAQ from "../components/faqs/booking";
import signupFAQ from "../components/faqs/signup";
import pricingFAQ from "../components/faqs/pricing";
import ratingandreviewFAQ from "../components/faqs/ratingandreview";
import safetyFAQ from "../components/faqs/safety.vue";
import bookandreviewFAQ from "../components/faqs/bookingreview";
import gettingyourphotosFAQ from "../components/faqs/gettingyourphotos.vue";
import findmyfaceFAQ from "../components/faqs/findmyface";
import generalFAQ from "../components/faqs/general.vue";
import sigupFAQ from "../components/faqs/sigup.vue";
import createprofileFAQ from "../components/faqs/createprofile.vue";
import compandpaymentFAQ from "../components/faqs/compandpayment.vue";
import ratingandreview from "../components/faqs/ratingandreview.vue";
import customerphotosFAQ from "../components/faqs/customerphotos.vue";

// import { fabricateEventRange } from '@fullcalendar/core/structs/date-span';
export default {
  name: "faqs",
  components: {
    PHeader,
    Footer,
    Menu,
    AboutFAQ,
    BookingFAQ,
    signupFAQ,
    pricingFAQ,
    ratingandreviewFAQ,
    safetyFAQ,
    bookandreviewFAQ,
    gettingyourphotosFAQ,
    findmyfaceFAQ,
    generalFAQ,
    sigupFAQ,
    createprofileFAQ,
    compandpaymentFAQ,
    ratingandreviewFAQ,
    customerphotosFAQ
  },
  data: function() {
    return {
      isAbout: false,
      isBilling: true,
      isReg: false,
      current: 0,
      Faqs: [
        {
          id: 1,
          title: "About"
        },
        {
          id: 2,
          title: "Registration"
        },
        {
          id: 3,
          title: "Something"
        },
        {
          id: 4,
          title: "Billing"
        },
        {
          id: 5,
          title: "Billing"
        },
        {
          id: 6,
          title: "Billing"
        }
      ]
    };
  },

  mounted() {
    this.current = 1;
  },
  methods: {
    // about() {
    //     this.isAbout = true
    //     this.isReg = false
    //     this.isBilling= false
    // },
    billing() {
      this.isBilling = true;
      this.isReg = false;
    },
    reg() {
      this.isBilling = false;
      this.isReg = true;
    }
  }
};
</script>
<style>
.card {
  box-shadow: none !important;
}
@media screen and (max-width: 560px) {
  .for-mobile {
    display: block !important;
  }

  .desktop {
    display: none;
  }

  .for-mobile {
    margin-top: 10px;
    padding-left: 22px;
    padding-right: 22px;
    margin-bottom: 50px;
  }
  .col-6 {
    padding-right: 8px !important;
    padding-left: 8px !important;
    margin-bottom: 10px;
  }
  .for-mobile h3 {
    font-family: Lora;
    font-size: 24px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #414141;
    margin-bottom: 30px;
  }

  .faq-card-item {
    height: 91px;
    text-align: center;
    padding-top: 38px;
    border-radius: 5px;
    font-size: 16px;
    box-shadow: 0 3px 12px -2px rgba(223, 223, 223, 0.5);
    background-color: #ffffff;
  }
}

.for-mobile {
  display: none;
}
.mb-0 a.collapsed {
  color: #474747 !important;
}

.body-div {
  margin-bottom: 200px;
}

a {
  color: #474747 !important;
}

a:hover {
  color: #7b7a76 !important;
  text-decoration: none;
}

.side-list {
  margin-top: 154px;
}

.list-group-item {
  background-color: #fefbf3 !important;
  border: none !important;
  margin-left: 40px;
}

.mg-top {
  margin-top: 60px;
}

#accordion {
  border-left: 1px solid #979797;
}

#accordion p {
  padding: 0.75rem 2.25rem;
  font-family: Lora;
  font-size: 36px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #474747;
}

.card-header,
.card-body {
  background: rgb(254, 251, 243) !important;
}

.card-body {
  padding: 2.25rem !important;
}

.card-header {
  border-bottom: none !important;
  font-size: 18px;
  padding: 0.75rem 2.25rem !important;
}

.card {
  border: none !important;
}
.mb-0 a {
  color: #ffb503 !important;
  font-family: "Montserrat";
}
.mb-0 {
  border-bottom: solid 0.5px #979797;
  padding-bottom: 25px;
}

.card .card-header a:not(.collapsed) .rotate-icon {
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
}
.card .fa-angle-down {
  float: right;
  color: #474747 !important;
  font-size: 25px;
}
</style>
