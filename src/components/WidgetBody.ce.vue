<script setup lang="ts">
import LocationCard from "./LocationCard.vue";
import SettingsModal from "./SettingsModal.vue";
import { useStore } from '@/stores/store.js';
import { onMounted } from "vue";
import { createPinia } from "pinia";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const pinia = createPinia();
const store = useStore(pinia);

onMounted(() => {
    store.initialize();
})

const handleSettingsOpen = () => {
    store.openSettings();
}

const handleSubmit = () => {
    store.submitApiKey();
}
</script>

<template>
    <div class="widget-body">
        <button v-if="store.weatherApiKey"
        class="btn btn_settings" @click=handleSettingsOpen>
            <FontAwesomeIcon class="icon icon_settings"
            icon="fa-gear"/>
        </button>
        <SettingsModal v-show="store.isSettingsOpen"/>
        <template v-for="profile in store.locationsData">
            <LocationCard v-if="profile.formatted"
            style=".icon_wind {rotate: 90deg;}"
            :key="profile.formatted.name"
            :profile=profile.formatted />
            <FontAwesomeIcon icon="fa-circle-notch" class="icon icon_loading"
            v-else />
        </template>
        <form class="submit-api"
        v-if="!store.weatherApiKey">
            <label class="submit-api__label">
                Enter your OpenWeather API key:
            </label>
            <input class="input submit-api__input"
                type="text"
                v-model="store.weatherApiInput"
                list="suggestedLocations">
            <button class="btn btn_submit" @click=handleSubmit>
                    <FontAwesomeIcon class="icon icon_submit"
                    icon="fa-arrow-turn-down" />
            </button>
        </form>
    </div>
</template>

<style lang="scss">
@mixin spin {
    animation-name: spin;
    animation-duration: 2000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    -webkit-animation-name: spin;
    -webkit-animation-duration: 2000ms;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    -moz-animation-name: spin;
    -moz-animation-duration: 2000ms;
    -moz-animation-iteration-count: infinite;
    -moz-animation-timing-function: linear;
    -ms-animation-name: spin;
    -ms-animation-duration: 2000ms;
    -ms-animation-iteration-count: infinite;
    -ms-animation-timing-function: linear;

    @-moz-keyframes spin {
        from {
            -moz-transform: rotate(0deg);
        }

        to {
            -moz-transform: rotate(360deg);
        }
    }

    @-webkit-keyframes spin {
        from {
            -webkit-transform: rotate(0deg);
        }

        to {
            -webkit-transform: rotate(360deg);
        }
    }

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }

        to {
            transform: rotate(360deg);
        }
    }
}

@mixin simple-form {
    &__label {
        font-weight: bold;
        margin-bottom: 0.3em;
    }
    &__input {
        grid-column: 1;
        padding: 0.3em;
    }
    & > .btn_submit {
        grid-column: 2;
        & > .icon_submit {
            width: 1em;
        }
    }
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  position: relative;
  font-weight: normal;
}

.widget-body {
    --vt-c-white: #ffffff;
    --color-background: var(--vt-c-white);
    --vt-c-indigo: #2c3e50;
    --vt-c-text-light-1: var(--vt-c-indigo);
    --color-text: var(--vt-c-text-light-1);

    transition: color 0.5s, background-color 0.5s;
    font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--color-background);
    color: var(--color-text);
    font-size: 12px;
    display: flex;
    flex-direction: column;
    max-width: 20em;
    margin: 1em;
    & > .icon_loading {
        width: 10em;
        align-self: center;
        justify-self: center;
        @include spin
    }
}

.icon {
    width: 1.5em;
    &_close {
        width: 1em;
    }
    &_settings {
        --fa-animation-duration: infinite;
    }
}




.btn {
    // Generic button is made darker in response to hover
    border: 0;
    background-color: inherit;
    border-radius: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    &:hover {
        filter: brightness(0.85);
        cursor: pointer;
    }
    &_settings {
        z-index: 1;
        position: absolute;
        right: 0;
        &:hover {
            filter: unset;
            & > .icon_settings {
                @include spin
            }
        }
    }
    &_close {
        z-index: 1;
        position: absolute;
        right: 0;
        width: 2em;
        height: 2em;
    }
}

.error-warning {
    color: red;
}

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
        background-color: var(--color-background);
        padding: 0.5em;
        height: initial;
    }
    &__header {
        font-weight: bold;
        font-weight: bold;
        font-size: 1.3em;
    }
}

.reorderable-list {
    display: flex;
    flex-direction: column;
    background-color: inherit;
    margin-bottom: 2em;
    &__element {
        display: flex;
        background-color: inherit;
        filter: brightness(0.85);
        margin: 1em 0;
        padding: 0.7em 0.5em;
        align-items: center;
        & > .btn_drag {
            margin-right: 0.5em;
            &:hover {
                filter: unset;
                cursor: move;
            }
        }
        &:hover {
            filter: brightness(0.60);
        }
        & > .btn_delete {
            margin-left: auto;
            &:hover {
                filter: unset;
            }
        }
    }
}

.submit-location, .submit-api {
    display: grid;
    background-color: inherit;
    column-gap: 0.5em;
    grid-template-columns: 7fr 1fr;
    @include simple-form
}

.submit-api {
    margin-top: 5em;
}


.icon_submit {
    rotate: 90deg;
}

.location-card {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    max-width: 20em;
    row-gap: 1em;
    margin-bottom: 4em;
    &:last-child {
        margin-bottom: 0;
    }
    &__name {
        grid-column: 1 / 3;
        grid-row: 1;
        font-weight: bold;
        font-size: 1.3em;
        max-width: 12em;
        overflow-wrap: break-word;
    }
    &__temp {
        grid-column: 1 / 3;
        grid-row: 2;
        display: flex;
        align-items: center;
        & > .icon_weather {
            width: 3em;
        }
        & > * {
            height: fit-content;
            font-size: 2.5em;
            font-style: normal;
            font-weight: 600;
        }
    }
    &__info {
        grid-column: 1 / 3;
        grid-row: 3; 
        overflow-wrap: break-word;
    }
    &__misc {
        display: flex;
        align-items: center;
        &_key {
            font-style: normal;
            font-weight: bold;
            margin-right: 0.5em;
            display: flex;
        }
    }
}

</style>