<template>
  <nav>
    <div class="container">
      <h2 class="logo">FoScio</h2>
      <div class="search-bar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path
            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
          />
        </svg>
        <input type="search" placeholder="Rechercher un utilisateur..." />
      </div>

      <div class="create">
        <div class="profile-photo">
          <img :src="this.me" alt="photo" />
        </div>
      </div>
    </div>
  </nav>

  <!-- MAIN ---------------------------------->
  <main>
    <div class="container">
      <!--========== LEFT ============-->
      <div class="left">
        <a href="#" class="profile">
          <div class="profile-photo">
            <img :src="this.me" alt="photo" />
          </div>
          <div class="handle">
            <h4>Loïc Farel</h4>
            <p class="text-muted">@loicfarel</p>
          </div>
        </a>

        <!---------- SIDEBAR ------------>
        <div class="sidebar">
          <a href="#" class="menu-item active">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-house-door"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"
                />
              </svg>
            </span>
            <h3>Acceuil</h3>
          </a>
          <a href="#" class="menu-item">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-bell"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"
                />
              </svg>
              <small class="notification-count">9+</small>
            </span>
            <h3>Notifications</h3>
            <!-- Notification pop up -->
            <transition name="fade">
              <div class="notification-popup">
                <div>
                  <div class="profile-photo">
                    <img :src="users[1].profile" alt="photo" />
                  </div>
                  <div class="notification-body">
                    <b>MonLibo</b> a accepté votre invitation.
                    <small class="text-muted">Il y a 2 jours </small>
                  </div>
                </div>
                <div>
                  <div class="profile-photo">
                    <img :src="users[2].profile" alt="photo" />
                  </div>
                  <div class="notification-body">
                    <b>Shimon'7em</b> a aimé une photo
                    <small class="text-muted">Il y a 1 jour </small>
                  </div>
                </div>
                <div>
                  <div class="profile-photo">
                    <img :src="users[3].profile" alt="photo" />
                  </div>
                  <div class="notification-body">
                    <b>Selena Gomez</b> a commentée une photo
                    <small class="text-muted">Il y a 40 min </small>
                  </div>
                </div>
              </div>
            </transition>
            <!-- End -->
          </a>
          <a href="#" class="menu-item">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-envelope"
                viewBox="0 0 16 16"
              >
                <path
                  d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"
                />
              </svg>
              <small class="notification-count">5</small>
            </span>
            <h3>Messages</h3>
          </a>
          <a @click="showSetting" href="#" class="menu-item">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-gear"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"
                />
                <path
                  d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"
                />
              </svg>
            </span>
            <h3>Paramètres</h3>
          </a>
        </div>
      </div>

      <!--========== MIDLLE ============-->
      <div class="middle">
        <!-- Stories ------------------------->
        <div class="stories">
          <div
            class="story"
            :style="{ background: 'url(' + users[0].storie + ')' }"
          >
            <div class="profile-photo">
              <img :src="this.me" alt="photo" />
            </div>
            <p class="name">Votre storie</p>
          </div>

          <div
            v-for="user in this.users.slice(1, 4)"
            :key="user.name"
            :style="{ background: 'url(' + user.storie + ')' }"
            class="story"
          >
            <div class="profile-photo">
              <img :src="user.profile" alt="photo" />
            </div>
            <p class="name">{{ user.name }}</p>
          </div>

          <div
            class="story story-none"
            :style="{ background: 'url(' + users[4].storie + ')' }"
          >
            <div class="profile-photo">
              <img :src="users[4].profile" alt="photo" />
            </div>
            <p class="name">{{ users[4].name }}</p>
          </div>
        </div>
        <!-- End Stories ---------------------------->
        <form action="#" class="create-post">
          <div class="profile-photo">
            <img :src="this.me" alt="photo" />
          </div>
          <input type="text" placeholder="Que pensez-vous ?" />
          <input type="submit" value="Publier" class="btn btn-primary" />
        </form>

        <!-- Card post -->
        <div class="feeds">
          <div v-for="user in users" :key="user.name" class="feed">
            <div class="head">
              <div class="user">
                <div class="profile-photo">
                  <img :src="user.profile" alt="photo" />
                </div>

                <div class="ingo">
                  <h3>{{ user.name }}</h3>
                  <small>{{ user.times }}</small>
                </div>
              </div>
              <span class="edit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-three-dots"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
                  />
                </svg>
              </span>
            </div>
            <div class="photo">
              <img :src="user.post" alt="photo" />
            </div>

            <div class="action-button">
              <div class="interaction-button">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                    />
                  </svg>
                </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                    />
                  </svg>
                </span>
              </div>

              <div class="bookmark">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div class="liked-by">
              <span v-for="like in users.slice(0, 3)" :key="like.name">
                <img :src="like.profile" alt="" />
              </span>
              <p>
                aimée par <b>Loic Farel</b> et <b> {{ user.other }} autres</b>
              </p>
            </div>
            <div class="caption">
              <p>
                <b>{{ user.name }}</b> {{ user.legende }}.
              </p>
            </div>
            <div class="comments text-muted">
              {{ user.commentaire }} commentaires...
            </div>
          </div>
          <div class="mt-30"></div>
        </div>
      </div>
      <!--========== RIGHT ============-->
      <div class="right">
        <div class="messages">
          <div class="heading">
            <h4>Messages</h4>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-pencil-square"
              viewBox="0 0 16 16"
            >
              <path
                d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
              />
              <path
                fill-rule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
              />
            </svg>
          </div>

          <div class="search-bar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
              />
            </svg>
            <input type="search" placeholder="Recherche.." />
          </div>
          <!-- Message category -->
          <div class="category">
            <h6 class="active">Tout</h6>
            <h6>Non lus(12)</h6>
            <h6 class="messages-requests">Invitations(8)</h6>
          </div>
          <!-- Message -->
          <div
            v-for="user in users.slice(1, 5)"
            :key="user.name"
            class="message"
          >
            <div class="profile-photo">
              <img :src="user.profile" alt="photo" />
              <div v-if="user.actif" class="active"></div>
            </div>
            <div class="message-body">
              <h5>{{ user.name }}</h5>
              <p class="text-bold">{{ user.message }}</p>
            </div>
          </div>
        </div>

        <!-- Invitations -->
        <div class="friend-requests">
          <h4>Invitations</h4>
          <div
            v-for="(invitation, index) in invitations"
            :key="index"
            class="request"
          >
            <div class="info">
              <div class="profile-photo">
                <img :src="invitation.profile" alt="photo" />
              </div>
              <div>
                <h5>{{ invitation.name }}</h5>
                <p class="text-muted">
                  {{ invitation.friend }} amis en communs
                </p>
              </div>
            </div>
            <div class="action">
              <button class="btn btn-primary">Accepter</button>
              <button class="btn">Refuser</button>
            </div>
          </div>
        </div>
      </div>
      <!-- Parametre -->
      <transition name="fade">
        <div v-if="setting" class="setting">
          <div class="card">
            <div class="close-card">
              <svg
                @click="showSetting"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="30"
                height="30"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>

            <div>
              <h2>Paramètres</h2>
              <p class="text-muted">
                Modifier la taille de la police et le thème.
              </p>
            </div>
            <div>
              <h4>Police</h4>
              <div class="group">
                <div v-for="(police, index) in this.polices" :key="index">
                  <input
                    @change="changeFontSize"
                    v-model="policeBody"
                    type="radio"
                    :value="police.id"
                    name="police"
                    :id="police.id"
                  />
                  <label :for="police.id">{{ police.name }}</label>
                </div>
              </div>
            </div>
            <div>
              <h4>Thème</h4>
              <div class="group">
                <div v-for="(theme, index) in this.themes" :key="index">
                  <input
                    @change="changeBackground"
                    v-model="themeBody"
                    type="radio"
                    name="theme"
                    :value="theme.id"
                    :id="theme.id"
                  />
                  <label :for="theme.id">{{ theme.name }}</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </main>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      me: require("../assets/img/p1.jpg"),
      setting: false,
      polices: [
        {
          name: "Pétite",
          id: "petite",
        },
        {
          name: "Moyenne",
          id: "moyenne",
        },
        {
          name: "Grande",
          id: "grande",
        },
      ],

      themes: [
        {
          name: "Claire",
          id: "claire",
        },
        {
          name: "Sombre",
          id: "sombre",
        },
      ],

      policeBody: "moyenne",
      themeBody: "claire",
      fontSize: "17px",

      dark: "17%",
      light: "95%",
      white: "100%",
    };
  },

  methods: {
    showSetting() {
      if (this.setting) {
        this.setting = false;
      } else {
        this.setting = true;
      }
    },

    changeActiveLink() {
      this.menuItem.forEach((item) => {
        item.classList.remove("active");
      });
    },

    changeFontSize() {
      if (this.policeBody == "petite") {
        this.fontSize = "13px";
      } else if (this.policeBody == "moyenne") {
        this.fontSize = "17px";
      } else if (this.policeBody == "grande") {
        this.fontSize = "18px";
      }

      document.querySelector("html").style.fontSize = this.fontSize;
    },

    changeTheme() {
      this.root.style.setProperty("--dark-color-lightness", this.dark);
      this.root.style.setProperty("--light-color-lightness", this.light);
      this.root.style.setProperty("--white-color-lightness", this.white);
    },

    changeBackground() {
      if (this.themeBody == "claire") {
        this.dark = "17%";
        this.light = "95%";
        this.white = "100%";
      } else {
        this.dark = "95%";
        this.light = "7%";
        this.white = "10%";
      }

      this.changeTheme();
    },
  },

  computed: {
    ...mapGetters(["users", "invitations"]),

    menuItem() {
      return document.querySelectorAll(".menu-item");
    },

    root() {
      return document.querySelector(":root");
    },
  },

  mounted() {
    this.menuItem.forEach((item) => {
      item.addEventListener("click", () => {
        this.changeActiveLink();
        item.classList.add("active");
      });
    });
  },
};
</script>

<style scoped>
</style>