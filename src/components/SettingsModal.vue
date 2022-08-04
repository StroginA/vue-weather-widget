<script setup lang="ts">
</script>

<template>
    <div class="settings-modal__backdrop">
        <div class="settings-modal__body">
            <h1 class="settings-modal__header">
                Settings
            </h1>
            <button class="btn btn_close">
                <fa-icon class="icon icon_close"
                icon="fa-xmark" />
            </button>
            <div class="reorderable-list">
                <div class="reorderable-list__element">
                    <button class="btn btn_drag">
                        <fa-icon class="icon icon_bars"
                        icon="fa-bars" />
                    </button>
                    <p>London, UK</p>
                    <button class="btn btn_delete">
                        <fa-icon class="icon icon_delete"
                        icon="fa-trash-can" />
                    </button>
                </div>
                <div class="reorderable-list__element">
                    <button class="btn btn_drag">
                        <fa-icon class="icon icon_bars"
                        icon="fa-bars" />
                    </button>
                    <p>Moscow, RU</p>
                    <button class="btn btn_delete">
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
                type="text">
                <button class="btn btn_submit">
                    <fa-icon class="icon icon_submit"
                    icon="fa-arrow-turn-down" />
                </button>
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
            background-color: #FFFFFF;
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