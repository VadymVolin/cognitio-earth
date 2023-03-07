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
    },
    preloadImage(url) {
      var img = new Image();
      img.src = url;
    }
  }
})

app.mount('#app')


// API_KEY
// natural - string	- Most Recent Natural Color	Retrieve metadata on the most recent date of natural color imagery.
// natural/date - YYYY-MM-DD - Most Recent Available	Retrieve metadata for natural color imagery available for a given date.
// natural/all - string - Dates for Natural Color	Retrieve a listing of all dates with available natural color imagery.
// natural/available - string - Dates for Natural Color	Retrieve a listing of all dates with available natural color imagery.
// enhanced - string - Most Recent Enhanced Color	Retrieve metadata on the most recent date of enhanced color imagery.
// enhanced/date - YYYY-MM-DD - Most Recent Available	Retrieve metadata for enhanced color imagery for a given date.
// enhanced/all - string - Dates for Enhanced Imagery	Retrieve a listing of all dates with available enhanced color imagery.
// enhanced/available - string - Dates for Enhanced Imagery	Retrieve a listing of all dates with available enhanced color imagery.

// available dates: https://epic.gsfc.nasa.gov/api/natural/available || https://epic.gsfc.nasa.gov/api/natural/all
// available photo's: https://epic.gsfc.nasa.gov/api/natural/date/2015-10-31
// latest available: https://epic.gsfc.nasa.gov/api/natural

// example img: https://epic.gsfc.nasa.gov/archive/natural/2015/01/01/png/epic_1b_20230304222222.png