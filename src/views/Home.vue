<template>
    <section class="pt-12 space-y-8">
        <h1 class="text-6xl text-center text-white">Yo, Replicant!</h1>
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
                    <h2 class="text-2xl text-slate-900">Learn dat 🔥🔥🔥 setlist for next year!</h2>
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
                        Work on da new wiggly bois 🐡🐡🐡 for LP3!
                    </h2>
                </div>
            </div>
        </router-link>
    </section>
</template>

<script>
export default {
    setup() {
        return {
            timeOfDay: new Date().getHours() < 12 ? 'today' : 'tonight'
        };
    }
};
</script>
