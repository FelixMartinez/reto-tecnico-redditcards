<template>
  <div v-if="entry" class="entry-container">
    <div class="card entry">
      <div class="card-body">
        <h5 class="card-title">{{ entry.title }}</h5>
        <div
          v-if="checkIfImageIsValid(entry.thumbnail)"
          class="entry-thumbnail-container"
        >
          <img
            data-toggle="tooltip"
            data-placement="top"
            title="Entrar a fullscreen"
            @click="toggleFullscreen"
            class="pointer py-3 img-fluid"
            :src="
              checkIfImageIsValid(entry.fullImage)
                ? entry.fullImage
                : entry.thumbnail
            "
            alt="thumbnail"
          />
          <!-- Pantalla completa -->
          <div
            v-if="fullscreen"
            class="fullscreen-overlay"
            @click="toggleFullscreen"
          >
            <div class="exit-fullscreen-btns">
              <button
                @click.stop="saveEntryToPictureGallery"
                class="btn btn-outline-info mx-2"
                data-toggle="tooltip"
                data-placement="top"
                title="Guardar en mi galería"
              >
                <i class="fa fa-save"></i>
              </button>
              <button
                @click.stop="toggleFullscreen"
                class="btn btn-outline-info mx-2"
                data-toggle="tooltip"
                data-placement="top"
                title="Salir de fullscreen"
              >
                <i class="fa fa-sign-out-alt"></i>
              </button>
            </div>
            <img
              :src="fullscreenImageSrc"
              alt="fullscreen"
              class="img-fluid fullscreen-img"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import isImageUrlValid from "@/modules/helpers/image";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "EntryView",
  props: {
    id: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      entry: null,
      fullscreen: false,
      fullscreenImageSrc: "",
    };
  },

  computed: {
    ...mapGetters("reddit-entries", ["getEntryById"]),
  },

  methods: {
    ...mapActions("reddit-entries", ["markEntryAsRead", "saveEntryImages"]),
    async saveEntryToPictureGallery() {
      await this.saveEntryImages(this.entry);
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
    async loadEntry() {
      const entry = this.getEntryById(this.id);
      if (!entry) return this.$router.push({ name: "no-entry-selected" });
      this.entry = entry;
      if (!entry.read) {
        await this.markEntryAsRead(this.entry);
      }
    },
  },

  created() {
    this.loadEntry();
  },

  watch: {
    id() {
      this.loadEntry();
    },
  },
};
</script>

<style lang="scss" scoped>
.entry-container {
  height: calc(100vh - 56px);
  overflow-y: scroll;
  display: flex;
  justify-content: center;
  background-color: #f8f9fa;
  padding: 20px;
}

.entry {
  width: 90%;
  transition: 0.2s all ease-in;
  margin-bottom: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

.card-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #50636a;
}

.entry-thumbnail-container {
  text-align: center;
  width: 100%;
}

.entry-thumbnail-container img {
  max-width: 100%;
  max-height: 400px;
  object-fit: cover;
}

.pointer {
  cursor: pointer;
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

.fullscreen-overlay img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.exit-fullscreen-btns {
  position: absolute;
  top: 10px;
  right: 10px;
}

@media screen and (max-width: 768px) {
  .entry {
    width: 100%;
  }
}
</style>
