<script setup lang="ts">
import type { FormattedProfile } from '@/types';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const props = defineProps<{
    profile: FormattedProfile
}>()
const windDir = props.profile.weather ?
`${(props.profile.weather.windDeg + 180 - 45) % 360}deg` : '0';
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
                    <FontAwesomeIcon class="icon icon_wind"
                    :style="{rotate: props.profile.weather.windIconDirection}"
                    icon="fa-location-arrow" />
                </em>
                <p>
                    {{props.profile.weather.wind}}
                </p>
            </div>
            <div class="location-card__misc">
                <!-- atmospheric pressure-->
                <em class="location-card__misc_key">
                    <FontAwesomeIcon class="icon icon_pressure" 
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

