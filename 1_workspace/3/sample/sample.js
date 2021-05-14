new Vue({
  el: "#app",
  data: {
    text: "",
    list: JSON.parse(localStorage["list"] || "[]"), // ["こんにちは", "おっす"]
  },
  methods: {
    addCard: function() {
      this.list.push(this.text)
      localStorage["list"] = JSON.stringify(this.list)
    },
  },
})
