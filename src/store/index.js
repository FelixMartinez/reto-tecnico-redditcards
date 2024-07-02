import { createStore } from "vuex";
import redditEntries from "../modules/reddit-entries/store/reddit-entries";

export default createStore({
  modules: {
    "reddit-entries": redditEntries,
  },
});
