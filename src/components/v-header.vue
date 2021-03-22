<template>
    <header class="header">
        <div class="header__top">
            <div class="header__logo__board">
            <a href="javascript: void(0)"><img src="src/assets/img/logo.png" alt="logo"></a>
            </div>
            <vHeaderNav />
        </div>

        <div class="header__banner__board">
            <div class="header__banner__board__content">
                <h2 class="header__banner__board__content__title">Все клубы в одном приложении</h2>
                <p>Найти клуб, купить абонемент, отследить тренировки, быть в курсе изменений расписания</p>
                <div class="header__banner__board__app__links__wrap">
                    <a href="javascript: void(0)" class="header__banner__board__app__link">
                        <img src="src/assets/img/app-store.png" alt="load in app store">
                    </a>
                    <a href="javascript: void(0)" class="header__banner__board__app__link">
                        <img src="src/assets/img/g-play.png" alt="load in google play">
                    </a>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
import vHeaderNav from './v-header-nav.vue'

export default {
    name: 'v-header',
    components: {
        vHeaderNav
    },
    data() {
        return {
        }
    }
}
</script>
<style lang="scss">
@import '../assets/styles/vars.scss';

    .header {
        font-family: 'Comfortaa', sans-serif;

        &__top {
            display: flex;
            padding: 38px 0;
        }

        &__logo__board {
            width: 25%;
            height: 150px;
            background-color: rgba(34, 186, 110, 0.99);
            border-radius: 75px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            padding-right: 3rem;
            margin-right: 50px;
            margin-left: -90px;
            transform: rotate(-10deg);
            -webkit-transform: rotate(-10deg);
            -moz-transform: rotate(-10deg);
            -ms-transform: rotate(-10deg);
            -o-transform: rotate(-10deg);


            img {
                width: 92px;
                height: 96px;
                transform: rotate(10deg);
                -webkit-transform: rotate(10deg);
                -moz-transform: rotate(10deg);
                -ms-transform: rotate(10deg);
                -o-transform: rotate(10deg);
            }
        }
    }

    .header__banner__board {
        width: 100%;
        height: 472px;
        padding: 130px 0 0 140px;
        background: url("../assets/img/banner.jpg") no-repeat;
        background-size: 128%;
        margin-top: -90px;

        &__content {
            width: 100%;
            max-width: 480px;
            display: flex;
            flex-direction: column;
            color: $banner_content_color;

            &__title {
                font-size: 45px;
                line-height: 48px;
            }

            p {
                font-size: 17px;
                line-height: 22px;
                margin-top: 23px;
                margin-bottom: 60px;
            }
        }

        &__app__link {
            display: inline-block;
            margin-right: 24px;
        }
    }

    @media screen and (max-width: 1070px) {
        .header__logo__board { width: 30%; }

        .header__banner__board {
            padding-top: 80px;
        }
    }
    @media screen and (max-width: 930px) {
        .header__logo__board { margin-left: -76px; }

        .header__banner__board {
            margin-top: -70px;
            background-size: 140%;
            padding: 60px 0 0 90px;
        }
    }

    @media screen and (max-width: 768px) {
        .header__top {
            padding: 20px 0;
        }

        .header__banner__board{
            background-size: cover;
            padding: 100px;
            margin-top: -60px;
        }

        .header__banner__board__content__title { 
            font-size: 35px; 
            line-height: 36px;
        }

        .header__banner__board__content p {
            font-size: 16px;
        }

        .header__logo__board {
            height: 120px;
            padding-right: 2rem;
            margin-left: -70px;
        }

        .header__logo__board img {
            width: 56px;
            height: 59px;
        }
    }

    @media screen and (max-width: 661px) {
        .header__top { min-height: 190px; }

        .header__logo__board {
            width: 35%;
            height: 100px;
            margin-right: 0;
        }

        .header__banner__board__app__link { margin-right: 6px; }
    }

    @media screen and (max-width: 544px) {
        .header__logo__board { width: 40%; }
        
        .header__banner__board {
            background-image: url("../assets/img/banner_bg_mob.jpg");
            padding: 80px 20px 0 30px;
        }

        .header__banner__board__app__link img {
            width: 140px;
        }
    }

    @media screen and (max-width: 425px) {
        .header__logo__board { 
            width: 44%; 
            padding-right: 22px;
        }

        .header__logo__board img { 
            width: 46px;
            height: auto; 
        }
    }

    @media screen and (max-width: 360px) {
        .header__banner__board {
            padding: 80px 20px;
            margin-top: -40px;
        }
    }
</style>