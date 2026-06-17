<script>
export default {
  computed: {
    products() {
      return this.$store.state.products
    }
  }
}
</script>

<template>
  <div>
   
    <div class="header">
      <p class="title">Stays nearby: <b>Toronto Ontario</b></p>
      <img src="/LayoutSelection.png" alt="" />
    </div>

    
    <div class="cards">
      <div class="card" v-for="product in products" :key="product.id">
        <img :src="product.image" alt="product" class="card-img" />
        
        <div class="info">
          <div class="row">
            <div class="names">
              <p class="name">{{ product.name }}</p>
              <p class="desc">{{ product.desc }}</p>
            </div>
            <span class="rating">⭐{{ product.zvezda }}</span>
          </div>
          <p class="price">${{ product.price }} <span>/night</span></p>
        </div>
      </div>
    </div>

    <button class="btn">Show more</button>
  </div>
</template>



<style scoped>

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 90px;
  margin-top: 50px;
}

.title {
  font-size: 25px;
}

.cards {
  padding: 30px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
}

.card {
  width: 315px;
  border: 1px solid #e8ecf2;
}

.card-img {
  width: 100%;
}

.info {
  padding: 15px;
}

.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.name {
  font-size: 20px;
  font-weight: 600;
}

.desc {
  opacity: 0.5;
  font-size: 18px;
}

.rating {
  font-size: 18px;
  font-weight: 600;
}

.price {
  font-size: 25px;
  font-weight: 600;
  margin: 10px 0 0 0;
}

.price span {
  font-size: 18px;
  opacity: 0.5;
  font-weight: 400;
}

.btn {
  display: block;
  margin: 0 auto 40px auto;
  padding: 12px 30px;
  font-size: 20px;
  background: none;
  border: 1px solid #00c29f;
  border-radius: 10px;
  color: #00c29f;
  cursor: pointer;
}

.btn:hover {
  background: #00c29f;
  color: white;
}
</style>