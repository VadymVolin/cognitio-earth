<template>
    <div id="planet-component">
        <div id="circlr">
            <img v-for="item in data" :src="item.src" :alt="item.src" />
        </div>
    </div>
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
        this.fetchData()
    },
    beforeMount() {
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
        el.addEventListener('mouseup', function (e) {
            e.preventDefault()
            crclr.play()
        }, false)
        let timeoutId = -1
        el.addEventListener('wheel', function (e) {
            e.preventDefault()
            clearTimeout(timeoutId)
            timeoutId = setTimeout(() => {
                crclr.play()
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
</script>

<style scoped>
@media (min-width: 1024px) {
    #planet-component {
        justify-content: end;
    }

    #circlr {
        width: 800px;
        height: 800px;
        max-width: 800px;
        max-height: 800px;
    }
}

@media (max-width: 1023px) {
    #planet-component {
        justify-content: center;
    }

    #circlr {
        width: 700px;
        height: 700px;
        max-width: 700px;
        max-height: 700px;
    }
}

@media (max-width: 762px) {
    #circlr {
        width: 575px;
        height: 575px;
        max-width: 575px;
        max-height: 575px;
    }
}

@media (max-width: 575px) {
    #circlr {
        width: 375px;
        height: 375px;
        max-width: 375px;
        max-height: 375px;
    }
}

@media (max-width: 375px) {
    #circlr {
        width: 340px;
        height: 340px;
        max-width: 340px;
        max-height: 340px;
    }
}

@media (max-width: 320px) {
    #circlr {
        width: 300px;
        height: 300px;
        max-width: 300px;
        max-height: 300px;
    }
}

#planet-component {
    display: flex;
    flex-flow: row wrap;
    width: 100%;
}

#circlr {
    cursor: move;
    min-height: 240px;
    min-width: 240px;
    position: relative;
}

#circlr img {
    width: 100%;
}
</style>