<template>
  <div class="flex flex-col md:flex-row items-center bg-white py-2 px-6 md:px-16 relative min-h-screen justify-between">
    <!-- Left Side: Image -->
    <div class="relative w-full md:w-1/2 flex justify-center left-[-200px] ">
      <img src="../assets/Group 1261153047.png" alt="Coffee Bags" class="w-full max-w w-100"  />
    </div>
    
    <!-- Right Side: Text Content -->
    <div class="w-full md:w-1/2 text-gray-800 mx-auto mr-20">
      <h2 class="text-3xl font-semibold text-gray-900">Welcome to Our Shop</h2>
      <p class="text-lg text-gray-600 mt-2">The coffee you want, when you want it</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div v-for="(feature, index) in features" :key="index" class="flex items-center space-x-4">
          <div class="w-12 h-12 bg-brown-500 flex justify-center items-center rounded-full">
            <img :src="feature.icon" alt="Feature Icon" class="w-8 h-8" />
          </div>
          <div>
            <h3 class="text-[#004876] font-semibold">{{ feature.title }}</h3>
            <p class="text-gray-600 text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Bottom Right Coffee Image -->
    <img src="../assets/ebcd2eadf8201d558c4bf5c59c4fc7b4.gif" alt="Coffee Beans" class="absolute bottom-4 right-4 w-16 h-16" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      features: [
        { title: 'quality', icon: '/assets/Group 1000010785.png' },
        { title: 'taste', icon: '/assets/Group 1000010784.png' },
        { title: 'Easy', icon: '/assets/Group 1000010785.png' },
        { title: 'quick', icon: '/assets/Group 1000010786.png' }
      ]
    };
  }
};
</script>

<style>
.bg-brown-500 {
  background-color: #5C4033;
}
</style>