<script setup lang="ts">
</script>

<template>
    <div class="location-card">
        <h1 class="location-card__name">
            London, UK
        </h1>
        <em class="location-card__temp">
            <img class="location-card__temp__icon"
            src="http://openweathermap.org/img/wn/02d@2x.png">
            <p class="location-card__temp__value">
                7degC
            </p>
        </em>
        <p class="location-card__info">
            Feels like -3degC. Broken clouds. Light breeze.
        </p>
        <div class="location-card__misc">
            <em class="location-card__misc__key">
                <fa-icon class="location-card__misc__key__icon
                location-card__misc__key__icon_wind fa-rotate-by"
                icon="fa-location-arrow" />
            </em>
            <p class="location-card__misc__value">
                3.0m/s SSE
            </p>
        </div>
        <div class="location-card__misc">
            <em class="location-card__misc__key">
                <fa-icon class="location-card__misc__key__icon" 
                icon="fa-gauge-simple-high" />
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
        row-gap: 1em;
        margin: 1em;
        &__name {
            grid-column: 1 / 3;
            grid-row: 1;
            font-weight: bold;
        }
        &__temp {
            grid-column: 1 / 3;
            grid-row: 2;
            display: flex;
            align-items: center;
            &__value {
                height: fit-content;
                font-size: 2.5rem;
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
            &__key {
                font-style: normal;
                font-weight: bold;
                margin-right: 0.5em;
                &__icon {
                    font-size: 1.5em;
                    &_wind {
                        &.fa-rotate-by {
                            --fa-rotate-angle: 0deg;
                        }
                    }
                    
                }
            }
        }
    }
</style>
