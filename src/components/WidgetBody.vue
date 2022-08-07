<script setup lang="ts">
import LocationCard from "./LocationCard.vue";
import SettingsModal from "./SettingsModal.vue";
import { useStore } from '@/stores/store.js';
import { onMounted } from "vue";
const store = useStore();

onMounted(() => {
    store.initialize();
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
        <template v-for="profile in store.locationsData">
            <LocationCard v-if="profile.formatted"
            :key="profile.formatted.name"
            :profile=profile.formatted />
            <fa-icon icon="fa-circle-notch" class="icon icon_loading fa-spin"
            v-else />
        </template>
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
        & > .icon_loading {
            font-size: 10em;
        }
    }
</style>