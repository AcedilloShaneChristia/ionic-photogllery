<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Photo Gallery</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Photo Gallery</ion-title>
        </ion-toolbar>
      </ion-header>

      <!-- Display Photo Gallery -->
      <PhotoGalleryComponent />

      <!-- Camera Floating Action Button -->
      <CameraComponent />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import PhotoGalleryComponent from '@/components/PhotoGalleryComponent.vue';
import CameraComponent from '@/components/CameraComponent.vue';
</script>