<template>
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <router-link class="navbar-item" to="/">
                <img src="../assets/logo.png">
            </router-link>
        </div>
        <div class="navbar-menu">
            <div class="navbar-start">
                <router-link class="navbar-item navbar-item-title" to="/">
                    Home
                </router-link>

                <b-dropdown hoverable>
                    <a class="navbar-item navbar-item-title" slot="trigger">
                        <span>Our Dogs</span>
                        <b-icon icon="menu-down"></b-icon>
                    </a>

                    <b-dropdown-item >
                        <router-link class="navbar-item" to="/dogs/shiba">
                            Shibas
                        </router-link>
                    </b-dropdown-item>

                    <b-dropdown-item >
                        <router-link class="navbar-item" to="/dogs/pom">
                            Poms
                        </router-link>
                    </b-dropdown-item>

                    <b-dropdown-item >
                        <router-link class="navbar-item" to="/dogs/malamute">
                            Alaskan Malamute
                        </router-link>
                    </b-dropdown-item>
                </b-dropdown>

                <b-dropdown hoverable>
                    <a class="navbar-item navbar-item-title" slot="trigger">
                        <span> Available Dogs</span>
                        <b-icon icon="menu-down"></b-icon>
                    </a>

                    <b-dropdown-item >
                        <router-link class="navbar-item" to="/sales/puppies">
                            Puppies
                        </router-link>
                    </b-dropdown-item>

                    <b-dropdown-item >
                        <router-link class="navbar-item" to="/sales/adults">
                            Adults
                        </router-link>
                    </b-dropdown-item>
                </b-dropdown>

                <b-dropdown hoverable>
                    <a class="navbar-item navbar-item-title" slot="trigger">
                        <span>How to Adopt</span>
                        <b-icon icon="menu-down"></b-icon>
                    </a>

                    <b-dropdown-item >
                        <a class="navbar-item" target="_self">
                            Adoption Application
                        </a>
                    </b-dropdown-item>

                    <b-dropdown-item >
                        <a class="navbar-item" target="_self">
                            Adoption Agreements
                        </a>
                    </b-dropdown-item>
                </b-dropdown>

                <b-dropdown hoverable>
                    <a class="navbar-item navbar-item-title" slot="trigger">
                        <span>About</span>
                        <b-icon icon="menu-down"></b-icon>
                    </a>

                    <b-dropdown-item >
                        <router-link class="navbar-item" to="/about">
                            About Us
                        </router-link>
                    </b-dropdown-item>

                    <b-dropdown-item >
                        <router-link class="navbar-item" to="/contact">
                            Contact
                        </router-link>
                    </b-dropdown-item>
                </b-dropdown>
            </div>

            <div class="navbar-end">
                <b-dropdown hoverable position="is-bottom-left">
                    <a class="navbar-item navbar-item-title" slot="trigger">
                        <span>More</span>
                        <b-icon icon="menu-down"></b-icon>
                    </a>

                    <b-dropdown-item >
                        <a class="navbar-item" target="_self">
                            Weight Pulling
                        </a>
                    </b-dropdown-item>

                    <b-dropdown-item >
                        <a class="navbar-item" target="_self">
                            Dog Sledding
                        </a>
                    </b-dropdown-item>

                    <b-dropdown-item >
                        <a class="navbar-item" target="_self">
                            References
                        </a>
                    </b-dropdown-item>
                </b-dropdown>
            </div>
        </div>
    </nav>  
</template>

<script>
export default {
    name: 'navigation-bar'
}
</script>

<style lang="scss" scoped>
@import '../assets/constants.scss';
$strong-weight: 600;

.navbar {
    background-color: $kennel-background-color;

    .navbar-item.navbar-item-title {
        font-weight: $strong-weight;
    }
}
</style>
