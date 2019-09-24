<template>
  <div
    class="tab-pane fade"
    id="pills-details"
    role="tabpanel"
    aria-labelledby="pills-details-tab"
  >
    <form>
      <h5 class="py-3">Booking Personal Details</h5>
      <div class="form-row">
        <div class="form-group col-md-6">
          <input
            type="text"
            class="form-control shadow-sm"
            id=""
            placeholder="First Name"
          />
        </div>
        <div class="form-group col-md-6">
          <input
            type="text"
            class="form-control shadow-sm"
            id=""
            placeholder="Last Name"
          />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <input
            type="number"
            class="form-control shadow-sm"
            id=""
            placeholder="Phone Number"
          />
        </div>
        <div class="form-group col-md-6">
          <input
            type="password"
            class="form-control shadow-sm"
            id=""
            placeholder="Password"
          />
        </div>
      </div>

      <h5 class="py-3">Shoot Location Details</h5>
      <div class="form-row">
        <div class="form-group col-md-6">
          <input
            type="text"
            class="form-control shadow-sm"
            id=""
            placeholder="Country"
          />
        </div>
        <div class="form-group col-md-6">
          <input
            type="text"
            class="form-control shadow-sm"
            id=""
            placeholder="State"
          />
        </div>
      </div>

      <div class="form-group">
        <input
          type="text"
          class="form-control shadow-sm"
          id="inputAddress"
          placeholder="Address:1234 Main St"
        />
      </div>

      <h5 class="py-3">Shoot Details</h5>
      <div class="form-group">
        <input
          type="text"
          class="form-control shadow-sm"
          id="inputAddress"
          placeholder="Type of services:Photography"
        />
      </div>

      <div class="form-row">
        <div class="form-group col-md-6">
          <input
            type="date"
            class="form-control shadow-sm"
            id=""
            placeholder="Shoot start date"
          />
        </div>
        <div class="form-group col-md-6">
          <input
            type="date"
            class="form-control shadow-sm"
            id=""
            placeholder="Shoot end date"
          />
        </div>
      </div>

      <div class="form-group">
        <input
          type="text"
          class="form-control shadow-sm"
          id="inputAddress"
          placeholder="More details:loerm iMore detailsMore detailsMore detailsMore detailsMore detailsMore detailsvvvMore detailsMore details"
        />
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped></style>
