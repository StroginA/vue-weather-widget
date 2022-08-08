<script setup lang="ts">
import { useStore } from '@/stores/store.js';
import debounce from 'lodash-es/debounce';
import draggable from 'vuedraggable'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const store = useStore();

const handleClose = () => {
    store.closeSettings();
}

const handleDragReorder = () => {
    store.saveToStorage();
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
                <FontAwesomeIcon class="icon icon_close"
                icon="fa-xmark" />
            </button>
            <draggable
            animation="300"
            :list="store.locationsData"
            item-key="name"
            handle=".btn_drag"
            @change="handleDragReorder"
            class="reorderable-list">
                <template #item="{element}">
                    <div class="reorderable-list__element">
                        <button class="btn btn_drag">
                            <FontAwesomeIcon class="icon icon_bars"
                            icon="fa-bars" />
                        </button>
                        <p>
                            {{element.name}}
                        </p>
                        <button class="btn btn_delete"
                        @click="handleDelete(element.name)">
                            <FontAwesomeIcon class="icon icon_delete"
                            icon="fa-trash-can" />
                        </button>
                    </div>
                </template>
            </draggable>
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
                    <FontAwesomeIcon class="icon icon_submit"
                    icon="fa-arrow-turn-down" />
                </button>
                <p class="error-warning">
                    {{store.locationInputError}}
                </p>
            </form>
        </div>
    </div>
</template>
