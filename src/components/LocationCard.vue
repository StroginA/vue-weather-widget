<script setup lang="ts">
</script>

<template>
    <div class="location-card">
        <h1 class="location-card__name">
            London, UK
        </h1>
        <em class="location-card__temp">
            <img class="icon icon_weather"
            src="http://openweathermap.org/img/wn/02d@2x.png">
            <p>
                7degC
            </p>
        </em>
        <p class="location-card__info">
            Feels like -3degC. Broken clouds. Light breeze.
        </p>
        <div class="location-card__misc">
            <em class="location-card__misc_key">
                <fa-icon class="icon icon_wind fa-rotate-by"
                icon="fa-location-arrow" />
            </em>
            <p>
                3.0m/s SSE
            </p>
        </div>
        <div class="location-card__misc">
            <em class="location-card__misc_key">
                <fa-icon class="icon" 
                icon="fa-gauge-simple-high" />
            </em>
            <p>
                1021hPa
            </p>
        </div>
        <div class="location-card__misc">
            <em class="location-card__misc_key">
                Humidity: 
            </em>
            <p>
                97%
            </p>
        </div>
        <div class="location-card__misc">
            <em class="location-card__misc_key">
                Dew point:  
            </em>
            <p>
                0degC
            </p>
        </div>
        <div class="location-card__misc">
            <em class="location-card__misc_key">
                Visibility: 
            </em>
            <p>
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
        margin-bottom: 4em;
        &:last-child {
            margin-bottom: 0;
        }
        &__name {
            grid-column: 1 / 3;
            grid-row: 1;
            font-weight: bold;
            font-size: 1.3em;
        }
        &__temp {
            grid-column: 1 / 3;
            grid-row: 2;
            display: flex;
            align-items: center;
            & > * {
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
            &_key {
                font-style: normal;
                font-weight: bold;
                margin-right: 0.5em;
                & > .icon_wind.fa-rotate-by {
                    --fa-rotate-angle: 0deg;
                }
            }
        }
    }
</style>
