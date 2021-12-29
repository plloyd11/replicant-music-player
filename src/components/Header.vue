<template v-if="authIsReady">
    <header class="flex-auto bg-slate-900">
        <nav class="px-4 mx-auto sm:px-6 lg:px-8" aria-label="Top">
            <div
                class="flex items-center justify-between w-full py-6 border-b border-cyan-500 lg:border-none"
            >
                <div class="flex items-center">
                    <router-link to="/">
                        <span class="sr-only">Workflow</span>
                        <img
                            class="w-24"
                            src="https://res.cloudinary.com/observatory-agency/image/upload/v1640017065/replicant/Artwork/logo-white_xs8tg6.png"
                            alt="Replicant Logo"
                        />
                    </router-link>
                    <div v-if="user" class="hidden ml-10 space-x-8 lg:block linkz">
                        <router-link
                            v-for="link in navigation"
                            :key="link.name"
                            :to="link.href"
                            class="text-xl text-white hover:text-cyan-50"
                        >
                            {{ link.name }}
                        </router-link>
                    </div>
                </div>
                <!-- If logged in -->
                <div v-if="user" class="flex items-center ml-10 space-x-4">
                    <button
                        class="inline-block px-4 py-2 text-base font-medium text-white border border-transparent rounded-md bg-cyan-700 hover:bg-opacity-75"
                        @click="logout"
                    >
                        Logout
                    </button>
                </div>
                <!-- If logged out -->
                <div v-if="!user" class="flex ml-10 space-x-4">
                    <router-link
                        to="/login"
                        class="inline-block px-4 py-2 text-base font-medium text-white border border-transparent rounded-md bg-cyan-700 hover:bg-opacity-75"
                    >
                        Login
                    </router-link>
                    <router-link
                        to="/signup"
                        class="inline-block px-4 py-2 text-base font-medium text-white border border-transparent rounded-md bg-cyan-700 hover:bg-opacity-75"
                    >
                        Sign Up
                    </router-link>
                </div>
            </div>
            <div class="flex flex-wrap justify-center py-4 space-x-6 lg:hidden" v-if="user">
                <router-link
                    v-for="link in navigation"
                    :key="link.name"
                    :to="link.href"
                    class="text-base font-medium text-white hover:text-cyan-50 linkz"
                >
                    {{ link.name }}
                </router-link>
            </div>
        </nav>
    </header>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const navigation = [
    { name: 'Setlist', href: '/setlist' },
    { name: 'Studio', href: '/studio' }
];

const store = useStore();
const router = useRouter();
const user = computed(() => store.state.user);
const authIsReady = computed(() => store.state.authIsReady);

const logout = () => {
    store.dispatch('logout');
    router.push('/');
};
</script>
