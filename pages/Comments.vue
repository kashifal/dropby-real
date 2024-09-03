<template lang="">
  <Sidebar />
    <div class="bg-[#0F172A] overflow-auto">
       <div class="dark:bg-[#1E293B] 2xl:pl-[300px] xl:pl-[100px] bg-muted-100 px-4">
       <div class="relative z-[1] max-w-7xl mx-auto mb-5 flex h-16 items-center gap-2">
      <button type="button" class="flex size-10 items-center justify-center lg:hidden -ms-3"><div class="relative size-5"><span class="bg-[#9A2DE0] absolute block h-0.5 w-full transition-all duration-300 top-0.5"></span><span class="bg-[#9A2DE0] absolute top-1/2 block h-0.5 w-full max-w-[50%] transition-all duration-300"></span><span class="bg-[#9A2DE0] absolute block h-0.5 w-full transition-all duration-300 bottom-0"></span></div></button>
      <svg xmlns="http://www.w3.org/2000/svg" class="lg:block hidden" width="40" height="40" viewBox="0 0 40 40" fill="none">
    <rect x="12.3401" y="19.6396" width="13.5057" height="1.79606" transform="rotate(-45 12.3401 19.6396)" fill="#9A2DE0"/>
    <rect x="13.6101" y="19.0898" width="13.5057" height="1.79606" transform="rotate(45 13.6101 19.0898)" fill="#9A2DE0"/>
    </svg>
      <h1 class="nui-heading nui-heading-2xl nui-weight-light nui-lead-normal text-muted-800 hidden md:block dark:text-white">Event</h1>
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
    <div class="">
      <div class="px-4">
    
        <div class="">
      <div class="px-4">
       
        <div class="z-20 mx-auto pb-40 grid w-full max-w-6xl gap-8 overflow-x-auto lg:grid-cols-2">
          <div class="pb-28">
            <div class="mt-5 hidden items-end gap-2 overflow-auto whitespace-nowrap sm:flex">
              <button type="button" class="inline-flex items-center justify-center gap-3 border-b-2 border-transparent px-4 py-3 font-sans text-sm text-[#94A3B8] focus:border-[#8B5CF6]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="currentColor"
                  class=" text-gray-400"
                >
                  <g clip-path="url(#clip0_8_52312)">
                    <path
                      opacity="0.2"
                      d="M5.58249 12.1008L8.88093 15.3993L4.92546 16.8368C4.81641 16.8769 4.69815 16.8849 4.58467 16.8599C4.47119 16.835 4.36723 16.7781 4.28506 16.6959C4.2029 16.6137 4.14598 16.5098 4.12102 16.3963C4.09606 16.2828 4.10411 16.1646 4.14421 16.0555L5.58249 12.1008ZM16.4278 11.7321L9.24968 4.55394C9.17729 4.48157 9.08781 4.42862 8.98953 4.4C8.89125 4.37138 8.78734 4.36802 8.68741 4.39021C8.58748 4.41241 8.49476 4.45946 8.41784 4.52699C8.34092 4.59453 8.28228 4.68038 8.24734 4.7766L7.08327 7.97972L13.0067 13.9032L16.2098 12.7391C16.3066 12.704 16.3928 12.6449 16.4606 12.5674C16.5283 12.4898 16.5752 12.3964 16.597 12.2958C16.6187 12.1952 16.6146 12.0907 16.5851 11.9921C16.5555 11.8935 16.5014 11.8041 16.4278 11.7321Z"
                      fill="currentColor"
                    />
                    <path d="M9.6919 4.11172C9.54511 3.96531 9.36381 3.85824 9.16472 3.80037C8.96564 3.74251 8.75519 3.73572 8.55279 3.78064C8.35039 3.82556 8.16256 3.92073 8.00664 4.05738C7.85072 4.19402 7.73173 4.36774 7.66065 4.5625L3.55987 15.8422C3.49251 16.0282 3.47075 16.2276 3.49642 16.4238C3.52209 16.62 3.59445 16.8071 3.70741 16.9695C3.82038 17.1319 3.97066 17.2649 4.14563 17.3572C4.32061 17.4495 4.51517 17.4985 4.713 17.5C4.85865 17.499 5.00301 17.4726 5.13956 17.4219L16.4185 13.3203C16.6133 13.2493 16.7871 13.1304 16.9238 12.9745C17.0605 12.8186 17.1558 12.6308 17.2008 12.4284C17.2458 12.226 17.2391 12.0155 17.1813 11.8164C17.1235 11.6173 17.0164 11.4359 16.87 11.2891L9.6919 4.11172ZM9.04112 14.675L6.30675 11.9406L7.33487 9.11172L11.87 13.6469L9.04112 14.675ZM4.74425 16.2375L5.838 13.2367L7.74815 15.1469L4.74425 16.2375ZM13.1692 13.175L7.80675 7.8125L8.82237 5.01016L15.9653 12.1531L13.1692 13.175ZM13.4817 5.625C13.4935 5.20248 13.5958 4.7874 13.7817 4.40781C14.1958 3.58047 14.9771 3.125 15.9817 3.125C16.5052 3.125 16.8411 2.94609 17.0482 2.56172C17.1572 2.34668 17.2197 2.11111 17.2317 1.87031C17.2324 1.70455 17.2988 1.54583 17.4165 1.42906C17.5341 1.31229 17.6933 1.24703 17.8591 1.24766C18.0249 1.24828 18.1836 1.31472 18.3003 1.43237C18.4171 1.55002 18.4824 1.70924 18.4817 1.875C18.4817 2.87969 17.8161 4.375 15.9817 4.375C15.4583 4.375 15.1224 4.55391 14.9153 4.93828C14.8063 5.15332 14.7438 5.38889 14.7317 5.62969C14.7314 5.71176 14.715 5.79298 14.6833 5.86869C14.6516 5.9444 14.6053 6.01312 14.547 6.07094C14.4888 6.12876 14.4197 6.17454 14.3438 6.20567C14.2678 6.23679 14.1865 6.25265 14.1044 6.25234C14.0223 6.25204 13.9411 6.23556 13.8654 6.20387C13.7897 6.17218 13.721 6.12588 13.6631 6.06763C13.6053 6.00937 13.5596 5.9403 13.5284 5.86436C13.4973 5.78841 13.4814 5.70708 13.4817 5.625ZM11.6067 3.125V1.25C11.6067 1.08424 11.6726 0.925268 11.7898 0.808058C11.907 0.690848 12.066 0.625 12.2317 0.625C12.3975 0.625 12.5565 0.690848 12.6737 0.808058C12.7909 0.925268 12.8567 1.08424 12.8567 1.25V3.125C12.8567 3.29076 12.7909 3.44973 12.6737 3.56694C12.5565 3.68415 12.3975 3.75 12.2317 3.75C12.066 3.75 11.907 3.68415 11.7898 3.56694C11.6726 3.44973 11.6067 3.29076 11.6067 3.125ZM19.5489 9.55781C19.607 9.61588 19.653 9.68481 19.6843 9.76066C19.7157 9.83651 19.7319 9.9178 19.7318 9.99989C19.7318 10.082 19.7156 10.1632 19.6841 10.2391C19.6527 10.3149 19.6066 10.3838 19.5485 10.4418C19.4905 10.4998 19.4215 10.5458 19.3457 10.5772C19.2698 10.6086 19.1886 10.6247 19.1065 10.6247C19.0244 10.6246 18.9431 10.6084 18.8673 10.577C18.7915 10.5455 18.7226 10.4995 18.6646 10.4414L17.4146 9.19141C17.2973 9.07413 17.2314 8.91507 17.2314 8.74922C17.2314 8.58337 17.2973 8.42431 17.4146 8.30703C17.5318 8.18976 17.6909 8.12387 17.8567 8.12387C18.0226 8.12387 18.1817 8.18976 18.2989 8.30703L19.5489 9.55781ZM19.9294 6.21797L18.0544 6.84297C17.8971 6.89539 17.7255 6.88319 17.5772 6.80906C17.4289 6.73492 17.3162 6.60492 17.2638 6.44766C17.2114 6.29039 17.2236 6.11874 17.2977 5.97047C17.3718 5.8222 17.5018 5.70945 17.6591 5.65703L19.5341 5.03203C19.6914 4.97961 19.863 4.99181 20.0113 5.06594C20.1595 5.14008 20.2723 5.27008 20.3247 5.42734C20.3771 5.58461 20.3649 5.75626 20.2908 5.90453C20.2167 6.0528 20.0867 6.16555 19.9294 6.21797Z" fill="currentColor" />
                  </g>
                  <defs>
                    <clipPath id="clip0_8_52312">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(0.981689)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <span>Home</span>
              </button>
              <button type="button" class="inline-flex items-center justify-center gap-3 border-b-2 border-transparent px-4 py-3 font-sans text-sm text-[#94A3B8] focus:border-[#8B5CF6]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                >
                  <g clip-path="url(#clip0_8_52321)">
                    <path
                      opacity="0.2"
                      d="M14.1067 11.25C14.1067 11.8681 13.9234 12.4723 13.58 12.9862C13.2367 13.5001 12.7486 13.9006 12.1776 14.1371C11.6066 14.3736 10.9782 14.4355 10.372 14.315C9.76584 14.1944 9.20902 13.8967 8.77198 13.4597C8.33494 13.0227 8.03732 12.4658 7.91674 11.8597C7.79616 11.2535 7.85804 10.6251 8.09457 10.0541C8.33109 9.48309 8.73163 8.99504 9.24553 8.65166C9.75944 8.30828 10.3636 8.125 10.9817 8.125C11.8105 8.125 12.6053 8.45424 13.1914 9.04029C13.7775 9.62634 14.1067 10.4212 14.1067 11.25ZM5.98169 4.375C5.48724 4.375 5.00389 4.52162 4.59276 4.79633C4.18164 5.07103 3.86121 5.46148 3.67199 5.91829C3.48277 6.37511 3.43326 6.87777 3.52973 7.36273C3.62619 7.84768 3.86429 8.29314 4.21392 8.64277C4.56355 8.9924 5.00901 9.2305 5.49396 9.32696C5.97892 9.42343 6.48158 9.37392 6.9384 9.1847C7.39521 8.99548 7.78566 8.67505 8.06036 8.26393C8.33507 7.8528 8.48169 7.36945 8.48169 6.875C8.48169 6.21196 8.2183 5.57607 7.74946 5.10723C7.28062 4.63839 6.64473 4.375 5.98169 4.375ZM15.9817 4.375C15.4872 4.375 15.0039 4.52162 14.5928 4.79633C14.1816 5.07103 13.8612 5.46148 13.672 5.91829C13.4828 6.37511 13.4333 6.87777 13.5297 7.36273C13.6262 7.84768 13.8643 8.29314 14.2139 8.64277C14.5636 8.9924 15.009 9.2305 15.494 9.32696C15.9789 9.42343 16.4816 9.37392 16.9384 9.1847C17.3952 8.99548 17.7857 8.67505 18.0604 8.26393C18.3351 7.8528 18.4817 7.36945 18.4817 6.875C18.4817 6.21196 18.2183 5.57607 17.7495 5.10723C17.2806 4.63839 16.6447 4.375 15.9817 4.375Z"
                      fill="currentColor"
                    />
                    <path d="M20.1067 11.7501C20.041 11.7993 19.9663 11.8351 19.8868 11.8555C19.8073 11.8759 19.7245 11.8804 19.6433 11.8688C19.562 11.8572 19.4839 11.8297 19.4132 11.7879C19.3426 11.746 19.2809 11.6907 19.2317 11.6251C18.855 11.1187 18.3646 10.7079 17.8002 10.4256C17.2357 10.1434 16.6128 9.99761 15.9817 10.0001C15.8159 10.0001 15.6569 9.93421 15.5397 9.817C15.4225 9.69979 15.3567 9.54082 15.3567 9.37506C15.3567 9.2093 15.4225 9.05033 15.5397 8.93312C15.6569 8.81591 15.8159 8.75006 15.9817 8.75006C16.3324 8.75003 16.676 8.65165 16.9736 8.46611C17.2712 8.28056 17.5107 8.01528 17.6651 7.7004C17.8195 7.38552 17.8824 7.03366 17.8468 6.68479C17.8113 6.33592 17.6785 6.00402 17.4638 5.72679C17.249 5.44957 16.9608 5.23812 16.6319 5.11648C16.303 4.99483 15.9466 4.96787 15.6031 5.03864C15.2596 5.10941 14.9429 5.27509 14.6889 5.51685C14.4349 5.75861 14.2537 6.06676 14.1661 6.40631C14.1455 6.48582 14.1096 6.56051 14.0602 6.62612C14.0108 6.69172 13.949 6.74696 13.8782 6.78867C13.8075 6.83039 13.7292 6.85776 13.6479 6.86923C13.5666 6.8807 13.4838 6.87605 13.4043 6.85553C13.3248 6.83501 13.2501 6.79903 13.1845 6.74964C13.1189 6.70026 13.0637 6.63844 13.022 6.5677C12.9803 6.49697 12.9529 6.41872 12.9414 6.3374C12.9299 6.25609 12.9346 6.17332 12.9551 6.09381C13.0768 5.62296 13.3067 5.18701 13.6265 4.82065C13.9463 4.45428 14.3472 4.16761 14.7973 3.98346C15.2474 3.7993 15.7343 3.72273 16.2192 3.75985C16.7041 3.79696 17.1737 3.94674 17.5905 4.19725C18.0073 4.44777 18.3599 4.79211 18.6203 5.20288C18.8806 5.61366 19.0415 6.07952 19.0901 6.5634C19.1387 7.04728 19.0737 7.53583 18.9002 7.99017C18.7268 8.44452 18.4497 8.85211 18.0911 9.18053C18.9409 9.54849 19.6797 10.1324 20.234 10.8743C20.2833 10.9401 20.319 11.015 20.3393 11.0947C20.3595 11.1743 20.3639 11.2572 20.3521 11.3386C20.3402 11.4199 20.3125 11.4982 20.2704 11.5688C20.2283 11.6394 20.1726 11.701 20.1067 11.7501ZM15.8973 16.5626C15.9409 16.6337 15.9699 16.7129 15.9824 16.7954C15.995 16.8779 15.9909 16.9621 15.9703 17.043C15.9498 17.1239 15.9133 17.1999 15.8629 17.2664C15.8126 17.333 15.7494 17.3888 15.6771 17.4305C15.6049 17.4723 15.525 17.4991 15.4421 17.5095C15.3593 17.5198 15.2753 17.5135 15.1949 17.4909C15.1146 17.4682 15.0396 17.4297 14.9744 17.3776C14.9092 17.3255 14.8551 17.2609 14.8153 17.1876C14.4215 16.5211 13.8608 15.9687 13.1885 15.5851C12.5161 15.2014 11.7554 14.9996 10.9813 14.9996C10.2072 14.9996 9.44644 15.2014 8.7741 15.5851C8.10177 15.9687 7.54107 16.5211 7.14731 17.1876C7.10823 17.2622 7.05446 17.3283 6.98921 17.3816C6.92396 17.435 6.8486 17.4746 6.76764 17.4981C6.68669 17.5216 6.60182 17.5285 6.51814 17.5183C6.43446 17.5081 6.3537 17.4811 6.28073 17.439C6.20775 17.3968 6.14406 17.3403 6.09348 17.2728C6.04291 17.2054 6.0065 17.1284 5.98645 17.0465C5.96639 16.9647 5.96311 16.8796 5.97679 16.7964C5.99047 16.7132 6.02083 16.6337 6.06606 16.5626C6.67199 15.5214 7.59589 14.7021 8.70199 14.2251C8.07959 13.7485 7.62217 13.0889 7.39402 12.339C7.16588 11.589 7.17848 10.7865 7.43005 10.044C7.68163 9.30163 8.15953 8.65672 8.79658 8.19996C9.43363 7.7432 10.1978 7.49755 10.9817 7.49755C11.7656 7.49755 12.5297 7.7432 13.1668 8.19996C13.8038 8.65672 14.2817 9.30163 14.5333 10.044C14.7849 10.7865 14.7975 11.589 14.5693 12.339C14.3412 13.0889 13.8838 13.7485 13.2614 14.2251C14.3675 14.7021 15.2914 15.5214 15.8973 16.5626ZM10.9817 13.7501C11.4761 13.7501 11.9595 13.6034 12.3706 13.3287C12.7817 13.054 13.1022 12.6636 13.2914 12.2068C13.4806 11.75 13.5301 11.2473 13.4336 10.7623C13.3372 10.2774 13.0991 9.83192 12.7494 9.48229C12.3998 9.13266 11.9544 8.89456 11.4694 8.79809C10.9845 8.70163 10.4818 8.75114 10.025 8.94036C9.56816 9.12958 9.17771 9.45001 8.90301 9.86113C8.6283 10.2723 8.48168 10.7556 8.48168 11.2501C8.48168 11.9131 8.74507 12.549 9.21391 13.0178C9.68275 13.4867 10.3186 13.7501 10.9817 13.7501ZM6.60668 9.37506C6.60668 9.2093 6.54083 9.05033 6.42362 8.93312C6.30641 8.81591 6.14744 8.75006 5.98168 8.75006C5.631 8.75003 5.28735 8.65165 4.98978 8.46611C4.69221 8.28056 4.45263 8.01528 4.29827 7.7004C4.1439 7.38552 4.08094 7.03366 4.11652 6.68479C4.15211 6.33592 4.28482 6.00402 4.49958 5.72679C4.71434 5.44957 5.00254 5.23812 5.33145 5.11648C5.66035 4.99483 6.01678 4.96787 6.36025 5.03864C6.70371 5.10941 7.02045 5.27509 7.27447 5.51685C7.5285 5.75861 7.70963 6.06676 7.79731 6.40631C7.83875 6.56689 7.94228 6.70443 8.08513 6.78867C8.22798 6.87292 8.39844 6.89697 8.55902 6.85553C8.7196 6.81409 8.85715 6.71055 8.94139 6.5677C9.02564 6.42485 9.04968 6.25439 9.00824 6.09381C8.88656 5.62296 8.65666 5.18701 8.33684 4.82065C8.01703 4.45428 7.61612 4.16761 7.16602 3.98346C6.71592 3.7993 6.22905 3.72273 5.74415 3.75985C5.25925 3.79696 4.7897 3.94674 4.37287 4.19725C3.95604 4.44777 3.60343 4.79211 3.3431 5.20288C3.08277 5.61366 2.9219 6.07952 2.8733 6.5634C2.82469 7.04728 2.88969 7.53583 3.06312 7.99017C3.23655 8.44452 3.51363 8.85211 3.87231 9.18053C3.02331 9.54884 2.28536 10.1327 1.73168 10.8743C1.68238 10.9399 1.6465 11.0147 1.62608 11.0942C1.60567 11.1737 1.60111 11.2565 1.61269 11.3378C1.62426 11.4191 1.65172 11.4973 1.69352 11.568C1.73532 11.6386 1.79063 11.7004 1.85629 11.7497C1.92195 11.799 1.99668 11.8348 2.07621 11.8553C2.15573 11.8757 2.2385 11.8802 2.31979 11.8687C2.40108 11.8571 2.47929 11.8296 2.54996 11.7878C2.62064 11.746 2.68238 11.6907 2.73168 11.6251C3.10839 11.1187 3.59872 10.7079 4.16321 10.4256C4.7277 10.1434 5.35057 9.99761 5.98168 10.0001C6.14744 10.0001 6.30641 9.93421 6.42362 9.817C6.54083 9.69979 6.60668 9.54082 6.60668 9.37506Z" fill="currentColor" />
                  </g>
                  <defs>
                    <clipPath id="clip0_8_52321">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(0.981689)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <span>Attending</span>
              </button>

              <button type="button" class="inline-flex items-center justify-center gap-3 border-b-2 border-[#8B5CF6] px-4 py-3 font-sans text-[14px] dark:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                >
                  <g clip-path="url(#clip0_8_52330)">
                    <path
                      opacity="0.2"
                      d="M18.4817 10C18.4817 11.4834 18.0418 12.9334 17.2177 14.1668C16.3936 15.4001 15.2223 16.3614 13.8518 16.9291C12.4814 17.4968 10.9734 17.6453 9.51852 17.3559C8.06366 17.0665 6.72729 16.3522 5.67839 15.3033C4.6295 14.2544 3.91519 12.918 3.6258 11.4632C3.33641 10.0083 3.48494 8.50032 4.0526 7.12987C4.62025 5.75943 5.58155 4.58809 6.81492 3.76398C8.04829 2.93987 9.49833 2.5 10.9817 2.5C12.9708 2.5 14.8785 3.29018 16.285 4.6967C17.6915 6.10322 18.4817 8.01088 18.4817 10Z"
                      fill="#94A3B8"
                    />
                    <path d="M14.5489 7.68281C14.607 7.74086 14.6531 7.80979 14.6845 7.88566C14.716 7.96154 14.7322 8.04287 14.7322 8.125C14.7322 8.20713 14.716 8.28846 14.6845 8.36434C14.6531 8.44021 14.607 8.50914 14.5489 8.56719L10.1739 12.9422C10.1158 13.0003 10.0469 13.0464 9.97103 13.0779C9.89516 13.1093 9.81383 13.1255 9.73169 13.1255C9.64956 13.1255 9.56823 13.1093 9.49236 13.0779C9.41648 13.0464 9.34755 13.0003 9.28951 12.9422L7.41451 11.0672C7.29723 10.9499 7.23135 10.7909 7.23135 10.625C7.23135 10.4591 7.29723 10.3001 7.41451 10.1828C7.53178 10.0655 7.69084 9.99965 7.85669 9.99965C8.02255 9.99965 8.18161 10.0655 8.29888 10.1828L9.73169 11.6164L13.6645 7.68281C13.7226 7.6247 13.7915 7.5786 13.8674 7.54715C13.9432 7.5157 14.0246 7.49951 14.1067 7.49951C14.1888 7.49951 14.2702 7.5157 14.346 7.54715C14.4219 7.5786 14.4908 7.6247 14.5489 7.68281ZM19.1067 10C19.1067 11.607 18.6302 13.1779 17.7374 14.514C16.8446 15.8502 15.5756 16.8916 14.091 17.5065C12.6063 18.1215 10.9727 18.2824 9.39658 17.9689C7.82049 17.6554 6.37275 16.8815 5.23645 15.7452C4.10015 14.6089 3.32632 13.1612 3.01281 11.5851C2.69931 10.009 2.86021 8.37535 3.47517 6.8907C4.09013 5.40605 5.13154 4.1371 6.46768 3.24431C7.80383 2.35152 9.37472 1.875 10.9817 1.875C13.1359 1.87727 15.2012 2.73403 16.7244 4.25727C18.2477 5.78051 19.1044 7.84581 19.1067 10ZM17.8567 10C17.8567 8.64025 17.4535 7.31104 16.698 6.18045C15.9426 5.04987 14.8689 4.16868 13.6126 3.64833C12.3564 3.12798 10.9741 2.99183 9.64045 3.2571C8.30683 3.52237 7.08182 4.17716 6.12033 5.13864C5.15885 6.10013 4.50407 7.32513 4.23879 8.65875C3.97352 9.99237 4.10967 11.3747 4.63002 12.6309C5.15037 13.8872 6.03156 14.9609 7.16215 15.7164C8.29274 16.4718 9.62195 16.875 10.9817 16.875C12.8044 16.8729 14.5519 16.1479 15.8408 14.8591C17.1296 13.5702 17.8546 11.8227 17.8567 10Z" fill="#94A3B8" />
                  </g>
                  <defs>
                    <clipPath id="clip0_8_52330">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(0.981689)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <span>Comments</span>
              </button>

              <button type="button" class="inline-flex items-center justify-center gap-3 border-b-2 border-transparent px-4 py-3 font-sans text-sm text-[#94A3B8] focus:border-[#8B5CF6]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                >
                  <g clip-path="url(#clip0_8_52330)">
                    <path
                      opacity="0.2"
                      d="M18.4817 10C18.4817 11.4834 18.0418 12.9334 17.2177 14.1668C16.3936 15.4001 15.2223 16.3614 13.8518 16.9291C12.4814 17.4968 10.9734 17.6453 9.51852 17.3559C8.06366 17.0665 6.72729 16.3522 5.67839 15.3033C4.6295 14.2544 3.91519 12.918 3.6258 11.4632C3.33641 10.0083 3.48494 8.50032 4.0526 7.12987C4.62025 5.75943 5.58155 4.58809 6.81492 3.76398C8.04829 2.93987 9.49833 2.5 10.9817 2.5C12.9708 2.5 14.8785 3.29018 16.285 4.6967C17.6915 6.10322 18.4817 8.01088 18.4817 10Z"
                      fill="#94A3B8"
                    />
                    <path d="M14.5489 7.68281C14.607 7.74086 14.6531 7.80979 14.6845 7.88566C14.716 7.96154 14.7322 8.04287 14.7322 8.125C14.7322 8.20713 14.716 8.28846 14.6845 8.36434C14.6531 8.44021 14.607 8.50914 14.5489 8.56719L10.1739 12.9422C10.1158 13.0003 10.0469 13.0464 9.97103 13.0779C9.89516 13.1093 9.81383 13.1255 9.73169 13.1255C9.64956 13.1255 9.56823 13.1093 9.49236 13.0779C9.41648 13.0464 9.34755 13.0003 9.28951 12.9422L7.41451 11.0672C7.29723 10.9499 7.23135 10.7909 7.23135 10.625C7.23135 10.4591 7.29723 10.3001 7.41451 10.1828C7.53178 10.0655 7.69084 9.99965 7.85669 9.99965C8.02255 9.99965 8.18161 10.0655 8.29888 10.1828L9.73169 11.6164L13.6645 7.68281C13.7226 7.6247 13.7915 7.5786 13.8674 7.54715C13.9432 7.5157 14.0246 7.49951 14.1067 7.49951C14.1888 7.49951 14.2702 7.5157 14.346 7.54715C14.4219 7.5786 14.4908 7.6247 14.5489 7.68281ZM19.1067 10C19.1067 11.607 18.6302 13.1779 17.7374 14.514C16.8446 15.8502 15.5756 16.8916 14.091 17.5065C12.6063 18.1215 10.9727 18.2824 9.39658 17.9689C7.82049 17.6554 6.37275 16.8815 5.23645 15.7452C4.10015 14.6089 3.32632 13.1612 3.01281 11.5851C2.69931 10.009 2.86021 8.37535 3.47517 6.8907C4.09013 5.40605 5.13154 4.1371 6.46768 3.24431C7.80383 2.35152 9.37472 1.875 10.9817 1.875C13.1359 1.87727 15.2012 2.73403 16.7244 4.25727C18.2477 5.78051 19.1044 7.84581 19.1067 10ZM17.8567 10C17.8567 8.64025 17.4535 7.31104 16.698 6.18045C15.9426 5.04987 14.8689 4.16868 13.6126 3.64833C12.3564 3.12798 10.9741 2.99183 9.64045 3.2571C8.30683 3.52237 7.08182 4.17716 6.12033 5.13864C5.15885 6.10013 4.50407 7.32513 4.23879 8.65875C3.97352 9.99237 4.10967 11.3747 4.63002 12.6309C5.15037 13.8872 6.03156 14.9609 7.16215 15.7164C8.29274 16.4718 9.62195 16.875 10.9817 16.875C12.8044 16.8729 14.5519 16.1479 15.8408 14.8591C17.1296 13.5702 17.8546 11.8227 17.8567 10Z" fill="#94A3B8" />
                  </g>
                  <defs>
                    <clipPath id="clip0_8_52330">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(0.981689)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <span>Tickets</span>
              </button>
             
            </div>

          <div class="mt-5 flex flex-col gap-5">
              <div class="rounded-[12px] border dark:border-[#334155] bg-muted-100 dark:bg-[#1E293B] p-[25px]">
                <div class="gap-3 rounded-lg transition-all duration-300">
                  <div class="flex items-center gap-2">
                    <img src="../public/images/16.svg fill.png" alt="" class="size-10 rounded-md" />
                    <div class="flex items-center gap-3">
                      <div class="">
                        <h5 class="text-[14px] font-[300] dark:text-white">Hermann M.</h5>
                        <h5 class="text-[12px] font-[300] text-[#94A3B8]">Event owner</h5>
                      </div>
                      <h5 class="text-[12px] font-[300] text-[#94A3B8]">Just now</h5>
                    </div>
                  </div>
                  <p class="py-5 text-sm font-[300] dark:text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                  <div class="flex w-full justify-end gap-3 pt-5">
                    <button type="button" class="border-muted-200 hover:ring-muted-200 dark:hover:ring-muted-700 dark:border-muted-700 dark:ring-offset-muted-900 flex size-9 items-center justify-center rounded-full border bg-white ring-1 ring-transparent transition-all duration-300 hover:ring-offset-4 dark:bg-white" data-v-inspector="pages/Comments.vue:32:9">
  <svg data-v-b4402e20="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon text-muted-400 size-5" width="1em" height="1em" viewBox="0 0 256 256" data-v-inspector="pages/Comments.vue:33:11">
    <g fill="currentColor" data-v-inspector="pages/Comments.vue:34:13">
      <path d="M112 80a32 32 0 1 1-32-32a32 32 0 0 1 32 32m64 32a32 32 0 1 0-32-32a32 32 0 0 0 32 32m-96 32a32 32 0 1 0 32 32a32 32 0 0 0-32-32m96 0a32 32 0 1 0 32 32a32 32 0 0 0-32-32" opacity=".2" data-v-inspector="pages/Comments.vue:35:15"></path>
      <path d="M80 40a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24m96 16a40 40 0 1 0-40-40a40 40 0 0 0 40 40m0-64a24 24 0 1 1-24 24a24 24 0 0 1 24-24m-96 80a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24m96-64a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24" data-v-inspector="pages/Comments.vue:36:15"></path>
    </g>
  </svg>
</button>

<button type="button" class="border-muted-200 hover:ring-muted-200 dark:hover:ring-muted-700 dark:border-muted-700 dark:ring-offset-muted-900 flex size-9 items-center justify-center rounded-full border bg-white ring-1 ring-transparent transition-all duration-300 hover:ring-offset-4 dark:bg-white" data-v-inspector="pages/Comments.vue:32:9">
    <svg data-v-b4402e20="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon text-muted-400 size-5" width="1em" height="1em" viewBox="0 0 256 256" data-v-inspector="pages/Comments.vue:21:20"><g fill="currentColor" data-v-inspector="pages/Comments.vue:22:21"><path d="M208 192H48a8 8 0 0 1-6.88-12C47.71 168.6 56 139.81 56 104a72 72 0 0 1 144 0c0 35.82 8.3 64.6 14.9 76a8 8 0 0 1-6.9 12" opacity=".2" data-v-inspector="pages/Comments.vue:23:23"></path><path d="M221.8 175.94c-5.55-9.56-13.8-36.61-13.8-71.94a80 80 0 1 0-160 0c0 35.34-8.26 62.38-13.81 71.94A16 16 0 0 0 48 200h40.81a40 40 0 0 0 78.38 0H208a16 16 0 0 0 13.8-24.06M128 216a24 24 0 0 1-22.62-16h45.24A24 24 0 0 1 128 216m-80-32c7.7-13.24 16-43.92 16-80a64 64 0 1 1 128 0c0 36.05 8.28 66.73 16 80Z" data-v-inspector="pages/Comments.vue:24:23"></path></g></svg>
</button>

                  </div>
                </div>
              </div>
              <div class="rounded-[12px] border dark:border-[#334155] bg-muted-100 dark:bg-[#1E293B] p-[25px]">
                <div class="gap-3 rounded-lg transition-all duration-300">
                  <div class="flex items-center gap-2">
                    <img src="../public/images/16.svg fill.png" alt="" class="size-10 rounded-md" />
                    <div class="flex items-center gap-3">
                      <div class="">
                        <h5 class="text-[14px] font-[300] dark:text-white">Hermann M.</h5>
                        <h5 class="text-[12px] font-[300] text-[#94A3B8]">Event owner</h5>
                      </div>
                      <h5 class="text-[12px] font-[300] text-[#94A3B8]">Just now</h5>
                    </div>
                  </div>
                  <p class="py-5 text-sm font-[300] dark:text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                  <div class="flex w-full justify-end gap-3 pt-5">
                    <button type="button" class="border-muted-200 hover:ring-muted-200 dark:hover:ring-muted-700 dark:border-muted-700 dark:ring-offset-muted-900 flex size-9 items-center justify-center rounded-full border bg-white ring-1 ring-transparent transition-all duration-300 hover:ring-offset-4 dark:bg-white" data-v-inspector="pages/Comments.vue:32:9">
  <svg data-v-b4402e20="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon text-muted-400 size-5" width="1em" height="1em" viewBox="0 0 256 256" data-v-inspector="pages/Comments.vue:33:11">
    <g fill="currentColor" data-v-inspector="pages/Comments.vue:34:13">
      <path d="M112 80a32 32 0 1 1-32-32a32 32 0 0 1 32 32m64 32a32 32 0 1 0-32-32a32 32 0 0 0 32 32m-96 32a32 32 0 1 0 32 32a32 32 0 0 0-32-32m96 0a32 32 0 1 0 32 32a32 32 0 0 0-32-32" opacity=".2" data-v-inspector="pages/Comments.vue:35:15"></path>
      <path d="M80 40a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24m96 16a40 40 0 1 0-40-40a40 40 0 0 0 40 40m0-64a24 24 0 1 1-24 24a24 24 0 0 1 24-24m-96 80a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24m96-64a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24" data-v-inspector="pages/Comments.vue:36:15"></path>
    </g>
  </svg>
</button>

<button type="button" class="border-muted-200 hover:ring-muted-200 dark:hover:ring-muted-700 dark:border-muted-700 dark:ring-offset-muted-900 flex size-9 items-center justify-center rounded-full border bg-white ring-1 ring-transparent transition-all duration-300 hover:ring-offset-4 dark:bg-white" data-v-inspector="pages/Comments.vue:32:9">
    <svg data-v-b4402e20="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon text-muted-400 size-5" width="1em" height="1em" viewBox="0 0 256 256" data-v-inspector="pages/Comments.vue:21:20"><g fill="currentColor" data-v-inspector="pages/Comments.vue:22:21"><path d="M208 192H48a8 8 0 0 1-6.88-12C47.71 168.6 56 139.81 56 104a72 72 0 0 1 144 0c0 35.82 8.3 64.6 14.9 76a8 8 0 0 1-6.9 12" opacity=".2" data-v-inspector="pages/Comments.vue:23:23"></path><path d="M221.8 175.94c-5.55-9.56-13.8-36.61-13.8-71.94a80 80 0 1 0-160 0c0 35.34-8.26 62.38-13.81 71.94A16 16 0 0 0 48 200h40.81a40 40 0 0 0 78.38 0H208a16 16 0 0 0 13.8-24.06M128 216a24 24 0 0 1-22.62-16h45.24A24 24 0 0 1 128 216m-80-32c7.7-13.24 16-43.92 16-80a64 64 0 1 1 128 0c0 36.05 8.28 66.73 16 80Z" data-v-inspector="pages/Comments.vue:24:23"></path></g></svg>
</button>

                  </div>
                </div>
              </div>
              <div class="rounded-[12px] border dark:border-[#334155] bg-muted-100 dark:bg-[#1E293B] p-[25px]">
                <div class="gap-3 rounded-lg transition-all duration-300">
                  <div class="flex items-center gap-2">
                    <img src="../public/images/16.svg fill.png" alt="" class="size-10 rounded-md" />
                    <div class="flex items-center gap-3">
                      <div class="">
                        <h5 class="text-[14px] font-[300] dark:text-white">Hermann M.</h5>
                        <h5 class="text-[12px] font-[300] text-[#94A3B8]">Event owner</h5>
                      </div>
                      <h5 class="text-[12px] font-[300] text-[#94A3B8]">Just now</h5>
                    </div>
                  </div>
                  <p class="py-5 text-sm font-[300] dark:text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                  <div class="flex w-full justify-end gap-3 pt-5">
                    <button type="button" class="border-muted-200 hover:ring-muted-200 dark:hover:ring-muted-700 dark:border-muted-700 dark:ring-offset-muted-900 flex size-9 items-center justify-center rounded-full border bg-white ring-1 ring-transparent transition-all duration-300 hover:ring-offset-4 dark:bg-white" data-v-inspector="pages/Comments.vue:32:9">
  <svg data-v-b4402e20="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon text-muted-400 size-5" width="1em" height="1em" viewBox="0 0 256 256" data-v-inspector="pages/Comments.vue:33:11">
    <g fill="currentColor" data-v-inspector="pages/Comments.vue:34:13">
      <path d="M112 80a32 32 0 1 1-32-32a32 32 0 0 1 32 32m64 32a32 32 0 1 0-32-32a32 32 0 0 0 32 32m-96 32a32 32 0 1 0 32 32a32 32 0 0 0-32-32m96 0a32 32 0 1 0 32 32a32 32 0 0 0-32-32" opacity=".2" data-v-inspector="pages/Comments.vue:35:15"></path>
      <path d="M80 40a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24m96 16a40 40 0 1 0-40-40a40 40 0 0 0 40 40m0-64a24 24 0 1 1-24 24a24 24 0 0 1 24-24m-96 80a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24m96-64a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24" data-v-inspector="pages/Comments.vue:36:15"></path>
    </g>
  </svg>
</button>

<button type="button" class="border-muted-200 hover:ring-muted-200 dark:hover:ring-muted-700 dark:border-muted-700 dark:ring-offset-muted-900 flex size-9 items-center justify-center rounded-full border bg-white ring-1 ring-transparent transition-all duration-300 hover:ring-offset-4 dark:bg-white" data-v-inspector="pages/Comments.vue:32:9">
    <svg data-v-b4402e20="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon text-muted-400 size-5" width="1em" height="1em" viewBox="0 0 256 256" data-v-inspector="pages/Comments.vue:21:20"><g fill="currentColor" data-v-inspector="pages/Comments.vue:22:21"><path d="M208 192H48a8 8 0 0 1-6.88-12C47.71 168.6 56 139.81 56 104a72 72 0 0 1 144 0c0 35.82 8.3 64.6 14.9 76a8 8 0 0 1-6.9 12" opacity=".2" data-v-inspector="pages/Comments.vue:23:23"></path><path d="M221.8 175.94c-5.55-9.56-13.8-36.61-13.8-71.94a80 80 0 1 0-160 0c0 35.34-8.26 62.38-13.81 71.94A16 16 0 0 0 48 200h40.81a40 40 0 0 0 78.38 0H208a16 16 0 0 0 13.8-24.06M128 216a24 24 0 0 1-22.62-16h45.24A24 24 0 0 1 128 216m-80-32c7.7-13.24 16-43.92 16-80a64 64 0 1 1 128 0c0 36.05 8.28 66.73 16 80Z" data-v-inspector="pages/Comments.vue:24:23"></path></g></svg>
</button>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-5">
            <div class="rounded-[12px] border bg-muted-100 dark:border-[#334155] dark:bg-[#1E293B] p-[25px]">
              <h1 class="font-semibold dark:text-white">
                An Awesome Event
              </h1>
              <p class="py-1 text-sm font-[300] dark:text-white">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <div class="flex items-center gap-2">
                <button class="w-1/2 rounded-[12px] bg-[#8B5CF6] px-4 py-[13px] text-[14px] font-[400] text-white">
                  Attend
                </button>
                <button class="w-1/2 rounded-[12px] bg-[#9A2DE0] px-4 py-[13px] text-[14px] font-[400] text-white">
                  Interested
                </button>
              </div>
            </div>
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div class="rounded-[12px] border bg-muted-100 dark:border-[#334155] dark:bg-[#1E293B] px-[25px] py-5">
                <h5 class="text-[12px] font-medium uppercase text-[#94A3B8]">
                  Starting
                </h5>
                <h2 class="text-[24px] font-[700] dark:text-[#F1F5F9]">
                  20.01.2025
                </h2>
              </div>
              <div class="rounded-[12px] border bg-muted-100 dark:border-[#334155] dark:bg-[#1E293B] px-[25px] py-5">
                <h5 class="text-[12px] font-medium uppercase text-[#94A3B8]">
                  Ends
                </h5>
                <h2 class="text-[24px] font-[700] dark:text-[#F1F5F9]">
                  20.01.2025
                </h2>
              </div>
            </div>

            <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div class="rounded-[12px] border bg-muted-100 dark:border-[#334155] dark:bg-[#1E293B] px-[25px] py-5">
                <h5 class="text-[12px] font-medium uppercase text-[#94A3B8]">
                  Attending
                </h5>
                <h2 class="text-[24px] font-[700] dark:text-[#F1F5F9]">
                  138
                </h2>
              </div>
              <div class="rounded-[12px] border bg-muted-100 dark:border-[#334155] dark:bg-[#1E293B] px-[25px] py-5">
                <h5 class="text-[12px] font-medium uppercase text-[#94A3B8]">
                  Interested
                </h5>
                <h2 class="text-[24px] font-[700] dark:text-[#F1F5F9]">
                  921
                </h2>
              </div>
              <div class="rounded-[12px] border bg-muted-100 dark:border-[#334155] dark:bg-[#1E293B] px-[25px] py-5">
                <h5 class="text-[12px] font-medium uppercase text-[#94A3B8]">
                  Invited
                </h5>
                <h2 class="text-[24px] font-[700] dark:text-[#F1F5F9]">
                  279
                </h2>
              </div>
            </div>

            <div class="rounded-[12px] border bg-muted-100 dark:border-[#334155] dark:bg-[#1E293B] p-[25px]">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <h1 class="font-semibold dark:text-white">
                  Location
                </h1>
                <button class="rounded-lg bg-[#8B5CF61A] px-4 py-1.5 text-[14px] font-[400] text-[#8B5CF6]">
                  View
                </button>
              </div>
              <p class="py-6 text-sm font-[300] dark:text-white">
                Oslo, norway
              </p>
            </div>

            <div class="rounded-[12px] border bg-muted-100 dark:border-[#334155] dark:bg-[#1E293B] p-[25px]">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <h1 class="font-semibold dark:text-white">
                  Organizers
                </h1>
                <button class="rounded-lg bg-[#8B5CF61A] px-4 py-1.5 text-[14px] font-[400] text-[#8B5CF6]">
                  Views all
                </button>
              </div>
              <div class="mt-2 flex flex-col gap-3">
                <div class="flex cursor-pointer flex-wrap items-center justify-between gap-3 rounded-lg px-2 py-3 transition-all duration-300 hover:bg-[#8B5CF61A]">
                  <div class="flex items-center gap-2">
                    <img
                      src="../public/images/16.svg fill.png"
                      alt=""
                      class="size-10 rounded-md"
                    >
                    <div class="">
                      <h5 class="text-[14px] font-[300] dark:text-white">
                        Hermann M.
                      </h5>
                      <h5 class="text-[12px] font-[300] text-[#94A3B8]">
                        Event owner
                      </h5>
                    </div>
                  </div>
                  <button class="flex size-[30px] items-center justify-center rounded-[8px] border border-[#475569] bg-[#334155]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="12"
                      viewBox="0 0 13 12"
                      fill="none"
                    >
                      <path
                        d="M2.51831 6H9.51831M9.51831 6L6.01831 2.5M9.51831 6L6.01831 9.5"
                        stroke="#F1F5F9"
                        stroke-width="1.33333"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div class="flex cursor-pointer flex-wrap items-center justify-between gap-3 rounded-lg px-2 py-3 transition-all duration-300 hover:bg-[#8B5CF61A]">
                  <div class="flex items-center gap-2">
                    <img
                      src="../public/images/12.svg fill.png"
                      alt=""
                      class="size-10 rounded-md"
                    >
                    <div class="">
                      <h5 class="text-[14px] font-[300] dark:text-white">
                        Sara C.
                      </h5>
                    </div>
                  </div>
                  <button class="flex size-[30px] items-center justify-center rounded-[8px] border border-[#475569] bg-[#334155]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="12"
                      viewBox="0 0 13 12"
                      fill="none"
                    >
                      <path
                        d="M2.51831 6H9.51831M9.51831 6L6.01831 2.5M9.51831 6L6.01831 9.5"
                        stroke="#F1F5F9"
                        stroke-width="1.33333"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div class="rounded-[12px] border bg-muted-100 dark:border-[#334155] dark:bg-[#1E293B] p-[25px]">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <h1 class="font-semibold dark:text-white">
                  Tags
                </h1>
                <button class="rounded-lg bg-[#8B5CF61A] px-4 py-1.5 text-[14px] font-[400] text-[#8B5CF6]">
                  View
                </button>
              </div>
              <div class="mt-5 flex flex-wrap items-center gap-1.5">
                <button class="rounded-full bg-[#33415566] px-3 py-[3px] text-[12px] font-medium dark:text-white hover:bg-[#8B5CF6]">
                  Festival
                </button>
                <button class="rounded-full bg-[#33415566] px-3 py-[3px] text-[12px] font-medium dark:-white hover:bg-[#8B5CF6]">
                  Parties
                </button>
                <button class="rounded-full bg-[#33415566] px-3 py-[3px] text-[12px] font-medium dark:text-white hover:bg-[#8B5CF6]">
                  Music
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
       </div>
      
       </div>
    </template>
    <script setup lang="ts">
    import Sidebar from "../components/SideBar.vue"
    </script>
    <style lang="">
        
    </style>