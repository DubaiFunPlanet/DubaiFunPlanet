<script setup>
// import { computed } from "vue";

const props = defineProps({
    label: {
        type: [String, Number],
        default: null,
    },
    date: {
        type: [String, Number, Array, Object],
        default: null,
    },
});
</script>

<template>
    <div class="croissant bar-text">
        <p> {{ label }} </p>
        <p>{{ date }}</p>
    </div>
</template>