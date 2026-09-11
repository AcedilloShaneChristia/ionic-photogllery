<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Photo Gallery</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <!-- Displays the photos grid -->
      <PhotoGalleryComponent :photos="photos" />

      <!-- Floating camera button -->
      <CameraComponent @photo-taken="addPhoto" />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import CameraComponent from '@/components/CameraComponent.vue';
import PhotoGalleryComponent, { UserPhoto } from '@/components/PhotoGalleryComponent.vue';

const photos = ref<UserPhoto[]>([]);

const addPhoto = (webviewPath: string) => {
  photos.value.unshift({ webviewPath });
};
</script>