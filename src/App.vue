<template>
  <div id="app">
    <movieitemComponent
      formulaire="Hello there"
      markplyer="Ho yeah, Mr Krabs"
      message="Magic !"
      hovermessage="You loaded this page on "
      seen="true"
      xelor="Laval , php , sonts palyndromes !"
      
    />
  </div>
</template>

<script>
import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

//import HelloWorld from './components/HelloWorld.vue'
import movieitemComponent from "./components/movieitem.vue";

export default {
  name: "app",
  components: {
    //HelloWorld,
    movieitemComponent
  }
};

var store = {
  state: {
    message: "Hello!"
  },
  setMessageAction(newValue) {
    this.state.message = newValue;
  },
  clearMessageAction() {
    this.state.message = "action B triggered";
  }
};

var vmA = new Vue({
  data: {
    privateState: {},
    sharedState: store.state
  }
});
</script>



<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
