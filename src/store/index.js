import { createStore } from "vuex";

export default createStore({
  state: {
    workshops: [
      {
        sid: "work1",
        img: "https://businesscoachingindia.com/sites/default/files/styles/event_banner/public/2024-06/Website%20Banner-05.jpg?itok=N5pmU9I9",
        title: "Business Mastery program - july'24",
        subtitle: "BMP- Business Mastery program",
        state: "Delhi",
        price: 1000000,
        start_date: "july 10, 2024",
        end_date: "march 19, 2025",
        extra_features: [
          {
            title: "Are you struggling with",
            points: [
              "Working 24/7 (Constantly checking problems)",
              "Sales are not growing",
              "Sales team does not achieve targets",
              "Lack of cashflow to grow",
              "Marketing not bringing Conversions",
              "You have a light conversation, 5 minutes later",
              "You don't know how to grow sales",
            ]
          }
        ]
      },
      {
        sid: "work2",
        img: "https://businesscoachingindia.com/sites/default/files/styles/event_banner/public/2024-06/Website%20Banner-05.jpg?itok=N5pmU9I9",
        title: "Business Mastery program - july'24",
        subtitle: "BMP- Business Mastery program",
        state: "Delhi",
        price: 1000000,
        start_date: "july 10, 2024",
        end_date: "march 19, 2025",
      },
      {
        sid: "work3",
        img: "https://businesscoachingindia.com/sites/default/files/styles/event_banner/public/2024-06/Website%20Banner-05.jpg?itok=N5pmU9I9",
        title: "Business Mastery program - july'24",
        subtitle: "BMP- Business Mastery program",
        state: "Delhi",
        price: 1000000,
        start_date: "july 10, 2024",
        end_date: "march 19, 2025",
      },
    ]
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
