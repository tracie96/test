<template>
  <mdb-row>
    <mdb-card>
      <mdb-view hover>
        <a href="#!" @mouseover="active = !active" @mouseout="active = !active">
          <mdb-card-image
            src="https://laundry.abimswaketouch.com/images/kelechi-amadi.png"
            alt="Card image cap"
          >
          </mdb-card-image>
          <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
          <span v-show="active" class="ic"
            ><i class="fa fa-heart-o text-white"></i> 31k</span
          >
          <span v-show="active" class="id">
            <i style="margin-right:5px" class="fa fa-camera text-white"></i>
            <i class="fa fa-video-camera text-white"></i>
          </span>
        </a>
      </mdb-view>
      <mdb-card-body>
        <mdb-card-title :username="username">{{ username }}</mdb-card-title>
        <span class="mobile-only">
          <img class="sv" src="../assets/images/icons/heart-outline.svg" />
          32.1K
          <img
            class="sv"
            style="margin-right:4px"
            src="../assets/images/icons/photo-camera.svg"
          />
          <img class="sv" src="../assets/images/icons/movie-clapper-open.svg" />
        </span>
        <mdb-card-text style="margin-top:5px" :desc="desc">{{
          desc
        }}</mdb-card-text>

        <router-link to="/photographer">
          <button style="color:#fff" class="btn btn-p btn-rounded btn-peexoo">
            Book now
          </button>
        </router-link>
      </mdb-card-body>
    </mdb-card>
  </mdb-row>
</template>
<script>
import {
  mdbRow,
  mdbCard,
  mdbCardImage,
  mdbCardBody,
  mdbCardTitle,
  mdbCardText,
  mdbView,
  mdbMask
} from "mdbvue";

export default {
  name: "card-list",
  props: ["username", "desc"],
  components: {
    mdbRow,
    mdbCard,
    mdbCardImage,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbView,
    mdbMask
  },
  data: function() {
    return {
      active: false
    };
  },
  methods: {
    mouseOver: function() {
      this.active = !this.active;
    }
  }
};
</script>
<style lang="scss" scoped>
.ic {
  position: absolute;
  z-index: 1000;
  top: 18px;
  left: 24px;
  color: #fff !important;
  font-family: "Montserrat" !important;
}
.sv {
  margin-top: -2px;
}
.id {
  position: absolute;
  z-index: 1000;
  top: 18px;
  right: 24px;
  color: #fff !important;
  font-family: "Montserrat" !important;
}
.mobile-only {
  display: none;
}
@media (max-width: 480px) {
  .card {
    margin-right: 0 !important;
    border-radius: 0 !important;
    margin-bottom: 0 !important;
  }
  .m-card {
    margin-bottom: 5px !important;
  }
  .cbody {
    height: 54px !important;
    text-align: center;
    padding: 20px;
  }
  .text10 {
    font-size: 10px !important;
    color: #b58000 !important;
  }
  .mobile-only {
    display: block;
  }
}
</style>
