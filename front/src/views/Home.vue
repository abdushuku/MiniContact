<template>
  <div class="container">
    <div class="form-wrap">
      <div class="form-cantent">
        <div class="form-img">
          <div class="form-img-wrap">
            <img src="@/assets/images/avatar.png" alt="" class="form-img-wrap-img" />
            <div class="form-img-wrap-addimg">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 11.5V7.5C2.5 6.39543 3.39543 5.5 4.5 5.5H11.5M2.52693 19.829C2.68385 20.777 3.5075 21.5 4.5 21.5H16.5C17.6046 21.5 18.5 20.6046 18.5 19.5V15.6901M2.52693 19.829C2.50922 19.722 2.5 19.6121 2.5 19.5V16.5M2.52693 19.829L6.34762 16.0083C7.02765 15.4133 8.02219 15.3481 8.774 15.8494L9.2832 16.1888C10.0078 16.6719 10.9619 16.6305 11.642 16.0864L14.2901 13.9679C14.9651 13.4279 15.9053 13.3855 16.6228 13.8484C16.7023 13.8997 16.7731 13.9632 16.84 14.0301L18.5 15.6901M18.5 15.6901L18.5 12.5M18.5 8.5V5.5M18.5 2.5V5.5M18.5 5.5H15.5H21.5M9.5 10.5C9.5 11.6046 8.6046 12.5 7.5 12.5C6.39543 12.5 5.5 11.6046 5.5 10.5C5.5 9.39543 6.39543 8.5 7.5 8.5C8.6046 8.5 9.5 9.39543 9.5 10.5Z"
                  stroke="#394867"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="form-form">
          <h2 class="form-title">Iltimos ismingizni kiriting</h2>
          <form @submit.prevent="userInfo">
            <div class="form-group">
              <div class="input-with-icon">
                <img src="@/assets/images/user1.png" alt="" />
                <input
                  type="text"
                  placeholder="Ism"
                  v-model="info.firstname"
                  class="form-form-input"
                />
              </div>
              <div class="input-with-icon">
                <img src="@/assets/images/user2.png" alt="" />
                <input
                  type="text"
                  placeholder="Familiya (Ixtiyoriy)"
                  v-model="info.lastname"
                  class="form-form-input"
                />
              </div>
              <button type="submit" class="form-btn">kirish</button>
            </div>
            <p>{{errorMessage}}</p>
          </form>
        </div>
        <img
          src="@/assets/images/form-wrap-right-bottom.png"
          alt=""
          class="form-img-bottom"
        />
        <img
          src="@/assets/images/form-wrap-left-bottom.png"
          alt=""
          class="form-img-left-bottom"
        />
        <img
          src="@/assets/images/form-wrap-left-top.png"
          alt=""
          class="form-img-left-top"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data(){
    return{
      info:{
        firstname:"",
        lastname:""
      },
      errorMessage:'',
    }
  },
  methods:{
    async userInfo(){
      try {
        const response = await axios.post("http://localhost:2000/register/signup", this.info);
        this.errorMessage = response.data 
        this.$router.push("/dashboard")
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style lang="scss">
.input-with-icon {
  position: relative;
  width: 300px;
}
.input-with-icon input {
  padding-left: 30px;
  width: 100%;
  box-sizing: border-box;
  width: 348px;
}
.input-with-icon input::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #000;
  height: 3px;
  width: 1px;
}
.input-with-icon img {
  position: absolute;
  left: 8px; /* Adjust according to your icon size */
  top: 50%;
  transform: translateY(-50%);
  color: #aaa; /* Adjust icon color */
  cursor: pointer; /* Add cursor pointer */
}

.form {
  &-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    position: relative;
  }
  &-cantent {
    background: #394867;
    border-radius: 20px;
    width: 380px;
    height: 410px;
    box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.15);
  }
  &-img {
    width: 380px;
    height: 217px;
    display: flex;
    align-items: center;
    justify-content: center;
    &-wrap{
      position: relative;
      &-img{
        border: 2px solid rgba(57, 72, 103, 0.7);
        border-radius: 50%;
      }
      &-addimg{
        cursor: pointer;
        position: absolute;
        right: 5px;
        bottom: 0px;
        background: #fff;
        border: 2px solid rgba(57, 72, 103, 0.7);
        border-radius: 999px;
        padding: 10px;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  &-form {
    background: #fff;
    border-radius: 20px;
    padding: 16px;
    height: 194px;
    &-input {
      border-radius: 8px;
      outline: none;
      padding: 8px 0px;
      height: 36px;
      &::placeholder {
        font-weight: 400;
        font-size: 16px;
        line-height: 125%;
        color: rgba(57, 72, 103, 0.7);
      }
    }
  }
  &-group {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  }
  &-title {
    font-family: 'Outfit';
    font-weight: 500;
    padding-bottom: 10px;
    font-size: 18px;
    line-height: 133%;
    color: #2e3a54;
  }
  &-btn {
    border: 1px solid #394867;
    border-radius: 8px;
    padding: 8px 0px;
    width: 348px;
    background: #394867;
    height: 36px;
    font-weight: 400;
    font-size: 16px;
    line-height: 125%;
    color: #fff;
  }
  &-img-bottom {
    position: absolute;
    right: -78px;
    bottom: -56px;
    z-index: -1;
  }
  &-img-left-bottom {
    position: absolute;
    left: 25%;
    bottom: -58px;
  }
  &-img-left-top {
    position: absolute;
    left: 5%;
    top: 28%;
  }
}
</style>