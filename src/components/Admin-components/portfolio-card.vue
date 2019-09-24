<template>
  <mdb-row>
    <mdb-card>
      <mdb-view hover>
        <div @mouseover="active = !active" @mouseout="active = !active">
          <mdb-card-image
            class="album-img"
            :src="src"
            alt="Card image cap"
          ></mdb-card-image>
          <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
          <span
            v-show="active"
            class="ic dropdown-toggle-split"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            ><i class="fa fa-ellipsis-v text-white"></i
          ></span>

          <div class="dropdown-menu">
            <a class="dropdown-item" href="#"
              ><i class="fa fa-trash-o"></i> Empty</a
            >
            <a class="dropdown-item" href="#"
              ><i class="fa fa-clone"></i> Move all images</a
            >
          </div>
        </div>
        <div class="p-3">
          <router-link :id="id" :to="'/album/details/' + id" class="">
            <div class="card-text mb-3" :name="name">{{ name }}</div>
          </router-link>
          <div class="clearfix">
            <div class="float-right card-inner-text" :videos="videos">
              {{ videos }} videos
            </div>
            <div class="float-left card-inner-text" :images="images">
              {{ images }} images
            </div>
          </div>
        </div>
      </mdb-view>
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
  props: ["videos", "images", "src", "name", "id"],
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
  top: 15px;
  left: 15px;
  color: #fff !important;
  font-family: "Montserrat" !important;
  cursor: pointer;
}
a.dropdown-item {
  font-size: 14px !important;
}
.dropdown-item:focus,
.dropdown-item:hover {
  background-color: #ffb603 !important;
}
.p-3 {
  z-index: 1 !important;
}
.sv {
  margin-top: -2px;
}

.card-text {
  font-size: 14px !important;
}

.card-inner-text {
  font-size: 10px;
  color: #4d4d4d;
}

.id {
  position: absolute;
  z-index: 1000;
  top: 15px;
  right: 24px;
  color: #fff !important;
  font-family: "Montserrat" !important;
  cursor: pointer;
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
