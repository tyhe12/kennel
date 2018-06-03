<template>
    <div class="sitemap">
        <div class="sitemap-item" v-for="(menu, index) in menus" :key="index">
            <p class="sitemap-item-title title is-6">{{menu.title}}</p>
            <ul class="sitemap-item-list">
                <li class="sitemap-item-list-item" v-for="(item, itemIndex) in menu.menuItems" :key="itemIndex">
                    <router-link :to="item.link" class="sitemap-item-list-item-link">
                        {{item.name}}
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'site-map',
    data() {
        return {
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
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/constants.scss';

.sitemap {
    display: flex;
    justify-content: space-between;

    .sitemap-item-list-item-link {
        color: $text;
    }
}
</style>
