<template>
    <nav class="navbar">
        <div class="container">
            <div class="navbar-wrap">
                <button class="navbar-first-btn"> Websayt kodlari <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296" stroke="#394867" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M13.9868 5L12.9934 8.70743M11.8432 13L10.0132 19.8297" stroke="#394867" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296" stroke="#394867" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                </button>
                <p class="navbar-title">Kontaktlar</p>
                <button class="navbar-second-btn" @click="logout"> 
                    <!-- <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.875 16.5H9.45C8.85 15.15 7.575 14.25 6 14.25C3.9 14.25 2.25 15.9 2.25 18C2.25 20.1 3.9 21.75 6 21.75C6.075 21.75 6.15 21.75 6.225 21.75C6.3 21.75 6.375 21.75 6.375 21.75H10.875C12.3 21.75 13.5 20.55 13.5 19.125C13.5 17.7 12.3 16.5 10.875 16.5Z" stroke="#394867" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M6 14.25C8.1 14.25 9.75 15.9 9.75 18" stroke="#394867" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M20.175 5.1H19.275C18.975 4.275 18.15 3.75 17.25 3.75C15.975 3.75 15 4.725 15 6C15 7.275 15.975 8.25 17.25 8.25C17.325 8.25 17.325 8.25 17.4 8.25C17.475 8.25 17.475 8.25 17.475 8.25H20.175C21.075 8.25 21.75 7.575 21.75 6.675C21.75 5.775 21.075 5.1 20.175 5.1Z" stroke="#394867" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M17.25 3.75C18.525 3.75 19.5 4.725 19.5 6" stroke="#394867" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M13.275 20.25C18 20.025 21.75 16.125 21.75 11.325C20.625 13.5 18.375 15 15.75 15C12 15 9 12 9 8.25C9 5.625 10.5 3.375 12.675 2.25C7.725 2.325 3.75 6.3 3.75 11.25C3.75 12.45 3.975 13.575 4.425 14.625" stroke="#394867" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg> -->
                    log out
                </button>
            </div>
        </div>
    </nav>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            
        }
    },
    methods:{
        async logout(){
            try {
                await axios.get("http://localhost:2000/logout")
                this.$router.push("/")
            } catch (error) {
                console.log(error);
            }
        } 
    }
}
</script>

<style lang="scss">
.navbar{
    &-wrap{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding:16px 0;
    }
        background: #f6f9fa;
    &-first-btn{
        font-family: "Outfit";
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 8px;
        padding: 8px 13px;
        border: 1px solid #394867;
        border-radius: 12px;
        height: 40px;
        font-weight: 400;
        font-size: 16px;
        line-height: 125%;
        color: #394867;
        cursor:pointer;
    }
    &-title{
        font-family: "Outfit";
        font-weight: 600;
        font-size: 32px;
        line-height: 125%;
        color: #212a3e
    }
    &-second-btn{
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 8px;
        border: 1px solid #394867;
        border-radius: 12px;
        padding: 8px 13px;
        height: 40px;
        font-family:"Outfit";
        font-weight: 400;
        font-size: 16px;
        line-height: 125%;
        color: #394867;
        cursor:pointer;
    }
}
</style>