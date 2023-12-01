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
    <NuxtLink :to="to"><div class="inline-flex"><button class="cardBtnLabel baseButton">{{ label }}</button></div></NuxtLink>
</template>