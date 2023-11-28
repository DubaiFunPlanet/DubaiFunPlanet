<script setup>
    const props = defineProps({
        label1: {
            type: [String, Number],
            default: null,
        },
        label2: {
            type: [String, Number],
            default: null,
        },
        context: {
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
        show: {
            type: Boolean,
            default: null
        }
    });
</script>

<template>
    <div class="welcomeText">
        <h2 class="mediumHeader croissant"> {{ label1 }} </h2>
        <h1 class="largeHeader croissant">{{ label2 }}</h1>
        <p class="context">{{ context }}</p>
        <p class="paragraph">{{ paragraph1 }}</p>
        <p v-if="show" :show="show" class="paragraph">{{ paragraph2 }}</p>
    </div>
</template>