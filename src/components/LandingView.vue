<template>
<div class="relative overflow-hidden">
    <div class="buble absolute -right-28 -top-5 -z-10">
      <img src="../assets/" alt="buble" />
    </div>
    <header class="px-8 py-5">
      <nav class="flex items-center justify-between">
        <div class="logo">
          <img src="../assets/Vector.png" alt="logo" class="cursor-pointer" />
        </div>
        <div className="shopping flex items-center gap-2">
          <img src="../assets/Group 1000010764.png" alt="bag" class="cursor-pointer" />
          <img src="../assets/fi_5908597.png" alt="bar" class="cursor-pointer" />
        </div>
      </nav>
    </header>
    <main class="relative flex gap-20 items-center overflow-hidden px-10" >

     



      <div class="hero-text flex w-[300px] flex-col gap-4">
        <div class="relative">
          <img
            src="../assets/Group.png"
            alt="coffee-piece"
            class="absolute left-4 top-1/2 w-6 translate-y-1"
          />
          <h1 class="text-8xl text-[#004876]">coffee</h1>
        </div>
        <h1 class="text-8xl text-[#004876]">&shop</h1>
        <p
          class="text-base text-[#292625] 
"
        >
          Get your ordered (better) coffee delivered to you if you want.
        </p>
        <div class="flex items-center gap-2">
          <button class="rounded-full border-2 border-solid px-4 py-2">
            SHOP 20% OFF
          </button>
          <img src="../assets/Group 1000010764.png" alt="bag" />
        </div>
      </div>
      <div class="images flex items-center">
        <div class="w-[500px]">
          <img
            src="./coffe_bag.png"
            alt="coffee-bag"
            class="w-full max-w-full"
          />
        </div>
        <div class="absolute -right-14 flex h-[200px] w-[200px] items-center justify-center rounded-full bg-[#6F4336] p-4">
          <img src="./cup_2.png" alt="cup" class="w-full max-w-full" />
        </div>
      </div>
    </main>
    <div class="slide">
      <marquee width="100%">
        <div class="flex items-center gap-5">
          <img src="./coffee_piece.png" alt="coffee-piece" />
          coffee
          <img src="./coffee_piece.png" alt="coffee-piece" />
          coffee
          <img src="./coffee_piece.png" alt="coffee-piece" />
          coffee
          <img src="./coffee_piece.png" alt="coffee-piece" />
          coffee
          <img src="./coffee_piece.png" alt="coffee-piece" />
          coffee
          <img src="./coffee_piece.png" alt="coffee-piece" />
          coffee
          <img src="./coffee_piece.png" alt="coffee-piece" />
          coffee
          <img src="./coffee_piece.png" alt="coffee-piece" />
          coffee
          <img src="./coffee_piece.png" alt="coffee-piece" />
          coffee
          <img src="./coffee_piece.png" alt="coffee-piece" />
          coffee
        </div>
      </marquee>
    </div> </div>
</template>
<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
main {
  height: calc(100vh - 76px);
}

</style>