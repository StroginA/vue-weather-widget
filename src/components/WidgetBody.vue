<script setup lang="ts">
import LocationCard from "./LocationCard.vue";
import SettingsModal from "./SettingsModal.vue";
</script>

<template>
    <div class="widget-body">
        <button class="widget-body__settings-btn">
            <fa-icon class="icon fa-spin"
            icon="fa-gear" />
        </button>
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
        &__settings-btn {
            z-index: 1;
            &:hover > .icon.fa-spin {
                --fa-animation-duration: unset;
            }
            & > .icon {
                &.fa-spin {
                    --fa-animation-duration: infinite;
                }
            }
            border: 0;
            background-color: inherit;
            position: absolute;
            right: 0;
        }
    }
</style>