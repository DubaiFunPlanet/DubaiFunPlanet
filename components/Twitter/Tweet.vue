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
    date: {
        type: [String, Object, Number],
        default: null,
    },
    time: {
        type: [String, Object, Number],
        default: null,
    },
});
</script>

<template>
    <div class="black-wrapper">
        <NuxtLink :to="to">
            <div class="x-wrapper">
                <!-- handle -->
                <div class="x-handle-container">
                    <div class="x-avatar"></div>
                    <div class="x-account">
                        <div class="x-name">So Fun Globe</div>
                        <div class="x-handle">@funplanet</div>
                    </div>
                </div>
                <!-- content/tweet -->
                <div class="x-content">
                    {{label}}
                </div>
                <!-- details -->
                <div class="x-details">
                    <div class="x-logo">
                       <div class="x-icon-sm">
                          <icon class="twitter-sm" name="ri:twitter-x-fill"/>
                        </div>
                        Twitter
                    </div>
                    <div class="x-date-time">
                        <div>{{date}}</div>
                        <div>{{time}}</div>
                    </div>
                </div>
            </div>
        </NuxtLink>
    </div>
</template>