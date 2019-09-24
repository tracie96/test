<template>
  <div>
    <PHeader />

    <div class="black-header">
      <h3>Join the Community</h3>
      <p>
        <<<<<<< HEAD Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        ======= The biggest community of African photographers >>>>>>>
        removednodeModule
      </p>
    </div>
    <section class="xs-section-padding mb-15">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-12">
            <form>
              <p class="h6 mb-4">
                Kindly fill out this form to join the community
              </p>

              <mdb-input type="text" label="Enter your first name" outline />

              <mdb-input type="text" label="Enter your last name" outline />

              <mdb-input type="email" label="Enter your email" outline />

              <mdb-input
                type="number"
                label="Enter your phone number"
                outline
              />

              <select class="browser-default custom-select">
                <option selected>How did you hear about the community?</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>

              <mdb-input
                type="textarea"
                placeholder="Any other comment?"
                outline
                :rows="3"
              />

              <div class="text-center mt-4">
                <button
                  style="width: 100%;color:#fff"
                  class="btn btn-p btn-rounded btn-peexoo"
                >
                  JOIN THE COMMUNITY
                </button>
              </div>
            </form>
          </div>
          <div class="col-md-6 desktop-only">
            <img
              src="../assets/images/sunmisola-olorunnisola-43913798-184315472451375-8597409187659397510-n.png"
              alt=""
            />
          </div>
        </div>
        <!-- .row end -->
      </div>
      <!-- .container END -->
    </section>
    <!-- end business info section -->
    <Footer />
    <Menu />
  </div>
</template>
<script>
import PHeader from "../components/PHeader";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import CommunityHeader from "../components/community-header";
import { mdbInput } from "mdbvue";
export default {
  name: "join-community",
  components: {
    PHeader,
    Footer,
    Menu,
    CommunityHeader,
    mdbInput
  }
};
</script>
<style scoped>
.black-header {
  height: 310px !important;
  /* background-image: url('../assets/images/hero.png') !important; */
}

.black-header p {
  padding: 10px 350px 0 350px;
  font-weight: normal !important;
}
.btn.btn-peexoo {
  padding: 0 36px !important;
}
p {
  margin-bottom: 3px !important;
}
@media screen and (max-width: 480px) {
  .black-header {
    height: 240px !important;
    padding-top: 44px !important;
    /* background-image: url('../assets/images/hero.png') !important; */
  }
  .black-header p {
    padding: 10px;
  }
  .xs-section-padding {
    padding-top: 50px !important;
  }
  .desktop-only {
    display: none;
  }
  .mb-15 {
    margin-bottom: 30px !important;
  }
}
.custom-select {
  height: calc(2.9rem + 2px) !important;
  padding: 0.5rem 1.75rem 0.5rem 0.75rem !important;
}
.md-form.md-outline {
  position: relative;
  margin-top: 1.5rem !important;
  margin-bottom: 1.5rem !important;
}
</style>
