<template lang="">
    <div class="dark:bg-[#0F172A] bg-white h-screen">
        <div class="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4">
  <a href="/" class="text-muted-400 hover:text-[#8B5CF6] dark:text-muted-700 dark:hover:text-primary-500 transition-colors duration-300"
    ><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 500 500" xml:space="preserve" class="size-10 shrink-0">
      <g>
        <g>
          <defs>
            <path
              id="LOGOSVGID_1_"
              d="M228.4,181.2c59.6,0,107.8,48.3,107.8,107.8c0,59.6-48.3,107.8-107.8,107.8
          c-59.6,0-107.8-48.3-107.8-107.8C120.6,229.5,168.8,181.2,228.4,181.2 M228.4,78c-116.5,0-211,94.5-211,211
          c0,116.5,94.5,211,211,211c116.5,0,211-94.5,211-211c0-25.2-4.4-49.5-12.6-71.9c-5.2-14.4-16.9-24.2-32-26.9
          c-45.1-7.9-82-39.7-97.1-81.9c-5.2-14.5-16.8-24.3-31.9-27C253.7,79.2,241.2,78,228.4,78z"
            ></path>
          </defs>
          <use xlink:href="#LOGOSVGID_1_" clip-rule="evenodd" fill-rule="evenodd" fill="currentColor" class="overflow-visible"></use>
          <clipPath id="LOGOSVGID_2_"><use xlink:href="#LOGOSVGID_1_" class="overflow-visible"></use></clipPath>
          <rect x="17.4" y="78" clip-path="url(#LOGOSVGID_2_)" width="422" height="422" fill="currentColor"></rect>
        </g>
        <g>
          <defs>
            <path
              id="LOGOSVGID_3_"
              d="M416.8,0c36.3,0,65.8,29.5,65.8,65.8c0,36.3-29.5,65.8-65.8,65.8c-36.3,0-65.8-29.5-65.8-65.8
          C351,29.5,380.5,0,416.8,0"
            ></path>
          </defs>
          <use xlink:href="#LOGOSVGID_3_" clip-rule="evenodd" fill-rule="evenodd" fill="currentColor" class="overflow-visible"></use>
          <clipPath id="LOGOSVGID_4_"><use xlink:href="#LOGOSVGID_3_" class="overflow-visible"></use></clipPath>
          <rect x="351" y="0" clip-path="url(#LOGOSVGID_4_)" width="131.6" height="131.6" fill="currentColor"></rect>
        </g>
      </g></svg
  ></a>
  <div class="flex items-center gap-4">
    <BaseThemeToggle />
  </div>
</div>

<div class="max-w-sm px-4 flex flex-col items-center justify-center mt-6 mx-auto">
    <div class="rounded-full w-16 h-16 bg-[#8B5CF6] mb-3"></div>
    <BaseHeading
    as="h4"
    size="lg"
    weight="semibold"
    class="text-muted-800 dark:text-white"
  >
   Enter basic info
  </BaseHeading>
  <p class="text-[#94A3B8] my-1">Enter the required information to continue</p>
  <div class="mt-6 w-full flex flex-col gap-3">
    <BaseInput
      v-model="fields.third"
      rounded="md"
     class="text-center placeholder:text-center"
      placeholder="Firste Name"
    />

    <BaseInput
      v-model="fields.third"
      rounded="md"
     class="text-center placeholder:text-center"
      placeholder="Middle Name (optional)"
    />
    <BaseInput
      v-model="fields.third"
      rounded="md"
     class="text-center placeholder:text-center"
      placeholder="Last Name"
    />
    <BaseTextarea
      v-model="value"
      contrast="muted"
      size="sm"
      rounded="md"
      placeholder="Add a bio (optional)"
    />
      <div class="mt-5 mx-auto flex items-center justify-center">
        <button type="button" rel="" target="" class="nui-button nui-button-md nui-button-rounded-lg nui-button-solid nui-button-default !h-12 w-36"> Continue <!----></button>
</div>
  </div>
</div> 

    </div>
</template>
<script setup lang="ts">
const fields = reactive({
  first: '',
  second: '',
  third: '',
  fourth: '',
})
const value = ref('')
</script>
<style lang="">
    
</style>