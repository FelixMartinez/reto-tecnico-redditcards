import getTopEntries from "@/api/redditEntries";
import redditFirebase from "@/api/redditFirebase";

export const loadEntries = async ({ commit }) => {
  commit("setLoading", true);
  const { data } = await getTopEntries.get("/top.json?limit=50");
  if (!data) {
    commit("setEntries", []);
    return;
  }
  const redditPosts = data.data.children.map((child) => {
    return {
      id: child.data.id,
      author: child.data.author,
      fullname: child.data.author_fullname,
      avatar: "",
      title: child.data.title,
      created: child.data.created,
      createdUTC: child.data.created_utc,
      thumbnail: child.data.thumbnail,
      thumbnailWidth: child.data.thumbnail_width,
      thumbnailHeight: child.data.thumbnail_height,
      fullImage: child.data.url_overridden_by_dest,
      numComments: child.data.num_comments,
      read: false,
    };
  });
  commit("setEntries", redditPosts);
  commit("setLoading", false);
};

export const loadReadEntries = async ({ commit }) => {
  const { data } = await redditFirebase.get("/read-entries.json");

  if (!data) {
    return;
  }

  const readEntries = [];
  for (let id of Object.keys(data)) {
    readEntries.push({
      id,
      ...data[id],
    });
  }
  commit("setReadEntries", readEntries);
  commit("updateEntriesReadState", readEntries);
};

export const markEntryAsRead = async ({ commit }, entry) => {
  const dataToSave = { read: true };

  await redditFirebase.put(`/read-entries/${entry.id}.json`, dataToSave);
  const readEntries = [];
  readEntries.push({
    id: entry.id,
    read: true,
  });

  commit("updateEntriesReadState", readEntries);
};

export const saveEntryImages = async ({ commit }, entry) => {
  const { thumbnail, fullImage, read } = entry;
  const dataToSave = { thumbnail, fullImage, read };

  await redditFirebase.put(`/read-entries/${entry.id}.json`, dataToSave);
  const newEntry = {
    id: entry.id,
    thumbnail: entry.thumbnail,
    fullImage: entry.fullImage,
    read: true,
  };

  commit("setNewReadEntry", newEntry);
};

export const removeEntries = ({ commit, state }, entriesToRemove) => {
  const filteredEntries = state.entries.filter(
    (entry) => !entriesToRemove.includes(entry)
  );
  commit("setEntries", filteredEntries);
};
