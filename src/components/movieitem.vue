<template lang="babel">
   <div id="app">
        {{ message }}
        </br>
        <span v-bind:title="hovermessage">
            Hover your mouse over me for a few seconds
            to see my dynamically bound title!
        </span>
        <span v-if="seen">Now you see me</span>
        </br>

        <ul>
            <li v-for="(m,i) in samuelMWord">
                {{ i + m.text }} <button v-on:click = "deleteMovie(i)" >X</button>
            </li>
        </ul>

        <p>{{ xelor }}</p>
        <button v-on:click="reverseMessage">Reverse Message</button>
        </br>

        <p>{{ formulaire }}</p>
        <input v-model="formulaire">

        </br>
        <p>{{ markplyer }}</p>
        <input v-model= "getFirstLetter" type="text" >{{ markplyer }}</input>
            </br>
    </div>
</template>

<script>
import OtherComponent from "./OtherComponent.vue";

export default {
  components: {
    OtherComponent
  },
  data() {
    return {
      formulaire: "Hello there ! ",
      markplyer: "Ho yeah, Mr Krabs",
      message: "Magic !",
      hovermessage: "You loaded this page on " + new Date().toLocaleString(),
      seen: true,

      xelor: "Laval , php , sonts palyndromes !",
      samuelMWord: [
        { index: 1, text: "Pulp Fiction" },
        { index: 2, text: "Fresh" },
        { index: 3, text: "Snakes on a Plane" }
      ],

      methods: {
        reverseMessage: function() {
          this.xelor = this.xelor
            .split("")
            .reverse()
            .join("");
        },

        getFirstLetter: function() {
          this.markplyer = this.markplyer[0];
        },
        deleteMovie: function(i) {
          this.samuelMWord.splice(i, 1);
        }
      }
    };
  }
};
</script>

<style lang="stylus" scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>