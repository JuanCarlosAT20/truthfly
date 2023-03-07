const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "aboutfakenews",
        name: "aboutfakenews",
        component: () => import("pages/AboutFakeNews.vue"),
      },
      {
        path: "quehago",
        name: "quehago",
        component: () => import("pages/QueHago.vue"),
      },
      {
        path: "fakenewstest",
        name: "fakenewstest",
        component: () => import("pages/FakeNewsTest.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
