<template>
  <div>
    <booking-modal
      :show="showbookingModal"
      @close="showbookingModal = false"
    ></booking-modal>
    <!--<p-header />-->
    <Header />
    <section class="banner-area-wraper" style="z-index: 0">
      <div class="banner-slider-area">
        <img src="../assets/images/hero.png" alt="" style="width:100%" />
      </div>
    </section>
    <!-- end agency banner section -->
    <div>
      <ul
        id="navSection"
        class="nav justify-content-center nav-peexoo desktop"
        style="height: 80px; background-color: #DD9C00 !important;"
      >
        <li class="nav-item pr-5" style="z-index: 9; margin-top: -90px">
          <img
            class="profile-img rounded"
            src="../assets/images/profile-detail.jpg"
            alt=""
            style="width: 210px;
  height: 210px"
          />
        </li>
        <li
          class="nav-item row ml-5 mr-4"
          v-bind:style="[navSwitch.details ? activeNavStyle : '']"
        >
          <div class="col-12 mt-4 ">
            <a class="nav-link text-white active" @click="switchNav('details')"
              >Details</a
            >
          </div>
        </li>
        <li
          class="nav-item row  mr-4"
          v-bind:style="[navSwitch.portfolio ? activeNavStyle : '']"
        >
          <div class="col-12 mt-4 ">
            <a class="nav-link text-white " @click="switchNav('portfolio')"
              >Portfolio</a
            >
          </div>
        </li>
        <li
          class="nav-item row  mr-4"
          v-bind:style="[navSwitch.availability ? activeNavStyle : '']"
        >
          <div class="col-12  mt-4 ">
            <a class="nav-link text-white " @click="switchNav('availability')"
              >Availability</a
            >
          </div>
        </li>
        <li
          class="nav-item row  mr-4"
          v-bind:style="[navSwitch.pricingPackages ? activeNavStyle : '']"
        >
          <div class="col-12 mt-4  mt-4 ">
            <a class="nav-link text-white" @click="switchNav('pricingPackages')"
              >Pricing Packages</a
            >
          </div>
        </li>
        <li
          class="nav-item row  "
          v-bind:style="[navSwitch.reviews ? activeNavStyle : '']"
        >
          <div class="col-12 mt-4 ">
            <a class="nav-link text-white " @click="switchNav('reviews')"
              >Reviews</a
            >
          </div>
        </li>
      </ul>

      <!----------------------MOBILE VIEWS---------------------->
      <div
        class="nav-item mobile-only justify-content-center"
        style=" margin-top: -50px"
      >
        <img
          class="profile-img rounded"
          src="../assets/images/profile-detail.jpg"
          alt=""
          style="z-index: 9; width: 130px; height: 130px"
        />
      </div>
      <div class="mobile-only justify-content-center user pt-3">
        <h1
          class="pr-2"
          style="color: #4D4D4D; font-family: Lora; font-size: 24px; font-weight: 700;line-height: 29px;"
        >
          Afroshots
        </h1>
        <img
          class="mt-2"
          style="height: 15px"
          src="../assets/images/google-verified.svg"
          alt=""
        />
      </div>

      <div
        class="text-center row mobile-only justify-content-center"
        style="margin-top: -25px; margin-left:0px"
      >
        <div class="col-6">
          <span class="float-right">
            <img src="../assets/images/icons/interlocking-rings.svg" alt="" />
            Wedding</span
          >
        </div>
        <div class="col-6">
          <span class=" float-left">
            <img src="../assets/images/icons/camera-portrait-mode.svg" alt="" />
            Portrait</span
          >
        </div>
        <div class="row mt-4">
          <div class="col-4">
            <span>
              <img
                src="../assets/images/icons/dress-long-and-black-shape.svg"
                alt=""
              />
              Fashion</span
            >
          </div>
          <div class="col-4">
            <span>
              <img src="../assets/images/icons/icons-8-bottom-90.jpg" alt="" />
              Nude Art</span
            >
          </div>
          <div class="col-4">
            <span>
              <img src="../assets/images/icons/swimming-figure.svg" alt="" />
              Sport</span
            >
          </div>
        </div>
      </div>
      <div class="mobile-only row justify-content-center ml-0 mt-4">
        <span
          ><i
            class="fa fa-arrow-circle-down mr-2"
            style="font-size: 20px; color: black"
            aria-hidden="true"
          ></i
          ><span
            style="color: #4D4D4D; font-family: Montserrat; font-size: 14px; font-weight: 400;line-height: 17px;"
            >More</span
          >
        </span>
      </div>

      <div class="row justify-content-center mt-5 mobile-only">
        <div class="col-6">
          <a
            class="btn btn-p btn-rounded btn-peexoo btn-outline-primary btn-new-peexo mr-4"
            >Message</a
          >
        </div>
        <div class="col-6">
          <router-link
            class="btn btn-p btn-rounded btn-peexoo btn-new-peexo float-left"
            to="/photographer/book-a-shoot"
            >Book Now
          </router-link>
        </div>
      </div>

      <div id="accordion" class="mt-5 row mobile-only ml-0 mb-5">
        <!--DETAILS TAB-->
        <div
          class="card ml-0"
          style="width: 100%; margin-right: 0px !important; margin-bottom: 0px !important"
        >
          <div
            class="card-header"
            id="headingOne"
            style="height: 50px; background-color: #FFFFFF !important; "
          >
            <a
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              ><h1
                style=" color: #4D4D4D;font-family: Montserrat;font-size: 16px;font-weight: bold;line-height: 19px;"
              >
                Details
                <span class="float-right"
                  ><i class="fa fa-chevron-down"></i
                ></span></h1
            ></a>
          </div>

          <div
            id="collapseOne"
            class="collapse "
            aria-labelledby="headingOne"
            data-parent="#accordion"
            style="background-color: rgb(254, 251, 243); !important;"
          >
            <div class="card-body card-body-custom">
              <div class="col-md-6">
                <p
                  v-bind:class="{
                    'shorten-desc': !showDetails,
                    desc: showDetails
                  }"
                >
                  I am Jonathan, everyone call me Jo, or Afro because I shoot
                  beautiful pictures in an African way. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua.
                </p>
                <span
                  class="mobile-only sp"
                  @click="showDetails = !showDetails"
                  >{{ showDetails ? "Hide Details" : "View all" }}</span
                >
              </div>
              <div class="col-md-6">
                <div id="details">
                  <div class="container">
                    <div class="span-grp">
                      <span>
                        <img
                          class="mr-2"
                          style="margin-bottom: 3px"
                          src="../assets/images/bookmark-star.svg"
                          alt=""
                        />
                        300 reviews</span
                      >
                      <span>
                        <img
                          class="mr-2"
                          src="../assets/images/old-fashion-briefcase.svg"
                          alt=""
                        />
                        139k jobs completed</span
                      >
                      <span>
                        <img
                          class="mr-2 pl-2"
                          src="../assets/images/favorite-heart-button.svg"
                          alt=""
                        />
                        999 likes</span
                      >
                    </div>
                    <p class="provided">
                      Jonathan Provided
                    </p>
                    <div class="provided-details">
                      <p>
                        Government ID
                      </p>
                      <p>
                        BVN
                      </p>
                      <p>
                        Email address
                      </p>
                      <p>
                        Phone number
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--DETAILS TAB-->

        <!--PORTFOLIO TAB-->
        <div
          class="card ml-0"
          style="width: 100%; margin-right: 0px !important; margin-bottom: 0px !important"
        >
          <div
            class="card-header"
            id="headingTwo"
            style="height: 50px; background-color: #FFFFFF !important;"
          >
            <a
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
              ><h1
                style=" color: #4D4D4D;font-family: Montserrat;font-size: 16px; font-weight: bold; line-height: 19px;"
              >
                Portfolio
                <span class="float-right"
                  ><i class="fa fa-chevron-down"></i
                ></span></h1
            ></a>
          </div>

          <div
            id="collapseTwo"
            class="collapse "
            aria-labelledby="headingTwo"
            data-parent="#accordion"
            style="background-color: rgb(254, 251, 243); !important; height: 600px;"
          >
            <div class="card-body card-body-custom row">
              <div class="col-6" v-for="(img, index) in imgs" :key="index">
                <mPortfolio :imgs="img.url" :title="img.title"></mPortfolio>
              </div>
            </div>
          </div>
        </div>
        <!--PORTFOLIO TAB-->

        <!--AVAILABILITY TAB-->
        <div
          class="card ml-0"
          style="width: 100%; margin-right: 0px !important; margin-bottom: 0px !important"
        >
          <div
            class="card-header"
            id="headingThree"
            style="height: 50px; background-color: #FFFFFF !important;"
          >
            <a
              data-toggle="collapse"
              data-target="#collapseThree"
              aria-expanded="true"
              aria-controls="collapseThree"
              ><h1
                style=" color: #4D4D4D;font-family: Montserrat;font-size: 16px;font-weight: bold;line-height: 19px;"
              >
                Availability
                <span class="float-right"
                  ><i class="fa fa-chevron-down"></i
                ></span>
              </h1>
            </a>
          </div>

          <div
            id="collapseThree"
            class="collapse"
            aria-labelledby="headingThree"
            data-parent="#accordion"
            style="background-color: rgb(254, 251, 243) !important;"
          >
            <div class="card-body card-body-custom">
              <calender-slider></calender-slider>
            </div>
          </div>
        </div>
        <!--AVAILABILITY TAB-->

        <!--PRICING PACKAGE TAB-->
        <div id="myNav" class="overlay">
          <a class="closebtn" @click="closeOverlay"
            ><i class="fa fa-times-circle" aria-hidden="true"></i
          ></a>
          <div class="overlay-content">
            <div class="row ">
              <div class="col-12">
                <h1
                  class="pl-5"
                  style=" color: #FFB503; font-family: Montserrat; font-size: 22px; font-weight: bold;line-height: 19px;"
                >
                  PreWedding Gold
                </h1>
              </div>
              <div class="col-12">
                <ul
                  class="pl-5"
                  style=" color: #4D4D4D; font-family: Montserrat; font-size: 20px;  font-weight: 400;line-height: 17px;margin-top: -20px;"
                >
                  <li class="mb-3">150 soft copies of images Gold</li>
                  <li class="mb-3">50 professional edits</li>
                  <li class="mb-3">5 retouched images</li>
                  <li>12 * 8" frame</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          class="card ml-0"
          style="width: 100%; margin-right: 0px !important; margin-bottom: 0px !important"
        >
          <div
            class="card-header"
            id="headingFour"
            style="height: 50px; background-color: #FFFFFF !important;"
          >
            <a
              data-toggle="collapse"
              data-target="#collapseFour"
              aria-expanded="true"
              aria-controls="collapseFour"
              ><h1
                style=" color: #4D4D4D;font-family: Montserrat;font-size: 16px;font-weight: bold;line-height: 19px;"
              >
                Pricing Package
                <span class="float-right"
                  ><i class="fa fa-chevron-down"></i
                ></span></h1
            ></a>
          </div>

          <div
            id="collapseFour"
            class="collapse "
            aria-labelledby="headingFour"
            data-parent="#accordion"
          >
            <div
              class="card-body card-body-custom row"
              style="background-color: rgb(254, 251, 243) !important;"
            >
              <div class="col-12 mb-2" v-for="(p, key) in packages" :key="key">
                <package-card-list
                  :id="key"
                  :name="p.name"
                  :price="p.price"
                  :item:="p.item"
                  @packageData="packageData"
                  @onQuestionMarkClick="questionMarkClicked"
                ></package-card-list>
              </div>
            </div>
          </div>
        </div>
        <!--PRICING PACKAGE TAB-->

        <!--REVIEWS TAB-->
        <div
          class="card ml-0"
          style="width: 100%; margin-right: 0px !important; margin-bottom: 0px !important"
        >
          <div
            class="card-header"
            id="headingFive"
            style="height: 50px; background-color: #FFFFFF !important;"
          >
            <a
              data-toggle="collapse"
              data-target="#collapseFive"
              aria-expanded="true"
              aria-controls="collapseFive"
              ><h1
                style=" color: #4D4D4D;font-family: Montserrat;font-size: 16px;font-weight: bold;line-height: 19px;"
              >
                Reviews
                <span class="float-right"
                  ><i class="fa fa-chevron-down"></i
                ></span>
              </h1>
            </a>
          </div>

          <div
            id="collapseFive"
            class="collapse "
            aria-labelledby="headingFive"
            data-parent="#accordion"
            style="background-color: rgb(254, 251, 243) !important;"
          >
            <div class="card-body card-body-custom">
              <div
                class="row justify-content-center"
                v-for="(rev, key) in reviews"
                :key="key"
              >
                <div class="col-12">
                  <review
                    :photoname="rev.photoname"
                    :date="rev.date"
                    :img="rev.imgurl"
                    :revbody="rev.text"
                  ></review>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--REVIEWS TAB-->
      </div>

      <!----------------------MOBILE VIEWS---------------------->

      <div class="container desktop">
        <div class="row photo-name ">
          <div class="col-md-6 user">
            Afroshots <img src="../assets/images/google-verified.svg" alt="" />
          </div>
          <div class="col-md-6">
            <div v-if="!showSelectedPackage" class="row">
              <!--<div class="col-6">-->
              <!--<a @click="showbookingModal = true" class="btn btn-p btn-rounded btn-peexoo btn-new-peexo">Message Photographer</a>-->

              <!--</div>-->
              <div class="col-12">
                <div>
                  <router-link
                    style="width: 40%;"
                    class="btn btn-p btn-rounded btn-peexoo btn-new-peexo"
                    to="/photographer/book-a-shoot"
                    >Book Now
                  </router-link>
                </div>
                <div>
                  <a
                    class="btn btn-p btn-rounded btn-peexoo btn-outline-primary btn-new-peexo mr-4"
                    >Message Photographer</a
                  >
                </div>
              </div>
            </div>
            <div v-if="showSelectedPackage">
              <a
                class="float-right mt-5"
                style="color: #B7840A !important; font-family: Montserrat; font-size: 16px; font-weight: 600; line-height: 19px;"
                @click="goBack()"
                ><< Go Back</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container desktop">
      <div class="row ">
        <!--<div class="mobile-only">-->
        <!--<div class="col-6">-->
        <!--<div class="mt-3">-->
        <!--<router-link class="back" to="/photographers/search">-->
        <!--<< Go Back-->
        <!--</router-link>-->
        <!--</div>-->
        <!--</div>-->
        <!--<div class="col-6">-->
        <!--<router-link class="btn btn-p btn-peexoo btn-new-peexo" to="/booking/create">Book Now-->
        <!--</router-link>-->
        <!--</div>-->
        <!--</div>-->
        <div class="col-md-6 user-n mt-3 mobile-only">
          Afroshots
          <img class="ml-2" src="../assets/images/google-verified.svg" alt="" />
        </div>
      </div>

      <!-- DETAILS SECTION -->
      <div v-if="navSwitch.details">
        <div class="row mgt profile desktop" style="margin-top: -70px;">
          <div class="col-md-6">
            <p
              v-bind:class="{ 'shorten-desc': !showDetails, desc: showDetails }"
            >
              I am Jonathan, everyone call me Jo, or Afro because I shoot
              beautiful pictures in an African way. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </p>
            <span class="mobile-only sp" @click="showDetails = !showDetails">{{
              showDetails ? "Hide Details" : "View all"
            }}</span>
          </div>
          <div class="col-md-6 ">
            <div id="details">
              <div class="container">
                <div class="span-grp">
                  <span>
                    <img
                      class="mr-2"
                      style="margin-bottom: 3px"
                      src="../assets/images/bookmark-star.svg"
                      alt=""
                    />
                    300 reviews</span
                  >
                  <span>
                    <img
                      class="mr-2"
                      src="../assets/images/old-fashion-briefcase.svg"
                      alt=""
                    />
                    139k jobs completed</span
                  >
                  <span>
                    <img
                      class="mr-2 pl-2"
                      src="../assets/images/favorite-heart-button.svg"
                      alt=""
                    />
                    999 likes</span
                  >
                </div>
                <p class="provided">
                  Jonathan Provided
                </p>
                <div class="provided-details">
                  <p>
                    Government ID
                  </p>
                  <p>
                    BVN
                  </p>
                  <p>
                    Email address
                  </p>
                  <p>
                    Phone number
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="text-center col-12 desktop">
            <div class="speciality">
              <span>
                <img
                  src="../assets/images/icons/interlocking-rings.svg"
                  alt=""
                />
                Wedding</span
              >
              <span>
                <img
                  src="../assets/images/icons/camera-portrait-mode.svg"
                  alt=""
                />
                Portrait</span
              >
              <span>
                <img
                  src="../assets/images/icons/dress-long-and-black-shape.svg"
                  alt=""
                />
                Fashion</span
              >
              <span>
                <img
                  src="../assets/images/icons/icons-8-bottom-90.jpg"
                  alt=""
                />
                Nude Art</span
              >
              <span>
                <img src="../assets/images/icons/swimming-figure.svg" alt="" />
                Sport</span
              >
            </div>
          </div>
        </div>
      </div>
      <!-- END DETAILS SECTION -->

      <!-- PORTFOLIO SECTION -->
      <div v-else-if="navSwitch.portfolio">
        <!--<p class="text-center img-head-title">-->
        <!--Portfolio-->
        <!--</p>-->
        <div class="row portfolio desktop">
          <div class="col-md-3" v-for="(img, key) in imgs" :key="key">
            <Portfolio :imgs="img.url"></Portfolio>
          </div>
        </div>

        <div class="row">
          <div class="mobile-only">
            <slider ref="slider" :options="options">
              <slideritem v-for="(img, index) in imgs" :key="index">
                <mPortfolio :imgs="img.url" :title="img.title"></mPortfolio>
              </slideritem>
            </slider>
          </div>
        </div>
      </div>
      <!-- END PORTFOLIO SECTION -->

      <!-- AVAILABILITY SECTION -->
      <div v-else-if="navSwitch.availability" class="text-center">
        <!--<a @click="showbookingModal = true" class="desktop btn btn-p btn-rounded btn-peexoo btn-another-peexo">Book-->
        <!--Now</a>-->
        <!--<router-link class="btn btn-p btn-rounded btn-peexoo btn-another-peexo mobile-btn" to="/booking/create">Book Now</router-link>  -->
        <!--<h2 class="big-title mt-5 mb-5">-->
        <!--Availability-->
        <!--</h2>-->
        <div class="">
          <calender-slider></calender-slider>
          <div class="justify-content-center pt-2">
            <span>
              <i
                class="fa fa-angle-left  mr-2"
                style=" color: #474747 !important; font-size: 26px !important;"
              ></i
            ></span>
            <span>
              <i
                class="fa fa-circle  mr-2"
                style=" color: #474747 !important; font-size: 26px !important;"
              ></i
            ></span>
            <span>
              <i
                class="fa fa-angle-right  mr-2"
                style=" color: #474747 !important; font-size: 26px !important;"
              ></i
            ></span>
          </div>
        </div>
      </div>
      <!-- END AVAILABILITY SECTION -->

      <!-- PRICING PACKAGE SECTION -->
      <div v-else-if="navSwitch.pricingPackages">
        <div class="row" style="margin-top: -70px;">
          <div v-if="!showSelectedPackage" class=" col-4  mb-5 ">
            <select
              class="float-left custom-select custom-select-md"
              style="color: #D4D4D4 "
            >
              <option selected>Choose a category </option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div v-if="!showSelectedPackage" class="col-8">
            <h6
              class="float-right"
              style="color: #4D4D4D; font-size: 16px !important; line-height: 19px;"
            >
              {{ this.packages.length }} packages for all categories
            </h6>
          </div>

          <div class="row packagecard" v-if="!showSelectedPackage">
            <div v-for="(p, key) in packages" :key="key">
              <div class="col-4">
                <package-card-list
                  :id="key"
                  :name="p.name"
                  :price="p.price"
                  :item:="p.item"
                  @packageData="packageData"
                ></package-card-list>
              </div>
            </div>
          </div>

          <div class="col-12" v-if="showSelectedPackage">
            <div class="card" style="width: 100%; height: 350px;">
              <div class="card-body">
                <div class="row">
                  <div class="col-12">
                    <table class="table custom-table">
                      <thead style="background-color: #4D4D4D; color: white;">
                        <tr>
                          <th scope="col">Prewedding Gold</th>
                          <th scope="col" style="text-align: end"></th>
                          <th scope="col" style="text-align: end">₦230,000</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody
                        class="table-item font-weight-bold"
                        style="color:#4D4D4D !important;"
                      >
                        <tr>
                          <td style="font-weight: 600">
                            150 soft copies of images
                          </td>
                          <td style="text-align: end; font-weight: 600">1</td>
                          <td style="text-align: end; font-weight: 600">
                            no additional charges
                          </td>
                          <td></td>
                        </tr>
                        <tr>
                          <td style="font-weight: 600">
                            50 professional edits
                          </td>
                          <td style="text-align: end; font-weight: 600">1</td>
                          <td style="text-align: end; font-weight: 600">
                            no additional charges
                          </td>
                          <td></td>
                        </tr>
                        <tr>
                          <td style="font-weight: 600">5 retouched images</td>
                          <td style="text-align: end; font-weight: 600">1</td>
                          <td style="text-align: end; font-weight: 600">
                            no additional charges
                          </td>
                          <td></td>
                        </tr>
                        <tr>
                          <td style="font-weight: 600">12*8" frame</td>
                          <td style="text-align: end; font-weight: 600">
                            1
                          </td>
                          <td style="text-align: end; font-weight: 600">
                            ₦20,000
                          </td>
                          <td style="text-align: end">
                            <span
                              ><i
                                class="fa fa-trash-o"
                                style="color: #DD9C00; cursor: pointer"
                              ></i
                            ></span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <!--<div class="pb-4" style="width:200px">-->

            <div class=" col-4" style="">
              <select
                class="float-left custom-select custom-select-md"
                style="color: #D4D4D4 "
              >
                <option selected>Insert and add on </option>
                <option value="1">Photobook</option>
                <option value="2">Lorem ipsum</option>
                <option value="3">Lorem ipsum</option>
              </select>
            </div>
            <div class="col-2"><input type="number" value="1" /></div>
            <div class="col-5">N18000</div>
            <div class=" col-12">
              <mdb-input
                type="textarea"
                placeholder="Enter additional information"
                outline
                :rows="3"
              />
            </div>
            <div class="pt-2 col-12">
              <button
                style="color:#fff;"
                class="btn btn-p btn-rounded btn-peexoo float-right"
              >
                Book Package
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- PRICING PACKAGE SECTION -->

      <!-- REVIEW SECTION -->
      <div v-else-if="navSwitch.reviews">
        <div class="text-center review-header" style="margin-top: -30px">
          <h6>
            999 Reviews
          </h6>
          <p>
            <i class="fa peexo-body-text fa-star"></i>
            <i class="fa peexo-body-text fa-star"></i>
            <i class="fa peexo-body-text fa-star"></i>
            <i class="fa peexo-body-text fa-star"></i>
            <i class="fa peexo-body-text fa-star"></i>
          </p>
        </div>
        <div class="row" v-for="(rev, key) in reviews" :key="key">
          <review
            :photoname="rev.photoname"
            :date="rev.date"
            :img="rev.imgurl"
            :revbody="rev.text"
          ></review>
        </div>
        <p class="text-center view-all">
          View all reviews
        </p>
      </div>
      <!-- REVIEW SECTION -->
    </div>

    <Footer />
    <Menu />
  </div>
</template>
<script>
import { slider, slideritem } from "vue-concise-slider";
import bookingModal from "../components/bookingmodal";
import PHeader from "../components/PHeader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Portfolio from "../components/Gallery-portfolio";
import mPortfolio from "../components/m-gallery-portfolio";
import Review from "../components/Reviews";
import CalenderSlider from "../components/calendar-slider";
import PackageCardList from "../components/package-card-list.vue";
import { mdbInput } from "mdbvue";

export default {
  name: "photographer-page",
  props: ["show"],
  components: {
    PackageCardList,
    slider,
    slideritem,
    bookingModal,
    Header,
    PHeader,
    Footer,
    Menu,
    Portfolio,
    mPortfolio,
    Review,
    CalenderSlider,
    mdbInput
  },
  methods: {
    switchNav: function(id) {
      if (this.navSwitch[id] === true) return;
      for (const key in this.navSwitch) {
        this.navSwitch[key] = false;
      }
      this.navSwitch[id] = true;
    },

    goBack() {
      this.showSelectedPackage = false;
    },
    packageData(e) {
      //                console.log("EVENT: ", e);
      this.showSelectedPackage = true;
    },
    questionMarkClicked() {
      this.openOverlay();
    },
    openOverlay() {
      document.getElementById("myNav").style.display = "block";
    },
    closeOverlay() {
      document.getElementById("myNav").style.display = "none";
    }
    //            show(){
    //                this.showSelectedPackage = false;
    //            }
  },

  //        watch: function () {
  //            $('html, body').animate({
  //                scrollTop:  $("#navSection").scrollTop
  //            }, 1000)
  //        },
  data: function() {
    return {
      activeNavStyle: {
        backgroundColor: "#4D4D4D !important",
        height: "inherit"
      },
      options: {
        currentPage: 0,
        autoplay: 5000,
        loopedSlides: 1,
        loop: true,
        effect: "slide",
        pagination: false,
        itemAnimation: true
      },
      navSwitch: {
        details: true,
        portfolio: false,
        availability: false,
        pricingPackages: false,
        reviews: false
      },
      showDetails: false,
      showbookingModal: false,
      showSelectedPackage: false,
      imgs: [
        {
          title: "Beauty",
          url: "images/top-one.png"
        },
        {
          title: "Beauty",
          url: "images/top-two.png"
        },
        {
          title: "Beauty",
          url: "images/third-top.png"
        },
        {
          title: "Art",
          url: "images/top-fourth.png"
        },
        {
          title: "Fashion",
          url: "images/bottom-one.png"
        },
        {
          title: "Fashion",
          url: "images/bottom-two.png"
        },
        {
          title: "Fashion",
          url: "images/bottom-third.png"
        },
        {
          title: "Fashion",
          url: "images/bottom-fourth.png"
        }
      ],
      packages: [
        {
          name: "Prewedding Gold",
          price: "129,000",
          item: "5"
        },
        {
          name: "Prewedding Gold",
          price: "129,000",
          item: "5"
        },
        {
          name: "Prewedding Gold",
          price: "129,000",
          item: "5"
        },
        {
          name: "Prewedding Gold",
          price: "129,000",
          item: "5"
        },
        {
          name: "Prewedding Gold",
          price: "129,000",
          item: "5"
        },
        {
          name: "Prewedding Gold",
          price: "129,000",
          item: "5"
        }
      ],
      reviews: [
        {
          imgurl: "images/bitmap.png",
          photoname: "Jonathan Edward",
          date: "19th May, 2018",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          imgurl: "images/bitmap.png",
          photoname: "Jonathan Onyechi",
          date: "19th May, 2019",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          imgurl: "images/bitmap.png",
          photoname: "Jonathan Adefola",
          date: "19th May, 2019",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          imgurl: "images/bitmap.png",
          photoname: "Jonathan Afesola",
          date: "19th May, 2019",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          imgurl: "images/bitmap.png",
          photoname: "Jonathan Edward",
          date: "19th May, 2018",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
      ]
    };
  }
};
</script>
<style scoped>
.mobile-only {
  display: none;
}

.view-all {
  font-family: "Montserrat" !important;
  font-size: 18px;
  font-weight: 600;
  font-style: italic;
  text-align: center;
  color: #b58000 !important;
}

.review-header {
  margin-bottom: 66px;
}

.review-header h6 {
  font-size: 18px !important;
  font-weight: 400;
  text-align: center;
  color: #4d4d4d;
}

.img-head-title {
  font-family: Lora !important;
  font-size: 38px;
  font-weight: bold;
  text-align: center;
  color: #4d4d4d !important;
  margin-top: 70px;
  margin-bottom: 29px;
}

.speciality {
  margin-top: 50px;
  border-top: solid 1px #979797;
  border-bottom: solid 1px #979797;
  padding: 38px 0 38px 0;
}

.speciality span {
  margin-right: 34px;
}

.btn-new-peexo {
  color: #ffffff !important;
  margin-top: 30px !important;
  float: right;
  background-color: #ffb503 !important;
  box-shadow: none !important;
}

.btn-another-peexo {
  color: #ffffff !important;
  margin-top: 56px !important;
  background-color: #ffb503 !important;
  box-shadow: none !important;
}

.desc {
  color: #4d4d4d !important;
  line-height: 2.22;
  font-size: 1.125rem !important;
}

.photo-name {
  /*margin-top: 70px*/
}

.photo-name .user {
  font-family: Lora !important;
  font-size: 64px;
  font-weight: bold;
  color: #4d4d4d !important;
}

.photo-name p#desc {
  font-family: "Montserrat" !important;
  font-size: 18px !important;
  font-weight: 400;
  font-style: normal;
  font-stretch: normal;
  line-height: 2.22;
  letter-spacing: normal;
  color: #4d4d4d !important;
}

#details {
  border-radius: 6px;
  border: solid 1px #979797;
}

#details span {
  margin-right: 20px;
  font-family: "Montserrat" !important;
  font-size: 16px !important;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #4d4d4d !important;
}

.span-grp {
  padding-bottom: 39px;
  border-bottom: solid 1px #979797;
}

.mgt {
  /*margin-top: 36px*/
}

.provided {
  margin-top: 37px;
  font-family: "Montserrat" !important;
  font-size: 18px !important;
  font-weight: bolder;
  color: #4d4d4d !important;
}

.provided-details p {
  font-family: "Montserrat" !important;
  font-size: 16px;
  font-weight: 400;
  color: #4d4d4d !important;
}

.container {
  padding: 47px 30px 47px 30px !important;
}

.col-md-3 {
  padding-right: 0 !important;
  padding-left: 0 !important;
}

a.back {
  font-family: "Montserrat";
  font-weight: 500;
  color: #b7840a !important;
}

.mobile-btn {
  display: none;
}

@media (max-width: 480px) {
  .mobile-only {
    display: flex;
    width: 100%;
  }

  .mobile-btn {
    display: inline-block;
  }

  .photo-name {
    margin-top: 0 !important;
  }

  .btn-new-peexo {
    margin: 0 !important;
  }

  .btn.btn-peexoo {
    border-radius: 6px !important;
    padding: 0 20px !important;
  }

  .user-n {
    font-size: 24px !important;
    color: #4d4d4d !important;
    font-weight: bold !important;
  }

  .shorten-desc {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .mgt {
    margin-top: 10px !important;
  }

  .sp {
    font-family: "Montserrat";
    font-size: 1rem;
    font-weight: normal;
    font-style: italic;
    line-height: 1.5;
    color: #b88710;
    margin-bottom: 15px;
  }

  .span-grp span {
    display: block !important;
    padding-bottom: 10px !important;
  }

  .btn-peexoo-outline {
    border: 1px solid #ffb503;
    /*border-color: #FFB503;*/
    color: #ffb503 !important;
    background-color: transparent !important;
    width: 267px;
    height: 57px;
  }

  .btn {
    font-weight: 700;
    font-size: 0.875rem;
    letter-spacing: 0.5px;
    border-radius: 1.71875rem;
    padding: 0 50px;
    height: 54px;
    line-height: 50px;
    -webkit-transition: all 0.4s ease;
    -o-transition: all 0.4s ease;
    transition: all 0.4s ease;
  }
}

.btn {
  font-weight: 700;
  font-size: 0.875rem;
  letter-spacing: 0.5px;
  border-radius: 1.71875rem;
  padding: 0 50px;
  height: 54px;
  line-height: 50px;
  -webkit-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  transition: all 0.4s ease;
  white-space: nowrap !important;
}

.btn-outline-primary {
  border: 2px solid #ffb503 !important;
  background-color: transparent !important;
  color: #ffb503 !important;
}

.btn-outline-primary:not([disabled]):not(.disabled):active,
.btn-outline-primary:not([disabled]):not(.disabled).active,
.show > .btn-outline-primary.dropdown-toggle {
  border-color: #ffb503 !important;
}

.nav-peexoo {
  color: white !important;
  background-color: #ffb503 !important;
  /*color: #B7840A;*/
  /*color: #DD9C00;*/
}

.fa-star {
  color: black !important;
}

.table-item {
  color: #4d4d4d !important;
  font-family: Montserrat !important;
  font-size: 16px !important;
  font-weight: 500 !important;
}

.custom-table td,
.custom-table th {
  border-top: 1px solid #fefbf4 !important;
}

.card-body-custom {
  height: auto !important;
}

.overlay {
  height: 100%;
  width: 100%;
  display: none;
  position: fixed;
  z-index: 12;
  top: 0;
  left: 0;
  /*background-color: rgb(0,0,0);*/
  /*background-color: rgba(0,0,0, 0.9);*/
  background-color: #fefbf3;
  opacity: 0.98;
}

.overlay-content {
  position: relative;
  top: 25%;
  width: 100%;
  text-align: left;
  margin-top: 30px;
}

.overlay a {
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.overlay a:hover,
.overlay a:focus {
  color: #f1f1f1;
}

.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 40px !important;
  color: #4d4d4d !important;
}

.overlay .closebtn:hover {
  color: #ffb503 !important;
}

.row.packagecard,
.row.profile,
.row.portfolio {
  flex-wrap: wrap !important;
}
/*.row{*/
/*flex-wrap: wrap !important;*/
/*}*/
</style>
