<script setup lang="ts">
import { useStore } from '@/stores/store.js';
import debounce from 'lodash-es/debounce';
const store = useStore();

const handleClose = () => {
    store.closeSettings();
}

const handleDragStart = (e: DragEvent) => {
    
}

const handleDelete = (name: string) => {
    store.deleteLocation(name);
} 

const handleInputChange = debounce(
        () => {
            store.fetchLocationNames();
        }, 500
    );

const handleSubmit = (e: MouseEvent) => {
    e.preventDefault();
    store.addLocation();
}
</script>

<template>
    <div class="settings-modal__backdrop">
        <div class="settings-modal__body">
            <h1 class="settings-modal__header">
                Settings
            </h1>
            <button class="btn btn_close" @click = handleClose>
                <fa-icon class="icon icon_close"
                icon="fa-xmark" />
            </button>
            <div class="reorderable-list">
                <div v-for="location in store.locationsData"
                :key="location.name"
                draggable="true"
                @dragstart="handleDragStart"
                class="reorderable-list__element">
                    <button class="btn btn_drag">
                        <fa-icon class="icon icon_bars"
                        icon="fa-bars" />
                    </button>
                    <p>
                        {{location.name}}
                    </p>
                    <button class="btn btn_delete"
                    @click="handleDelete(location.name)">
                        <fa-icon class="icon icon_delete"
                        icon="fa-trash-can" />
                    </button>
                </div>
            </div>
            <form class="submit-location">
                <label class="submit-location__label">
                    Add Location:
                </label>
                <input class="input submit-location__input"
                type="text"
                v-model="store.locationInputValue"
                @input=handleInputChange
                list="suggestedLocations">
                <datalist id="suggestedLocations">
                    <option v-for="location in store.validLocations" 
                    :key=location.name>
                        {{location.name}}
                    </option>
                </datalist>
                <button class="btn btn_submit" @click=handleSubmit>
                    <fa-icon class="icon icon_submit"
                    icon="fa-arrow-turn-down" />
                </button>
                <p class="error-warning">
                    {{store.locationInputError}}
                </p>
            </form>
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
            background-color: var(--color-background);
            padding: 0.5em;
            & > .btn_close {
                z-index: 1;
                position: absolute;
                right: 0;
            }
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
    .submit-location {
        display: grid;
        background-color: inherit;
        column-gap: 0.5em;
        grid-template-columns: 7fr 1fr;
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
        }
    }
    .icon_submit {
        rotate: 90deg;
    }
</style>