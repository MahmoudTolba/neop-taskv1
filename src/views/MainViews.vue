<template>
    <div>
        <Navbar />
        <LandingView />
        <ProductViews />
        <ServiceViews />
        <FooterViews />

    </div>
</template>

<script setup>
import Navbar from '../components/NavBar.vue';
import LandingView from '@/components/LandingView.vue';
import ProductViews from '../components/ProductViews.vue';
import ServiceViews from '../components/ServiceViews.vue';
import FooterViews from '../components/FooterViews.vue';

</script>

<style lang="scss" scoped>

</style>