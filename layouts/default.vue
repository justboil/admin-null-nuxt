<template>
  <div id="app">
    <nav-bar />
    <aside-menu :menu="menu" @menu-click="menuClick" />
    <nuxt />
    <footer-bar />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar'
import AsideMenu from '@/components/AsideMenu'
import FooterBar from '@/components/FooterBar'

export default {
  name: 'App',
  components: {
    FooterBar,
    AsideMenu,
    NavBar,
  },
  computed: {
    menu() {
      return [
        'General',
        [
          {
            to: '/',
            icon: 'desktop-mac',
            label: 'Dashboard',
          },
        ],
        'Examples',
        [
          {
            action: 'dark-mode-toggle',
            label: 'Dark / White',
            icon: 'weather-night',
          },
          {
            to: '/tables',
            label: 'Tables',
            icon: 'table',
            updateMark: true,
          },
          {
            to: '/forms',
            label: 'Forms',
            icon: 'square-edit-outline',
          },
          {
            to: '/profile',
            label: 'Profile',
            icon: 'account-circle',
          },
          {
            label: 'Submenus',
            subLabel: 'Submenus Example',
            icon: 'view-list',
            menu: [
              {
                href: '#void',
                label: 'Sub-item One',
              },
              {
                href: '#void',
                label: 'Sub-item Two',
              },
            ],
          },
        ],
        'About',
        [
          {
            href: 'https://admin-null-nuxt.justboil.me',
            label: 'Premium Demo',
            icon: 'credit-card',
          },
          {
            href: 'https://justboil.me/bulma-admin-template/null-nuxt',
            label: 'About',
            icon: 'help-circle',
          },
        ],
      ]
    },
  },
  created() {
    this.$store.commit('user', {
      name: 'John Doe',
      email: 'john@example.com',
      avatar: 'https://avatars.dicebear.com/v2/gridy/John-Doe.svg',
    })
  },
  mounted() {
    document.documentElement.classList.add('has-aside-left')
    document.documentElement.classList.add('has-aside-mobile-transition')
    document.documentElement.classList.add('has-navbar-fixed-top')
    document.documentElement.classList.add('has-aside-expanded')
  },
  methods: {
    menuClick(item) {
      if (item.action && item.action === 'dark-mode-toggle') {
        this.$store.commit('darkModeToggle')
      }
    },
  },
}
</script>
