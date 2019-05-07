<template>
    <v-app>
        <v-navigation-drawer v-model="drawer" app temporary>
            <v-list>
                <v-list-tile v-for="link in links" :to="link.uri">
                    <v-list-tile-action>
                        <v-icon color="silver">{{link.icon}}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title v-text="link.title"></v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>

        <v-toolbar app dark color="primary">
            <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>Title</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn v-for="link in links" :key="link.title" :to="link.uri" flat>
                    <v-icon left>{{link.icon}}</v-icon>
                    {{link.title}}
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>

        <v-content>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-content>

        <v-footer app></v-footer>
    </v-app>
</template>

<script>

    export default {
        data() {
            return {
                drawer: false,
                links: [
                    {title: 'Login', icon: 'lock', uri: '/login'},
                    {title: 'Registration', icon: 'face', uri: '/registration'},
                    {title: 'Orders', icon: 'bookmark_border', uri: '/orders'},
                    {title: 'New ad', icon: 'note_add', uri: '/new'},
                    {title: 'My ads', icon: 'list', uri: '/list'},
                ]
            }
        }

    }
</script>
