<template>
  <div class="entry-container" @click="goToEntry">
    <div class="entry mb-3 p-2">
      <div class="entry-description d-flex align-items-center mb-2">
        <img src="@/assets/logo.webp" alt="avatar" height="20" width="20" />
        <span class="entry-author ms-2">{{ entry.author }}</span>
        <span class="entry-time ms-auto">Hace {{ getHoursAgo }} horas</span>
      </div>
      <div class="entry-title">
        <span>{{ entry.title }}</span>
      </div>
      <div v-if="hasValidThumbnail" class="entry-thumbnail-container my-2">
        <img
          @click="toggleFullscreen"
          class="img-fluid"
          :src="entry.thumbnail"
          alt="thumbnail"
        />
        <div v-if="fullscreen" class="fullscreen-overlay">
          <div class="exit-fullscreen-btns">
            <button
              @click="saveEntryToPictureGallery"
              class="btn btn-outline-info mx-2"
              title="Guardar en mi galería"
            >
              <i class="fa fa-save"></i>
            </button>
            <button
              @click="toggleFullscreen"
              class="btn btn-outline-info mx-2"
              title="Salir de fullscreen"
            >
              <i class="fa fa-sign-out-alt"></i>
            </button>
          </div>
          <img :src="fullscreenImageSrc" alt="fullscreen" />
        </div>
      </div>
      <div class="entry-options-container d-flex justify-content-end gap-2">
        <button
          @click.stop="deleteEntryFromList"
          class="btn btn-danger btn-sm"
          title="Descartar entrada"
        >
          <i class="fa fa-trash"></i>
        </button>
        <button
          v-if="entry.read"
          class="btn btn-success btn-sm"
          title="Entrada leída"
        >
          <i class="fa fa-check-double"></i>
        </button>
        <button
          class="btn btn-primary btn-sm d-flex align-items-center"
          title="Número de comentarios"
        >
          <i class="fa fa-comment"></i>
          <span class="ms-1">{{ entry.numComments }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import isImageUrlValid from "@/modules/helpers/image";
import { mapActions } from "vuex";

export default {
  name: "Entry",
  props: {
    entry: { type: Object, required: true },
  },
  data() {
    return {
      fullscreen: false,
      fullscreenImageSrc: "",
    };
  },
  computed: {
    getHoursAgo() {
      const timestamp = this.entry.created;
      const timestampMs = timestamp * 1000;
      const postDate = new Date(timestampMs);
      const currentDate = new Date();
      const diffInHours = Math.abs(currentDate - postDate) / (1000 * 60 * 60);
      const diffInHoursRounded = Math.round(diffInHours * 100) / 100;
      return Math.round(Math.abs(diffInHoursRounded));
    },
    hasValidThumbnail() {
      return this.checkIfImageIsValid(this.entry.thumbnail);
    },
  },
  methods: {
    ...mapActions("reddit-entries", ["saveEntryImages", "removeEntries"]),
    async saveEntryToPictureGallery() {
      await this.saveEntryImages(this.entry);
    },
    deleteEntryFromList() {
      this.removeEntries([this.entry]);
      if (this.entry.id == this.$route.params.id) {
        this.$router.push({ name: "no-entry-selected" });
      }
    },
    goToEntry() {
      this.$router.push({ name: "entry", params: { id: this.entry.id } });
    },
    toggleFullscreen() {
      this.fullscreen = !this.fullscreen;
      if (this.fullscreen) {
        this.fullscreenImageSrc = this.checkIfImageIsValid(this.entry.fullImage)
          ? this.entry.fullImage
          : this.entry.thumbnail;
        document.body.style.overflow = "hidden";
      } else {
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
.entry-container {
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
}
.entry {
  width: 100%;
  max-width: 300px; /* Ajustar el tamaño máximo del card */
  background: #fff;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  .entry-description {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px; /* Reducir el tamaño de fuente */
    color: #6c757d;
    margin-bottom: 8px;
  }
  .entry-title {
    font-size: 16px; /* Reducir el tamaño de fuente */
    font-weight: bold;
    color: #343a40;
    margin-bottom: 8px;
  }
  .entry-thumbnail-container {
    text-align: center;
    width: 100%;
  }
  .entry-thumbnail-container img {
    max-width: 100%;
    border-radius: 4px;
    cursor: pointer;
    transition: transform 0.2s;
    &:hover {
      transform: scale(1.05);
    }
  }
  .entry-options-container {
    .option {
      font-size: 12px; /* Reducir el tamaño de fuente */
      margin-left: 2px;
      margin-top: 4px;
    }
    button {
      border-radius: 4px;
    }
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
.exit-fullscreen-btns {
  position: absolute;
  top: 10px;
  right: 10px;
}
.fullscreen-overlay img {
  max-width: 90vw;
  max-height: 90vh;
}
@media screen and (max-width: 768px) {
  .entry {
    width: 90%;
  }
}
</style>
