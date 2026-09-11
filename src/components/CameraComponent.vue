<template>
  <ion-fab vertical="bottom" horizontal="center" slot="fixed">
    <ion-fab-button @click="takePhoto">
      <ion-icon :icon="camera"></ion-icon>
    </ion-fab-button>
  </ion-fab>
</template>

<script setup lang="ts">
import { IonFab, IonFabButton, IonIcon } from '@ionic/vue';
import { camera } from 'ionicons/icons';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

// Define emit to send captured photo path to parent component
const emit = defineEmits<{
  (e: 'photo-taken', webviewPath: string): void
}>();

const takePhoto = async () => {
  try {
    const image = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    if (image.webPath) {
      emit('photo-taken', image.webPath);
    }
  } catch (error) {
    console.log('User cancelled or camera error:', error);
  }
};
</script>