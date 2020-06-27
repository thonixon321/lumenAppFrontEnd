<template>
  <div class="relative flex flex-col items-center">
    <div
      id="app"
      class="wrapper"
    >
      <base-nav-bar>
        <router-link
          :to="{ name: 'Home' }"
          slot="logo"
        >
          <base-logo path="authorsLogo"></base-logo>
        </router-link>
        <div
          class="header-actions"
          slot="header-actions"
        >
          <search-bar />
          <base-button
            @clicked="changeSlideComponent"
            :icon="true"
            type="search"
          ></base-button>
          <base-button
            v-if="loggedIn === false"
            @clicked="changeSlideComponent"
            :icon="true"
            type="loginForm"
          >
            <span slot="right-text">Log In</span>
          </base-button>
          <base-button
            v-else
            :icon="false"
            @clicked="$store.dispatch('updateLoggedInStatus', false), $router.push({name:'Home'})"
          >
            <span slot="right-text">Log Out</span>
          </base-button>
          <base-button
            v-if="loggedIn"
            @clicked="$router.push({name:'AddBlog'})"
            :icon="false"
          >
            <span slot="right-text">Add Blog</span>
          </base-button>
          <base-button
            v-else
            @clicked="changeSlideComponent"
            :icon="false"
            type="signUpForm"
          >
            <span slot="right-text">Sign Up</span>
          </base-button>
          <base-button
            @close="componentName = null"
            @clicked="changeSlideComponent"
            :icon="true"
            type="menuHamburger"
          >
          </base-button>
        </div>
      </base-nav-bar>
      <transition
        name="slide-vertical"
        mode="out-in"
      >
        <component
          @close="componentName = null"
          @hamburgerClicked="changeHamburgerComponent"
          v-if="componentName"
          :is="componentName"
          :drawer="drawer"
        />
      </transition>
      <transition
        name='router-fade'
        mode="out-in"
      >
        <router-view @clicked="componentName = null" />
      </transition>
    </div>
    <transition name="pop-bounce">
      <base-alert
        v-if="alertObj.alert"
        :success="alertObj.alertSuccess"
      >
        <span slot="title">{{ alertObj.alertTitle }}</span>
        <p>{{ alertObj.alertMessage}}</p>
      </base-alert>
    </transition>
  </div>
</template>

<script>
import SearchBar from "./components/SeachBar";
import BaseAlert from "./components/BaseAlert";
import BaseNavBar from "./components/BaseNavBar";
import BaseLogo from "./components/BaseLogo";
import BaseButton from "./components/BaseButton";
import loginForm from "./components/loginForm";
import signUpForm from "./components/signUpForm";
import search from "./components/search";
import menuHamburger from "./components/menuHamburger";
import { mapState } from "vuex";

export default {
  name: "App",

  data() {
    return {
      componentName: null,
      drawer: true
    };
  },

  computed: {
    ...mapState({
      loggedIn: state => state.loggedIn,
      alertObj: state => state.alertObj
    })
  },

  methods: {
    changeSlideComponent(comp) {
      this.drawer = false;

      if (this.componentName === comp) {
        this.componentName = null;
      } else {
        this.componentName = comp;
      }
    },

    changeHamburgerComponent(comp) {
      this.drawer = true;
      if (this.componentName === comp) {
        this.componentName = null;
      } else {
        this.componentName = comp;
      }
    }
  },

  components: {
    SearchBar,
    BaseAlert,
    BaseNavBar,
    BaseLogo,
    BaseButton,
    loginForm,
    signUpForm,
    search,
    menuHamburger
  }
};
</script>

<style>
/* global styles */
html {
  margin: 0px;
  width: 100%;
  min-height: 100%;
  background-color: #86867a;
  padding: 0px;
}

body {
  margin: 0px auto !important;
  max-width: 970px;
  min-height: 100%;
  background-color: white;
  padding: 0px;
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  font-variant-ligatures: none;
  color: #6a6a60;
  z-index: 2;
}

#app {
  position: relative;
  min-height: 57em;
  width: 100%;
  z-index: 1;
}

.slide-vertical-enter-active,
.slide-vertical-leave-active {
  transition: all 0.3s ease-in-out;
}

.slide-vertical-enter-to,
.slide-vertical-leave {
  max-height: 30em;
  overflow: hidden;
}

.slide-vertical-enter,
.slide-vertical-leave-to {
  overflow: hidden;
  max-height: 0;
}

.pop-bounce-enter-active,
.pop-bounce-leave-active {
  transition: transform 0.3s 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.pop-bounce-enter,
.pop-bounce-leave-to {
  transform: scale(0);
}

.pop-bounce-enter-to,
.pop-bounce-leave {
  transform: scale(1);
}

.router-fade-enter-active {
  transition: all 0.5s ease-in-out;
}

.router-fade-enter {
  transform: translateX(-1%);
  opacity: 0;
}

.router-fade-enter-to {
  transform: translateX(0%);
  opacity: 1;
}

.router-fade-leave-to {
  transform: translateX(1%);
  opacity: 0;
}

.slidingComponent {
  position: absolute;
  top: 6.193em;
  right: 0;
  width: 25em;
}

.drawerComponent {
  display: none;
}

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
  color: white;
  background: none;
}

.searchButton {
  padding: 0 1.25em;
}

.loginFormButton {
  padding: 0 1em;
}

.header-actions {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0em 1em;
}

.header-actions button {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0em 0.1em;
  font-size: 0.89em;
  color: white;
  width: 6em;
}
.header-actions button.smallButton {
  width: 2em;
  height: 2em;
}

.searchIcon {
  width: 1.5em;
  height: 1.5em;
}

.loginIcon {
  width: 0.85em;
  height: 1.5em;
  position: relative;
  top: -0.051em;
  margin-right: 0.5em;
}

.menuIcon {
  display: block;
  width: 1.5em;
  height: 1.5em;
}

.header-actions button.searchButton {
  display: none;
}

@media all and (min-width: 1300px) {
  body {
    max-width: 1250px;
  }
}

@media all and (max-width: 700px) {
  .header-actions .searchBar {
    display: none;
  }

  .slidingComponent {
    display: none;
  }

  .drawerComponent {
    display: block;
    position: absolute;
    top: 6.193em;
    right: 0;
    width: 20em;
  }
}
</style>
