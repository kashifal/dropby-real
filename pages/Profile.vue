<template lang="">
<div class="dark:bg-[#0F172A] overflow-auto">
   <div class="dark:bg-[#1E293B] bg-muted-100 px-4">
   <div class="relative z-[1] max-w-7xl mx-auto mb-5 flex h-16 items-center gap-2">
  <button type="button" class="flex size-10 items-center justify-center lg:hidden -ms-3"><div class="relative size-5"><span class="bg-[#9A2DE0] absolute block h-0.5 w-full transition-all duration-300 top-0.5"></span><span class="bg-[#9A2DE0] absolute top-1/2 block h-0.5 w-full max-w-[50%] transition-all duration-300"></span><span class="bg-[#9A2DE0] absolute block h-0.5 w-full transition-all duration-300 bottom-0"></span></div></button>
  <svg xmlns="http://www.w3.org/2000/svg" class="lg:block hidden" width="40" height="40" viewBox="0 0 40 40" fill="none">
<rect x="12.3401" y="19.6396" width="13.5057" height="1.79606" transform="rotate(-45 12.3401 19.6396)" fill="#9A2DE0"/>
<rect x="13.6101" y="19.0898" width="13.5057" height="1.79606" transform="rotate(45 13.6101 19.0898)" fill="#9A2DE0"/>
</svg>
  <h1 class="nui-heading nui-heading-2xl nui-weight-light nui-lead-normal text-muted-800 hidden md:block dark:text-white">Profile</h1>
  <div class="ms-auto"></div>
  <div class="flex h-16 items-center gap-2">
     <BaseThemeToggle />
     <button type="button" class="border-muted-200 hover:ring-muted-200 dark:hover:ring-muted-700 dark:border-muted-700 dark:bg-transparent dark:ring-offset-muted-900 flex size-9 items-center justify-center rounded-full border bg-white ring-1 ring-transparent transition-all duration-300 hover:ring-offset-4">
    <img class="size-7 rounded-full" src="../public/images/united-states-of-america.svg fill.png" alt="flag icon" /></button>
    <div class="group inline-flex items-center justify-center text-right">
      <div data-headlessui-state="" class="relative size-9 text-left">
        <div disabled="false" id="headlessui-menu-button-14" aria-haspopup="menu" aria-expanded="false" data-headlessui-state="">
          <button type="button" class="group-hover:ring-muted-200 dark:group-hover:ring-muted-700 dark:ring-offset-muted-900 inline-flex size-9 items-center justify-center rounded-full ring-1 ring-transparent transition-all duration-300 group-hover:ring-offset-4">
            <span class="border-muted-200 dark:border-muted-700 dark:bg-transparent flex size-9 items-center justify-center rounded-full border bg-white"
              ><svg data-v-b4402e20="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon text-muted-400 size-5" width="1em" height="1em" viewBox="0 0 256 256">
                <g fill="currentColor">
                  <path d="M208 192H48a8 8 0 0 1-6.88-12C47.71 168.6 56 139.81 56 104a72 72 0 0 1 144 0c0 35.82 8.3 64.6 14.9 76a8 8 0 0 1-6.9 12" opacity=".2"></path>
                  <path d="M221.8 175.94c-5.55-9.56-13.8-36.61-13.8-71.94a80 80 0 1 0-160 0c0 35.34-8.26 62.38-13.81 71.94A16 16 0 0 0 48 200h40.81a40 40 0 0 0 78.38 0H208a16 16 0 0 0 13.8-24.06M128 216a24 24 0 0 1-22.62-16h45.24A24 24 0 0 1 128 216m-80-32c7.7-13.24 16-43.92 16-80a64 64 0 1 1 128 0c0 36.05 8.28 66.73 16 80Z"></path>
                </g></svg
            ></span>
          </button>
        </div>
        <!---->
      </div>
    </div>
    <button type="button" class="border-muted-200 hover:ring-muted-200 dark:hover:ring-muted-700 dark:border-muted-700 dark:bg-transparent dark:ring-offset-muted-900 flex size-9 items-center justify-center rounded-full border bg-white ring-1 ring-transparent transition-all duration-300 hover:ring-offset-4">
      <svg data-v-b4402e20="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon text-muted-400 size-5" width="1em" height="1em" viewBox="0 0 256 256">
        <g fill="currentColor">
          <path d="M112 80a32 32 0 1 1-32-32a32 32 0 0 1 32 32m64 32a32 32 0 1 0-32-32a32 32 0 0 0 32 32m-96 32a32 32 0 1 0 32 32a32 32 0 0 0-32-32m96 0a32 32 0 1 0 32 32a32 32 0 0 0-32-32" opacity=".2"></path>
          <path d="M80 40a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24m96 16a40 40 0 1 0-40-40a40 40 0 0 0 40 40m0-64a24 24 0 1 1-24 24a24 24 0 0 1 24-24m-96 80a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24m96-64a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24"></path>
        </g>
      </svg>
    </button>
    <div class="group relative z-20 inline-flex items-center justify-center text-end">
      <div data-headlessui-state="" class="relative z-20 size-9 text-left">
        <button class="group-hover:ring-primary-500 dark:ring-offset-muted-900 inline-flex size-9 items-center justify-center rounded-full ring-1 ring-transparent transition-all duration-300 group-hover:ring-offset-4" id="headlessui-menu-button-16" aria-haspopup="menu" aria-expanded="false" data-headlessui-state="" type="button">
          <div class="relative inline-flex size-9 items-center justify-center rounded-full">
          <img src="../public/images/2.svg fill.png" class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent" alt="" /></div></button
        ><!---->
      </div>
    </div>
  </div>
</div>

<div class="ltablet:flex-row relative h-fit overflow-auto pb-20 flex max-w-7xl mx-auto  w-full flex-col  lg:flex-row">
  <div class="ltablet:flex-row relative z-10 flex w-full flex-col gap-6 lg:flex-row">
    <div class="nui-avatar nui-avatar-3xl nui-avatar-rounded-full ltablet:mx-0 mx-auto lg:mx-0" alt="avatar">
      <div class="nui-avatar-inner"><img src="../public/images/5.svg fill.png" class="nui-avatar-img nui-avatar-rounded-full" /><!----><!----></div>
      <div class="nui-avatar-badge"><img src="../public/images/united-states-of-america.svg fill.png" class="nui-badge-img" alt="" /></div>
      <!---->
    </div>
    <div class="ltablet:text-left text-center lg:text-left">
      <h2 class="nui-heading nui-heading-xl nui-weight-semibold nui-lead-normal ltablet:justify-start flex items-center justify-center gap-2 lg:justify-start">
        <span class="text-muted-800 dark:text-white">Sweet_Mango12</span><svg data-v-b4402e20="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon size-4 text-yellow-400" width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" d="m9.89 17.514l-4.21 2.257l-.099.044c-.715.27-1.39.216-1.903-.242c-.482-.43-.657-1.046-.557-1.755l.704-4.86l-3.18-3.342c-.55-.56-.765-1.248-.58-1.968c.205-.799.88-1.258 1.851-1.412l4.227-.638l2.213-4.585C8.7.366 9.236-.017 9.911.001c.66.017 1.183.422 1.593 1.143l2.14 4.486l4.74.658c.753.13 1.308.522 1.53 1.176c.22.653.01 1.313-.557 1.987l-3.44 3.51l.772 4.856c.122.84-.025 1.505-.586 1.9c-.506.357-1.139.357-1.867.107l-.12-.053z"></path></svg>
      </h2>
      <span class="text-muted-400 mb-4 block font-sans text-base"> Clarissa Miller </span>
      <div class="mb-6 flex items-center gap-x-6">
        <div class="ltablet:flex-row ltablet:flex-auto flex flex-1 flex-col gap-x-2 font-sans lg:flex-auto lg:flex-row"><span class="text-muted-800 dark:text-muted-100 font-semibold"> 1512 </span><span class="text-muted-400 ltablet:text-base text-xs sm:text-sm lg:text-base"> Posts </span></div>
        <div class="ltablet:flex-row ltablet:flex-auto flex flex-1 flex-col gap-x-2 font-sans lg:flex-auto lg:flex-row"><span class="text-muted-800 dark:text-muted-100 font-semibold"> 38.3K </span><span class="text-muted-400 ltablet:text-base text-xs sm:text-sm lg:text-base"> Followers </span></div>
        <div class="ltablet:flex-row ltablet:flex-auto flex flex-1 flex-col gap-x-2 font-sans lg:flex-auto lg:flex-row"><span class="text-muted-800 dark:text-muted-100 font-semibold"> 329 </span><span class="text-muted-400 ltablet:text-base text-xs sm:text-sm lg:text-base"> Following </span></div>
      </div>
      <div class="nui-prose nui-prose-rounded-none ltablet:mx-0 prose-sm mx-auto mb-6 max-w-xl lg:mx-0">
        <p class="line-clamp-3">Artist, musician, songwriter, influencer, these are the many names people give me. But for you Iam simply Clarissa. *Forever with all my friends* // Latest video can be found here <a href="#">youtu.be/8Tcee5Cyz</a></p>
      </div>
      <div class="ltablet:justify-start flex justify-center gap-4 lg:justify-start">
        <div data-headlessui-state="">
          <div class="group inline-flex cursor-pointer font-sans focus:outline-none" id="headlessui-popover-button-6" aria-expanded="false" data-headlessui-state="">
            <div class="dark:bg-muted-700 shadow-muted-300/40 dark:shadow-muted-900/20 flex size-10 items-center justify-center rounded-full bg-white shadow-xl">
              <div class="bg-danger-500/20 flex size-8 items-center justify-center rounded-full">
                <svg data-v-b4402e20="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon text-danger-500 size-5" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 23a7.5 7.5 0 0 1-5.138-12.963C8.204 8.774 11.5 6.5 11 1.5c6 4 9 8 3 14c1 0 2.5 0 5-2.47c.27.773.5 1.604.5 2.47A7.5 7.5 0 0 1 12 23"></path></svg>
              </div>
            </div>
          </div>
          <!---->
          <div class="" style="position: absolute; left: 136px; top: 276px; z-index: 20;"><!----></div>
        </div>
        <div hidden="" style="position: fixed; height: 0px; padding: 0px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; border-width: 0px; display: none;"></div>
        <div data-headlessui-state="">
          <div class="group inline-flex cursor-pointer font-sans focus:outline-none" id="headlessui-popover-button-8" aria-expanded="false" data-headlessui-state="">
            <div class="dark:bg-muted-700 shadow-muted-300/40 dark:shadow-muted-900/20 flex size-10 items-center justify-center rounded-full bg-white shadow-xl">
              <div class="bg-success-500/20 flex size-8 items-center justify-center rounded-full">
                <svg data-v-b4402e20="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon text-success-500 size-5" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 7a8 8 0 1 1 0 16a8 8 0 0 1 0-16m0 3.5l-1.322 2.68l-2.958.43l2.14 2.085l-.505 2.946L12 17.25l2.645 1.39l-.505-2.945l2.14-2.086l-2.958-.43zm1-8.501L18 2v3l-1.363 1.138A9.9 9.9 0 0 0 13 5.05zm-2 0v3.05a9.9 9.9 0 0 0-3.636 1.088L6 5V2z"></path></svg>
              </div>
            </div>
          </div>
          <!---->
          <div class="" style="position: absolute; left: 192px; top: 276px; z-index: 20;"><!----></div>
        </div>
        <div hidden="" style="position: fixed; height: 0px; padding: 0px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; border-width: 0px; display: none;"></div>
        <div data-headlessui-state="">
          <div class="group inline-flex cursor-pointer font-sans focus:outline-none" id="headlessui-popover-button-10" aria-expanded="false" data-headlessui-state="">
            <div class="dark:bg-muted-700 shadow-muted-300/40 dark:shadow-muted-900/20 flex size-10 items-center justify-center rounded-full bg-white shadow-xl">
              <div class="bg-warning-500/20 flex size-8 items-center justify-center rounded-full">
                <svg data-v-b4402e20="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon text-warning-500 size-5" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M13.005 16.94v2.063h5v2h-12v-2h5V16.94a8 8 0 0 1-7-7.938v-6h16v6a8 8 0 0 1-7 7.938m-12-11.937h2v4h-2zm20 0h2v4h-2z"></path></svg>
              </div>
            </div>
          </div>
          <!---->
          <div class="" style="position: absolute; left: 248px; top: 276px; z-index: 20;"><!----></div>
        </div>
        <div hidden="" style="position: fixed; height: 0px; padding: 0px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; border-width: 0px; display: none;"></div>
      </div>
    </div>
  </div>
  <div class="ltablet:justify-start ltablet:ms-auto flex-col gap-4 ltablet:mt-0 mt-4 flex shrink-0 justify-center lg:ms-auto lg:mt-0 lg:justify-start">
    <button type="button" rel="" target="" class="nui-button nui-button-md nui-button-rounded-sm nui-button-solid nui-button-default ltablet:w-auto ltablet:mx-0 mx-auto w-[135px] lg:mx-0 lg:w-auto">
      <svg data-v-b4402e20="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon size-4" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7-7v14"></path></svg><span>Add Friend</span
      ><!---->
    </button>
    <button type="button" rel="" target="" class="nui-button nui-button-md nui-button-rounded-sm nui-button-solid nui-button-default ltablet:w-auto ltablet:mx-0 mx-auto w-[144px] lg:mx-0 lg:w-auto">
      <span>Send message</span
      ><!---->
    </button>
  </div>
  <div class="overflow-auto absolute bottom-[0px] start-0 flex items-end gap-2 ">
    <button type="button" class="text-muted-400 focus:text-white focus:border-[#9A2DE0] inline-flex items-center justify-center border-b-2 border-transparent px-4 py-3 font-sans text-sm"><span>Feed</span></button>
    <button type="button" class="border-[#9A2DE0] text-muted-800 dark:text-muted-100 inline-flex items-center justify-center border-b-2 px-4 py-3 font-sans text-sm"><span>Events</span></button>
    <button type="button" class="text-muted-400 focus:text-white focus:border-[#9A2DE0] inline-flex items-center justify-center border-b-2 border-transparent px-4 py-3 font-sans text-sm"><span>Activities</span></button>
    <button type="button" class="text-muted-400 focus:text-white focus:border-[#9A2DE0] inline-flex items-center justify-center border-b-2 border-transparent px-4 py-3 font-sans text-sm"><span>Groups</span></button>
    <button type="button" class="text-muted-400 focus:text-white focus:border-[#9A2DE0] inline-flex items-center justify-center border-b-2 border-transparent px-4 py-3 font-sans text-sm"><span>Pages</span></button>
    <button type="button" class="text-muted-400 focus:text-white focus:border-[#9A2DE0] inline-flex items-center justify-center border-b-2 border-transparent px-4 py-3 font-sans text-sm"><span>Friends</span></button>

  </div>
</div>
   </div>
   <div class="pt-8 pb-20 px-4 max-w-4xl mx-auto grid grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-8">
<a href="#">
<img class="sm:h-[320px] w-full rounded-[12px] hover:-translate-y-[4px] transition-all duration-400 hover:opacity-60" src="../public/images/hobby-1.svg fill.png" />
</a>
<a href="#">
<img class="sm:h-[320px] w-full rounded-[12px] hover:-translate-y-[4px] transition-all duration-400 hover:opacity-60" src="../public/images/hobby-2.svg fill.png" />
</a>
<a href="#">
<img class="sm:h-[320px] w-full rounded-[12px] hover:-translate-y-[4px] transition-all duration-400 hover:opacity-60" src="../public/images/hobby-3.svg fill.png" />
</a>
<a href="#">
<img class="sm:h-[320px] w-full rounded-[12px] hover:-translate-y-[4px] transition-all duration-400 hover:opacity-60" src="../public/images/hobby-4.svg fill.png" />
</a>
<a href="#">
<img class="sm:h-[320px] w-full rounded-[12px] hover:-translate-y-[4px] transition-all duration-400 hover:opacity-60" src="../public/images/hobby-1.svg fill.png" />
</a>
<a href="#">
<img class="sm:h-[320px] w-full rounded-[12px] hover:-translate-y-[4px] transition-all duration-400 hover:opacity-60" src="../public/images/hobby-2.svg fill.png" />
</a>
<a href="#">
<img class="sm:h-[320px] w-full rounded-[12px] hover:-translate-y-[4px] transition-all duration-400 hover:opacity-60" src="../public/images/hobby-3.svg fill.png" />
</a>
<a href="#">
<img class="sm:h-[320px] w-full rounded-[12px] hover:-translate-y-[4px] transition-all duration-400 hover:opacity-60" src="../public/images/hobby-4.svg fill.png" />
</a>
</div>
   </div>
</template>
<script setup lang="ts">

</script>
<style lang="">
    
</style>