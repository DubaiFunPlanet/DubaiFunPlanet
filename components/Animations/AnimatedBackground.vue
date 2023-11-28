<template>
    <div class="w-full anime rounded4 marginB">
        <slide-show/>
    </div>
</template>

<style scoped>
.anime {
    background: linear-gradient(-45deg, #828181, #474747, #eeeeee, #101010);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
}

@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
</style>