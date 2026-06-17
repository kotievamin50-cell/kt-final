<template>
  <header class="header">
    <router-link to="/" class="logo">
      <img src="../assets/logo.png" alt="логотип" />
    </router-link>

    <div class="nav">
      <router-link to="/">Home</router-link>
      <a href="#">Stays</a>
      <a href="#">Become a host</a>
      <router-link v-if="!user" to="/login">Sign in</router-link>
      
    </div>
  </header>


  <section class="hero">
    <div class="hero-wrap">
      <h1>Find a <span>host</span> for every journey</h1>
      <p>Discover the best local rental properties that fits your every travel needs</p>

      <div class="search-box">
        <div class="search-item acc">
          <input type="text" placeholder="Accommodation" />
          <img src="/public/image/home1.png" alt="" class="icon" />
        </div>

        <div class="search-item">
          <input type="text" placeholder="Check-in" />
          <img src="/public/image/calendar.png" alt="" class="icon" />
        </div>

        <div class="search-item">
          <input type="text" placeholder="Check-out" />
          <img src="/public/image/calendar.png" alt="" class="icon" />
        </div>

        <div class="search-item">
          <input type="text" placeholder="Guest" />
          <img src="/public/image/user.png" alt="" class="icon" />
        </div>

        <button class="search-btn">
          <img src="/public/image/icon.png" alt="" />
          <span>Search</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      if (this.$route.path !== "/") {
        this.$router.push("/");
      }
    },
  },
};
</script>

<style scoped>
/* Хедер */
.header {
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 50px;
  background: #F0F2F3;
}

.logo img {
  width: 111px;
}

.nav {
  display: flex;
  align-items: center;
  gap: 20px;
}

.nav a {
  color: black;
  text-decoration: none;
}

.nav a.router-link-active {
  color: #23c8b5;
  font-weight: 600;
}




.hero {
  padding: 45px 45px 25px;
  background-image: url("/public/image/image.png");
  background-size: cover;
  background-position: center;
}

.hero-wrap {
  width: 100%;
}

.hero h1 {
  font-size: 52px;
  font-weight: 700;
  color: #111;
  margin: 0;
}

.hero h1 span {
  color: #23c8b5;
}

.hero p {
  margin-top: 12px;
  margin-bottom: 28px;
  font-size: 18px;
  color: #333;
}

.search-box {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #fff;
  padding: 12px;
  border-radius: 10px;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.08);
}

.search-item {
  height: 56px;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  width: 150px;
}

.search-item.acc {
  flex: 1;
}

.search-item input {
  border: none;
  outline: none;
  padding: 0 16px;
  width: 100%;
  font-size: 14px;
  background: transparent;
}

.icon {
  width: 24px;
  height: 24px;
  margin-right: 16px;
}

.search-btn {
  width: 140px;
  height: 56px;
  border: none;
  border-radius: 6px;
  background: #23c8b5;
  color: white;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.search-btn:hover {
  background: #1db4a3;
}
</style>