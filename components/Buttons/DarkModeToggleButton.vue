<template>
    <div class="w-auto h-auto z-50 inline-flex justify-center items-center">
        <label for="AcceptConditions" class="relative h-8 w-14 cursor-pointer">
          <input @click="toggle" type="checkbox" id="AcceptConditions" class="peer sr-only [&:checked_+_span_svg[data-checked-icon]]:block [&:checked_+_span_svg[data-unchecked-icon]]:hidden"/>
        
          <span class="absolute inset-y-0 start-0 z-10 m-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-gray-400 transition-all peer-checked:start-6 peer-checked:text-green-600">
            <icon data-unchecked-icon name="material-symbols:sunny-rounded"/>
            <svg data-checked-icon class="hidden h-4 w-4">
              <icon name="ph:moon-thin"/>
            </svg>
          </span>
        
          <span class="absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-green-500"></span>
        </label>
    </div>
</template>

<script>
    export default {
       methods: {
       toggle() {
         this.$colorMode.preference =
           this.$colorMode.value == "light" ? "dark" : "light";
           console.log($$colorMode.value)
       }
       }
    }
</script>