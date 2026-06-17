import { createStore } from "vuex";



export default createStore({
  state: {
    user: [],
    users: [],
    products: [
      {
        id: 1,
        name: "Brightwoods Cabins",
        price: 658,
        image: "/image/pr1.png",  
        zvezda: 4.9,
        desc:"Bridlepath, Ontario, Canada"
      },
      {
        id: 2,
        name: "Missisuaga Aistream",
        price: 502,
        image: "/image/pr2.png",
        zvezda:4.8,
        desc:"Missisauga, Ontario, Canada"
      },
      {
        id: 3,
        name: "Library Stool Chair",
        price: 410,
        image: "/image/pr3.png",
        zvezda:4.5,
        desc:"Georgina Bay, Ontario, Canada"
      },
      {
        id: 4,
        name: "Library Stool Chair",
        price: 325,
        image: "/image/pr4.png",
        zvezda:5.0,
        desc:"Simcoe, Ontario Canada"
      },
      {
        id: 5,
        name: "Library Stool Chair",
        price: 485,
        image: "/image/pr5.png",
        zvezda:4.6,
        desc: "Markham, Ontario Canada"
      },
      {
        id: 6,
        name: "Library Stool Chair",
        price: 655,
        image: "/image/pr6.png",
        zvezda:4.9,
        desc:"Niagara, Ontario, Canada"
      },
      {
        id: 7,
        name: "Library Stool Chair",
        price: 320,
        image: "/image/pr7.png",
        zvezda:5.0,
        desc:"Barcort, Ontario Canada"
      },
      {
        id: 8,
        name: "Library Stool Chair",
        price: 350,
        image: "/image/pr8.png",
        zvezda:5.0,
        desc:"Lawrence, Ontario Canada"
      },
      {
        id: 9,
        name: "Library Stool Chair",
        price: 395,
        image: "/image/pr9.png",
        zvezda:5.0,
        desc:"Simcoe, Ontario, Canada"
      },
      {
        id: 10,
        name: "Library Stool Chair",
        price: 385,
        image: "/image/pr10.png",
        zvezda:5.0,
        desc:"Georgina Bay, Ontario, Canada"
      },
       {
        id: 11,
        name: "Banff Hills",
        price: 385,
        image: "/image/pr11.png",
        zvezda:5.0,
        desc:"Banff, Alberta, Canada"
      },
        {
        id: 12,
        name: "Creemore Canada",
        price: 385,
        image: "/image/pr12.png",
        zvezda:5.0,
        desc:"Creemore, Alberta, Canada"
      },
        {
        id: 13,
        name: "Kawartha Lakes",
        price: 385,
        image: "/image/pr13.png",
        zvezda:5.0,
        desc:"Kawartha, Alberta,  Canada"
      },
        {
        id: 14,
        name: "Revelstoke Cabin",
        price: 385,
        image: "/image/pr14.png",
        zvezda:5.0,
        desc:"Revelstoke, Alberta, Canada"
      },
        {
        id: 15,
        name: "Brightwoods Estate",
        price: 385,
        image: "/image/pr15.png",
        zvezda:5.0,
        desc:"Brightwoods Estate"
      },
        {
        id: 16,
        name: "Brightwoods Estate",
        price: 385,
        image: "/image/pr16.png",
        zvezda:5.0,
        desc:"Brightwoods Estate"
      },
      
    ]
  },
  mutations: {
    
    ADD_PRODUCT(state, product) {
      state.products.push(product);
    },
    DELETE_PRODUCT(state, productId) {
      state.products = state.products.filter((product) => product.id !== productId);
    },
  },
 
});