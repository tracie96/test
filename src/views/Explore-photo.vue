<template>
  <div>
    <PHeader />
    <div class="container">
      <div class="row mt-15">
        <div class="col-md-4">
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
              Region of Shoot
            </p>
            <h6>Seperate with a comma</h6>

            <p class="p-title-category">
              Shoot Date
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
            <div class="adverts">
              <div class="pad-top-30 text-center"></div>
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <!-- <h4>320 Photograhers found</h4> -->
          <div class="row">
            <section id="gal-sec">
              <div
                data-fancybox="gallery"
                :href="img.url"
                class="di"
                v-for="(img, index) in imageList"
                :key="index"
                :data-index="index"
                :style="{
                  flexGrow: (img.width * 200) / img.height,
                  width: (img.width * 200) / img.height + 'px'
                }"
              >
                <i
                  :style="{
                    paddingBottom: (img.height / img.width) * 100 + '%'
                  }"
                ></i>
                <img class="gal" :src="img.url" alt="" />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    <Menu />
  </div>
</template>
<script>
import axios from "axios";
import PHeader from "../components/PHeader";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Searchcategory from "../components/search-category";
import Searchtype from "../components/search-type";
export default {
  components: {
    PHeader,
    Footer,
    Menu,
    Searchcategory,
    Searchtype
  },
  data: function() {
    return {
      date: new Date().toISOString().substr(0, 10),
      menu2: false,
      imageList: [
        {
          id: 1,
          url:
            "https://cdn.pixabay.com/photo/2017/08/03/21/48/drinks-2578446__340.jpg",
          width: 509,
          height: 340
        },
        {
          id: 2,
          url:
            "https://cdn.pixabay.com/photo/2015/09/02/12/39/child-918582__340.jpg",
          width: 226,
          height: 340
        },
        {
          id: 3,
          url:
            "https://cdn.pixabay.com/photo/2015/07/02/10/06/sparklers-828570__340.jpg",
          width: 2000,
          height: 1333
        },
        {
          id: 4,
          url:
            "https://cdn.pixabay.com/photo/2019/03/26/02/51/woman-4081760__340.jpg",
          width: 510,
          height: 340
        },
        {
          id: 5,
          url:
            "https://cdn.pixabay.com/photo/2017/08/03/21/48/drinks-2578446__340.jpg",
          width: 2000,
          height: 1333
        },
        {
          id: 6,
          url:
            "https://cdn.pixabay.com/photo/2019/03/26/02/51/woman-4081760__340.jpg",
          width: 510,
          height: 340
        },
        {
          id: 7,
          url:
            "https://cdn.pixabay.com/photo/2015/09/02/12/39/child-918582__340.jpg",
          width: 226,
          height: 340
        },
        {
          id: 8,
          url:
            "https://cdn.pixabay.com/photo/2015/07/02/10/06/sparklers-828570__340.jpg",
          width: 510,
          height: 340
        },
        {
          id: 9,
          url:
            "https://cdn.pixabay.com/photo/2019/04/08/04/22/glasses-4111357__340.jpg",
          width: 666,
          height: 1000
        },
        {
          id: 10,
          url:
            "https://cdn.pixabay.com/photo/2016/11/21/16/55/adult-1846436__340.jpg",
          width: 775,
          height: 1170
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
  methods: {}
  // mounted() {
  //     axios.get('https://xieranmaya.github.io/images/cats/cats.json')
  //         .then(res =>
  //             this.images = res.data
  //         )
  //         .catch(err => console.log(err))
  // }
};
</script>
<style scoped>
#gal-sec {
  display: flex;
  flex-wrap: wrap;
}

#gal-sec::after {
  content: "";
  flex-grow: 999999999;
  /* min-width: 200px;
        height: 0; */
}

div.di {
  margin: 3px;
  background-color: #fefbf3;
  position: relative;
  cursor: pointer;
}
div.di:last-child {
  flex-grow: 0 !important;
}
i {
  display: block;
}

.di > img {
  position: absolute;
  top: 0;
  width: 100%;
  vertical-align: bottom;
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

.right-addon input {
  padding-right: 30px;
}
</style>
