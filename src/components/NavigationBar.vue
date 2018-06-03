<template>
    <div class="navigation-bar">
        <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <router-link class="navbar-item" to="/">
                    <img src="../assets/logo.png">
                </router-link>

                <a role="button" class="navbar-burger navbar-item is-hidden-desktop" aria-label="menu" aria-expanded="false" @click="toggleMenu">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div class="navbar-menu">
                <div class="navbar-start">
                    <router-link class="navbar-item navbar-item-title" to="/">
                        Home
                    </router-link>

                    <b-dropdown hoverable v-for="(menu, index) in menus" :key="index">
                        <a class="navbar-item navbar-item-title" slot="trigger">
                            <span>{{menu.title}}</span>
                            <b-icon icon="menu-down"></b-icon>
                        </a>

                        <b-dropdown-item v-for="(item, itemIndex) in menu.menuItems" :key="itemIndex">
                            <router-link class="navbar-item" :to="item.link">
                                {{item.name}}
                            </router-link>
                        </b-dropdown-item>
                    </b-dropdown>
                </div>

                <div class="navbar-end">
                    <b-dropdown hoverable position="is-bottom-left">
                        <a class="navbar-item navbar-item-title" slot="trigger">
                            <span>{{rightMenu.title}}</span>
                            <b-icon icon="menu-down"></b-icon>
                        </a>

                        <b-dropdown-item v-for="(item, index) in rightMenu.menuItems" :key="index">
                            <router-link class="navbar-item" :to="item.link">
                                {{item.name}}
                            </router-link>
                        </b-dropdown-item>
                    </b-dropdown>
                </div>
            </div>
        </nav>
        <div v-show="showMenu" class="menu-overlay" @click="toggleMenu"></div>
        <transition name="slide-fade">
            <div v-show="showMenu" class="menu columns">
                <aside class="column" @click="toggleMenu">
                    <p class="menu-label">
                        <router-link class="navbar-item" to="/">
                            <img src="../assets/logo.png">
                            <p>{{title}}</p>
                        </router-link>                    
                    </p>
                    <div v-for="(menu, index) in menus" :key="index" class="aside-menu">
                        <p class="menu-label">
                            {{menu.title}}
                        </p>
                        <ul class="menu-list">
                            <li v-for="(item, itemIndex) in menu.menuItems" :key="itemIndex">
                                <router-link :to="item.link">
                                    {{item.name}}
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    
                    <div class="aside-menu">
                        <p class="menu-label">
                            {{rightMenu.title}}
                        </p>
                        <ul class="menu-list">
                            <li v-for="(item, itemIndex) in rightMenu.menuItems" :key="itemIndex">
                                <router-link :to="item.link">
                                    {{item.name}}
                                </router-link>
                            </li>
                        </ul>
                    </div>

                </aside>
            </div>
        </transition>
            
    </div>  
</template>

<script>
export default {
    name: 'navigation-bar',
    data() {
        return {
            showMenu: false,
            title: 'J.A.K Kennel',
            menus: [
                {
                    title: 'Our Dogs',
                    menuItems: [
                        {
                            name: 'Shibas',
                            link: '/dogs/shiba'
                        }, {
                            name: 'Poms',
                            link: '/dogs/pom'
                        }, {
                            name: 'Alaskan Malamute',
                            link: '/dogs/malamute'
                        }
                    ]
                }, {
                    title: 'Available Dogs',
                    menuItems: [
                        {
                            name: 'Puppies',
                            link: '/sales/puppies'
                        }, {
                            name: 'Adults',
                            link: '/sales/adults'
                        }
                    ]
                }, {
                    title: 'How to Adopt',
                    menuItems: [
                        {
                            name: 'Agreement',
                            link: '/agreement'
                        }, {
                            name: 'Application',
                            link: '/application'
                        }
                    ]
                }, {
                    title: 'About',
                    menuItems: [
                        {
                            name: 'About Us',
                            link: '/about'
                        }, {
                            name: 'Contact',
                            link: '/contact'
                        }
                    ]
                }
            ],
            rightMenu: {
                title: 'More',
                menuItems: [
                    {
                        name: 'Weight Pulling',
                        link: '/pulling'
                    }, {
                        name: 'Dog Sledding',
                        link: '/sledding'
                    }, {
                        name: 'References',
                        link: '/references'
                    }
                ]
            }
        }
    },
    methods: {
        toggleMenu() {
            this.showMenu = !this.showMenu;
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/constants.scss';
$strong-weight: 600;

.menu {
    background-color: $kennel-background-color-light;
    width: 300px;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 40;
    min-height: 100% !important;
    height: 100%;
    margin-top: 0;
    overflow: scroll;

    aside {
        padding: 0;
        padding-top: $size-7;
    }

    .aside-menu {
        margin-bottom: $size-6;
    }
}

.menu-overlay {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 39;
}

.navbar {
    background-color: $kennel-background-color;

    .navbar-burger {
        color: $text;

        .burger-icon {
            display: flex;
            height: 0;
        }
    }

    .navbar-item.navbar-item-title {
        font-weight: $strong-weight;
    }
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all .3s ease;
}

.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
