<template>
  <div class="d-flex justify-content-center mt-3">
    <h1>Tu Galería de imágenes</h1>
  </div>
  <div class="d-flex justify-content-center align-items-center h-100">
    <div class="gallery-container">
      <div class="gallery">
        <div v-for="entry in readEntries" :key="entry.id" class="gallery-item">
          <img
            :src="entry.thumbnail"
            :alt="entry.id"
            class="gallery-image"
            @click="toggleFullscreen(entry)"
            data-toggle="tooltip"
            data-placement="top"
            title="Entrar a fullscreen"
          />
        </div>
      </div>
    </div>
  </div>
  <div v-if="fullscreen" class="fullscreen-overlay">
    <button
      @click="toggleFullscreen(entry)"
      class="btn btn-outline-info exit-fullscreen-btn mx-2"
      data-toggle="tooltip"
      data-placement="top"
      title="Salir de fullscreen"
    >
      <i class="fa fa-sign-out-alt"></i>
    </button>
    <img :src="fullscreenImageSrc" alt="fullscreen" />
  </div>
</template>

<script>
import isImageUrlValid from "@/modules/helpers/image";
import { mapGetters } from "vuex";

export default {
  name: "EntryPictureGalleryView",
  props: {
    id: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      fullscreen: false,
      fullscreenImageSrc: "",
    };
  },

  computed: {
    ...mapGetters("reddit-entries", ["getImagesFromReadEntries"]),
    readEntries() {
      return this.getImagesFromReadEntries();
    },
  },

  methods: {
    toggleFullscreen(entry) {
      this.fullscreen = !this.fullscreen;
      if (this.fullscreen) {
        this.fullscreenImageSrc = this.checkIfImageIsValid(entry.fullImage)
          ? entry.fullImage
          : entry.thumbnail;
        // Deshabilitando scroll cuando esta en pantalla completa
        document.body.style.overflow = "hidden";
      } else {
        // Habilitando scroll cuando no esta en pantalla completa
        document.body.style.overflow = "";
      }
    },
    checkIfImageIsValid(url) {
      return isImageUrlValid(url);
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  color: #50636a;
}
.fullscreen-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.exit-fullscreen-btn {
  position: absolute;
  top: 10px;
  right: 10px;
}

.fullscreen-overlay img {
  max-width: 90vw;
  max-height: 90vh;
}

.gallery-container {
  width: 70%;
}

.gallery {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(100px, 1fr)
  ); /* Adjusted column size */
  grid-gap: 5px; /* Reduced gap */
}

.gallery-item {
  overflow: hidden;
}

.gallery-image {
  max-width: 100%; /* Ensures images don't exceed their container */
  height: auto; /* Maintains aspect ratio */
}
</style>
