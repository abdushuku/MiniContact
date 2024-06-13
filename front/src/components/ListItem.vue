<template>
  <div>
    <p v-if="message">{{message}}</p>
    <div v-if="!contacts.length" class="default">
      <h1>hozircha hech qanday Kontakt yoq</h1>
    </div>
    <div v-else>
      <div v-for="(info, index) in contacts" :key="index" class="item">
        <div class="item-main">
          <div class="item-main-img">
            <img src="@/assets/images/list-img.png" alt="" class="item-img" />
          </div>
          <div class="item-main-userInfo">
            <h2 class="item-main-userInfo-username">
              {{ info.firstname }} {{ info.lastname }}
            </h2>
            <p class="item-main-userInfo-number">+{{ info.number }}</p>
          </div>
        </div>
        <div class="item-right">
          <img
            @click="switchStar(index)"
            src="@/assets/images/star2.png"
            v-if="info.starred"
            alt=""
            class="star1"
          />
          <img
            @click="switchStar(index)"
            src="@/assets/images/star1.png"
            v-else
            alt=""
            class="star2"
          />
          <svg 
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg" @click="openBtn(index)">
            <rect
              x="10.5"
              y="3.5"
              width="3"
              height="3"
              rx="1.5"
              fill="#394867"
            />
            <rect
              x="10.5"
              y="10.5"
              width="3"
              height="3"
              rx="1.5"
              fill="#394867"
            />
            <rect
              x="10.5"
              y="17.5"
              width="3"
              height="3"
              rx="1.5"
              fill="#394867"
            />
          </svg>
         <button v-if="contacts[index].open" @click="sendId(contacts[index].id)">delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      // switch: false,
      open:false,
      contacts: [],
      userId:null,
      message:'',
    };
  },
  watch: {
    userId(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.getContact(newValue);
      }
    }
  },
  mounted() {
    this.getContact();
    this.Interval = setInterval(this.thisMessage(), 2000)
  },
    beforeUnmount(){
      clearInterval(this.Interval)
    },
  methods: {
    switchStar(index) {
      this.contacts[index].starred = !this.contacts[index].starred;
    },
    openBtn(index){
        this.contacts[index].open = !this.contacts[index].open;
        },
    async getContact() {
      try {
        const response = await axios.get("http://localhost:2000/getInfos");
        this.contacts = response.data;
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    },
    async sendId(id){
      try {
        const res = await axios.delete(`http://localhost:2000/register/delete/${id}`)
        this.message = res.data
      } catch (error) {
        console.log(error);
      }
      window.location.reload();
      this.open = false
    },
    thisMessage(){
      return this.message
    }
  },
};
</script>

<style lang="scss">
.item {
    &:nth-child(even){
        background: rgba(57, 72, 103, 0.05);
        border-radius: 19px;
    }
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  width: 836px;
  height: 100px;
  &-main {
    display: flex;
    align-items: center;
    column-gap: 12px;
    &-userInfo {
      display: flex;
      flex-direction: column;
      gap: 12px;
      &-username {
        font-family: "Outfit";
        font-weight: 500;
        font-size: 18px;
        line-height: 133%;
        color: #212a3e;
      }
      &-number {
        font-family: "Outfit";
        font-weight: 400;
        font-size: 16px;
        line-height: 125%;
        color: #394867;
      }
    }
  }
  &-right {
    display: flex;
    align-items: center;
    column-gap: 8px;
    position: relative;;
    & img {
      cursor: pointer;
    }
    & svg {
      cursor: pointer;
    }
    & button{
      position: absolute;
      bottom: -48px;
      right: -90px;
      padding: 10px;
      width: 150px;
      cursor: pointer;
      border-radius: 9px;
      border: 1px solid #394867;
      font-style: 19px;
      line-height: 20px;
      font-weight: 500;
      font-family: "Outfit";
      color: #f33636;
      background: #fff;
    }
  }
}
.desfult {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Outfit";
}
</style>