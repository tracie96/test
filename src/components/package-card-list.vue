<template>
  <div>
    <div class="card desktop" style="width: 20rem;">
      <div class="card-body " style="height: 170px !important;">
        <!-- POP UP HTML -->
        <div id="popUp" class="overlay">
          <p>150 SOFT COPIES</p>
          <p>150 SOFT COPIES</p>
          <p>150 SOFT COPIES</p>
          <p>150 SOFT COPIES</p>
        </div>

        <div class="row">
          <div class="col-12 pb-2">
            <h5
              class="card-title "
              style="font-weight: bold; font-size: 24px;     float: left;"
            >
              {{ name }}
            </h5>
          </div>
          <div class="col-12 pb-4">
            <h6
              class="card-subtitle mb-2 text-muted "
              style="font-size: 24px; float: left;"
            >
              ₦{{ price }}
            </h6>
          </div>
          <div class="col-6">
            <p
              class="card-text"
              style="font-size: 14px !important; float: left; color: #4D4D4D"
            >
              5 ITEMS
              <span>
                <a id="questionMark" @click="popOverDetails"
                  ><i
                    class="fa fa-question-circle ml-2 font-weight-bolder"
                    style="color: #FFB503 !important; cursor: pointer"
                  ></i
                ></a>
              </span>
            </p>
          </div>
          <div class="col-6">
            <!--<router-link to="/photographer">-->
            <a
              class="card-link justify-content-end font-weight-bold"
              style="font-size: 14px !important; color: #FFB503 !important; float: right; "
              @click="bookThis()"
              >BOOK THIS</a
            >
            <!--</router-link>-->
          </div>
        </div>
      </div>
    </div>
    <div class="card mobile-only" :style="{ borderLeft: borderColor }">
      <div class="card-body " style="height: 170px !important;">
        <div class="row">
          <div class="col-12 pb-2">
            <h5
              class="card-title "
              style="font-weight: bold; font-size: 24px;     float: left;"
            >
              {{ name }}
            </h5>
          </div>
          <div class="col-12 pb-4">
            <h6
              class="card-subtitle mb-2 text-muted "
              style="font-size: 24px; float: left;"
            >
              ₦{{ price }}
            </h6>
          </div>
          <div class="col-6">
            <p
              class="card-text"
              style="font-size: 14px !important; float: left; color: #4D4D4D"
            >
              5 ITEMS<span
                ><i
                  class="fa fa-question-circle ml-2 font-weight-bolder"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Tooltip on top"
                  style="color: #FFB503 !important; cursor: pointer"
                  @click="questionMarkClicked"
                ></i
              ></span>
            </p>
          </div>
          <div class="col-6">
            <!--<router-link to="/photographer">-->
            <a
              class="card-link justify-content-end font-weight-bold"
              style="font-size: 14px !important; color: #FFB503 !important; float: right; "
              @click="navigateToBookPage()"
              >BOOK THIS</a
            >
            <!--</router-link>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//    import JQuery from 'jquery';
import { mdbPopover } from "mdbvue";
//    let $ = JQuery;

//    $(function () {
//        $('[data-toggle="popover"]').popover()
//    })

export default {
  name: "package-card-list",
  props: ["name", "price", "item", "id"],
  components: {
    mdbPopover
  },
  computed: {
    borderColor: function() {
      return (this.id + 1) % 2 === 0
        ? " solid 5px #FFB503"
        : " solid 5px #4D4D4D";
    }
  },
  methods: {
    bookThis() {
      this.$emit("packageData", "");
    },
    popOverDetails() {
      console.log(
        "CODE REACHED HERE: ",
        document.getElementById("popUp").style
      );
      document.querySelector(".overlay").style.display = "block";
    },
    navigateToBookPage() {
      this.$router.push("/booking/package");
    },
    questionMarkClicked() {
      this.$emit("onQuestionMarkClick", "");
    }
  },
  data: function() {
    return {
      active: false
    };
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

.overlay {
  display: none;
  background-color: #000000;
  border-radius: 5px;
  opacity: 0.9259440104166666;
  position: fixed;
  width: 276px;
  height: 140px;
  z-index: 12;
}

.card.desktop {
  margin-right: 0px !important;
}

/*.overlay{*/
/*height: 100%;*/
/*width: 100%;*/
/*display: none;*/
/*position: fixed;*/
/*z-index: 12;*/
/*top: 0;*/
/*left: 0;*/
/*!*background-color: rgb(0,0,0);*!*/
/*!*background-color: rgba(0,0,0, 0.9);*!*/
/*background-color: #FEFBF3;*/
/*opacity: 0.98;*/
/*}*/

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
