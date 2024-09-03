<template lang="">
  <Sidebar />
    <div class="bg-white  2xl:pl-[300px] xl:pl-[100px]  dark:bg-[#0F172A]">
      <div class="relative z-[1] mx-auto mb-5 flex h-16 max-w-7xl items-center gap-2">
        <button type="button" class="-ms-3 flex size-10 items-center justify-center lg:hidden">
          <div class="relative size-5"><span class="absolute top-0.5 block h-0.5 w-full bg-[#9A2DE0] transition-all duration-300"></span><span class="absolute top-1/2 block h-0.5 w-full max-w-[50%] bg-[#9A2DE0] transition-all duration-300"></span><span class="absolute bottom-0 block h-0.5 w-full bg-[#9A2DE0] transition-all duration-300"></span></div>
        </button>
        <svg xmlns="http://www.w3.org/2000/svg" class="hidden lg:block" width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect x="12.3401" y="19.6396" width="13.5057" height="1.79606" transform="rotate(-45 12.3401 19.6396)" fill="#9A2DE0" />
          <rect x="13.6101" y="19.0898" width="13.5057" height="1.79606" transform="rotate(45 13.6101 19.0898)" fill="#9A2DE0" />
        </svg>
        <h1 class="nui-heading nui-heading-2xl nui-weight-light nui-lead-normal text-muted-800 hidden md:block dark:text-white">Files</h1>
        <div class="ms-auto"></div>
        <div class="flex h-16 items-center gap-2">
          <BaseThemeToggle />
          <button type="button" class="border-muted-200 hover:ring-muted-200 dark:hover:ring-muted-700 dark:border-muted-700 dark:ring-offset-muted-900 flex size-9 items-center justify-center rounded-full border bg-white ring-1 ring-transparent transition-all duration-300 hover:ring-offset-4 dark:bg-transparent">
            <img class="size-7 rounded-full" src="../public/images/united-states-of-america.svg fill.png" alt="flag icon" />
          </button>
          <div class="group inline-flex items-center justify-center text-right">
            <div data-headlessui-state="" class="relative size-9 text-left">
              <div disabled="false" id="headlessui-menu-button-14" aria-haspopup="menu" aria-expanded="false" data-headlessui-state="">
                <button type="button" class="group-hover:ring-muted-200 dark:group-hover:ring-muted-700 dark:ring-offset-muted-900 inline-flex size-9 items-center justify-center rounded-full ring-1 ring-transparent transition-all duration-300 group-hover:ring-offset-4">
                  <span class="border-muted-200 dark:border-muted-700 flex size-9 items-center justify-center rounded-full border bg-white dark:bg-transparent"
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
          <button type="button" class="border-muted-200 hover:ring-muted-200 dark:hover:ring-muted-700 dark:border-muted-700 dark:ring-offset-muted-900 flex size-9 items-center justify-center rounded-full border bg-white ring-1 ring-transparent transition-all duration-300 hover:ring-offset-4 dark:bg-transparent">
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
                  <img src="../public/images/2.svg fill.png" class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent" alt="" />
                </div></button
              ><!---->
            </div>
          </div>
        </div>
      </div>
  
      <div class="mx-auto max-w-7xl pb-40">
        <div class="mb-6 flex w-full flex-col items-center justify-between gap-4 sm:flex-row">
          <div class="flex w-fit items-center gap-4 sm:w-auto">
            <div class="nui-input-wrapper nui-input-default nui-input-md nui-input-rounded-sm nui-has-icon w-full sm:w-auto">
              <!---->
              <div class="nui-input-outer">
                <div>
                  <input type="text" class="nui-input" placeholder="Filter Activities..." id="nui-input-ac52380d-b93b-45e4-98fa-7680ec7a8422" /><!----><!---->
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
          <div class="flex w-fit items-center justify-end gap-4">
            <div class="nui-select-wrapper nui-select-default nui-select-md nui-select-rounded-sm w-fit flex items-center gap-3">
                <BaseButton color="default">
                <span>Manage</span>
              </BaseButton>
              <BaseButton color="primary">
                <Icon name="lucide:arrow-right" class="me-1 size-4" />
                <span>Add Event</span>
              </BaseButton>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div class="w-full">
              <div class="flex flex-col">
                <div class="rounded-md dark:border-transparent">
                  <div class="inline-block min-w-full align-middle">
                    <div class="">
                      <table class="min-w-full table-fixed">
                        <thead>
                          <tr>
                            <th class="text-muted-700 dark:text-muted-400 border- dark:border-muted-700 last:border-e-none w-1/3 px-4 py-5 text-left font-sans text-xs font-semibold uppercase tracking-wider dark:bg-transparent">User</th>
                            <th class="text-muted-700 dark:text-muted-400 border-muted-200 dark:border-muted-700 last:border-e-none px-4 py-5 text-left font-sans text-xs font-semibold uppercase tracking-wider dark:bg-transparent">Location</th>
                            <th class="text-muted-700 dark:text-muted-400 border-muted-200 dark:border-muted-700 last:border-e-none px-4 py-5 text-left font-sans text-xs font-semibold uppercase tracking-wider dark:bg-transparent">Industry</th>
                            <th class="text-muted-700 dark:text-muted-400 border-muted-200 dark:border-muted-700 last:border-e-none px-4 py-5 text-left font-sans text-xs font-semibold uppercase tracking-wider dark:bg-transparent">Status</th>
                            <th class="text-muted-700 dark:text-muted-400 border-muted-200 dark:border-muted-700 last:border-e-none px-4 py-5 text-left font-sans text-xs font-semibold uppercase tracking-wider dark:bg-transparent">Relations</th>
                            <th class="text-muted-700 dark:text-muted-400 border-muted-200 dark:border-muted-700 last:border-e-none px-4 py-5 text-left text-end font-sans text-xs font-semibold uppercase tracking-wider dark:bg-transparent">Action</th>
                          </tr>
                        </thead>
                        <tbody class="divide-muted-200 divide-y-4 bg-white dark:divide-[#0F172A] dark:bg-[#1E293B]">
                          <!---->
                          <tr class="hover:bg-muted-50 dark:hover:bg-muted-900 transition-colors duration-300">
                            <td class="font-alt text-muted-800 whitespace-nowrap p-4 text-sm dark:text-white">
                              <div class="flex items-center">
                                <div class="nui-avatar nui-avatar-sm nui-avatar-rounded-full relative bg-purple-500/20 text-purple-500">
                                  <img class="" src="../public/images/zip-format.svg.png" />
                                </div>
                                <div class="ms-3 leading-none">
                                  <h4 class="font-sans text-sm font-medium">theme.zip</h4>
                                  <p class="text-muted-400 font-sans text-xs">Zipped folder</p>
                                </div>
                              </div>
                            </td>
                            <td class="font-alt text-muted-500 whitespace-nowrap p-4 text-sm dark:text-white">Las Vegas, NV</td>
                            <td class="font-alt text-muted-500 whitespace-nowrap p-4 text-sm dark:text-white">Software</td>
                            <td class="font-alt text-muted-800 whitespace-nowrap p-4 text-sm capitalize dark:text-white"><span class="nui-tag nui-tag-sm nui-tag-rounded-full nui-tag-pastel nui-tag-success font-medium">Online</span></td>
                            <td class="font-alt text-muted-800 whitespace-nowrap p-4 text-sm dark:text-white">
                              <div class="flex items-center -space-x-2">
                                <img class="h-[29px] w-[28px] rounded-full" src="../public/images/25.svg fill.png" />
                                <div class="bg-muted-200 jusitfy-center flex h-[28px] w-[28px] items-center rounded-full p-[2px] shadow dark:bg-[#2a3547]">+4</div>
                              </div>
                            </td>
                            <td class="font-alt text-muted-800 whitespace-nowrap p-4 px-4 text-end text-sm dark:text-white">
                              <BaseButton size="sm" rounded="md"> View </BaseButton>
                            </td>
                          </tr>
                            <tr class="hover:bg-muted-50 dark:hover:bg-muted-900 transition-colors duration-300">
                            <td class="font-alt text-muted-800 whitespace-nowrap p-4 text-sm dark:text-white">
                              <div class="flex items-center">
                                <div class="nui-avatar nui-avatar-sm nui-avatar-rounded-full relative bg-purple-500/20 text-purple-500">
                                  <img class="" src="../public/images/zip-format.svg.png" />
                                </div>
                                <div class="ms-3 leading-none">
                                  <h4 class="font-sans text-sm font-medium">theme.zip</h4>
                                  <p class="text-muted-400 font-sans text-xs">Zipped folder</p>
                                </div>
                              </div>
                            </td>
                            <td class="font-alt text-muted-500 whitespace-nowrap p-4 text-sm dark:text-white">Las Vegas, NV</td>
                            <td class="font-alt text-muted-500 whitespace-nowrap p-4 text-sm dark:text-white">Software</td>
                            <td class="font-alt text-muted-800 whitespace-nowrap p-4 text-sm capitalize dark:text-white"><span class="nui-tag nui-tag-sm nui-tag-rounded-full nui-tag-pastel nui-tag-success font-medium">Online</span></td>
                            <td class="font-alt text-muted-800 whitespace-nowrap p-4 text-sm dark:text-white">
                              <div class="flex items-center -space-x-2">
                                <img class="h-[29px] w-[28px] rounded-full" src="../public/images/25.svg fill.png" />
                                <div class="bg-muted-200 jusitfy-center flex h-[28px] w-[28px] items-center rounded-full p-[2px] shadow dark:bg-[#2a3547]">+4</div>
                              </div>
                            </td>
                            <td class="font-alt text-muted-800 whitespace-nowrap p-4 px-4 text-end text-sm dark:text-white">
                              <BaseButton size="sm" rounded="md"> View </BaseButton>
                            </td>
                          </tr>
                           <tr class="hover:bg-muted-50 dark:hover:bg-muted-900 transition-colors duration-300">
                            <td class="font-alt text-muted-800 whitespace-nowrap p-4 text-sm dark:text-white">
                              <div class="flex items-center">
                                <div class="nui-avatar nui-avatar-sm nui-avatar-rounded-full relative bg-purple-500/20 text-purple-500">
                                  <img class="" src="../public/images/zip-format.svg.png" />
                                </div>
                                <div class="ms-3 leading-none">
                                  <h4 class="font-sans text-sm font-medium">theme.zip</h4>
                                  <p class="text-muted-400 font-sans text-xs">Zipped folder</p>
                                </div>
                              </div>
                            </td>
                            <td class="font-alt text-muted-500 whitespace-nowrap p-4 text-sm dark:text-white">Las Vegas, NV</td>
                            <td class="font-alt text-muted-500 whitespace-nowrap p-4 text-sm dark:text-white">Software</td>
                            <td class="font-alt text-muted-800 whitespace-nowrap p-4 text-sm capitalize dark:text-white"><span class="nui-tag nui-tag-sm nui-tag-rounded-full nui-tag-pastel nui-tag-success font-medium">Online</span></td>
                            <td class="font-alt text-muted-800 whitespace-nowrap p-4 text-sm dark:text-white">
                              <div class="flex items-center -space-x-2">
                                <img class="h-[29px] w-[28px] rounded-full" src="../public/images/25.svg fill.png" />
                                <div class="bg-muted-200 jusitfy-center flex h-[28px] w-[28px] items-center rounded-full p-[2px] shadow dark:bg-[#2a3547]">+4</div>
                              </div>
                            </td>
                            <td class="font-alt text-muted-800 whitespace-nowrap p-4 px-4 text-end text-sm dark:text-white">
                              <BaseButton size="sm" rounded="md"> View </BaseButton>
                            </td>
                          </tr>
                           <tr class="hover:bg-muted-50 dark:hover:bg-muted-900 transition-colors duration-300">
                            <td class="font-alt text-muted-800 whitespace-nowrap p-4 text-sm dark:text-white">
                              <div class="flex items-center">
                                <div class="nui-avatar nui-avatar-sm nui-avatar-rounded-full relative bg-purple-500/20 text-purple-500">
                                  <img class="" src="../public/images/zip-format.svg.png" />
                                </div>
                                <div class="ms-3 leading-none">
                                  <h4 class="font-sans text-sm font-medium">theme.zip</h4>
                                  <p class="text-muted-400 font-sans text-xs">Zipped folder</p>
                                </div>
                              </div>
                            </td>
                            <td class="font-alt text-muted-500 whitespace-nowrap p-4 text-sm dark:text-white">Las Vegas, NV</td>
                            <td class="font-alt text-muted-500 whitespace-nowrap p-4 text-sm dark:text-white">Software</td>
                            <td class="font-alt text-muted-800 whitespace-nowrap p-4 text-sm capitalize dark:text-white"><span class="nui-tag nui-tag-sm nui-tag-rounded-full nui-tag-pastel nui-tag-success font-medium">Online</span></td>
                            <td class="font-alt text-muted-800 whitespace-nowrap p-4 text-sm dark:text-white">
                              <div class="flex items-center -space-x-2">
                                <img class="h-[29px] w-[28px] rounded-full" src="../public/images/25.svg fill.png" />
                                <div class="bg-muted-200 jusitfy-center flex h-[28px] w-[28px] items-center rounded-full p-[2px] shadow dark:bg-[#2a3547]">+4</div>
                              </div>
                            </td>
                            <td class="font-alt text-muted-800 whitespace-nowrap p-4 px-4 text-end text-sm dark:text-white">
                              <BaseButton size="sm" rounded="md"> View </BaseButton>
                            </td>
                          </tr>
                           <tr class="hover:bg-muted-50 dark:hover:bg-muted-900 transition-colors duration-300">
                            <td class="font-alt text-muted-800 whitespace-nowrap p-4 text-sm dark:text-white">
                              <div class="flex items-center">
                                <div class="nui-avatar nui-avatar-sm nui-avatar-rounded-full relative bg-purple-500/20 text-purple-500">
                                  <img class="" src="../public/images/zip-format.svg.png" />
                                </div>
                                <div class="ms-3 leading-none">
                                  <h4 class="font-sans text-sm font-medium">theme.zip</h4>
                                  <p class="text-muted-400 font-sans text-xs">Zipped folder</p>
                                </div>
                              </div>
                            </td>
                            <td class="font-alt text-muted-500 whitespace-nowrap p-4 text-sm dark:text-white">Las Vegas, NV</td>
                            <td class="font-alt text-muted-500 whitespace-nowrap p-4 text-sm dark:text-white">Software</td>
                            <td class="font-alt text-muted-800 whitespace-nowrap p-4 text-sm capitalize dark:text-white"><span class="nui-tag nui-tag-sm nui-tag-rounded-full nui-tag-pastel nui-tag-success font-medium">Online</span></td>
                            <td class="font-alt text-muted-800 whitespace-nowrap p-4 text-sm dark:text-white">
                              <div class="flex items-center -space-x-2">
                                <img class="h-[29px] w-[28px] rounded-full" src="../public/images/25.svg fill.png" />
                                <div class="bg-muted-200 jusitfy-center flex h-[28px] w-[28px] items-center rounded-full p-[2px] shadow dark:bg-[#2a3547]">+4</div>
                              </div>
                            </td>
                            <td class="font-alt text-muted-800 whitespace-nowrap p-4 px-4 text-end text-sm dark:text-white">
                              <BaseButton size="sm" rounded="md"> View </BaseButton>
                            </td>
                          </tr>
                           <tr class="hover:bg-muted-50 dark:hover:bg-muted-900 transition-colors duration-300">
                            <td class="font-alt text-muted-800 whitespace-nowrap p-4 text-sm dark:text-white">
                              <div class="flex items-center">
                                <div class="nui-avatar nui-avatar-sm nui-avatar-rounded-full relative bg-purple-500/20 text-purple-500">
                                  <img class="" src="../public/images/zip-format.svg.png" />
                                </div>
                                <div class="ms-3 leading-none">
                                  <h4 class="font-sans text-sm font-medium">theme.zip</h4>
                                  <p class="text-muted-400 font-sans text-xs">Zipped folder</p>
                                </div>
                              </div>
                            </td>
                            <td class="font-alt text-muted-500 whitespace-nowrap p-4 text-sm dark:text-white">Las Vegas, NV</td>
                            <td class="font-alt text-muted-500 whitespace-nowrap p-4 text-sm dark:text-white">Software</td>
                            <td class="font-alt text-muted-800 whitespace-nowrap p-4 text-sm capitalize dark:text-white"><span class="nui-tag nui-tag-sm nui-tag-rounded-full nui-tag-pastel nui-tag-success font-medium">Online</span></td>
                            <td class="font-alt text-muted-800 whitespace-nowrap p-4 text-sm dark:text-white">
                              <div class="flex items-center -space-x-2">
                                <img class="h-[29px] w-[28px] rounded-full" src="../public/images/25.svg fill.png" />
                                <div class="bg-muted-200 jusitfy-center flex h-[28px] w-[28px] items-center rounded-full p-[2px] shadow dark:bg-[#2a3547]">+4</div>
                              </div>
                            </td>
                            <td class="font-alt text-muted-800 whitespace-nowrap p-4 px-4 text-end text-sm dark:text-white">
                              <BaseButton size="sm" rounded="md"> View </BaseButton>
                            </td>
                          </tr>
                           <tr class="hover:bg-muted-50 dark:hover:bg-muted-900 transition-colors duration-300">
                            <td class="font-alt text-muted-800 whitespace-nowrap p-4 text-sm dark:text-white">
                              <div class="flex items-center">
                                <div class="nui-avatar nui-avatar-sm nui-avatar-rounded-full relative bg-purple-500/20 text-purple-500">
                                  <img class="" src="../public/images/zip-format.svg.png" />
                                </div>
                                <div class="ms-3 leading-none">
                                  <h4 class="font-sans text-sm font-medium">theme.zip</h4>
                                  <p class="text-muted-400 font-sans text-xs">Zipped folder</p>
                                </div>
                              </div>
                            </td>
                            <td class="font-alt text-muted-500 whitespace-nowrap p-4 text-sm dark:text-white">Las Vegas, NV</td>
                            <td class="font-alt text-muted-500 whitespace-nowrap p-4 text-sm dark:text-white">Software</td>
                            <td class="font-alt text-muted-800 whitespace-nowrap p-4 text-sm capitalize dark:text-white"><span class="nui-tag nui-tag-sm nui-tag-rounded-full nui-tag-pastel nui-tag-success font-medium">Online</span></td>
                            <td class="font-alt text-muted-800 whitespace-nowrap p-4 text-sm dark:text-white">
                              <div class="flex items-center -space-x-2">
                                <img class="h-[29px] w-[28px] rounded-full" src="../public/images/25.svg fill.png" />
                                <div class="bg-muted-200 jusitfy-center flex h-[28px] w-[28px] items-center rounded-full p-[2px] shadow dark:bg-[#2a3547]">+4</div>
                              </div>
                            </td>
                            <td class="font-alt text-muted-800 whitespace-nowrap p-4 px-4 text-end text-sm dark:text-white">
                              <BaseButton size="sm" rounded="md"> View </BaseButton>
                            </td>
                          </tr>
                           <tr class="hover:bg-muted-50 dark:hover:bg-muted-900 transition-colors duration-300">
                            <td class="font-alt text-muted-800 whitespace-nowrap p-4 text-sm dark:text-white">
                              <div class="flex items-center">
                                <div class="nui-avatar nui-avatar-sm nui-avatar-rounded-full relative bg-purple-500/20 text-purple-500">
                                  <img class="" src="../public/images/zip-format.svg.png" />
                                </div>
                                <div class="ms-3 leading-none">
                                  <h4 class="font-sans text-sm font-medium">theme.zip</h4>
                                  <p class="text-muted-400 font-sans text-xs">Zipped folder</p>
                                </div>
                              </div>
                            </td>
                            <td class="font-alt text-muted-500 whitespace-nowrap p-4 text-sm dark:text-white">Las Vegas, NV</td>
                            <td class="font-alt text-muted-500 whitespace-nowrap p-4 text-sm dark:text-white">Software</td>
                            <td class="font-alt text-muted-800 whitespace-nowrap p-4 text-sm capitalize dark:text-white"><span class="nui-tag nui-tag-sm nui-tag-rounded-full nui-tag-pastel nui-tag-success font-medium">Online</span></td>
                            <td class="font-alt text-muted-800 whitespace-nowrap p-4 text-sm dark:text-white">
                              <div class="flex items-center -space-x-2">
                                <img class="h-[29px] w-[28px] rounded-full" src="../public/images/25.svg fill.png" />
                                <div class="bg-muted-200 jusitfy-center flex h-[28px] w-[28px] items-center rounded-full p-[2px] shadow dark:bg-[#2a3547]">+4</div>
                              </div>
                            </td>
                            <td class="font-alt text-muted-800 whitespace-nowrap p-4 px-4 text-end text-sm dark:text-white">
                              <BaseButton size="sm" rounded="md"> View </BaseButton>
                            </td>
                          </tr>
                           <tr class="hover:bg-muted-50 dark:hover:bg-muted-900 transition-colors duration-300">
                            <td class="font-alt text-muted-800 whitespace-nowrap p-4 text-sm dark:text-white">
                              <div class="flex items-center">
                                <div class="nui-avatar nui-avatar-sm nui-avatar-rounded-full relative bg-purple-500/20 text-purple-500">
                                  <img class="" src="../public/images/zip-format.svg.png" />
                                </div>
                                <div class="ms-3 leading-none">
                                  <h4 class="font-sans text-sm font-medium">theme.zip</h4>
                                  <p class="text-muted-400 font-sans text-xs">Zipped folder</p>
                                </div>
                              </div>
                            </td>
                            <td class="font-alt text-muted-500 whitespace-nowrap p-4 text-sm dark:text-white">Las Vegas, NV</td>
                            <td class="font-alt text-muted-500 whitespace-nowrap p-4 text-sm dark:text-white">Software</td>
                            <td class="font-alt text-muted-800 whitespace-nowrap p-4 text-sm capitalize dark:text-white"><span class="nui-tag nui-tag-sm nui-tag-rounded-full nui-tag-pastel nui-tag-success font-medium">Online</span></td>
                            <td class="font-alt text-muted-800 whitespace-nowrap p-4 text-sm dark:text-white">
                              <div class="flex items-center -space-x-2">
                                <img class="h-[29px] w-[28px] rounded-full" src="../public/images/25.svg fill.png" />
                                <div class="bg-muted-200 jusitfy-center flex h-[28px] w-[28px] items-center rounded-full p-[2px] shadow dark:bg-[#2a3547]">+4</div>
                              </div>
                            </td>
                            <td class="font-alt text-muted-800 whitespace-nowrap p-4 px-4 text-end text-sm dark:text-white">
                              <BaseButton size="sm" rounded="md"> View </BaseButton>
                            </td>
                          </tr>
                           <tr class="hover:bg-muted-50 dark:hover:bg-muted-900 transition-colors duration-300">
                            <td class="font-alt text-muted-800 whitespace-nowrap p-4 text-sm dark:text-white">
                              <div class="flex items-center">
                                <div class="nui-avatar nui-avatar-sm nui-avatar-rounded-full relative bg-purple-500/20 text-purple-500">
                                  <img class="" src="../public/images/zip-format.svg.png" />
                                </div>
                                <div class="ms-3 leading-none">
                                  <h4 class="font-sans text-sm font-medium">theme.zip</h4>
                                  <p class="text-muted-400 font-sans text-xs">Zipped folder</p>
                                </div>
                              </div>
                            </td>
                            <td class="font-alt text-muted-500 whitespace-nowrap p-4 text-sm dark:text-white">Las Vegas, NV</td>
                            <td class="font-alt text-muted-500 whitespace-nowrap p-4 text-sm dark:text-white">Software</td>
                            <td class="font-alt text-muted-800 whitespace-nowrap p-4 text-sm capitalize dark:text-white"><span class="nui-tag nui-tag-sm nui-tag-rounded-full nui-tag-pastel nui-tag-success font-medium">Online</span></td>
                            <td class="font-alt text-muted-800 whitespace-nowrap p-4 text-sm dark:text-white">
                              <div class="flex items-center -space-x-2">
                                <img class="h-[29px] w-[28px] rounded-full" src="../public/images/25.svg fill.png" />
                                <div class="bg-muted-200 jusitfy-center flex h-[28px] w-[28px] items-center rounded-full p-[2px] shadow dark:bg-[#2a3547]">+4</div>
                              </div>
                            </td>
                            <td class="font-alt text-muted-800 whitespace-nowrap p-4 px-4 text-end text-sm dark:text-white">
                              <BaseButton size="sm" rounded="md"> View </BaseButton>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-6">
              <div class="nui-pagination nui-pagination-rounded-lg nui-pagination-primary">
                <ul class="nui-pagination-list nui-pagination-rounded-lg">
                  <li><a aria-current="page" href="/layouts/table-list-1" class="router-link-active router-link-exact-active nui-pagination-link nui-active nui-pagination-rounded-lg" tabindex="0"> 1 </a></li>
                  <!---->
                  <li><a href="/layouts/table-list-1?page=2" class="router-link-active router-link-exact-active nui-pagination-link nui-pagination-rounded-lg" tabindex="0">2</a></li>
                  <!---->
                </ul>
                <div class="nui-pagination-buttons nui-pagination-rounded-lg">
                  <a aria-current="page" href="/layouts/table-list-1" class="router-link-active router-link-exact-active nui-pagination-button" tabindex="0"
                    ><svg data-v-b4402e20="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon pagination-button-icon" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 18l-6-6l6-6"></path></svg></a
                  ><a aria-current="page" href="/layouts/table-list-1?page=2" class="router-link-active router-link-exact-active nui-pagination-button" tabindex="0"
                    ><svg data-v-b4402e20="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon pagination-button-icon" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 18l6-6l-6-6"></path></svg
                  ></a>
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
  <style lang=""></style>
  