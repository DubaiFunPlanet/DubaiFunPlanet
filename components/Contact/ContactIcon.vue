<script setup>
const props = defineProps ({
    name: {
        type: [String, Object],
        default: null,
    },
    to: {
        type: [String, Object],
        default: null,
    }
})
</script>

<template>
    <NuxtLink class="contact-icon-container" :to="to">
        <icon class="contact-icons" :name="name"/>
    </NuxtLink>
</template>
