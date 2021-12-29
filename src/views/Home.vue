<template>
    <div v-if="user">
        <section class="pt-12 space-y-8">
            <h1 class="text-6xl text-center text-white">Yo, {{ user.email }}!</h1>
            <p class="text-2xl text-center text-slate-100">Whatcha tryin to do {{ timeOfDay }}!?</p>
        </section>
        <section class="grid max-w-6xl grid-cols-2 gap-8 px-6 mx-auto mt-16">
            <router-link to="/setlist">
                <div class="overflow-hidden bg-white divide-y divide-gray-200 rounded-lg shadow">
                    <div>
                        <img
                            src="https://res.cloudinary.com/observatory-agency/image/upload/v1640046489/replicant/Live%20Photos/mike_b4r1ya.jpg"
                            alt="Playin gigs"
                            class="object-cover object-center w-full h-96"
                        />
                    </div>
                    <div class="px-4 py-4 sm:px-6">
                        <h2 class="text-2xl text-slate-900">
                            Learn dat 🔥🔥🔥 setlist for next year
                        </h2>
                    </div>
                </div>
            </router-link>
            <router-link to="/studio">
                <div class="overflow-hidden bg-white divide-y divide-gray-200 rounded-lg shadow">
                    <div>
                        <img
                            src="https://res.cloudinary.com/observatory-agency/image/upload/v1640046518/replicant/Live%20Photos/james-studio_xysazi.jpg"
                            alt="Playin gigs"
                            class="object-cover object-center w-full h-96"
                        />
                    </div>
                    <div class="px-4 py-4 sm:px-6">
                        <h2 class="text-2xl text-slate-900">
                            Work on da new wiggly bois 🐡🐡🐡
                        </h2>
                    </div>
                </div>
            </router-link>
        </section>
    </div>
    <div v-if="!user">
        <section class="px-4 mx-auto mt-12 max-w-7xl lg:px-8">
            <h1 class="text-4xl leading-relaxed text-center text-white">
                Do you respect New Jersey? <br />
                Prove yourself and
                <router-link to="/login" class="underline text-sky-400">login</router-link>
            </h1>
        </section>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const timeOfDay = computed(() => (new Date().getHours() < 12 ? 'today' : 'tonight'));
const store = useStore();
const user = computed(() => store.state.user);
</script>
