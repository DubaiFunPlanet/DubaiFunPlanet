<script setup>
const props = defineProps({
    title: {
        type: [String, Number],
        default: null,
    },
    content: {
        type: [String, Number],
        default: null,
    },
    date: {
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
    <div class="card">
        <!-- side A -->
        <div class="cardSideA">
            <h2 class="cardTitleText croissant"> {{ title }} </h2>
            <p class="cardContentText"> {{ content }} </p>
            <div class="flex justify-between items-end">
                <p class="cardDate"> {{ date }} </p>
                <NuxtLink :to="to">
                    <CardButton label="Read More"/>
                </NuxtLink>
            </div>
        </div>

        <!-- side B -->
        <div class="cardSideB bg-gray-200">
            <img class="cardImage" :src="src" alt="">
            <div class="cardIcons">
                <div class="cardIcon"><icon name="material-symbols:share"/></div>
                <div class="cardIcon"><icon name="material-symbols:bookmark"/></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.icon {
    font-size: 12px;
}
</style>