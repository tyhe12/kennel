<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
        <!-- navbar items, navbar burger... -->
        </div>
        <div class="navbar-menu">
            <div class="navbar-start">
                <router-link class="navbar-item" to="/">
                    Home
                </router-link>

                <b-dropdown hoverable>
                    <a class="navbar-item" slot="trigger">
                        <span>Our Dogs</span>
                        <b-icon icon="menu-down"></b-icon>
                    </a>

                    <b-dropdown-item >
                        <router-link class="navbar-item" to="/dogs">
                            Shibas
                        </router-link>
                    </b-dropdown-item>

                    <b-dropdown-item >
                        <a class="navbar-item" target="_self">
                            Poms
                        </a>
                    </b-dropdown-item>

                    <b-dropdown-item >
                        <a class="navbar-item" target="_self">
                            Alaskan Hamalute
                        </a>
                    </b-dropdown-item>
                </b-dropdown>

                <b-dropdown hoverable>
                    <a class="navbar-item" slot="trigger">
                        <span> Available Dogs</span>
                        <b-icon icon="menu-down"></b-icon>
                    </a>

                    <b-dropdown-item >
                        <a class="navbar-item" target="_self">
                            Puppies
                        </a>
                    </b-dropdown-item>

                    <b-dropdown-item >
                        <a class="navbar-item" target="_self">
                            Adults
                        </a>
                    </b-dropdown-item>
                </b-dropdown>

                <b-dropdown hoverable>
                    <a class="navbar-item" slot="trigger">
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
                    <a class="navbar-item" slot="trigger">
                        <span>About</span>
                        <b-icon icon="menu-down"></b-icon>
                    </a>

                    <b-dropdown-item >
                        <a class="navbar-item" target="_self">
                            About Us
                        </a>
                    </b-dropdown-item>

                    <b-dropdown-item >
                        <a class="navbar-item" target="_self">
                            Contact
                        </a>
                    </b-dropdown-item>
                </b-dropdown>
            </div>

            <div class="navbar-end">
                <b-dropdown hoverable position="is-bottom-left">
                    <a class="navbar-item" slot="trigger">
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
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

export default {
    name: 'NavigationBar',
    components: {
        'b-dropdown': Buefy.Dropdown,
        'b-dropdown-item': Buefy.DropdownItem,
        'b-icon': Buefy.Icon
    }
}
</script>

<style lang="sass" scoped>

</style>
