<template lang="">
     <div class="overflow-auto bg-[#0F172A]">
    <div class="mx-auto min-h-screen max-w-7xl grid-cols-12 gap-16 px-4 py-10 md:grid">
      <div class="col-span-3 flex w-full flex-row gap-3 border-b border-[#1E293B] md:h-full md:flex-col md:border-b-0 md:border-r md:pb-0">
        <a href="#" class="text-[14px] font-[400] text-[#94A3B8]">Personal</a>
        <a href="#" class="text-[14px] font-[400] text-[#94A3B8]">Security</a>
        <a href="#" class="border-b-[3px] border-[#8B5CF6] pb-4 text-[14px] font-[400] text-[#F1F5F9] md:border-b-0 md:border-r-[3px] md:pb-0 md:first:w-full">Notifications</a>
        <a href="#" class="text-[14px] font-[400] text-[#94A3B8]">API Tokens</a>
      </div>
      <div class="col-span-9 flex flex-col justify-between gap-8 pt-10">
        <div class="flex flex-col items-start justify-between gap-14 sm:flex-row">
          <div class="sm:w-1/3">
            <h1 class="font-medium text-[#F1F5F9]">
              Account activity
            </h1>
            <p class="pt-1 text-[12px] font-[400] text-[#94A3B8]">
              Customize what email notifications you want to receive about transactions on your account.
            </p>
          </div>
          <div class="w-full">
            <div class="border-b border-[#1E293B] px-4 pb-[17px]">
              <h3 class="text-[12px] font-medium text-[#F1F5F9]">
                Activity
              </h3>
            </div>
            <div class="flex items-center gap-6 border-b border-[#1E293B] px-4 py-[17px]">
              <div class="">
                <label
                  class="relative h-8 w-12 cursor-pointer [-webkit-tap-highlight-color:_transparent]"
                  for="swwitcch"
                ><input
                  id="swwitcch"
                  class="peer sr-only"
                  type="checkbox"
                ><span class="absolute inset-0 m-auto h-4 w-10 rounded-full bg-[#A78BFA]" /><span class="absolute inset-y-0 start-6 m-auto size-6 rounded-full bg-[#334155] transition-all peer-checked:start-0 peer-checked:[&_>_*]:scale-0"><span class="absolute inset-0 m-auto size-4 rounded-full bg-[#334155] transition" /></span></label>
              </div>
              <div class="ml-12">
                <h3 class="text-[12px] font-medium text-[#94A3B8]">
                  Incoming
                </h3>
                <h3 class="text-[14px] font-medium text-[#94A3B8]">
                  Incoming transactions
                </h3>
              </div>
            </div>
            <div class="flex items-center gap-6 border-b border-[#1E293B] px-4 py-[17px]">
              <div class="">
                <label
                  class="relative h-8 w-12 cursor-pointer [-webkit-tap-highlight-color:_transparent]"
                  for="sweitcch"
                ><input
                  id="sweitcch"
                  class="peer sr-only"
                  type="checkbox"
                ><span class="absolute inset-0 m-auto h-4 w-10 rounded-full bg-[#475569]" /><span class="absolute inset-y-0 start-0 m-auto size-6 rounded-full bg-[#334155] transition-all peer-checked:start-6 peer-checked:[&_>_*]:scale-0"><span class="absolute inset-0 m-auto size-4 rounded-full bg-[#334155] transition after:bg-[#A78BFA]" /></span></label>
              </div>
              <div class="ml-12">
                <h3 class="text-[12px] font-medium text-[#94A3B8]">
                  Outgoing
                </h3>
                <h3 class="text-[14px] font-medium text-[#94A3B8]">
                  Outgoing transactions
                </h3>
              </div>
            </div>
            <div class="flex items-center gap-6 border-b border-[#1E293B] px-4 py-[17px]">
              <div class="">
                <label
                  class="relative h-8 w-12 cursor-pointer [-webkit-tap-highlight-color:_transparent]"
                  for="swei"
                ><input
                  id="swei"
                  class="peer sr-only"
                  type="checkbox"
                ><span class="absolute inset-0 m-auto h-4 w-10 rounded-full bg-[#475569]" /><span class="absolute inset-y-0 start-0 m-auto size-6 rounded-full bg-[#334155] transition-all peer-checked:start-6 peer-checked:[&_>_*]:scale-0"><span class="absolute inset-0 m-auto size-4 rounded-full bg-[#334155] transition after:bg-[#A78BFA]" /></span></label>
              </div>
              <div class="ml-12">
                <h3 class="text-[12px] font-medium text-[#94A3B8]">
                  Failed
                </h3>
                <h3 class="text-[14px] font-medium text-[#94A3B8]">
                  Failed transactions
                </h3>
              </div>
            </div>
            <div class="flex items-center gap-6 border-b border-[#1E293B] px-4 py-[17px]">
              <div class="">
                <label
                  class="relative h-8 w-12 cursor-pointer [-webkit-tap-highlight-color:_transparent]"
                  for="tcch"
                ><input
                  id="tcch"
                  class="peer sr-only"
                  type="checkbox"
                ><span class="absolute inset-0 m-auto h-4 w-10 rounded-full bg-[#475569]" /><span class="absolute inset-y-0 start-0 m-auto size-6 rounded-full bg-[#334155] transition-all peer-checked:start-6 peer-checked:[&_>_*]:scale-0"><span class="absolute inset-0 m-auto size-4 rounded-full bg-[#334155] transition after:bg-[#A78BFA]" /></span></label>
              </div>
              <div class="ml-12">
                <h3 class="text-[12px] font-medium text-[#94A3B8]">
                  Uncashed
                </h3>
                <h3 class="text-[14px] font-medium text-[#94A3B8]">
                  Uncashed cheques
                </h3>
              </div>
            </div>
            <div class="flex items-center gap-6 px-4 py-[17px]">
              <div class="">
                <label
                  class="relative h-8 w-12 cursor-pointer [-webkit-tap-highlight-color:_transparent]"
                  for="swwitcchh"
                ><input
                  id="swwitcchh"
                  class="peer sr-only"
                  type="checkbox"
                ><span class="absolute inset-0 m-auto h-4 w-10 rounded-full bg-[#A78BFA]" /><span class="absolute inset-y-0 start-6 m-auto size-6 rounded-full bg-[#334155] transition-all peer-checked:start-0 peer-checked:[&_>_*]:scale-0"><span class="absolute inset-0 m-auto size-4 rounded-full bg-[#334155] transition" /></span></label>
              </div>
              <div class="ml-12">
                <h3 class="text-[12px] font-medium text-[#94A3B8]">
                  Payments
                </h3>
                <h3 class="text-[14px] font-medium text-[#94A3B8]">
                  Payment requests
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col items-start justify-between gap-14 sm:flex-row">
          <div class="sm:w-1/3">
            <h1 class="font-medium text-[#F1F5F9]">
              Low balance
            </h1>
            <p class="pt-1 text-[12px] font-[400] text-[#94A3B8]">
              We’ll email you when the balance on one of your accounts drops below the amount you set in your account.
            </p>
          </div>
          <div class="w-full">
            <div class="border-b border-[#1E293B] px-4 pb-[17px]">
              <h3 class="text-[12px] font-medium text-[#F1F5F9]">
                Low balance
              </h3>
            </div>
            <div class="flex items-center gap-6 px-4 py-[17px]">
              <div class="">
                <label
                  class="relative h-8 w-12 cursor-pointer [-webkit-tap-highlight-color:_transparent]"
                  for="s"
                ><input
                  id="s"
                  class="peer sr-only"
                  type="checkbox"
                ><span class="absolute inset-0 m-auto h-4 w-10 rounded-full bg-[#A78BFA]" /><span class="absolute inset-y-0 start-6 m-auto size-6 rounded-full bg-[#334155] transition-all peer-checked:start-0 peer-checked:[&_>_*]:scale-0"><span class="absolute inset-0 m-auto size-4 rounded-full bg-[#334155] transition" /></span></label>
              </div>
              <div class="ml-12">
                <h3 class="text-[12px] font-medium text-[#94A3B8]">
                  Low alert
                </h3>
                <h3 class="text-[14px] font-medium text-[#94A3B8]">
                  New session startedBalance drops under $200.00
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col items-start justify-between gap-14 sm:flex-row">
          <div class="sm:w-1/3">
            <h1 class="font-medium text-[#F1F5F9]">
              Tairo updates
            </h1>
            <p class="pt-1 text-[12px] font-[400] text-[#94A3B8]">
              Stay up to date on cool new product features or events you might like.
            </p>
          </div>
          <div class="w-full">
            <div class="border-b border-[#1E293B] px-4 pb-[17px]">
              <h3 class="text-[12px] font-medium text-[#F1F5F9]">
                Updates
              </h3>
            </div>
            <div class="flex items-center gap-6 border-b border-[#1E293B] px-4 py-[17px]">
              <div class="">
                <label
                  class="relative h-8 w-12 cursor-pointer [-webkit-tap-highlight-color:_transparent]"
                  for="ss"
                ><input
                  id="ss"
                  class="peer sr-only"
                  type="checkbox"
                ><span class="absolute inset-0 m-auto h-4 w-10 rounded-full bg-[#A78BFA]" /><span class="absolute inset-y-0 start-6 m-auto size-6 rounded-full bg-[#334155] transition-all peer-checked:start-0 peer-checked:[&_>_*]:scale-0"><span class="absolute inset-0 m-auto size-4 rounded-full bg-[#334155] transition" /></span></label>
              </div>
              <div class="ml-12">
                <h3 class="text-[12px] font-medium text-[#94A3B8]">
                  Features
                </h3>
                <h3 class="text-[14px] font-medium text-[#94A3B8]">
                  New feature
                </h3>
              </div>
            </div>
            <div class="flex items-center gap-6 px-4 py-[17px]">
              <div class="">
                <label
                  class="relative h-8 w-12 cursor-pointer [-webkit-tap-highlight-color:_transparent]"
                  for="sss"
                ><input
                  id="sss"
                  class="peer sr-only"
                  type="checkbox"
                ><span class="absolute inset-0 m-auto h-4 w-10 rounded-full bg-[#A78BFA]" /><span class="absolute inset-y-0 start-6 m-auto size-6 rounded-full bg-[#334155] transition-all peer-checked:start-0 peer-checked:[&_>_*]:scale-0"><span class="absolute inset-0 m-auto size-4 rounded-full bg-[#334155] transition" /></span></label>
              </div>
              <div class="ml-12">
                <h3 class="text-[12px] font-medium text-[#94A3B8]">
                  Offers
                </h3>
                <h3 class="text-[14px] font-medium text-[#94A3B8]">
                  Special offers
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

</script>
<style lang="">
    
</style>