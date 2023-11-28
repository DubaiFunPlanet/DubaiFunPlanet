<template>
    <div class="post-paragraph">
        <ContentSlot :use="$slots.default" unwrap="p" />
    </div>
</template>