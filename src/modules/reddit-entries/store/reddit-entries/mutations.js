export const setEntries = (state, entries) => {
  state.entries = entries;
};

export const setLoading = (state, isLoading) => {
  state.isLoading = isLoading;
};

export const updateEntriesReadState = (state, updatedEntries) => {
  state.entries.forEach((entry) => {
    const updatedEntry = updatedEntries.find((item) => {
      return item.id === entry.id;
    });
    if (updatedEntry) {
      entry.read = updatedEntry.read;
    }
  });
};

export const setReadEntries = (state, readEntries) => {
  state.readEntries = readEntries;
};

export const setNewReadEntry = (state, readEntry) => {
  state.readEntries = [...state.readEntries, readEntry];
};
