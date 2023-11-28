<template>
    <div class="post-header">
        <ContentSlot :use="$slots.default" unwrap="H1" />
    </div>
</template>