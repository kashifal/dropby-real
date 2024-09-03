<template lang="">
   <div class="overflow-auto bg-[#0F172A]">
    <div class="mx-auto min-h-screen max-w-7xl grid-cols-12 gap-16 px-4 py-10 md:grid">
      <div class="col-span-3 flex w-full flex-row gap-3 border-b border-[#1E293B] md:h-full md:flex-col md:border-b-0 md:border-r md:pb-0">
        <a href="#" class="text-[14px] font-[400] text-[#94A3B8]">Personal</a>
        <a href="#" class="text-[14px] font-[400] text-[#94A3B8]">Security</a>
        <a href="#" class="text-[14px] font-[400] text-[#94A3B8]">Notifications</a>
        <a href="#" class="border-b-[3px] border-[#8B5CF6] pb-4 text-[14px] font-[400] text-[#F1F5F9] md:border-b-0 md:border-r-[3px] md:pb-0 md:first:w-full">API Tokens</a>
      </div>
      <div class="col-span-9 flex flex-col justify-between gap-8 pt-10">
        <div class="flex w-full flex-col items-center justify-center bg-[#1E293B] px-[25px] py-14 text-center">
          <h1 class="text-[18px] font-[400] text-white">
            You currently have no API tokens
          </h1>
          <p class="py-2 text-[16px] font-[400] text-[#64748B]">
            If you need to connect to your backend, you can create an API token to be able to connect to our services from an external app.
          </p>
          <button class="rounded-lg bg-[#8B5CF6] px-[35px] py-[10px] text-[14px] text-white">
            Create Token
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

</script>
<style lang="">
    
</style>