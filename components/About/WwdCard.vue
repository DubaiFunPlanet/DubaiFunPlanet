<script setup>
// import { computed } from "vue";

const props = defineProps({
    title: {
        type: [String, Number],
        default: null,
    },
    paragraph1: {
        type: [String, Number],
        default: null,
    },
    paragraph2: {
        type: [String, Number],
        default: null,
    },
    paragraph3: {
        type: [String, Number],
        default: null,
    },
    src: {
        type: [String, Object],
        default: null,
    },
    to: {
        type: [String, Object],
        default: null,
    },
});

const imageSrc = computed(() => {
    if(props.image){
        return props.image
    }
})
</script>

<template>
    <div class="wwd-wrapper">
            <div class="wwd-container">
                <img class="wwd-card-image" :src="src" alt="">
            </div>

            <div class="wwd-text-container">
                <div>
                <h2 class="croissant wwd-title">{{title}}</h2>
                <p class="wwd-paragraph">{{paragraph1}}</p>
                <p class="wwd-paragraph mt-[10px]">{{paragraph2}}</p>
                <p class="wwd-paragraph mt-[10px]">{{paragraph3}}</p>
                </div>
            </div>
    </div>
</template>