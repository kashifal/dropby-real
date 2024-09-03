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
   Add your profile picture
  </BaseHeading>
  <p class="text-[#94A3B8] my-1">Or skip if you have a bad hairday</p>
  <BaseInputFileHeadless
      v-slot="{ open, remove, preview, drop, files }"
      v-model="uploadedFiles"
      multiple
    >
      <!-- Controls -->
      <div class="mb-4 flex items-center gap-2">
       
       
      </div>

      <div
        role="button"
        tabindex="-1"
        class=""
        @dragenter.stop.prevent
        @dragover.stop.prevent
        @drop="drop"
      >
        <div
          v-if="!files?.length"
          class="nui-focus border-muted-300 dark:border-muted-700 hover:border-muted-400 focus:border-muted-400 dark:hover:border-muted-600 dark:focus:border-muted-700 group cursor-pointer  border-[3px] border-dashed p-8 w-[297px] h-[297px] rounded-[100px] transition-colors duration-300"
          tabindex="0"
          role="button"
          @click="open"
          @keydown.enter.prevent="open"
        >
          <div class="p-5 text-center">
            <Icon
              name="mdi-light:cloud-upload"
              class="text-muted-400 group-hover:text-primary-500 group-focus:text-primary-500 mb-2 size-10 transition-colors duration-300"
            />

            <h4 class="text-muted-400 font-sans text-sm">
              Drop files to upload
            </h4>

            <div>
              <span class="text-muted-400 font-sans text-[0.7rem] font-semibold uppercase">
                Or
              </span>
            </div>

            <label
              for="file"
              class="text-muted-400 group-hover:text-primary-500 group-focus:text-primary-500 cursor-pointer font-sans text-sm underline underline-offset-4 transition-colors duration-300"
            >
              Select files
            </label>
          </div>
        </div>

        <ul v-else class="mt-6 space-y-2">
          <li v-for="file in files" :key="file.name">
            <div
              class="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative flex items-center justify-end gap-2 rounded-xl border bg-white p-3"
            >
              <div class="flex items-center gap-2">
                <div class="shrink-0">
                  <img
                    v-if="file.type.startsWith('image')"
                    class="size-14 rounded-xl object-cover object-center"
                    :src="preview(file).value"
                    alt="Image preview"
                  >

                  <img
                    v-else
                    class="size-14 rounded-xl object-cover object-center"
                    src=""
                    alt="Image preview"
                  >
                </div>

                <div class="font-sans">
                  <span class="text-muted-800 dark:text-muted-100 line-clamp-1 block text-sm">
                    {{ file.name }}
                  </span>

                  <span class="text-muted-400 block text-xs">
                    {{ formatFileSize(file.size) }}
                  </span>
                </div>
              </div>

              <div class="ms-auto w-32 px-4 transition-opacity duration-300" :class="'opacity-100'">
                <BaseProgress
                  :value="0"
                  size="xs"
                  :color="'success'"
                />
              </div>

              <div class="flex gap-2">
                <button
                  class="border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex size-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-60"
                  disabled
                  type="button"
                  tooltip="Cancel"
                >
                  <Icon name="lucide:slash" class="size-4" />

                  <span class="sr-only">Cancel</span>
                </button>

                <button
                  class="border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex size-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300"
                  type="button"
                  tooltip="Upload"
                >
                  <Icon name="lucide:arrow-up" class="size-4" />

                  <span class="sr-only">Upload</span>
                </button>

                <button
                  class="border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex size-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300"
                  type="button"
                  tooltip="Remove"
                  @click.prevent="remove(file)"
                >
                  <Icon name="lucide:x" class="size-4" />

                  <span class="sr-only">Remove</span>
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </BaseInputFileHeadless>
    <button type="button" rel="" target="" class="nui-button nui-button-md nui-button-rounded-lg nui-button-solid nui-button-primary !h-12 w-36 mt-6"> Continue <!----></button>
</div> 

    </div>
</template>
<script setup lang="ts">

const value = ref('')

const fields = reactive({
      first: '',
      second: '',
      third: '',
    })
    const uploadedFiles = ref<FileList | null>(null)

</script>
<style lang="">
    
</style>