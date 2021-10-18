<template>
  <div id="app">
    <div id="nav" class="shadow-sm">
      <div class="logo-head">
        <img alt="Ringkas" src="./assets/logo.png" />
        <p>RINGKAS</p>
      </div>

      <div class="nav-links">
        <!-- <div class="link-home"> -->
        <router-link to="/" class="link-home">
          <img src="./assets/img/icons/home.svg" alt="home" />
          Home
        </router-link>
        <!-- </div> -->
        <p class="nav-label">APPS</p>
        <button v-on:click="collapse" value="no">
          <img src="./assets/img/icons/cart.svg" alt="cart" />
          <p>Sales</p>
          <svg
            width="7"
            height="13"
            viewBox="0 0 7 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 11.8237L6 6.80752L1 1.79131"
              stroke="#606060"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <div class="link">
          <router-link to="/invoice">Invoice</router-link>
          <router-link to="/customer">Customer</router-link>
        </div>
        <button v-on:click="collapse" value="no">
          <img src="./assets/img/icons/icon5.svg" alt="" />
          <p>Services & Product</p>
          <svg
            width="7"
            height="13"
            viewBox="0 0 7 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 11.8237L6 6.80752L1 1.79131"
              stroke="#606060"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <div class="link">
          <router-link to="/category">Category</router-link>
          <router-link to="/inventory">Inventory</router-link>
        </div>
        <button v-on:click="collapse" value="no">
          <img src="./assets/img/icons/icon2.svg" alt="" />
          <p>Purchase</p>
          <svg
            width="7"
            height="13"
            viewBox="0 0 7 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 11.8237L6 6.80752L1 1.79131"
              stroke="#606060"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <div class="link">
          <router-link to="/bills">Bills</router-link>
          <router-link to="/vendors">Vendors</router-link>
        </div>
        <button v-on:click="collapse" value="no">
          <img src="./assets/img/icons/icon1.svg" alt="" />
          <p>Transaction</p>
          <svg
            width="7"
            height="13"
            viewBox="0 0 7 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 11.8237L6 6.80752L1 1.79131"
              stroke="#606060"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <div class="link">
          <router-link to="/coa">Chart of Account</router-link>
          <router-link to="/manualtransaction">Manual Transaction</router-link>
        </div>
        <button v-on:click="collapse" value="no">
          <img src="./assets/img/icons/icon4.svg" alt="" />
          <p>Report</p>
          <svg
            width="7"
            height="13"
            viewBox="0 0 7 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 11.8237L6 6.80752L1 1.79131"
              stroke="#606060"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <div class="link">
          <router-link to="/neraca">Neraca</router-link>
          <router-link to="/untungrugi">Untung Rugi</router-link>
        </div>
        <router-link to="/" class="link-home">
          <img
            src="./assets/img/icons/icon3.svg"
            alt=""
            style="filter: invert(0)"
          />
          POS
          <svg
            width="7"
            height="13"
            viewBox="0 0 7 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 11.8237L6 6.80752L1 1.79131"
              stroke="#606060"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </router-link>
      </div>
    </div>
    <div class="container container-content">
      <div class="header">
        <p>search</p>
      </div>
      <router-view />
    </div>
    <!-- <Login /> -->
  </div>
</template>

<script>
export default {
  name: "Nav",
  methods: {
    collapse: function (e) {
      const link = document.querySelectorAll(".link");
      const arrow = Object.values(
        document.querySelectorAll(".nav-links button svg")
      );
      const button = Object.values(
        document.querySelectorAll(".nav-links button")
      );
      return button.map((el, index) =>
        el.textContent === e.target.textContent && el.value === "no"
          ? (link[index].classList.add("show"),
            (arrow[index].style.transform = "rotate(90deg)"),
            (el.value = "yes"))
          : (link[index].classList.remove("show"),
            (arrow[index].style.transform = "rotate(0deg)"),
            (el.value = "no"))
      );
    },
  },
  data() {
    return {
      btn_id: 0,
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Expletus+Sans&display=swap");

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat", "sans-serif";
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  display: flex;
}

#nav {
  flex-basis: 16.67%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 240px;
}

.container-content {
  flex-basis: 83.33%;
}

.logo-head {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 51px;
  margin: 25px;
}

.logo-head p {
  font-family: "Expletus Sans", sans-serif;
  font-size: 12px;
  margin: 0;
}

.logo-head img {
  max-width: 28px;
}

.nav-links {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}

.show {
  /* display: flex !important; */
  /* transition: all 0.5s ease; */
  height: 10% !important;
  opacity: 1 !important;
}

.nav-links button {
  position: relative;
  background: white;
  margin: 4px 0;
  border: 0;
  font-family: "Montserrat", "sans-serif";
  font-weight: normal;
  font-size: 15px;
  color: black;
  cursor: pointer;
  width: 181px;
  min-height: 40px;
  text-align: start;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-self: center;
}

.nav-links button p {
  position: absolute;
  top: 25%;
  left: 15%;
  margin: 0;
  align-self: flex-start;
  pointer-events: none;
}

.nav-links button img {
  pointer-events: none;
}

.nav-links button svg {
  pointer-events: none;
  position: absolute;
  right: 0;
  transition: all 0.5s ease;
}

.nav-label {
  align-self: flex-start;
  text-align: start;
  font-size: 14px;
  color: #999999;
  transform: translate(75%);
}

.link {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transform: translate(30px);
  /* transition: all 0.5s ease; */
  transition: all 0.5s ease;
  /* transition: opacity 0.2s ease; */
  height: 0%;
  opacity: 0;
}

.link a {
  text-decoration: none;
  font-weight: normal;
  line-height: 40px;
  width: 203px;
  font-size: 13px;
  cursor: pointer;
  color: black;
  border-radius: 4px;
  padding-left: 28px;
  box-sizing: border-box;
}

.active {
  background: #106ee8;
  color: white !important;
  /* filter: invert(1); */
}

.active img {
  filter: invert(0) !important;
}

.link-home {
  box-sizing: border-box;
  position: relative;
  display: flex;
  width: 203px;
  align-items: center;
  border-radius: 4px;
  align-self: center;
  padding-left: 4%;
  line-height: 40px;
  text-decoration: none;
  font-size: 15px;
  color: black;
  cursor: pointer;
}

.link-home img {
  margin-right: 12px;
}

.link-home img {
  filter: invert(1);
}

.link-home svg {
  pointer-events: none;
  position: absolute;
  right: 11px;
}
</style>
