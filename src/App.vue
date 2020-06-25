<template>
  <div id="app" class="wrapper">
    <base-nav-bar>
      <a href="https://www.myfirstccu.org" slot="logo">
        <base-logo></base-logo>
      </a>
      <div class="header-actions" slot="header-actions">
        <base-button icon="true" type="search"></base-button>
        <base-button icon="true" type="loginMenu">
          <span slot="right-text">Log In</span>
        </base-button>
        <base-button icon="true" type="menu"></base-button>
      </div>
    </base-nav-bar>
    <router-view />
  </div>
</template>

<script>
import BaseNavBar from "./components/BaseNavBar";
import BaseLogo from "./components/BaseLogo";
import BaseButton from "./components/BaseButton";

export default {
  name: "App",

  components: {
    BaseNavBar,
    BaseLogo,
    BaseButton,
  },
};
</script>

<style>
html {
  margin: 0px;
  width: 100%;
  min-height: 100%;
  background-color: #86867a;
  padding: 0px;
}
.wrapper {
  position: relative;
  width: 100%;
  min-width: 930px;
  height: 100%;
}
body {
  margin: 0px auto;
  max-width: 970px;
  min-height: 100%;
  background-color: white;
  padding: 0px;
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  font-variant-ligatures: none;
  color: #6a6a60;
  z-index: 2;
}
/* global styles */
button {
  position: relative;
  overflow: hidden;
  transition: all 0.125s ease-in;
  display: block;
  margin: 0;
  border: none;
  height: 100%;
  cursor: pointer;
  text-align: center;
  font-weight: bold;
  outline: none;
  color: #303030;
  background: none;
}

.searchButton {
  padding: 0 1.25em;
}

.loginMenuButton {
  padding: 0 1em;
}

.header-actions {
  display: flex;
  margin: 0em 1em;
}

.header-actions button {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0em 0.1em;
  font-size: 0.89em;
}

.header-actions button.loginMenuButton {
  font-size: 1.02em;
}

.searchIcon {
  width: 1.5em;
  height: 1.5em;
}

.loginIcon {
  width: 0.85em;
  height: 1.5em;
  position: relative;
  top: -0.15em;
  margin-right: 0.25em;
}

.menuIcon {
  display: block;
  width: 1.5em;
  height: 1.5em;
}

@media (min-width: 1300px) {
  body {
    max-width: 1250px;
  }
}
</style>
