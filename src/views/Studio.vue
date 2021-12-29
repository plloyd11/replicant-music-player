<template v-if="authIsReady">
    <section v-if="user">
        <AudioPlayer
            :playlist="playlist"
            playerPhoto="https://res.cloudinary.com/observatory-agency/image/upload/v1640038992/replicant/itay-studio_nifo41.jpg"
        />
    </section>
    <section v-else>
        <AssClown />
    </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import AssClown from '@/components/AssClown.vue';

const store = useStore();
const user = computed(() => store.state.user);
const authIsReady = computed(() => store.state.authIsReady);

const playlist = ref([
    {
        name: 'Nodal Failure',
        file:
            'https://res.cloudinary.com/observatory-agency/video/upload/v1640038706/replicant/lp3/Nodal_Failure_wzqh24.mp3',
        howl: null
    },
    {
        name: 'Menacing Void',
        file:
            'https://res.cloudinary.com/observatory-agency/video/upload/v1640038696/replicant/lp3/Menacing_Void_jex3wi.mp3',
        howl: null
    },
    {
        name: 'Anti-Cosmic Spiral',
        file:
            'https://res.cloudinary.com/observatory-agency/video/upload/v1640038694/replicant/lp3/Anti-Cosmic_Spiral_feawdb.mp3',
        howl: null
    },
    {
        name: 'Sethian',
        file:
            'https://res.cloudinary.com/observatory-agency/video/upload/v1640038835/replicant/lp3/Sethian_fm4stm.mp3',
        howl: null
    },
    {
        name: 'Voluntary Extinction',
        file:
            'https://res.cloudinary.com/observatory-agency/video/upload/v1640144426/replicant/lp3/Voluntary_Extinction_oveusy.mp3',
        howl: null
    },
    {
        name: 'Bred for a Nonexistent Future',
        file:
            'https://res.cloudinary.com/observatory-agency/video/upload/v1640144428/replicant/lp3/Bred_for_a_Nonexistent_Future_hlsmr3.mp3',
        howl: null
    },
    {
        name: 'Intrusive Thoughts',
        file:
            'https://res.cloudinary.com/observatory-agency/video/upload/v1640144553/replicant/lp3/Intrusive_Thoughts_ugplxg.mp3',
        howl: null
    }
]);
</script>
