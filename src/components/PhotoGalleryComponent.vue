<template>
  <ion-grid>
    <ion-row>
      <ion-col size="6" size-md="4" v-for="(photo, index) in photos" :key="index">
        <ion-img :src="photo.webviewPath"></ion-img>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script setup lang="ts">
import { IonGrid, IonRow, IonCol, IonImg } from '@ionic/vue';

export interface UserPhoto {
  filepath?: string;
  webviewPath?: string;
}

defineProps<{
  photos: UserPhoto[]
}>();
</script>

<style scoped>
ion-img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
}
</style>