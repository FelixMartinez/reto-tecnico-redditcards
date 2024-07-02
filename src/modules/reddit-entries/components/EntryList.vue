<template>
  <div class="entry-list-container">
    <div class="d-flex justify-content-center py-3 gap-2">
      <button
        class="btn btn-custom"
        @click="$router.push({ name: 'entry-picture-gallery' })"
      >
        Galería de imágenes
      </button>

      <button
        v-if="paginatedEntries.length > 0"
        class="btn btn-custom"
        @click="deleteEntriesFromList"
      >
        Remover entradas
      </button>
    </div>
    <div class="entry-scrollable-area">
      <Entry v-for="entry in paginatedEntries" :key="entry.id" :entry="entry" />
    </div>
    <div
      class="pagination py-2 gap-3 d-flex justify-content-center"
      v-if="paginatedEntries.length > 0"
    >
      <button
        class="btn btn-secondary"
        @click="prevPage"
        :disabled="currentPage === 1"
      >
        Anterior
      </button>
      <button
        class="btn btn-reddit"
        @click="nextPage"
        :disabled="currentPage === totalPages"
      >
        Siguiente
      </button>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    Entry: defineAsyncComponent(() => import("./Entry.vue")),
  },

  data() {
    return {
      entriesPerPage: 10,
      currentPage: 1,
    };
  },

  created() {
    this.loadReadEntries();
  },

  computed: {
    ...mapGetters("reddit-entries", ["getEntries"]),
    entries() {
      return this.getEntries();
    },

    totalPages() {
      return Math.ceil(this.entries.length / this.entriesPerPage);
    },

    paginatedEntries() {
      const startIndex = (this.currentPage - 1) * this.entriesPerPage;
      const endIndex = startIndex + this.entriesPerPage;
      return this.entries.slice(startIndex, endIndex);
    },
  },

  methods: {
    ...mapActions("reddit-entries", ["loadReadEntries", "removeEntries"]),
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.scrollToTop();
      }
    },

    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.scrollToTop();
      }
    },
    deleteEntriesFromList() {
      this.removeEntries(this.paginatedEntries);
      this.$router.push({ name: "no-entry-selected" });
    },
    scrollToTop() {
      this.$el.querySelector(".entry-scrollable-area").scrollTop = 0;
    },
  },
};
</script>

<style scoped>
.entry-list-container {
  border-right: 1px solid #2c3e50;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.entry-scrollable-area {
  height: 100%;
  overflow-y: scroll;
  padding: 0 15px;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
}

.btn-reddit {
  background-color: #ff4500;
  border-color: #ff4500;
  color: white;
}

.btn-reddit:hover {
  background-color: #e03d00;
  border-color: #e03d00;
}

.btn-custom {
  background-color: #007bff;
  border-color: #007bff;
  color: white;
}

.btn-custom:hover {
  background-color: #0056b3;
  border-color: #0056b3;
}

/* Estilos para el scroll */
.entry-scrollable-area::-webkit-scrollbar {
  width: 8px;
}

.entry-scrollable-area::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.entry-scrollable-area::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

.entry-scrollable-area::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
