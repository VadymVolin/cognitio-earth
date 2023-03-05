const { createApp } = Vue

const app = createApp({
    data() {
        return {
            count: 0
        }
    },
    methods: {
      increment() {
        this.count++
        console.log("count: ", this.count)
      }
    }
})

app.mount('#app')

// example img: https://epic.gsfc.nasa.gov/archive/natural/2015/01/01/png/epic_1b_20230304222222.png