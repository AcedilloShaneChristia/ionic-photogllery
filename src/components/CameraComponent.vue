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
import { ref as dbRef, push } from 'firebase/database';
import { db } from '@/firebase';

// Define emit to notify parent component if needed
const emit = defineEmits<{
  (e: 'photo-taken', webviewPath: string): void
}>();

const takePhoto = async () => {
  try {
    const image = await Camera.getPhoto({
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera,
      quality: 90
    });

    if (image.base64String) {
      // Create data URL format so standard <img> tags can render it directly
      const photoDataUrl = `data:image/${image.format};base64,${image.base64String}`;

      // Save to Firebase Realtime Database under 'photos' node
      const photosRef = dbRef(db, 'photos');
      await push(photosRef, {
        url: photoDataUrl,
        createdAt: Date.now()
      });

      // Emit path to parent component
      emit('photo-taken', photoDataUrl);
    }
  } catch (error) {
    console.log('User cancelled or camera error:', error);
  }
};
</script>