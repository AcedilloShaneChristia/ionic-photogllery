<template>
  <ion-grid>
    <ion-row>
      <ion-col size="6" size-md="4" v-for="photo in photos" :key="photo.id">
        <ion-img :src="photo.url"></ion-img>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { IonGrid, IonRow, IonCol, IonImg } from '@ionic/vue';
import { ref as dbRef, onValue } from 'firebase/database';
import { db } from '@/firebase';

export interface UserPhoto {
  id: string;
  url: string;
  createdAt?: number;
}

const photos = ref<UserPhoto[]>([]);

onMounted(() => {
  const photosRef = dbRef(db, 'photos');

  // Listen for real-time updates from Firebase
  onValue(photosRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
      // Map Firebase object key-value pairs into an array sorted newest first
      const loadedPhotos: UserPhoto[] = Object.keys(data).map((key) => ({
        id: key,
        url: data[key].url,
        createdAt: data[key].createdAt
      }));

      photos.value = loadedPhotos.reverse();
    } else {
      photos.value = [];
    }
  });
});
</script>

<style scoped>
ion-img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
}
</style>