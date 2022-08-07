<script setup lang="ts">
import LocationCard from "./LocationCard.vue";
import SettingsModal from "./SettingsModal.vue";
import { useStore } from '@/stores/store.js';
import { onMounted } from "vue";
import { formatProfile } from "@/controllers/formatProfile";
const store = useStore();

onMounted(() => {
    store.initialize();
    store.fetchWeather();
})

const handleSettingsOpen = () => {
    store.openSettings();
}
</script>

<template>
    <div class="widget-body">
        <button class="btn settings-btn" @click=handleSettingsOpen>
            <fa-icon class="icon fa-spin"
            icon="fa-gear" />
        </button>
        <SettingsModal v-show="store.isSettingsOpen"/>
        <div v-for="profile in store.locationsData">
            <LocationCard :profile=formatProfile(profile) />
        </div>
    </div>
</template>

<style scoped lang="scss">
    .widget-body {
        display: flex;
        flex-direction: column;
        max-width: 20em;
        margin: 1em;
        .settings-btn {
            z-index: 1;
            position: absolute;
            right: 0;
            &:hover {
                filter: unset;
                & > .icon.fa-spin {
                --fa-animation-duration: unset;
                }
            }
            & > .icon {
                &.fa-spin {
                    --fa-animation-duration: infinite;
                }
            }
        }
    }
</style>