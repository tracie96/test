<template>
  <div>
    <PHeader />
    <div class="container">
      <div class="row mt-15">
        <div class="col-md-4 desktop">
          <div class="container">
            <div class="">
              <div class="inner-addon right-addon">
                <i class="fa fa-search"></i>
                <input type="text" class="form-control" placeholder="Search" />
              </div>
            </div>

            <p class="p-title-category">
              Category Type
            </p>
            <div>
              <Searchcategory
                :name="category.name"
                v-for="(category, key) in Categories"
                :key="key"
              />
            </div>

            <p class="p-title-category">
              Photographer Type
            </p>
            <div>
              <Searchtype
                :name="type.name"
                v-for="(type, id) in Types"
                :key="id"
              />
            </div>

            <p class="p-title-category">
              Bases Region
            </p>
            <h6>Seperate with a comma</h6>
            <RegionChips />
            <p class="p-title-category">
              Price
            </p>
            <RangeSlider />
            <p class="p-title-category">
              Availability
            </p>
            <v-layout wrap>
              <v-flex sm6 md6>
                <v-menu
                  v-model="menu2"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  lazy
                  transition="scale-transition"
                  offset-y
                  full-width
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="date"
                      label="From"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="date"
                    color="green lighten-1"
                    @input="menu2 = false"
                  >
                  </v-date-picker>
                </v-menu>
              </v-flex>
              <v-flex sm6 md6>
                <v-menu
                  v-model="menu2"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  lazy
                  transition="scale-transition"
                  offset-y
                  full-width
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="date"
                      label="To"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="date"
                    color="green lighten-1"
                    @input="menu2 = false"
                  >
                  </v-date-picker>
                </v-menu>
              </v-flex>
            </v-layout>
            <div class="advers  t">
              <p class="text-white"></p>
              <div class="pad-top-30 text-center">
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div id="mySidenav" class="sidenav">
          <div id="scrollable">
            <a href="javascript:void(0)" class="closebtn" @click="closeNav"
              >&times;</a
            >
            <p class="p-title-category">
              Category Type
            </p>
            <div>
              <Searchcategory
                :name="category.name"
                v-for="(category, key) in Categories"
                :key="key"
              />
            </div>

            <p class="p-title-category">
              Photographer Type
            </p>
            <div>
              <Searchtype
                :name="type.name"
                v-for="(type, id) in Types"
                :key="id"
              />
            </div>

            <p class="p-title-category">
              Bases Region
            </p>
            <h6>Seperate with a comma</h6>
            <RegionChips />
            <p class="p-title-category">
              Price
            </p>
            <div class="row mb-3">
              <div class="col-6">
                From
                <input
                  placeholder="0"
                  v-model="minprice"
                  type="number"
                  class="form-control"
                />
              </div>
              <div class="col-6">
                To
                <input
                  placeholder="0"
                  v-model="maxprice"
                  type="number"
                  class="form-control"
                />
              </div>
            </div>
            <p class="p-title-category">
              Availability
            </p>
            <div class="row mb-3">
              <div class="col-6">
                From
                <datetime class="theme-peexoo" v-model="mdate"></datetime>
              </div>
              <div class="col-6">
                To
                <datetime class="theme-peexoo" v-model="mdate"></datetime>
              </div>
            </div>
            <p class="text-center mb-5">
              <button id="btn-p" class="btn btn-rounded btn-peexoo text-white">
                ENTER
              </button>
            </p>
          </div>
        </div>
        <div id="searchbar" class="searchbar">
          <div id="search-scrollable">
            <a
              href="javascript:void(0)"
              class="closebtn"
              @click="closeSearchBar"
              >&times;</a
            >
            <div>
              <vue-simple-suggest
                class="myinpt"
                v-model="chosen"
                placeholder="Type a letter 'r' "
                :list="simpleSuggestionList"
                :filter-by-query="true"
              >
                <!-- Filter by input text to only show the matching results -->
              </vue-simple-suggest>
            </div>
          </div>
        </div>
        <div class="col-md-8 col-12">
          <h4 class="desktop">320 Photograhers found</h4>
          <div class="row mb-2 mobile-only">
            <div class="col-6">
              <i id="side" class="text-left fa fa-x fa-sliders"></i>
              <i class="float-right fa fa-x fa-th-large"></i>
            </div>
            <div class="col-6 ">
              <i class="text-left fa fa-x fa-image"></i>
              <i id="searchb" class="float-right fa fa-x fa-search"></i>
            </div>
          </div>
          <div class="row n-row">
            <div
              class="col-md-6 cad"
              v-for="(card, key) in Photographers"
              :key="key"
            >
              <Cardlist :username="card.username" :desc="card.desc" />
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
import Cardlist from "../components/card-list";
import Searchcategory from "../components/search-category";
import Searchtype from "../components/search-type";
import RangeSlider from "../components/range-slider";
import RegionChips from "../components/chips";
import VueSimpleSuggest from "vue-simple-suggest";

export default {
  components: {
    PHeader,
    Footer,
    Menu,
    Cardlist,
    Searchcategory,
    Searchtype,
    RangeSlider,
    RegionChips,
    VueSimpleSuggest
  },
  data: function() {
    return {
      date: new Date().toISOString().substr(0, 10),
      mdate: new Date().toISOString(),
      menu2: false,
      Photographers: [
        {
          id: 1,
          username: "Jeremiah Abimbola",
          desc:
            "There is a reason that I am called the god of photographer. I shoot the invicible and"
        },
        {
          id: 2,
          username: "Tolulope Wsbdsd",
          desc:
            "There is a reason that I am called the god of photographer. I shoot the invicible and"
        },
        {
          id: 3,
          username: "Wale Tinubu",
          desc:
            "There is a reason that I am called the god of photographer. I shoot the invicible and"
        },
        {
          id: 4,
          username: "dbashdjbfajhsdfj hasdjf",
          desc:
            "There is a reason that I am called the god of photographer. I shoot the invicible and…"
        }
      ],
      Categories: [
        {
          id: 1,
          name: "Portrait"
        },
        {
          id: 2,
          name: "Events"
        },
        {
          id: 3,
          name: "Real Estate"
        }
      ],
      Types: [
        {
          id: 1,
          name: "Select all"
        },
        {
          id: 2,
          name: "Still picture (photo)"
        },
        {
          id: 3,
          name: "Motion picture (video)"
        }
      ]
    };
  },
  methods: {
    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("mySidenav").style.padding = "0";
    },
    closeSearchBar() {
      document.getElementById("searchbar").style.width = "0";
      document.getElementById("searchbar").style.padding = "0";
    },
    simpleSuggestionList() {
      return ["Vue.js", "React.js", "Angular.js"];
    }
  },
  mounted: function() {
    $(".fa-th-large").click(function() {
      $(".n-row").addClass("new-row");
      $(".card").addClass("m-card");
      $(".cad")
        .addClass("col-6")
        .removeClass("col-md-6");
      $(".fa-th-large").addClass("active-icon");
      $(".fa-image").removeClass("active-icon");
      $(".btn-peexoo").hide();
      $(".card-text").hide();
      $(".card-body")
        .addClass("cbody")
        .removeClass("card-body");
      $(".card-title").addClass("text10 peexo-faded-text");
    });
    $(".fa-image").click(function() {
      $(".n-row").removeClass("new-row");
      $(".cad")
        .removeClass("col-6")
        .addClass("col-md-6");
      $(".fa-th-large").removeClass("active-icon");
      $(".fa-image").addClass("active-icon");
      $(".btn-peexoo").show();
      $(".card-text").show();
      $(".cbody")
        .removeClass("cbody")
        .addClass("card-body");
      $(".card-title").removeClass("text10");
    });
    $("#side").click(function() {
      document.getElementById("mySidenav").style.width = "100%";
      document.getElementById("mySidenav").style.padding = "20px";
    });
    $("#searchb").click(function() {
      document.getElementById("searchbar").style.width = "100%";
      document.getElementById("searchbar").style.padding = "20px";
    });
  }
};
</script>
<style scoped>
.myinpt {
  padding: 14px;
  margin-top: 70px;
}

.fa {
  color: #4d4d4d !important;
}
.mobile-only {
  display: none;
}
.advert {
  padding: 20px;
  margin-top: 20px;
  width: 97%;
  height: 700px;
  background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.5),
      #ffb400 43%,
      #ffb503
    ),
    linear-gradient(to bottom, #ffb503, #ffb503);
}

.advert p {
  font-family: Lora;
  font-size: 28px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  margin-top: 20px;
}

.p-title-category {
  font-family: "Montserrat";
  font-size: 18px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #4d4d4d;
  margin-top: 28px;
}
.btn.btn-peexoo {
  border-radius: 6px !important;
  padding: 0 20px !important;
}
h4 {
  font-family: "Montserrat" !important;
  font-size: 24px !important;
  font-weight: normal !important;
  color: #4d4d4d !important;
  margin-left: -15px !important;
  margin-bottom: 20px;
}

/* enable absolute positioning */
.inner-addon {
  position: relative;
}

/* style glyph */
.inner-addon .fa {
  position: absolute;
  padding: 10px;
  pointer-events: none;
}

.right-addon .fa {
  right: 0px;
}

.col-6 {
  padding-right: 17px !important;
  padding-left: 17px !important;
}

.active-icon {
  color: #b58000 !important;
}

.new-row {
  margin-right: -13px !important;
  margin-left: -13px !important;
}

.right-addon input {
  padding-right: 30px;
}

.sidenav {
  width: 0;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  background-color: #fff;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}
.searchbar {
  width: 0;
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  background-color: #fffffff5;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}
.searchbar .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 50px;
  margin-left: 50px;
}
#scrollable {
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
}
#search-scrollable {
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
}

/* @media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
} */
@media (max-width: 480px) {
  .mt-15 {
    margin-top: 0 !important;
  }
  .mobile-only {
    display: flex;
  }
}
</style>
