<script setup lang="ts">
import type { FormattedProfile } from '@/types';

const props = defineProps<{
    profile: FormattedProfile
}>()

// Assuming icon is pointing to 45deg by default and wind direction is given in meteorological.
const windIconDirection = props.profile.weather ? 
`${(props.profile.weather.windDeg + 180 - 45) % 360}deg` : 
`0`;

</script>

<template>
    <div class="location-card">
        <h1 class="location-card__name">
            <!-- location name and country-->
            {{props.profile.name}}
        </h1>
        <template v-if="props.profile.weather">
            <em class="location-card__temp">
                <!-- weather conditions icon and temperature-->
                <img class="icon icon_weather"
                :src=props.profile.weather.iconSrc>
                <p>
                    {{props.profile.weather.temp}}
                </p>
            </em>
            <p class="location-card__info">
                <!-- feels-like and general conditions description-->
                {{props.profile.weather.info}}
            </p>
            <div class="location-card__misc">
                <!-- wind speed/direction, icon rotated to match-->
                <em class="location-card__misc_key">
                    <fa-icon class="icon icon_wind fa-rotate-by"
                    icon="fa-location-arrow" />
                </em>
                <p>
                    {{props.profile.weather.wind}}
                </p>
            </div>
            <div class="location-card__misc">
                <!-- atmospheric pressure-->
                <em class="location-card__misc_key">
                    <fa-icon class="icon" 
                    icon="fa-gauge-simple-high" />
                </em>
                <p>
                    {{props.profile.weather.pressure}}
                </p>
            </div>
            <div class="location-card__misc">
                <!-- humidity-->
                <em class="location-card__misc_key">
                    Humidity: 
                </em>
                <p>
                    {{props.profile.weather.humidity}}
                </p>
            </div>
            <div class="location-card__misc">
                <!-- dew point-->
                <em class="location-card__misc_key">
                    Dew point:  
                </em>
                <p>
                    {{props.profile.weather.dewPoint}}
                </p>
            </div>
            <div class="location-card__misc">
                <!-- visibility-->
                <em class="location-card__misc_key">
                    Visibility: 
                </em>
                <p>
                    {{props.profile.weather.visibility}}
                </p>
            </div>
        </template>
        <p v-else>Loading</p>
        <p v-if="props.profile.error"
        class="warning-message">
            {{props.profile.error}}
        </p>
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
            max-width: 14em;
            overflow-wrap: break-word;
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
                    --fa-rotate-angle: v-bind(windIconDirection);
                }
            }
        }
    }
</style>
