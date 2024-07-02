<template>
  <div class="gallery-page">
    <div class="d-flex justify-content-center mt-3">
      <h1>Tu Galería de imágenes</h1>
    </div>
    <div class="d-flex justify-content-center align-items-center h-100">
      <div class="gallery-container">
        <div class="gallery">
          <div
            v-for="entry in readEntries"
            :key="entry.id"
            class="gallery-item"
          >
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
.gallery-page {
  background-color: #f9f9f9;
  padding: 20px;
}

h1 {
  color: #50636a;
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.gallery-container {
  width: 80%;
  margin: 0 auto;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 15px;
}

.gallery-item {
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
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
</style>
