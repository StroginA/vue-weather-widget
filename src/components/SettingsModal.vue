<script setup lang="ts">
</script>

<template>
    <div class="settings-modal__backdrop">
        <div class="settings-modal__body">
            <div class="settings-modal__header">
                Settings
                <button class="settings-modal__close-btn">
                    <fa-icon class="settings-modal__close-btn__icon"
                    icon="fa-xmark" />
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">


    .settings-modal {
        &__backdrop {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: start;
            z-index: 1;
        }
        &__body {
            display: flex;
            width: 100%;
            flex-direction: column;
            justify-content: left;
            background: #FFFFFF;
        }
        &__header {
            font-weight: bold;
            display: flex;
            align-content: auto;
            justify-content: center;
        }
        &__close-btn {
            margin-left: auto;
            border: 0;
            background: 0;
            &__icon {
                font-size: 1.5em;
            }
        }
    }
</style>