// de momento enviare en este getter la data, normalmente aca se trabaja data modificada o filtrada.
export const getEntries = (state) => () => {
  return state.entries;
};

export const getReadEntries = (state) => () => {
  return state.readEntries;
};

export const getImagesFromReadEntries = (state) => () => {
  return state.readEntries.filter((item) =>
    Object.prototype.hasOwnProperty.call(item, "thumbnail")
  );
};

export const getEntryById =
  (state) =>
  (id = "") => {
    const entry = state.entries.find((entry) => entry.id === id);
    if (!entry) return;
    return { ...entry };
  };
