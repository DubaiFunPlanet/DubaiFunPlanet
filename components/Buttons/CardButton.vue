<script setup>
const props = defineProps({
    label: {
        type: [String, Number],
        default: null,
    },
    to: {
        type: [String, Object],
        default: null,
    },
});
</script>

<template>
    <div class="inline-flex"><button class="cardBtnLabel baseButton" :to="to">{{ label }}</button></div>
</template>