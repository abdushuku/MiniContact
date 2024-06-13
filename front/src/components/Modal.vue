<template>
  <div class="modal">
    <div class="modal-backdrop">
      <div class="modal-wrap">
        <div>
          <h2>select foto</h2>
          <img src="@/assets/images/Cancel.png" alt=""  @click="close()"/>
        </div>
        <form enctype="multipart/form-data" @submit.prevent="addAttachment" class="modal-form">
          <input type="file" name="img" id="" @change="previewImage" />
          <button type="submit">Push</button>
        </form>
        <img
          v-if="previewUrl"
          :src="previewUrl"
          alt="Preview Image"
          class="modal-img"
        />
      </div>
    </div>
  </div>
</template>

<script>
import  axios from 'axios';
export default {
  data() {
    return {
      previewUrl: "",
      isOpen: false,
    };
  },
  methods: {
    previewImage(event) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.previewUrl = reader.result;
      };
      reader.readAsDataURL(file);
    },
    close() {
      this.$emit("close");
    },
   async addAttachment() {
    try {
      const response = await axios.post("http://localhost:2000/register/attachment", { image: this.previewUrl });
      console.log(response.data); 
    } catch (error) {
      console.error(error);
    }
  }
  },
};
</script>

<style lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(77, 76, 76, 0.5);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  &-backdrop {
    width: 350px;
    height: 350px;
    padding: 10px;
    border: 1px solid #000;
    border-radius: 24px;
    background: #394867;
  }
  &-wrap {
    position: absolute;
    z-index: 9999;
    & div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      & h2 {
        color: #fff;
        font-weight: 500;
        font-size: 29px;
        font-family: "Outfit";
        line-height: 30px;
        padding-bottom: 25px;
      }
      & img {
        width: 40px;
        height: 40px;
        cursor: pointer;
      }
    }
  }
  &-img {
    padding-top: 20px;
    width: 311px;
    height: 210px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &-form {
    width: 320px;
    border: 1px solid #fcfcfc;
    border-radius: 4px;
    & input {
      color: #fff;
    }
    & button {
      padding: 9px;
      width: 65px;
      background: transparent;
      color: #fff;
      border-left-color: #fff;
    }
  }
}
</style>