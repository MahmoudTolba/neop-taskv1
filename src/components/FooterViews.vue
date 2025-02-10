<template>
  <footer class="bg-[#1E71A6] text-white py-20 px-30 relative mt-30" id="contact">
    <div
      class="container mx-auto px-20 grid grid-cols-1 md:grid-cols-3 text-center "
    >
      <div>
        <h3 class="text-lg font-semibold">Menu</h3>
        <ul class="mt-2 space-y-2 pb-4">
          <li><a href="#" class="hover:underline">Get inspired</a></li>
          <li><a href="#" class="hover:underline">Our products</a></li>
          <li><a href="#" class="hover:underline">For a better world</a></li>
          <li><a href="#" class="hover:underline">Contact</a></li>
          <li><a href="#" class="hover:underline">Blog</a></li>
        </ul>
      </div>

      <div>
        <h3 class="text-lg font-semibold">Cafe Location</h3>
        <p class="mt-2 text-gray-300">Lorem Ipsum</p>
      </div>

      <div>
        <h3 class="text-lg font-semibold">Contact</h3>
        <p class="mt-2 text-gray-300">
          Do you have a question?<br />
          Send it to us!
        </p>
        <p class="mt-2 font-semibold">000000000</p>
      </div>
    </div>
    <hr style="width: 65% " />

    <div
      class="container mx-auto px-50 mt-8 flex flex-col md:flex-row justify-between items-center border-gray-500 pt-4"
    >
      <p class="text-gray-300 text-sm">PRIVACY POLICY</p>
      <div class="flex space-x-3 mt-4 md:mt-0">
        <a
          href="#"
          class="w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 hover:bg-white hover:text-blue-900"
        >
          <i class="fab fa-facebook-f"></i>
        </a>
        <a
          href="#"
          class="w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 hover:bg-white hover:text-blue-900"
        >
          <i class="fab fa-instagram"></i>
        </a>
        <a
          href="#"
          class="w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 hover:bg-white hover:text-blue-900"
        >
          <i class="fab fa-linkedin-in"></i>
        </a>
      </div>
    </div>

    <div class="absolute top-[-190px] right-10">
      <img src="../assets/Group 1000010753.png" alt="Coffee Bag" class="w-90" />
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterSection",
};
</script>

<style scoped>
footer {
  position: relative;
}
footer hr {
  border: 1px solid #fff;
  margin: 0;
  width: 100%;
  background-color: #fff;
  opacity: 0.5;
  transform: translateX(190px);
  
  
}
</style>
