<template>
  <div>
    <PHeader />
    <CommunityHeader />
    <div class="mt-10 row ml-mr desktop" id="">
      <!-- Grid column -->
      <div class="col-md-3 mr-10">
        <div class="">
          <img
            style="width:100%"
            height="300%"
            class="img-fluid"
            src="../assets/images/community/_POP1044.jpg"
            alt="Card image cap"
          />
          <img
            style="width:100%"
            height="300%"
            class="img-fluid"
            src="../assets/images/community/_POP6960.jpg"
            alt="Card image cap"
          />
        </div>
      </div>
      <div class="col-md-3 mr-10">
        <div class="">
          <img
            style="width:100%"
            class="img-fluid mb-6"
            src="../assets/images/community/_POP0291.jpg"
            alt="Card image cap"
          />
          <img
            style="width:100%"
            class="img-fluid"
            src="../assets/images/community/_POP0662.jpg"
            alt="Card image cap"
          />
        </div>
      </div>
      <div class="col-md-5 mr-10 ">
        <div class="">
          <img
            class="img-fluid mb-6"
            src="../assets/images/community/_POP4167.jpg"
            alt="Card image cap"
            style="object-fit:contain;width:100%"
          />
          <img
            class="img-fluid"
            src="../assets/images/right-bottom.png"
            alt="Card image cap"
            style="object-fit:contain;width:100%"
          />
        </div>
      </div>
    </div>
    <div id="mobile-gallery" class="">
      <div class="col-6">
        <div class="mg-b pics all 2 animation" style="">
          <img
            class="img-fluid"
            style="height:271px;width:100%"
            src="../assets/images/left.png"
            alt="Card image cap"
          />
        </div>
      </div>
      <div class="col-6">
        <div class="mg-b pics all 1 animation" style="">
          <img
            class="img-fluid"
            style="height:142px;width:100%"
            src="../assets/images/middle-top.png"
            alt="Card image cap"
          />
        </div>
        <div class="mg-b pics all 1 animation" style="">
          <img
            class="img-fluid"
            src="../assets/images/middle-bottom.png"
            alt="Card image cap"
            style="height: 118px;width: 100%;"
          />
        </div>
      </div>
    </div>
    <section class="xs-section-padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 mx-auto">
            <div class="agency-section-title text-center section-title-style2">
              <h2 class="main-title join-com">Why Join the Community?</h2>
            </div>
          </div>
        </div>
        <!-- .row end -->
        <div
          id="carouselIndicators"
          class="desktop carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselIndicators" data-slide-to="1"></li>
            <li data-target="#carouselIndicators" data-slide-to="2"></li>
            <li data-target="#carouselIndicators" data-slide-to="3"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="row">
                <div class="col-md-4">
                  <p class="big-p">
                    Meet Great Minds
                  </p>
                  <p class="small-p">
                    Get inspired by working with the greatest talents in the
                    world of photography and build a bankable network you can
                    count on with Peexoo HUB.
                  </p>
                </div>
                <div class="col-md-8">
                  <img src="../assets/images/meet.jpg" alt="" />
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row">
                <div class="col-md-4">
                  <p class="big-p">
                    Grow
                  </p>
                  <p class="small-p">
                    Display your work to an audience waiting to appreciate your
                    creativity. Get paid and land juicy opportunities.
                  </p>
                </div>
                <div class="col-md-8">
                  <img src="../assets/images/grow.jpg" alt="" />
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row">
                <div class="col-md-4">
                  <p class="big-p">
                    Get Support
                  </p>
                  <p class="small-p">
                    Our fully automated AI, ultra-innovative tools are available
                    round the clock to solve the problem of long post-production
                    time, to creating high quality images in seconds. Peexoo
                    gives your photography the boost it deserves.
                  </p>
                </div>
                <div class="col-md-8">
                  <img src="../assets/images/support-image-copy.jpg" alt="" />
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row">
                <div class="col-md-4">
                  <p class="big-p">
                    Learn
                  </p>
                  <p class="small-p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                </div>
                <div class="col-md-8">
                  <img src="../assets/images/community/_POP6960.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="accordion" class="mg-top mobile-only">
          <div class="card">
            <img src="../assets/images/grid-image.png" alt="" />
            <div class="box-shd">
              <div class="card-header" id="headingOne">
                <h5 class="mb-0">
                  <a
                    href="#"
                    class="expand-text"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Meet Great Minds
                    <i class="float-right fa fa-angle-down rotate-icon"></i>
                  </a>
                </h5>
              </div>

              <div
                id="collapseOne"
                class="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordion"
              >
                <div class="card-body">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Fugiat placeat facere ab corporis rem delectus, quam illum
                  eius consectetur incidunt! Fuga, dicta nam vitae eos inventore
                  nisi quaerat. Mollitia, excepturi.
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <img src="../assets/images/grid-image.png" alt="" />
            <div class="box-shd">
              <div class="card-header" id="headingTwo">
                <h5 class="mb-0">
                  <a
                    href="#"
                    class=" collapsed"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Learn
                    <i class="float-right fa fa-angle-down rotate-icon"></i>
                  </a>
                </h5>
              </div>
              <div
                id="collapseTwo"
                class="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordion"
              >
                <div class="card-body">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
                  quidem officia perferendis provident quae adipisci
                  exercitationem quis asperiores a tque animi similique est,
                  dicta iure error, dolorem accusantium in. Qui, soluta!
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <img src="../assets/images/grid-image.png" alt="" />
            <div class="box-shd">
              <div class="card-header" id="headingThree">
                <h5 class="mb-0">
                  <a
                    href="#"
                    class="collapsed"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Showcase
                    <i class="float-right fa fa-angle-down rotate-icon"></i>
                  </a>
                </h5>
              </div>
              <div
                id="collapseThree"
                class="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordion"
              >
                <div class="card-body">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Fugiat placeat facere ab corporis rem delectus, quam illum
                  eius consectetur incidunt! Fuga, dicta nam vitae eos inventore
                  nisi quaerat. Mollitia, excepturi.
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <img src="../assets/images/grid-image.png" alt="" />
            <div class="box-shd">
              <div class="card-header" id="headingFour">
                <h5 class="mb-0">
                  <a
                    href="#"
                    class="collapsed"
                    data-toggle="collapse"
                    data-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Get Support
                    <i class="float-right fa fa-angle-down rotate-icon"></i>
                  </a>
                </h5>
              </div>
              <div
                id="collapseFour"
                class="collapse"
                aria-labelledby="headingFour"
                data-parent="#accordion"
              >
                <div class="card-body">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Fugiat placeat facere ab corporis rem delectus, quam illum
                  eius consectetur incidunt! Fuga, dicta nam vitae eos inventore
                  nisi quaerat. Mollitia, excepturi.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-5 agency-section-title text-center section-title-style2">
          <router-link class="" to="/community/join">
            <button class="btn btn-p btn-rounded btn-peexoo">Join now</button>
          </router-link>
        </div>
      </div>
      <!-- .container END -->
    </section>
    <!-- end business info section -->
    <section class="">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 mx-auto">
            <div class="agency-section-title text-center section-title-style2">
              <h2 class="main-title main-title-t" style="color:#ffb503">
                These Legends are Community Members
              </h2>
            </div>
          </div>
        </div>
        <!-- .row end -->
        <div class="row">
          <div class="row">
            <div class="col-md-2 col-6 legend-img">
              <img src="../assets/images/kelechi.png" alt="" />
              <h5 class="text-center">Kelechi Amadi Obi</h5>
            </div>
            <div class="col-md-2 col-6 legend-img">
              <img src="../assets/images/afroshots.png" alt="" />
              <h5 class="text-center">Afroshots</h5>
            </div>
            <div class="col-md-2 col-6 legend-img">
              <img src="../assets/images/kelechi.png" alt="" />
              <h5 class="text-center">Kelechi Amadi Obi</h5>
            </div>
            <div class="col-md-2 col-6 legend-img">
              <img src="../assets/images/afroshots.png" alt="" />
              <h5 class="text-center">Afroshots</h5>
            </div>
            <div class="col-md-2 col-6 legend-img">
              <img src="../assets/images/kelechi.png" alt="" />
              <h5 class="text-center">Kelechi Amadi Obi</h5>
            </div>
            <div class="col-md-2 col-6 legend-img">
              <img src="../assets/images/afroshots.png" alt="" />
              <h5 class="text-center">Afroshots</h5>
            </div>
          </div>
        </div>
      </div>
      <!-- .container END -->
    </section>
    <!-- end business info section -->
    <section class="how-works">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 mx-auto">
            <div class="agency-section-title text-center section-title-style2">
              <h2 class="main-title main-title-t" style="color:#ffb503">
                How it works
              </h2>
            </div>
          </div>
        </div>
        <!-- .row end -->
        <div class="row">
          <div class="col-md-8 offset-md-2 desktop">
            <div class="row">
              <div class="col-md-4 ">
                <img class="" src="../assets/images/login.svg" alt="" />
                <h5 class="text-center how-text">Sign up</h5>
              </div>
              <div class="col-md-4 ">
                <img class="" src="../assets/images/verified.svg" alt="" />
                <h5 class="text-center how-text">Get Vetted</h5>
              </div>
              <div class="col-md-4">
                <img class="" src="../assets/images/community.svg" alt="" />
                <h5 class="text-center how-text">Attend meetups</h5>
              </div>
            </div>
          </div>
          <div class="row mobile-steps">
            <div class="col-4 ">
              <img class="" src="../assets/images/login.svg" alt="" />
              <h5 class="text-center how-text">Sign up</h5>
            </div>
            <div class="col-4 ">
              <img class="" src="../assets/images/verified.svg" alt="" />
              <h5 class="text-center how-text">Get Vetted</h5>
            </div>
            <div class="col-4">
              <img class="" src="../assets/images/community.svg" alt="" />
              <h5 class="text-center how-text">Attend meetups</h5>
            </div>
          </div>
        </div>
        <div class="mt-5 agency-section-title text-center section-title-style2">
          <router-link class="" to="/community/join">
            <button class="btn btn-p btn-rounded btn-peexoo">Join now</button>
          </router-link>
        </div>
      </div>
      <!-- .container END -->
    </section>
    <PhotoTestimony />
    <section class="xs-section-padding" style="padding-bottom:80px">
      <div class="container">
        <div class="mt-5 row pexo-bgs">
          <div class="col-md-6 pexo-pad">
            <p></p>
            <div class="pad-top-30">
              <span> </span>
              <span> </span>
            </div>
          </div>
          <div class="col-md-6 pexo-pad"></div>
        </div>
      </div>
    </section>
    <Footer />
    <Menu />
  </div>
</template>
<script>
import PHeader from "../components/PHeader";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import PhotoTestimony from "../components/Photo-Testimony";
import CommunityHeader from "../components/community-header";

export default {
  name: "community",
  components: {
    PHeader,
    Footer,
    Menu,
    PhotoTestimony,
    CommunityHeader
  },
  methods: {}
};
</script>
<style scoped>
.card-header {
  background: #fff !important;
  padding: 1.5rem 1.25rem !important;
  border-bottom-color: #fff !important;
}

.box-shd {
  box-shadow: 0 3px 12px 0 rgba(134, 134, 134, 0.5) !important;
}

.col-md-3,
.col-md-5,
.row {
  padding-right: 0px !important;
  padding-left: 0px !important;
}

.col-md-3 {
  flex: 0 0 28% !important;
  max-width: 28% !important;
}

.col-md-5 {
  flex: 0 0 39.92% !important;
  max-width: 39.92% !important;
}

.ml-mr {
  margin-left: 10px;
}

.how-works {
  margin-top: 100px;
}

.how-text {
  font-size: 18px;
  color: #4d4d4d;
  margin-top: -25px;
}

.join-com {
  margin-bottom: 70px !important;
}

.legend-img h5 {
  font-size: 16px;
  margin-top: 10px;
  color: #646464;
}

.col-md-2 {
  padding-right: 10px !important;
  padding-left: 10px !important;
}

.agency-section-title .main-title {
  font-size: 64px !important;
}

.agency-section-title .main-title-t {
  font-size: 48px !important;
}

.big-p {
  padding-bottom: 25px;
  font-family: "Montserrat";
  font-size: 70px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #4d4d4d;
}

.small-p {
  font-size: 20px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #4d4d4d;
}

.mt-10 {
  margin-top: 10px !important;
}

.mg-b {
  margin-bottom: 11px !important;
}

.mb-6 {
  margin-bottom: 6px !important;
}

.mr-10 {
  margin-right: 12px !important;
}

.btn.btn-peexoo {
  padding: 0 36px !important;
}

.gallery {
  -webkit-column-count: 3;
  -moz-column-count: 3;
  column-count: 3;
  -webkit-column-width: 33%;
  -moz-column-width: 33%;
  column-width: 33%;
}

.gallery .pics {
  -webkit-transition: all 350ms ease;
  transition: all 350ms ease;
}

.gallery .animation {
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
}

#mobile-gallery {
  display: none;
}

.mobile-steps {
  display: none;
}

.mobile-only {
  display: none;
}

@media (max-width: 480px) {
  .card {
    margin-right: 0 !important;
  }
  .how-works {
    margin-top: 0 !important;
  }

  .how-text {
    margin-top: 0px !important;
  }

  .desktop {
    display: none;
  }

  .mobile-steps {
    display: flex;
  }

  .mobile-only {
    display: block;
  }

  .legend-img img {
    padding-left: 7px;
    padding-right: 7px;
  }

  .row {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }

  #gallery {
    display: none;
  }

  #mobile-gallery {
    display: flex;
    margin-top: 10px;
    margin-right: 5px !important;
    margin-left: 5px !important;
  }

  .agency-section-title .main-title {
    font-size: 36px !important;
    margin-top: 71px;
    font-weight: 700;
  }

  .agency-section-title .main-title .main-title-t {
    font-size: 28px !important;
    font-weight: 700;
  }

  .col-6 {
    padding-right: 5px !important;
    padding-left: 5px !important;
  }

  .gallery {
    -webkit-column-count: 1;
    -moz-column-count: 1;
    column-count: 1;
    -webkit-column-width: 100%;
    -moz-column-width: 100%;
    column-width: 100%;
  }

  .xs-section-padding {
    padding-bottom: 0 !important;
  }
}

@media (max-width: 400px) {
  .btn.filter {
    padding-left: 1.1rem;
    padding-right: 1.1rem;
  }
}
</style>
