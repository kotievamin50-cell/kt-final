<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "",      
      email: "",
      password: "",
      confirm: "",
    };
  },
  methods: {
    async register() {
  
  if (this.password !== this.confirm) {
    alert("Пароли не совпадают!");
    return;  
  }

  console.log("Отправка:", {
    name: this.name,
    email: this.email,
    password: this.password
  });

  try {
    const response = await axios.post(
      "http://localhost:5000/auth/register",
      {
        name: this.name,
        email: this.email,
        password: this.password
      }
    );
    console.log("Ответ:", response.data);
    alert("Регистрация успешна!");
    
    this.$router.push("/login");
    
  } catch (error) {
    console.error("Ошибка:", error);
    alert("Ошибка: " + (error.response?.data?.message || error.message));
  }
}
  }
};
</script>

<template>
  <div class="wrapper">
    <div class="signup">
      <div class="card">
        <h1>Create Account</h1>

        <form @submit.prevent="register">
          <div class="field">
            <input v-model="name" type="text" placeholder="Full name" />
          </div>

          <div class="field">
            <input v-model="email" type="email" placeholder="Email address" />
          </div>

          <div class="field">
            <input v-model="password" type="password" placeholder="Password" />
          </div>

          <div class="field">
            <input v-model="confirm" type="password" placeholder="Confirm password" />
          </div>

          <button type="submit">Sign Up</button>
        </form>

        <div class="line"></div>

        <div class="social-row">
          <button class="social-btn google">
            <img src="../assets/g.png" alt="">
            <span>Google</span>
          </button>
          <button class="social-btn facebook">
            <img src="../assets/f.png" alt="">
            <span>Facebook</span>
          </button>
          <button class="social-btn apple">
            <img src="../assets/i.png" alt="">
            <span>Apple</span>
          </button>
        </div>

        <p class="link">
          Already have an account?
          <router-link to="/login">Sign in</router-link>
        </p>
      </div>
    </div>

    <div class="footer">
      <p>© 2023 Localhost, Inc. All Rights Reserved</p>
      <div class="footer-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">Contact us</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.wrapper {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-image: url('../assets/imagee.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.signup {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  width: 100%;
  flex: 1;
}

.card {
  width: 100%;
  max-width: 420px;
  background: #fff;
  border: 1px solid #e8ecf2;
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.card h1 {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 28px;
  color: #111;
}

.field {
  margin-bottom: 20px;
}

.field input {
  width: 100%;
  height: 48px;
  padding: 0 16px;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  font-size: 14px;
  outline: none;
  box-sizing: border-box;
}

.field input:focus {
  border-color: #23c8b5;
}

button {
  width: 200px;
  height: 58px;
  border: none;
  border-radius: 6px;
  background: #23c8b5;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
}

button[type="submit"]:hover {
  background: #1db4a3;
}

.line {
  height: 1px;
  background: #e0e0e0;
  margin: 24px 0;
}

.social-row {
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
}

.social-btn {
  width: 164px;
  height: 125px;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  background: #f8f8f8;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  transition: background 0.2s;
  flex-direction: column;
}

.social-btn:hover {
  background: #f5f5f5;
}

.google span,
.facebook span,
.apple span {
  color: #787878;
}

.link {
  text-align: center;
  font-size: 14px;
  color: #555;
}

.link a {
  color: #23c8b5;
  text-decoration: none;
  font-weight: 600;
}

.link a:hover {
  text-decoration: underline;
}

.footer {
  position: relative;
  width: 100%;
  text-align: center;
  padding: 5px;
  color: black;
  font-size: 12px;
  background: white;
}

.footer p {
  margin-bottom: 8px;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.footer-links a {
  color: black;
  text-decoration: none;
  font-size: 12px;
}

.footer-links a:hover {
  text-decoration: underline;
}
</style>