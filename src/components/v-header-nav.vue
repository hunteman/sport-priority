<template>
    <div class="v__header__nav">
        <div class="v__header__nav__areas__item__link__wrap">
            <a href="javascript: void(0)" class="v__header__nav__areas__item__link">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" class="v__header__nav__areas__icon">
                    <path d="M10.21 15.749H7.194L5.186 13.882L7.194 12.015H13.227L14.565 10.148H19.92L21.928 13.968L19.92 17.825H14.744L13.227 15.75M14 1C16.5712 1 19.0846 1.76244 21.2224 3.1909C23.3603 4.61935 25.0265 6.64968 26.0104 9.02512C26.9944 11.4006 27.2518 14.0144 26.7502 16.5362C26.2486 19.0579 25.0105 21.3743 23.1924 23.1924C21.3743 25.0105 19.0579 26.2486 16.5362 26.7502C14.0144 27.2518 11.4006 26.9944 9.02512 26.0104C6.64968 25.0265 4.61935 23.3603 3.19089 21.2224C1.76243 19.0846 1 16.5712 1 14C1 10.5522 2.36964 7.24559 4.80762 4.80761C7.24559 2.36964 10.5522 1 14 1V1Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <circle cx="17.5" cy="13.5" r="1.5"/>
                </svg>
                <span>Кабинет клуба</span>
            </a>
            <a href="javascript: void(0)" class="v__header__nav__areas__item__link">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="28" class="v__header__nav__areas__icon">
                    <path d="M16 1A13 13 0 113 14 13 13 0 0116 1zM1 14h17m-3-4.731l5.024 5.244L15 19.757"  fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                </svg>
                <span>Приложение</span>
            </a>
        </div>
        <ul class="v__header__nav__item__list">
            <li><a href="javascript: void(0)" class="v__header__nav__link">Готовый сайт клуба</a></li>
            <li><a href="javascript: void(0)" class="v__header__nav__link">Приложение для фитнес клубов</a></li>
            <li><a href="javascript: void(0)" class="v__header__nav__link">Интерактивное расписание</a></li>
            <li><a href="javascript: void(0)" class="v__header__nav__link">О нашем клубе</a></li>
        </ul>         
        <span class="v__header__nav__more__items__icon_wrap" @click="toggleShowMenu">
            <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M10 19.524A9.524 9.524 0 0019.524 10 9.524 9.524 0 1010 19.524z" fill="#fff" stroke="#B7B9C6"/><g clip-path="url(#clip1)"><path d="M6.132 8.915l3.786 3.81 3.83-3.816" stroke="#989BAF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h20v20H0z"/></clipPath><clipPath id="clip1"><path fill="#fff" transform="translate(5.185 7.963)" d="M0 0h9.524v5.714H0z"/></clipPath></defs></svg>
        </span>
    </div>
</template>

<script>
export default {
    name: "v-header-nav",
    data () {
        return {
            isShow: false,
        }
    },
    methods: {
        toggleShowMenu() {
            document.querySelector('.v__header__nav').classList.toggle('open__menu');
            this.isShow = !this.isShow;
        }
    }
}
</script>

<style lang="scss">
    @import '../assets/styles/vars.scss';

    .v__header__nav {
        display: flex;
        flex-wrap: wrap;
        font-size: 14px;
        margin-bottom: 50px;
        width: 70%;

        &__areas__item__link__wrap { 
            width: 100%;
            display: flex; 
            flex-wrap: wrap;
        }

        a {
            display: flex;
            align-items: center;
            color: $nav_color;
            text-decoration: none;
            margin-right: 50px;
            margin-bottom: 12px;
            transition: all .25s cubic-bezier(0.175, 0.885, 0.32, 1.275);

            &:hover { color: $nav_green_hover_color; }
        }

        &__item__list {
            display: flex;
            flex-wrap: wrap;
            list-style-type: none;
        }

        &__areas__item__link {
            .v__header__nav__areas__icon {
                stroke: $nav_color;
                transition: all .25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            }

            circle {
                fill: $nav_color;
            }

            &:active {
                color: $nav_green_hover_color;
            }
            &:hover .v__header__nav__areas__icon {
                stroke: $nav_green_hover_color;
            }
            &:active .v__header__nav__areas__icon {
                stroke: $nav_green_hover_color;
            }
            &:hover circle {
                fill: $nav_green_hover_color;
            }
            &:active circle {
                fill: $nav_green_hover_color;
            }

            span {
                margin-left: 13px;
            }
        }

        &__more__items__icon_wrap {
            position: absolute;
            left: 50%;
            bottom: -12px;
            margin: 0 auto;
            display: none;
            align-items: center;
            justify-content: center;
        }

        &__more__items__icon_wrap svg {
            transition: all .3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
    }

    @media screen and (max-width: 661px) {
        .v__header__nav {
            position: absolute;
            top: 0;
            right: 10px;
            width: 65%;
            background: #ffffff;
            padding: 18px 10px 12px 10px;
            border-bottom: 1px dashed #989baf;
            transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            padding-bottom: 10px;
        }

        .v__header__nav a { margin-right: 0; }

        .v__header__nav__item__list li:nth-child(n + 4) { 
            overflow: hidden;
            max-height: 0;
            transition: all .3s linear;
        }

        .v__header__nav__areas__item__link__wrap {
            order: 2;
            overflow: hidden;
            max-height: 0;
            transition: all .3s linear;
        }

        .v__header__nav a.v__header__nav__areas__item__link {
            margin-right: 30px;
        }

        .v__header__nav__more__items__icon_wrap { display: block; }

        .v__header__nav.open__menu  .v__header__nav__more__items__icon_wrap svg {
            transform: rotate(180deg);
        }
        .v__header__nav.open__menu  .v__header__nav__areas__item__link__wrap {
            max-height: 100px;
        }
        .v__header__nav.open__menu  .v__header__nav__item__list li:nth-child(n + 4) { 
            max-height: 100px;
        }

        .v__header__nav__item__list { flex-direction: column; }
    }

    @media screen and (max-width: 425px) {
        .v__header__nav {
            width: 70%;
            padding: 18px 0 12px 10px;
        }
    }
</style>