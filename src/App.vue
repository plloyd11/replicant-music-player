<template>
    <Header />
    <main>
        <router-view />
    </main>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
    components: {
        Header
    }
};
</script>

<style>
.linkz .router-link-exact-active {
    color: #06b6d4;
}
.linkz .router-link-exact-active:hover {
    color: #06b6d4;
}
</style>
