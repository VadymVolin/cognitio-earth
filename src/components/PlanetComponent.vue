<template>
    <main id="planet-component">
        <div id="circlr">
            <img v-for="item in data" :src="item.src" :alt="item.src" />
        </div>
    </main>
</template>

<script>
import circlr from 'circlr'
import {
    NASA_RECENT_NATURAL_DATA_ENDPOINT,
    NASA_API_BASE_URL, API_KEY_PARAM,
    NASA_IMAGE_NATURAL_ENDPOINT,
    PNG_FILE_FORMAT,
    PNG_FORMAT,
    RIGHT_SLASH
} from '../api/ApiConstants.js'
export default {
    data() {
        return {
            data: [],
        }
    },
    methods: {
        async fetchData() {
            var url = new URL(NASA_RECENT_NATURAL_DATA_ENDPOINT, NASA_API_BASE_URL)
            url.searchParams.append(API_KEY_PARAM, import.meta.env.API_KEY)
            await Promise.resolve(fetch(url)
                .then(res => res.json())
                .then(assets => {
                    assets.forEach(dataItem => {
                        const date = new Date(dataItem.date)
                        const imageEndpoint = NASA_IMAGE_NATURAL_ENDPOINT
                            .concat(date.getFullYear())
                            .concat(RIGHT_SLASH)
                            .concat(String((date.getMonth() + 1)).padStart(2, '0'))
                            .concat(RIGHT_SLASH)
                            .concat(String(date.getDate()).padStart(2, '0'))
                            .concat(RIGHT_SLASH)
                            .concat(PNG_FORMAT)
                            .concat(RIGHT_SLASH)
                            .concat(dataItem.image)
                            .concat(PNG_FILE_FORMAT)
                        const imgUrl = new URL(imageEndpoint, NASA_API_BASE_URL)
                        const image = new Image()
                        image.src = imgUrl
                        this.data.push(image)
                    })
                    console.log("data");
                })
                .catch((err) => {
                    console.error(err)
                }))
        },
    },
    beforeCreate() {
    },
    created() {
    },
    beforeMount() {
        this.fetchData()
    },
    mounted() {

    },
    beforeUpdate() {
    },
    updated() {
        console.log("updated");
        let el = document.getElementById('circlr')
        const crclr = circlr(el)
            .scroll(true)
            .cycle(true)
            .interval(250)
            .on('show', n => {
            })
        el.addEventListener('touchend', function (e) {
            e.preventDefault()
            crclr.play()
        }, false)
        let timeoutId = -1
        el.addEventListener('wheel', function (e) {
            console.log("wheel");
            e.preventDefault()
            console.log("prev: ", timeoutId)
            clearTimeout(timeoutId)
            timeoutId = setTimeout(() => {
                console.log("new: ", timeoutId)
                crclr.play()
                console.log("hey...I'm 2 seconds in, play")
            }, 1000)
        }, false)
        crclr.play()
    },
    beforeRouteLeave() {
    },
    beforeRouteUpdate() {
    },
    computed: {
    },
}


// const img = document.createElement("img")
// img.src = "https://picsum.photos/200/301"
// document.body.appendChild(img)

// window.onload = function () {
//     let el = document.getElementById('circlr')
//     circlr(el)
//         .scroll(true)
//         .cycle(true)
//         .on('show', n => {
//         })
// }

</script>

<style scoped>
#circlr {
    cursor: move;
    margin: 0 auto;
    min-height: 300px;
    min-width: 300px;
    max-width: 300px;
    max-height: 300px;
    width: 300px;
    height: 300px;
    position: relative;
}

#circlr img {
    max-width: 300px;
    max-height: 300px;
}
</style>