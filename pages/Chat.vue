<template lang="">
    <div>
  <div class="nuxt-loading-indicator" style="position: fixed; top: 0px; right: 0px; left: 0px; pointer-events: none; width: auto; height: 3px; opacity: 1; background: rgb(var(--color-primary-500)); transform: scaleX(0); transform-origin: left center; transition: transform 0.1s, height 0.4s, opacity 0.4s; z-index: 999999;"></div>
  <div class="relative">
    <div class="bg-muted-100 dark:bg-[#0F172A] flex min-h-screen">
      <div class="border-muted-200 dark:border-muted-700 dark:bg-[#1E293B] relative z-10 hidden h-screen w-20 border-r bg-white sm:block">
        <div class="flex h-full flex-col justify-between">
          <div class="flex flex-col">
            <div class="ltablet:w-full flex size-16 shrink-0 items-center justify-center lg:w-full">
              <a aria-current="page" href="/dashboards/messaging#" class="router-link-active router-link-exact-active flex items-center justify-center"
                ><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 500 500" xml:space="preserve" class="text-primary-600 h-10 shrink-0">
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
            </div>
            <div class="ltablet:w-full flex size-16 shrink-0 items-center justify-center lg:w-full">
              <a href="#" class="text-muted-400 hover:text-primary-500 hover:bg-primary-500/20 flex size-12 items-center justify-center rounded-2xl transition-colors duration-300" title="Back"
                ><svg data-v-b4402e20="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon size-5" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 19l-7-7l7-7m7 7H5"></path></svg
              ></a>
            </div>
          </div>
          <div class="flex flex-col">
            <div class="flex h-16 w-full items-center justify-center">
              <button type="button" class="text-muted-400 hover:text-primary-500 hover:bg-primary-500/20 flex size-12 items-center justify-center rounded-2xl transition-colors duration-300" title="Search">
                <svg data-v-b4402e20="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon size-5" width="1em" height="1em" viewBox="0 0 256 256">
                  <g fill="currentColor">
                    <path d="M192 112a80 80 0 1 1-80-80a80 80 0 0 1 80 80" opacity=".2"></path>
                    <path d="m229.66 218.34l-50.06-50.06a88.21 88.21 0 1 0-11.32 11.31l50.06 50.07a8 8 0 0 0 11.32-11.32M40 112a72 72 0 1 1 72 72a72.08 72.08 0 0 1-72-72"></path>
                  </g>
                </svg>
              </button>
            </div>
            <div class="flex h-16 w-full items-center justify-center">
              <a aria-current="page" href="/dashboards/messaging#" class="router-link-active router-link-exact-active text-muted-400 hover:text-primary-500 hover:bg-primary-500/20 flex size-12 items-center justify-center rounded-2xl transition-colors duration-300" title="Settings"
                ><svg data-v-b4402e20="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon size-5" width="1em" height="1em" viewBox="0 0 256 256">
                  <g fill="currentColor">
                    <path d="m230.1 108.76l-31.85-18.14c-.64-1.16-1.31-2.29-2-3.41l-.12-36A104.6 104.6 0 0 0 162 32l-32 17.89h-4L94 32a104.6 104.6 0 0 0-34.11 19.25l-.16 36c-.7 1.12-1.37 2.26-2 3.41l-31.84 18.1a99.2 99.2 0 0 0 0 38.46l31.85 18.14c.64 1.16 1.31 2.29 2 3.41l.12 36A104.6 104.6 0 0 0 94 224l32-17.87h4L162 224a104.6 104.6 0 0 0 34.08-19.25l.16-36c.7-1.12 1.37-2.26 2-3.41l31.84-18.1a99.2 99.2 0 0 0 .02-38.48M128 168a40 40 0 1 1 40-40a40 40 0 0 1-40 40" opacity=".2"></path>
                    <path d="M128 80a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32m109.94-52.79a8 8 0 0 0-3.89-5.4l-29.83-17l-.12-33.62a8 8 0 0 0-2.83-6.08a111.9 111.9 0 0 0-36.72-20.67a8 8 0 0 0-6.46.59L128 41.85L97.88 25a8 8 0 0 0-6.47-.6a111.9 111.9 0 0 0-36.68 20.75a8 8 0 0 0-2.83 6.07l-.15 33.65l-29.83 17a8 8 0 0 0-3.89 5.4a106.5 106.5 0 0 0 0 41.56a8 8 0 0 0 3.89 5.4l29.83 17l.12 33.63a8 8 0 0 0 2.83 6.08a111.9 111.9 0 0 0 36.72 20.67a8 8 0 0 0 6.46-.59L128 214.15L158.12 231a7.9 7.9 0 0 0 3.9 1a8.1 8.1 0 0 0 2.57-.42a112.1 112.1 0 0 0 36.68-20.73a8 8 0 0 0 2.83-6.07l.15-33.65l29.83-17a8 8 0 0 0 3.89-5.4a106.5 106.5 0 0 0-.03-41.52m-15 34.91l-28.57 16.25a8 8 0 0 0-3 3c-.58 1-1.19 2.06-1.81 3.06a7.94 7.94 0 0 0-1.22 4.21l-.15 32.25a95.9 95.9 0 0 1-25.37 14.3L134 199.13a8 8 0 0 0-3.91-1h-3.83a8.1 8.1 0 0 0-4.1 1l-28.84 16.1A96 96 0 0 1 67.88 201l-.11-32.2a8 8 0 0 0-1.22-4.22c-.62-1-1.23-2-1.8-3.06a8.1 8.1 0 0 0-3-3.06l-28.6-16.29a90.5 90.5 0 0 1 0-28.26l28.52-16.28a8 8 0 0 0 3-3c.58-1 1.19-2.06 1.81-3.06a7.94 7.94 0 0 0 1.22-4.21l.15-32.25a95.9 95.9 0 0 1 25.37-14.3L122 56.87a8 8 0 0 0 4.1 1h3.64a8 8 0 0 0 4.1-1l28.84-16.1A96 96 0 0 1 188.12 55l.11 32.2a8 8 0 0 0 1.22 4.22c.62 1 1.23 2 1.8 3.06a8.1 8.1 0 0 0 3 3.06l28.6 16.29a90.5 90.5 0 0 1 .05 28.29Z"></path>
                  </g></svg
              ></a>
            </div>
            <div class="flex h-16 w-full items-center justify-center">
              <div class="group inline-flex items-center justify-center text-right">
                <div data-headlessui-state="" class="relative z-20 size-10 text-start">
                  <button class="group-hover:ring-primary-500 dark:ring-offset-muted-800 inline-flex size-10 items-center justify-center rounded-full ring-1 ring-transparent transition-all duration-300 group-hover:ring-offset-4" id="headlessui-menu-button-7" aria-haspopup="menu" aria-expanded="false" data-headlessui-state="" type="button">
                    <div class="relative inline-flex size-10 items-center justify-center rounded-full"><img src="../public/images/2.svg fill.png" class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent" alt="" /></div></button
                  ><!---->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ltablet:border-r border-muted-200 dark:border-muted-700 dark:bg-[#1E293B] relative z-[9] h-screen w-16 bg-white sm:w-20 lg:border-r">
        <div class="flex h-full flex-col">
          <button class="flex size-16 shrink-0 items-center justify-center sm:w-20">
            <span class="bg-primary-500 flex size-10 items-center justify-center rounded-full text-white"
              ><svg data-v-b4402e20="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon size-4" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7-7v14"></path></svg
            ></span></button
          ><a href="#" class="border-primary-500 flex size-16 shrink-0 items-center justify-center border-s-2 sm:w-20"
            ><div class="nui-avatar nui-avatar-sm nui-avatar-rounded-full">
              <div class="nui-avatar-inner"><img src="../public/images/3.svg fill.png" class="nui-avatar-img nui-avatar-rounded-full" /><!----><!----></div>
              <!----><!---->
            </div></a
          ><a href="#" class="flex size-16 shrink-0 items-center justify-center border-s-2 border-transparent sm:w-20"
            ><div class="nui-avatar nui-avatar-sm nui-avatar-rounded-full">
              <div class="nui-avatar-inner"><img src="../public/images/16.svg fill.png" class="nui-avatar-img nui-avatar-rounded-full" /><!----><!----></div>
              <!----><!---->
            </div></a
          ><a href="#" class="flex size-16 shrink-0 items-center justify-center border-s-2 border-transparent sm:w-20"
            ><div class="nui-avatar nui-avatar-sm nui-avatar-rounded-full">
              <div class="nui-avatar-inner"><img src="../public/images/5.svg fill.png" class="nui-avatar-img nui-avatar-rounded-full" /><!----><!----></div>
              <!----><!---->
            </div></a
          ><a href="#" class="flex size-16 shrink-0 items-center justify-center border-s-2 border-transparent sm:w-20"
            ><div class="nui-avatar nui-avatar-sm nui-avatar-rounded-full">
              <div class="nui-avatar-inner"><img src="../public/images/11.svg fill.png" class="nui-avatar-img nui-avatar-rounded-full" /><!----><!----></div>
              <!----><!---->
            </div></a
          ><a href="#" class="flex size-16 shrink-0 items-center justify-center border-s-2 border-transparent sm:w-20"
            ><div class="nui-avatar nui-avatar-sm nui-avatar-rounded-full">
              <div class="nui-avatar-inner"><img src="../public/images/10.svg fill.png" class="nui-avatar-img nui-avatar-rounded-full" /><!----><!----></div>
              <!----><!---->
            </div></a
          ><a href="#" class="flex size-16 shrink-0 items-center justify-center border-s-2 border-transparent sm:w-20"
            ><div class="nui-avatar nui-avatar-sm nui-avatar-rounded-full">
              <div class="nui-avatar-inner"><img src="../public/images/9.svg fill.png" class="nui-avatar-img nui-avatar-rounded-full" /><!----><!----></div>
              <!----><!---->
            </div></a
          ><a href="#" class="flex size-16 shrink-0 items-center justify-center border-s-2 border-transparent sm:w-20"
            ><div class="nui-avatar nui-avatar-sm nui-avatar-rounded-full">
              <div class="nui-avatar-inner"><img src="../public/images/8.svg fill.png" class="nui-avatar-img nui-avatar-rounded-full" /><!----><!----></div>
              <!----><!---->
            </div></a
          >
        </div>
      </div>
      <div class="ltablet:max-w-[calc(100%_-_470px)] relative w-full transition-all duration-300 lg:max-w-[calc(100%_-_550px)]">
        <div class="flex w-full flex-col">
          <div class="flex h-16 w-full items-center justify-between px-4 sm:px-8">
            <div class="flex items-center gap-2">
              <div class="nui-input-wrapper nui-input-default nui-input-md nui-input-rounded-lg nui-has-icon">
                <!---->
                <div class="nui-input-outer">
                  <div>
                    <input type="text" class="nui-input" placeholder="Search" id="nui-input-4c041623-bc8d-4a27-8946-6d8cbffcf547" /><!----><!---->
                    <div class="nui-input-icon">
                      <svg data-v-b4402e20="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon nui-input-icon-inner" width="1em" height="1em" viewBox="0 0 24 24">
                        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                          <circle cx="11" cy="11" r="8"></circle>
                          <path d="m21 21l-4.3-4.3"></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <!---->
                </div>
              </div>
            </div>
            <div class="relative -end-4 z-20 flex flex h-16 w-full scale-90 items-center items-center justify-end gap-2 gap-2 sm:end-0 sm:scale-100">
             <BaseThemeToggle />
             <button type="button" class="border-muted-200 hover:ring-muted-200 dark:hover:ring-muted-700 dark:border-muted-700 dark:bg-transparent dark:ring-offset-muted-900 flex size-9 items-center justify-center rounded-full border bg-white ring-1 ring-transparent transition-all duration-300 hover:ring-offset-4">
              <img class="size-7 rounded-full" src="../public/images/united-states-of-america.svg fill.png" alt="flag icon" /></button>
              <div class="group inline-flex items-center justify-center text-right">
                <div data-headlessui-state="" class="relative size-9 text-left">
                  <div disabled="false" id="headlessui-menu-button-9" aria-haspopup="menu" aria-expanded="false" data-headlessui-state="">
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
                  <button class="group-hover:ring-primary-500 dark:ring-offset-muted-900 inline-flex size-9 items-center justify-center rounded-full ring-1 ring-transparent transition-all duration-300 group-hover:ring-offset-4" id="headlessui-menu-button-11" aria-haspopup="menu" aria-expanded="false" data-headlessui-state="" type="button">
                    <div class="relative inline-flex size-9 items-center justify-center rounded-full"><img src="../public/images/2.svg fill.png" class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent" alt="" /></div></button
                  ><!---->
                </div>
              </div>
            </div>
          </div>
          <div class="nui-slimscroll relative h-[calc(100vh_-_128px)] w-full overflow-y-auto p-4 sm:p-8">
            <div class="bg-muted-100 dark:bg-[#1E293B] pointer-events-none pointer-events-none absolute inset-0 z-10 size-full p-8 opacity-0 transition-opacity duration-300">
              <div class="mt-12 space-y-12">
                <div class="flex w-full max-w-md gap-4">
                  <div class="nui-placeload animate-nui-placeload size-8 shrink-0 rounded-full" width="32" height="32"></div>
                  <div class="grow space-y-2">
                    <div class="nui-placeload animate-nui-placeload h-3 w-full max-w-56 rounded"></div>
                    <div class="nui-placeload animate-nui-placeload h-3 w-full max-w-32 rounded"></div>
                  </div>
                </div>
                <div class="flex w-full max-w-md gap-4">
                  <div class="nui-placeload animate-nui-placeload size-8 shrink-0 rounded-full" width="32" height="32"></div>
                  <div class="grow space-y-2">
                    <div class="nui-placeload animate-nui-placeload h-3 w-full max-w-64 rounded"></div>
                    <div class="nui-placeload animate-nui-placeload h-3 w-full max-w-48 rounded"></div>
                  </div>
                </div>
                <div class="ms-auto flex w-full max-w-md flex-row-reverse justify-end gap-4">
                  <div class="nui-placeload animate-nui-placeload size-8 shrink-0 rounded-full" width="32" height="32"></div>
                  <div class="grow space-y-2">
                    <div class="nui-placeload animate-nui-placeload ms-auto h-3 w-full max-w-64 rounded"></div>
                    <div class="nui-placeload animate-nui-placeload ms-auto h-3 w-full max-w-48 rounded"></div>
                  </div>
                </div>
                <div class="ms-auto flex w-full max-w-md flex-row-reverse justify-end gap-4">
                  <div class="nui-placeload animate-nui-placeload size-8 shrink-0 rounded-full" width="32" height="32"></div>
                  <div class="grow space-y-2">
                    <div class="nui-placeload animate-nui-placeload ms-auto h-3 w-full max-w-56 rounded"></div>
                    <div class="nui-placeload animate-nui-placeload ms-auto h-3 w-full max-w-32 rounded"></div>
                  </div>
                </div>
                <div class="flex w-full max-w-md gap-4">
                  <div class="nui-placeload animate-nui-placeload size-8 shrink-0 rounded-full" width="32" height="32"></div>
                  <div class="grow space-y-2">
                    <div class="nui-placeload animate-nui-placeload h-3 w-full max-w-56 rounded"></div>
                    <div class="nui-placeload animate-nui-placeload h-3 w-full max-w-32 rounded"></div>
                  </div>
                </div>
                <div class="flex w-full max-w-md gap-4">
                  <div class="nui-placeload animate-nui-placeload size-8 shrink-0 rounded-full" width="32" height="32"></div>
                  <div class="grow space-y-2">
                    <div class="nui-placeload animate-nui-placeload h-3 w-full max-w-64 rounded"></div>
                    <div class="nui-placeload animate-nui-placeload h-3 w-full max-w-48 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="space-y-12">
              <div class="relative flex w-full flex-row-reverse justify-center gap-4">
                <div>
                  <div class="absolute inset-0 flex items-center" aria-hidden="true"><div class="border-muted-300/50 dark:border-muted-800 w-full border-t"></div></div>
                  <div class="relative flex justify-center"><span class="bg-muted-100 dark:bg-[#0F172A] text-muted-400 px-3 font-sans text-xs uppercase">Yesterday</span></div>
                </div>
              </div>
              <div class="relative flex w-full flex-row gap-4">
                <div class="shrink-0">
                  <div class="nui-avatar nui-avatar-xs nui-avatar-rounded-full">
                    <div class="nui-avatar-inner"><img src="../public/images/3.svg fill.png" class="nui-avatar-img nui-avatar-rounded-full" /><!----><!----></div>
                    <!----><!---->
                  </div>
                </div>
                <div class="flex max-w-md flex-col">
                  <div class="bg-muted-200 dark:bg-[#1E293B] rounded-xl rounded-ss-none p-4"><p class="font-sans text-sm">Hey Maya, I was wondering if you still had that design that you sent me a few days ago. I was thinking about using it for a project I’m working on.</p></div>
                  <div class="text-muted-400 mt-1 text-right font-sans text-xs">10:04 am</div>
                  <!---->
                </div>
              </div>
              <div class="relative flex w-full flex-row-reverse gap-4">
                <div class="shrink-0">
                  <div class="nui-avatar nui-avatar-xs nui-avatar-rounded-full">
                    <div class="nui-avatar-inner"><img src="../public/images/2.svg fill.png" class="nui-avatar-img nui-avatar-rounded-full" /><!----><!----></div>
                    <!----><!---->
                  </div>
                </div>
                <div class="flex max-w-md flex-col">
                  <div class="bg-muted-200 dark:bg-[#1E293B] rounded-xl rounded-se-none p-4"><p class="font-sans text-sm">Hey Clark, sure thing. I’ll send it to you right now. I can also send you the Figma file if you need it.</p></div>
                  <div class="text-muted-400 mt-1 font-sans text-xs">10:09 am</div>
                  <div class="mt-2 space-y-2">
                    <a href="https://figma.com" rel="noopener noreferrer" class="dark:bg-[#1E293B] ms-auto block max-w-xs rounded-2xl bg-white p-2"
                      ><img src="../public/images/13.png" alt="Figma design file by Maya" class="rounded-xl" />
                      <div class="px-1 py-2">
                        <p class="text-bg-[#1E293B] dark:text-muted-100 font-sans">figma.com</p>
                        <p class="text-muted-400 font-sans text-xs">Figma design file by Maya</p>
                      </div></a
                    >
                  </div>
                </div>
              </div>
              <div class="relative flex w-full flex-row-reverse justify-center gap-4">
                <div>
                  <div class="absolute inset-0 flex items-center" aria-hidden="true"><div class="border-muted-300/50 dark:border-muted-800 w-full border-t"></div></div>
                  <div class="relative flex justify-center"><span class="bg-muted-100 dark:bg-[#0F172A] text-muted-400 px-3 font-sans text-xs uppercase">Today</span></div>
                </div>
              </div>
              <div class="relative flex w-full flex-row gap-4">
                <div class="shrink-0">
                  <div class="nui-avatar nui-avatar-xs nui-avatar-rounded-full">
                    <div class="nui-avatar-inner"><img src="../public/images/3.svg fill.png" class="nui-avatar-img nui-avatar-rounded-full" /><!----><!----></div>
                    <!----><!---->
                  </div>
                </div>
                <div class="flex max-w-md flex-col">
                  <div class="bg-muted-200 dark:bg-[#1E293B] rounded-xl rounded-ss-none p-4"><p class="font-sans text-sm">Thanks for that. This looks completely amazing. I’ll let you know if I need anything else.</p></div>
                  <div class="text-muted-400 mt-1 text-right font-sans text-xs">1:39 pm</div>
                  <!---->
                </div>
              </div>
              <div class="relative flex w-full flex-row gap-4">
                <div class="shrink-0">
                  <div class="nui-avatar nui-avatar-xs nui-avatar-rounded-full">
                    <div class="nui-avatar-inner"><img src="../public/images/3.svg fill.png" class="nui-avatar-img nui-avatar-rounded-full" /><!----><!----></div>
                    <!----><!---->
                  </div>
                </div>
                <div class="flex max-w-md flex-col">
                  <div class="bg-muted-200 dark:bg-[#1E293B] rounded-xl rounded-ss-none p-4"><p class="font-sans text-sm">Almost forgot, what was that accounting company you mentioned the other day? I kinda fell in love with their design.</p></div>
                  <div class="text-muted-400 mt-1 text-right font-sans text-xs">1:48 pm</div>
                  <!---->
                </div>
              </div>
              <div class="relative flex w-full flex-row-reverse gap-4">
                <div class="shrink-0">
                  <div class="nui-avatar nui-avatar-xs nui-avatar-rounded-full">
                    <div class="nui-avatar-inner"><img src="../public/images/2.svg fill.png" class="nui-avatar-img nui-avatar-rounded-full" /><!----><!----></div>
                    <!----><!---->
                  </div>
                </div>
                <div class="flex max-w-md flex-col">
                  <div class="bg-muted-200 dark:bg-[#1E293B] rounded-xl rounded-se-none p-4"><p class="font-sans text-sm">Oh yeah, that was Titan Accounting. They’re a great company. I’ve been working with them for a while now.</p></div>
                  <div class="text-muted-400 mt-1 font-sans text-xs">2:06 pm</div>
                  <div class="mt-2 space-y-2">
                    <a href="https://waveapps.com" rel="noopener noreferrer" class="dark:bg-[#1E293B] ms-auto block max-w-xs rounded-2xl bg-white p-2"
                      ><img src="../public/images/66.png" alt="Smart Accounting made easy for everyone" class="rounded-xl" />
                      <div class="px-1 py-2">
                        <p class="text-muted-800 dark:text-muted-100 font-sans">waveapps.com</p>
                        <p class="text-muted-400 font-sans text-xs">Smart Accounting made easy for everyone</p>
                      </div></a
                    >
                  </div>
                </div>
              </div>
              <div class="relative flex w-full flex-row gap-4">
                <div class="shrink-0">
                  <div class="nui-avatar nui-avatar-xs nui-avatar-rounded-full">
                    <div class="nui-avatar-inner"><img src="../public/images/3.svg fill.png" class="nui-avatar-img nui-avatar-rounded-full" /><!----><!----></div>
                    <!----><!---->
                  </div>
                </div>
                <div class="flex max-w-md flex-col">
                  <div class="bg-muted-200 dark:bg-[#1E293B] rounded-xl rounded-ss-none p-4"><p class="font-sans text-sm">Yeah, that's them. they really have a gorgeous branding. I'll check them out. Thanks for the tip!</p></div>
                  <div class="text-muted-400 mt-1 text-right font-sans text-xs">2:16 pm</div>
                  <!---->
                </div>
              </div>
              <div class="relative flex w-full flex-row-reverse gap-4">
                <div class="shrink-0">
                  <div class="nui-avatar nui-avatar-xs nui-avatar-rounded-full">
                    <div class="nui-avatar-inner"><img src="../public/images/2.svg fill.png" class="nui-avatar-img nui-avatar-rounded-full" /><!----><!----></div>
                    <!----><!---->
                  </div>
                </div>
                <div class="flex max-w-md flex-col">
                  <div class="bg-muted-200 dark:bg-[#1E293B] rounded-xl rounded-se-none p-4"><p class="font-sans text-sm">Always happy to help! Let me know if you need anything else.</p></div>
                  <div class="text-muted-400 mt-1 font-sans text-xs">2:26 pm</div>
                  <!---->
                </div>
              </div>
            </div>
          </div>
          <form method="POST" action="" class="bg-muted-100 dark:bg-transparent flex h-16 w-full items-center px-4 sm:px-8">
            <div class="relative w-full">
              <div class="nui-input-wrapper nui-input-default nui-input-md nui-input-rounded-full">
                <!---->
                <div class="nui-input-outer">
                  <div><input type="text" class="nui-input h-12 pe-24 ps-6" placeholder="Write a message..." id="nui-input-8797928d-b463-4b3a-ad85-012ae20205dc" /><!----><!----><!----></div>
                  <!---->
                </div>
              </div>
              <div class="absolute end-2 top-0 flex h-12 items-center gap-1">
                <button type="button" class="text-muted-400 hover:text-primary-500 flex h-12 w-10 items-center justify-center transition-colors duration-300">
                  <svg data-v-b4402e20="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon size-5" width="1em" height="1em" viewBox="0 0 24 24">
                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M8 14s1.5 2 4 2s4-2 4-2M9 9h.01M15 9h.01"></path>
                    </g>
                  </svg></button
                ><button type="button" class="text-muted-400 hover:text-primary-500 flex h-12 w-10 items-center justify-center transition-colors duration-300">
                  <svg data-v-b4402e20="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon size-5" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="ltablet:w-[310px] dark:bg-[#1E293B] fixed end-0 top-0 z-20 h-full w-[390px] translate-x-0 bg-white transition-transform duration-300">
        <div class="flex h-16 w-full items-center justify-between px-8">
          <p class="nui-heading nui-heading-lg nui-weight-semibold nui-lead-normal text-muted-800 dark:text-white" tag="h3"><span>User details</span></p>
          <button type="button" rel="" target="" class="nui-button-icon nui-button-rounded-sm nui-button-medium nui-button-default" small="">
            <svg data-v-b4402e20="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon pointer-events-none size-4" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7-7l7 7l-7 7"></path></svg>
          </button>
        </div>
        <div class="relative flex w-full flex-col px-8">
          <div class="mt-8">
            <div class="flex items-center justify-center">
              <div class="nui-avatar nui-avatar-2xl nui-avatar-rounded-full">
                <div class="nui-avatar-inner"><img src="../public/images/33.png" class="nui-avatar-img nui-avatar-rounded-full" /><!----><!----></div>
                <!----><!---->
              </div>
            </div>
            <div class="text-center">
              <p class="nui-heading nui-heading-lg nui-weight-semibold nui-lead-normal mt-4" tag="h3"><span>Clark Smith</span></p>
              <p class="nui-paragraph nui-paragraph-sm nui-weight-normal nui-lead-normal text-muted-400"><span>UI/UX Designer</span></p>
              <div class="my-4">
                <p class="nui-paragraph nui-paragraph-sm nui-weight-normal nui-lead-normal text-muted-500 dark:text-muted-400"><span>Clark is a UI/UX Designer based in New York. He has 10+ years of experience in the field.</span></p>
              </div>
              <div class="divide-muted-200 dark:divide-muted-700 flex items-center justify-center divide-x">
                <div class="flex items-center justify-center gap-2 px-4">
                  <svg data-v-b4402e20="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon text-muted-400 size-4" width="1em" height="1em" viewBox="0 0 256 256">
                    <g fill="currentColor">
                      <path d="M216 136a88 88 0 1 1-88-88a88 88 0 0 1 88 88" opacity=".2"></path>
                      <path d="M128 40a96 96 0 1 0 96 96a96.11 96.11 0 0 0-96-96m0 176a80 80 0 1 1 80-80a80.09 80.09 0 0 1-80 80m45.66-125.66a8 8 0 0 1 0 11.32l-40 40a8 8 0 0 1-11.32-11.32l40-40a8 8 0 0 1 11.32 0M96 16a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16h-48a8 8 0 0 1-8-8"></path>
                    </g></svg
                  ><span class="text-muted-400 font-sans text-xs"> Age: 32</span>
                </div>
                <div class="flex items-center justify-center gap-2 px-4">
                  <svg data-v-b4402e20="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon text-muted-400 size-4" width="1em" height="1em" viewBox="0 0 256 256">
                    <g fill="currentColor">
                      <path d="M128 24a80 80 0 0 0-80 80c0 72 80 128 80 128s80-56 80-128a80 80 0 0 0-80-80m0 112a32 32 0 1 1 32-32a32 32 0 0 1-32 32" opacity=".2"></path>
                      <path d="M128 64a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24m0-112a88.1 88.1 0 0 0-88 88c0 31.4 14.51 64.68 42 96.25a254.2 254.2 0 0 0 41.45 38.3a8 8 0 0 0 9.18 0a254.2 254.2 0 0 0 41.37-38.3c27.45-31.57 42-64.85 42-96.25a88.1 88.1 0 0 0-88-88m0 206c-16.53-13-72-60.75-72-118a72 72 0 0 1 144 0c0 57.23-55.47 105-72 118"></path>
                    </g></svg
                  ><span class="text-muted-400 font-sans text-xs">New York</span>
                </div>
              </div>
              <div class="mt-6">
                <button type="button" rel="" target="" class="nui-button nui-button-md nui-button-rounded-lg nui-button-solid nui-button-default w-full">
                  <span> View Clark Smith's profile </span
                  ><!----></button
                ><button type="button" class="text-primary-500 mt-3 font-sans text-sm underline-offset-4 hover:underline">Send a friend request</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</template>
<script>

</script>
<style lang="">
    
</style>