<script setup lang="ts">
</script>

<template>
    <div class="location-card">
        <h1 class="location-card__name">
            London, UK
        </h1>
        <em class="location-card__temp">
            7degC
        </em>
        <p class="location-card__info">
            Feels like -3degC. Broken clouds. Light breeze.
        </p>
        <div class="location-card__misc">
            <em class="location-card__misc__key">
            </em>
            <p class="location-card__misc__value">
                3.0m/s SSE
            </p>
        </div>
        <div class="location-card__misc">
            <em class="location-card__misc__key">
            </em>
            <p class="location-card__misc__value">
                1021hPa
            </p>
        </div>
        <div class="location-card__misc">
            <em class="location-card__misc__key">
                Humidity: 
            </em>
            <p class="location-card__misc__value">
                97%
            </p>
        </div>
        <div class="location-card__misc">
            <em class="location-card__misc__key">
                Dew point:  
            </em>
            <p class="location-card__misc__value">
                0degC
            </p>
        </div>
        <div class="location-card__misc">
            <em class="location-card__misc__key">
                Visibility: 
            </em>
            <p class="location-card__misc__value">
                10.0km
            </p>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .location-card {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        max-width: 20em;
        &__name {
            grid-column: 1 / 3;
            grid-row: 1;
            font-weight: bold;
        }
        &__temp {
            grid-column: 1 / 3;
            grid-row: 2;
            font-size: 2rem;
            font-style: normal;
            font-weight: 600;
        }
        &__info {
            grid-column: 1 / 3;
            grid-row: 3; 
            overflow-wrap: break-word;
        }
        &__misc {
            display: flex;
            &__key {
                font-style: normal;
                font-weight: bold;
                margin-right: 0.5em;
            }
        }
    }
</style>
