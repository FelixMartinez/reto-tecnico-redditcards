export default {
  name: "reddit-entries",
  component: () =>
    import(
      /* webpackChunkName: "redditEntries" */ "@/modules/reddit-entries/layouts/RedditEntriesLayout.vue"
    ),
  children: [
    {
      path: "",
      name: "no-entry-selected",
      component: () =>
        import(
          /* webpackChunkName: "reddit-no-entry-selected" */ "@/modules/reddit-entries/views/NoEntrySelected.vue"
        ),
    },
    {
      path: ":id",
      name: "entry",
      component: () =>
        import(
          /* webpackChunkName: "reddit-entry" */ "@/modules/reddit-entries/views/EntryView.vue"
        ),
      props: (route) => {
        return {
          id: route.params.id,
        };
      },
    },
    {
      path: "entry-picture-gallery",
      name: "entry-picture-gallery",
      component: () =>
        import(
          /* webpackChunkName: "entry-picture-gallery" */ "@/modules/reddit-entries/views/EntryPictureGalleryView.vue"
        ),
    },
  ],
};
