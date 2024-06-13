<template>
  <div class="container">
    <div class="main-wrap">
      <div class="main-left-form">
        <h2 class="main-left-form-title">Kontakt yaratish</h2>
        <div class="main-form-wrap">
          <div class="main-form-content">
            <div class="main-form-img-wrap">
              <img
                src="@/assets/images/avatar.png"
                alt=""
                class="main-form-img-wrap-img"
              />
              <div class="main-form-img-wrap-add">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  @click="openModal()"
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
            <div class="main-form-form">
              <form @submit.prevent="addContact">
                <div class="input-with-icon">
                  <img src="@/assets/images/user1.png" alt="" />
                  <input
                    type="text"
                    placeholder="Ism"
                    v-model="kontakts.firstname"
                    class="main-form-form-input"
                  />
                </div>
                <div class="input-with-icon">
                  <img src="@/assets/images/user2.png" alt="" />
                  <input
                    type="text"
                    placeholder="Familiya"
                    v-model="kontakts.lastname"
                    class="main-form-form-input"
                  />
                </div>
                <div class="input-with-icon">
                  <img src="@/assets/images/user3.png" alt="" />
                  <input
                    type="text"
                    placeholder="Telefon raqam"
                    v-model="kontakts.number"
                    class="main-form-form-input"
                  />
                </div>
                <div class="input-with-icon">
                  <img src="@/assets/images/email.png" alt="" />
                  <input
                    type="text"
                    placeholder="Elektron pochta"
                    v-model="kontakts.email"
                    class="main-form-form-input"
                  />
                </div>
                <div class="input-with-icon">
                  <img src="@/assets/images/description.png" alt="" />
                  <input
                    type="text"
                    placeholder="Qo'shimcha  ma'lumot"
                    v-model="kontakts.description"
                    class="main-form-form-input"
                  />
                </div>
                <button type="submit" class="main-form-form-btn">
                  <img src="@/assets/images/star.png" alt="" /> Qo'shish
                  <span></span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="main-right-list">
        <div class="right-list">
          <h2 class="right-list-title">Kontaktlar</h2>
          <div class="list-bottom">
            <div class="list-bottom-first">
              <p class="list-bottom-name">{{ name }}</p>
              <div>
                <img src="@/assets/images/list-avatar.png" alt="" />
              </div>
            </div>
            <div class="list-bottom-get">
              <div class="list-bottom-get-form">
                <form action="" method="get">
                  <img src="@/assets/images/search.png" alt="" />
                  <input
                    type="text"
                    placeholder="Kontakt qidirish"
                    class="list-bottom-get-form-input"
                    v-model="searchQuery"
                  />
                  <button type="submit" class="list-bottom-get-form-btn">
                    Barchasi
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <ListItem />
      </div>
      <Modal v-if="modal" @close="closeModal" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ListItem from "./ListItem.vue";
import Modal from "./Modal.vue";
import { ref, computed } from "vue";
export default {
  components: {
    ListItem,
    Modal,
  },

  data() {
    return {
      kontakts: {
        firstname: "",
        lastname: "",
        number: "",
        email: "",
        description: "",
      },
      name: "",
      errorMessage: "",
      contact: "",
      contacts: [],
      modal: false,
    };
  },
  setup() {
    const searchQuery = ref("");
    const searchedProducts = computed(() => {
      return contacts.value.filter((product) => {
        return (
          product.firstname
            .toLowerCase()
            .indexOf(searchQuery.value.toLowerCase()) != -1
        );
      });
    });
    return { searchQuery, searchedProducts };
  },
  mounted() {
    this.username();
    this.getContact();
  },
  methods: {
    async username() {
      try {
        const res = await axios.get("http://localhost:2000/dashboard");
        this.name = res.data.user_firstname;
        withCredentials: false;
      } catch (error) {
        console.error(error);
      }
    },
    async addContact() {
      try {
        const response = await axios.post(
          "http://localhost:2000/register/addContacts",
          this.kontakts
        );
        window.location.reload();
        console.log(this.response);
      } catch (error) {
        console.log(error);
      }
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
    openModal() {
      this.modal = !this.modal;
    },
    closeModal() {
      this.modal = false; 
    },
  },
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
  left: 8px;
  top: 38%;
  transform: translateY(-50%);
  color: #aaa; /* Adjust icon color */
  cursor: pointer; /* Add cursor pointer */
}

.main-left-form {
  height: 580px;
}
.main-right-list {
  padding: 24px;
  .right-list {
    width: 836px;
    &-title {
      font-family: "Outfit";
      font-weight: 500;
      font-size: 26px;
      line-height: 123%;
      color: #212a3e;
      text-align: center;
      padding-bottom: 20px;
    }
  }
  .list-bottom {
    padding: 16px 16px;
    background: #f6f9fa;
    border-radius: 20px;
    width: 837px;
    &-first {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &-name {
      font-family: "Outfit";
      font-weight: 500;
      font-size: 18px;
      line-height: 133%;
      color: #212a3e;
    }
    &-get-form {
      border: 1px solid #394867;
      border-radius: 8px;
      padding: 8px 0px;
      width: 804px;
      height: 36px;
      margin-top: 22px;
      display: flex;
      align-items: center;
      & img {
        border-right: 1px solid #394867;
        padding-right: 12px;
      }
      &-input {
        width: 654px;
        height: 20px;
        font-family: "Outfit";
        font-weight: 400;
        font-size: 16px;
        line-height: 125%;
        color: rgba(57, 72, 103, 0.7);
        padding: 0 10px;
        border: none;
        outline: none;
        background: transparent;
      }
      &-btn {
        border-left: 1px solid #394867;
        font-family: "Outfit";
        font-weight: 400;
        font-size: 16px;
        line-height: 125%;
        color: #394867;
        border: none;
        padding-left: 12px;
        background: transparent;
      }
    }
  }
}

.main-wrap {
  margin-top: 48px;
  display: flex;
  // align-items: center;
  justify-content: space-between;
  position: relative;
  .main-left-form {
    &-title {
      font-family: "Outfit";
      font-weight: 500;
      font-size: 26px;
      line-height: 123%;
      color: #212a3e;
      padding-bottom: 20px;
    }
  }
  .main-form {
    &-content {
      position: relative;
    }
    &-wrap {
      border-radius: 20px;
      width: 380px;
      height: 499px;
    }
    &-img-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #394867;
      position: relative;
      border-bottom: 1px solid rgba(57, 72, 103, 0.7);
      border-radius: 20px 20px 0 0;
      width: 380px;
      height: 217px;
      &-img {
        border: 2px solid rgba(255, 255, 255, 0.5);
        border-radius: 999px;
        width: 144px;
        height: 144px;
      }
      &-add {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        right: 33%;
        bottom: 15%;
        border: 2px solid rgba(57, 72, 103, 0.7);
        border-radius: 999px;
        padding: 10px;
        width: 40px;
        height: 40px;
        background: #fff;
        cursor: pointer;
      }
    }
    &-form {
      background: #f6f9fa;
      border-radius: 20px;
      padding: 16px;
      width: 380px;
      height: 298px;
      position: absolute;
      top: 92%;
      bottom: 0%;
      &-input {
        border: 1px solid #394867;
        border-radius: 8px;
        padding: 8px 0px;
        padding-left: 30px;
        margin-bottom: 10px;
        width: 348px;
        height: 36px;
      }
      &-btn {
        display: flex;
        align-items: center;
        justify-content: space-around;
        background: #394867;
        border: 1px solid #394867;
        border-radius: 8px;
        padding: 8px 0px;
        width: 348px;
        height: 36px;
        font-family: "Outfit";
        font-weight: 400;
        font-size: 16px;
        line-height: 125%;
        color: #fff;
      }
    }
  }
}
</style>