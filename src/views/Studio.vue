<template>
    <AudioPlayer
        :playlist="playlist"
        playerPhoto="https://res.cloudinary.com/observatory-agency/image/upload/v1640038992/replicant/itay-studio_nifo41.jpg"
    />
</template>

<script>
export default {
    data() {
        return {
            playlist: [
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
                }
            ]
        };
    }
};
</script>
