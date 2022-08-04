<script setup lang="ts">
import LocationCard from "./LocationCard.vue";
import SettingsModal from "./SettingsModal.vue";
</script>

<template>
    <div class="widget-body">
        <button class="btn settings-btn">
            <fa-icon class="icon fa-spin"
            icon="fa-gear" />
        </button>
        <SettingsModal />
        <LocationCard />
        <LocationCard />
    </div>
</template>

<style scoped lang="scss">
    .widget-body {
        display: flex;
        flex-direction: column;
        max-width: 20em;
        margin: 1em;
        background-color: inherit;
    }
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
</style>