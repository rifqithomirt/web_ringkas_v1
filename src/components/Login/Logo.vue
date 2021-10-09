<template>
  <div class="logo-ringkas">
    <img alt="Ringkas" src="../../assets/logo.png" />
    <img alt="Ringkas" src="../../assets/ringkas.png" />
  </div>
</template>

<script>
export default {
  name: "Logo",
};
</script>

<style scoped>
.logo-ringkas {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  left: 45%;
  top: -30%;
  /* transform: translateY(-150%); */
}

.logo-ringkas img {
  margin: 2px 0;
}
</style>