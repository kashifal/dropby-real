<template lang="">
    <div class="dark:bg-[#1E293b] flex min-h-screen bg-white">
  <div class="relative flex flex-1 flex-col justify-center px-6 py-12 lg:w-2/5 lg:flex-none">
    <div class=" relative mx-auto w-full max-w-sm">
      <div class="flex w-full items-center justify-between">
        <a href="/dashboards" class="text-muted-400 hover:text-primary-500 flex items-center gap-2 font-sans font-medium transition-colors duration-300"
          ><svg data-v-b4402e20="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon size-5" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m1.027 11.993l4.235 4.25L6.68 14.83l-1.821-1.828L22.974 13v-2l-18.12.002L6.69 9.174L5.277 7.757z"></path></svg><span>Back to Home</span></a
        >
        <BaseThemeToggle />
      </div>
     
      <form method="POST" action="" class="mt-6" novalidate="">
        <div class="mt-5">
          <div>
            <div class="space-y-4">
              <div class="nui-input-wrapper nui-input-default nui-input-md nui-input-rounded-sm">
                <label class="nui-input-label" for="nui-input-dc0bff5d-ccca-4b5c-a6ed-bafa1455b4ec">Email address</label>
                <div class="nui-input-outer">
                  <div><input type="email" autocomplete="email" class="nui-input h-12" placeholder="Email address" id="nui-input-dc0bff5d-ccca-4b5c-a6ed-bafa1455b4ec" /><!----><!----><!----></div>
                  <!---->
                </div>
              </div>
              <div class="nui-input-wrapper nui-input-default nui-input-md nui-input-rounded-sm">
                <label class="nui-input-label" for="nui-input-8f554c7e-4c02-43f1-82b1-0e628057a4a6">Password</label>
                <div class="nui-input-outer">
                  <div><input type="password" autocomplete="current-password" class="nui-input h-12" placeholder="Password" id="nui-input-8f554c7e-4c02-43f1-82b1-0e628057a4a6" /><!----><!----><!----></div>
                  <!---->
                </div>
              </div>
            </div>
            <div class="mt-6 flex items-center justify-between">
              <div class="nui-checkbox nui-checkbox-rounded-sm nui-checkbox-primary">
                <div class="nui-checkbox-outer">
                  <input true-value="true" false-value="false" class="nui-checkbox-input" type="checkbox" id="nui-input-c710dbad-c0f0-4acb-b9bf-afa09a0cf04b" />
                  <div class="nui-checkbox-inner"></div>
                  <svg aria-hidden="true" viewBox="0 0 17 12" class="nui-icon-check"><path fill="currentColor" d="M16.576.414a1.386 1.386 0 0 1 0 1.996l-9.404 9.176A1.461 1.461 0 0 1 6.149 12c-.37 0-.74-.139-1.023-.414L.424 6.998a1.386 1.386 0 0 1 0-1.996 1.47 1.47 0 0 1 2.046 0l3.68 3.59L14.53.414a1.47 1.47 0 0 1 2.046 0z"></path></svg><svg aria-hidden="true" viewBox="0 0 24 24" class="nui-icon-indeterminate"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M2 12h20"></path></svg>
                </div>
                <div class="nui-checkbox-label-wrapper">
                  <label class="nui-checkbox-label-text" for="nui-input-c710dbad-c0f0-4acb-b9bf-afa09a0cf04b">Trust for 60 days</label
                  ><!---->
                </div>
              </div>
              <div class="text-xs leading-5"><a href="/auth/recover" class="text-primary-600 hover:text-primary-500 font-sans font-medium underline-offset-4 transition duration-150 ease-in-out hover:underline"> Forgot your password? </a></div>
            </div>
            <div class="mt-6">
              <div class="block w-full rounded-md shadow-sm">
                <button type="submit" rel="" target="" class="nui-button nui-button-md nui-button-rounded-sm nui-button-solid nui-button-primary !h-11 w-full">
                  Sign in
                  <!---->
                </button>
              </div>
            </div>
          </div>
          <div class="block mt-5 w-full rounded-md shadow-sm">
                <button type="submit" rel="" target="" class="nui-button nui-button-md nui-button-rounded-sm nui-button-solid nui-button-primary !h-11 w-full">
                  Create account
                  <!---->
                </button>
              </div>
        </div>
      </form>
    </div>
  </div>
  <div class="bg-muted-100 dark:bg-[#0F172A] relative hidden w-0 flex-1 items-center justify-center lg:flex lg:w-3/5">
    <div class="mx-auto w-full max-w-4xl"><img class="mx-auto max-w-md" src="../public/images/magician.svg fill.png" alt="" width="500" height="500" /></div>
  </div>
</div>

</template>
<script setup lang="ts">

</script>
<style lang="">
    
</style>