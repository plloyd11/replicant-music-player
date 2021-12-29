<template v-if="authIsReady">
    <section v-if="user">
        <AudioPlayer
            :playlist="playlist"
            playerPhoto="https://res.cloudinary.com/observatory-agency/image/upload/v1640014627/replicant/Press%20Photos/band-1_galizw.jpg"
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
        name: 'Caverns',
        file:
            'https://res.cloudinary.com/observatory-agency/video/upload/v1640021023/replicant/playlist/Caverns_pjj7zv.mp3',
        howl: null
    },
    {
        name: 'Coerced',
        file:
            'https://res.cloudinary.com/observatory-agency/video/upload/v1640021023/replicant/playlist/Coerced_khzfnr.mp3',
        howl: null
    },
    {
        name: 'Ekto',
        file:
            'https://res.cloudinary.com/observatory-agency/video/upload/v1640021018/replicant/playlist/Ektoskull_bgsugs.mp3',
        howl: null
    },
    {
        name: 'Relinquish',
        file:
            'https://res.cloudinary.com/observatory-agency/video/upload/v1640021019/replicant/playlist/Relinquish_kwqb3z.mp3',
        howl: null
    },
    {
        name: 'Dressed',
        file:
            'https://res.cloudinary.com/observatory-agency/video/upload/v1640021019/replicant/playlist/Dressed_hs93ce.mp3',
        howl: null
    },
    {
        name: 'Ripped',
        file:
            'https://res.cloudinary.com/observatory-agency/video/upload/v1640019804/replicant/playlist/Ripped_From_Within_mqw3db.mp3',
        howl: null
    },
    {
        name: 'Hymns',
        file:
            'https://res.cloudinary.com/observatory-agency/video/upload/v1640020280/replicant/playlist/Hymns_lrkkec.mp3',
        howl: null
    },
    {
        name: 'Oceans',
        file:
            'https://res.cloudinary.com/observatory-agency/video/upload/v1640021085/replicant/playlist/Oceans_ji0nbd.mp3',
        howl: null
    }
]);
</script>
