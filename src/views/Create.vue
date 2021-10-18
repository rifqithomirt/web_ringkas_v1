<template>
  <div class="container-create">
    <div>
      <b-card
        header="Bussiness address and contact details"
        header-tag="header"
        tag="article"
        style="max-width: 100%"
        class="mb-2"
        id="test"
      >
        <b-row
          style="
            padding-top: 37px;
            padding-left: 99px;
            padding-right: 99px;
            padding-bottom: 46px;
          "
        >
          <b-col>
            <img
              src="https://picsum.photos/600/300/?image=25"
              alt=""
              height="124px"
              width="276px"
            />
          </b-col>
          <b-col>
            <b-form-group>
              <b-form-input
                style="text-align: right; width: 377px"
                class="align-right-item mb-2"
                placeholder="Invoice"
              ></b-form-input>
              <b-form-input
                style="text-align: right; width: 377px"
                class="align-right-item mb-2"
                placeholder="Summary (e.g. project name, description invoice)t"
              ></b-form-input>
              <b-form-textarea
                rows="3"
                style="text-align: right; width: 377px"
                class="align-right-item mb-2"
                no-resize
                :placeholder="'Address, Line 1 Factory. \n United States'"
              >
              </b-form-textarea>
            </b-form-group>
          </b-col>
        </b-row>
      </b-card>
    </div>

    <div>
      <b-card tag="article" style="max-width: 100%" class="mb-2">
        <h6>Customer</h6>
        <b-row
          style="
            padding-top: 37px;
            padding-left: 599px;
            padding-right: 99px;
            padding-bottom: 46px;
          "
        >
          <b-col>
            <b-row>
              <b-col align-self="start">Invoice Number</b-col>
              <b-col>
                <b-form-input
                  style="text-align: right; width: 277px"
                  class="align-right-item mb-2"
                ></b-form-input>
              </b-col>
            </b-row>
            <b-row>
              <b-col align-self="start">P.O/S.O Number</b-col>
              <b-col>
                <b-form-input
                  style="text-align: right; width: 277px"
                  class="align-right-item mb-2"
                ></b-form-input>
              </b-col>
            </b-row>
            <b-row>
              <b-col align-self="start">Invoice Date</b-col>
              <b-col
                ><b-form-datepicker
                  style="text-align: left; width: 277px"
                  class="align-right-item mb-2"
                  placeholder="Form"
                ></b-form-datepicker
              ></b-col>
            </b-row>
            <b-row>
              <b-col align-self="start">Payment Due</b-col>
              <b-col
                ><b-form-datepicker
                  style="text-align: left; width: 277px"
                  class="align-right-item mb-2"
                  placeholder="Form"
                ></b-form-datepicker
              ></b-col>
            </b-row>
          </b-col>
        </b-row>

        
          <b-row>
              <b-col>
                <b-col>Item name</b-col>
              </b-col>
              <b-col>
                <b-col>Quantity</b-col>
              </b-col>
              <b-col>
                <b-col>Price</b-col>
              </b-col>
              <b-col>
                <b-col>Amount</b-col>
              </b-col>
          </b-row>

          <b-row>
            <b-col>
              <div>
                <b-form-select
                  v-model="selected"
                  :options="options"
                ></b-form-select>
              </div>
            </b-col>
            <b-col>
              <b-form-input
                v-model="quantity"
                type="number"
              ></b-form-input>
            </b-col>
            <b-col>
              <b-form-input
                v-model="price"
                type="number"
              ></b-form-input>
            </b-col>
            <b-col>
              <p>$ {{ price * quantity }}</p>
            </b-col>
          </b-row>

          <b-row class="text-sm-center">
            <b-col><b-button variant="outline-dark">Add Item</b-button></b-col>
          </b-row>
          
          <b-row>
            <p class="align-right">Total: {{ price * quantity }}</p>
          </b-row>

        <h6>Notes / Terms</h6>
        <b-textarea
          rows="3"
          no-resize
          placeholder="Enter a note for this invoice"
        ></b-textarea>
        <div style="margin-top: 122px"></div>
      </b-card>
    </div>

    <b-row class="align-right">
      <b-col><b-button variant="outline-dark">Save Invoice</b-button></b-col>
    </b-row>

  </div>
</template>

<script>
export default {
  name: "invoice",
  data() {
    return {
      selected: null,
      options: [
        { value: 1, text: "Please select an option" },
        { value: 2, text: "This is First option" },
        { value: 3, text: "Selected Option" },
      ],
      price: "",
      quantity: "",
    };
  },
  methods: {
    amount() {
      console.log("price");
    },
  },
};
</script>

<style>
.form-control:disabled {
  background-color: white !important;
}

.card-header {
  background-color: rgba(16, 110, 232, 0.3) !important;

  border-radius: 8px 8px 0px 0px !important;
  height: 33px;
  padding-left: 18px !important;
  padding-top: 8px !important;
  padding-bottom: 7px !important;
  font-size: 12px;
}

.card-body {
  padding: 0px !important;
}

.card {
  border-radius: 8px 8px 8px 8px !important;
}
.align-right-item {
  margin-left: auto;
  margin-right: 0px;
}
.align-right {
  text-align: right;
}
</style>