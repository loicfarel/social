import { createStore } from 'vuex'

export default createStore({
  state: {
    users: [
      {
        name: "Loic Farel",
        profile: require('../assets/img/p1.jpg'),
        storie: require('../assets/img/s1.jpg'),
        post: require('../assets/img/f1.jpg'),
        legende: 'Nouveaux bijoux',
        times: 'Bénin, il y a 15min',
        actif: true,
        message: "",
        ready: false,
        other: 392,
        commentaire: 90
      },
      {
        name: "MonLibo",
        profile: require('../assets/img/p2.jpg'),
        storie: require('../assets/img/s2.jpg'),
        post: require('../assets/img/f2.jpg'),
        legende: 'Journée work. #work',
        times: 'Bénin, il y a 30min',
        actif: true,
        message: "Yo c'est comment?",
        ready: false,
        other: 152,
        commentaire: 40
      },
      {
        name: "Shimon'7em",
        profile: require('../assets/img/p3.jpg'),
        storie: require('../assets/img/s3.jpg'),
        post: require('../assets/img/f3.jpg'),
        legende: 'Un peu de repos pour la suite',
        times: 'Studio, il y a 48min',
        actif: false,
        message: "Oui et chez toi?",
        ready: false,
        other: 202,
        commentaire: 88
      },

      {
        name: "Justine Skye",
        profile: require('../assets/img/p5.jpg'),
        storie: require('../assets/img/s5.jpg'),
        post: require('../assets/img/f5.jpg'),
        legende: 'Mood Work',
        times: 'Home, il y a 1h',
        actif: true,
        message: "Hi?",
        ready: false,
        other: 1702,
        commentaire: 210
      },


      {
        name: "Selena Gomez",
        profile: require('../assets/img/p4.jpg'),
        storie: require('../assets/img/s4.jpg'),
        post: require('../assets/img/f4.jpg'),
        legende: 'Kiss..',
        times: 'Studio, il y a 1h',
        actif: false,
        message: "Hello!",
        ready: false,
        other: 3202,
        commentaire: 1140
      },

      {
        name: "Loic Farel",
        profile: require('../assets/img/p1.jpg'),
        storie: require('../assets/img/s1.jpg'),
        post: require('../assets/img/f11.jpg'),
        legende: 'Poser à Paris #coding',
        times: 'Paris, il y a 2h',
        actif: true,
        message: "",
        ready: false,
        other: 592,
        commentaire: 120
      },



    ],
    invitations: [
      {
        name: "Diane Dako",
        profile: require('../assets/img/i1.jpg'),
        friend: 102
      },
      {
        name: "Julia Zen",
        profile: require('../assets/img/i2.jpg'),
        friend: 12
      },
      {
        name: "Mark Peter",
        profile: require('../assets/img/i3.png'),
        friend: 22
      },
      {
        name: "Jules Aurel",
        profile: require('../assets/img/i4.jpg'),
        friend: 59
      },

    ]
  },
  getters: {
    users(state) {
      return state.users
    },

    invitations(state) {
      return state.invitations
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
