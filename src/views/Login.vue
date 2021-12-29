<template>
    <section class="flex items-center justify-center min-h-full px-4 py-12 sm:px-6 lg:px-8">
        <div class="w-full max-w-lg space-y-8">
            <div>
                <h2 class="mt-6 text-3xl font-extrabold text-center text-gray-100">
                    Login to the riff zone
                </h2>
            </div>
            <form @submit.prevent="handleSubmit" class="mt-8 space-y-6" action="#" method="POST">
                <input type="hidden" name="remember" value="true" />
                <div class="-space-y-px rounded-md shadow-sm">
                    <div>
                        <label for="email-address" class="sr-only">Email address</label>
                        <input
                            id="email-address"
                            name="email"
                            type="email"
                            autocomplete="email"
                            required
                            class="relative block w-full p-3 text-gray-900 placeholder-gray-600 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-sky-500 focus:border-sky-500 focus:z-10 sm:text-base"
                            placeholder="Email address"
                            v-model="email"
                        />
                    </div>
                    <div>
                        <label for="password" class="sr-only">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autocomplete="current-password"
                            required
                            class="relative block w-full p-3 text-gray-900 placeholder-gray-600 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-sky-500 focus:border-sky-500 focus:z-10 sm:text-base"
                            placeholder="Password"
                            v-model="password"
                        />
                    </div>
                </div>

                <div class="flex items-center justify-between">
                    <router-link to="/signup" class="font-medium text-sky-600 hover:text-sky-500">
                        Fuck I don't have an account
                    </router-link>

                    <router-link to="#" class="font-medium text-sky-600 hover:text-sky-500">
                        Forgot your password?
                    </router-link>
                </div>

                <div>
                    <button
                        type="submit"
                        class="relative flex justify-center w-full px-4 py-2 text-lg font-medium text-white border border-transparent rounded-md bg-sky-600 group hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                    >
                        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg
                                class="w-5 h-5 text-sky-500 group-hover:text-sky-400"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </span>
                        Sign in
                    </button>
                </div>
            </form>
        </div>
        <div v-if="error">
            <h1 class="text-5xl text-red-900">Fuck, something got haxed! {{ error }}</h1>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const error = ref(null);

const store = useStore();
const router = useRouter();

const handleSubmit = async () => {
    try {
        await store.dispatch('login', { email: email.value, password: password.value });
        router.push('/');
    } catch (err) {
        error.value = err.message;
    }
};
</script>
