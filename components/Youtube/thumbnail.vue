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
    <div class="ytd-wrapper">
        <NuxtLink :to="to">
            <div class="ytd-image">
                <div class="ytd-overlay">
                    <icon class="ytd-play" name="material-symbols:play-circle-rounded"/>
                </div>
                <div class="ytd-duration">20:30</div>
            </div>
    
            <div class="ytd-title">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, quos. Ducimus dolorem deleniti consequuntur eaque in, quidem hic quasi dolorum tempora nobis accusantium modi enim aliquid natus sit ratione architecto.</div>
    
            <div class="ytd-details">
                <div>3 months ago</div>
                <div>2m views</div>
            </div>
        </NuxtLink>
    </div>
</template>