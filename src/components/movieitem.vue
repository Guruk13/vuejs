
<template lang="babel">
   <div class="quarkTemplate">
        {{ message }}
        </br>
        <span v-bind:title="hovermessage">
            Hover your mouse over me for a few seconds
            to see my dynamically bound title!
        </span>
        <span v-if="seen">Now you see me</span>
        </br>

        <ul v-bind:samuelMWord= "">
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
export default {
  name: "movieitemComponent",

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
  },

  props: {
    formulaire: String,
    markplyer: String,
    message: String,
    hovermessage: String,
    seen: Boolean,

    xelor: String,
    samuelMWord: Object
  }
};
</script>

<style  scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>