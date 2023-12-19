<template>
  <ul class="sidenav">
    <li class="sidelist parent">
      <router-link to="/documentation/overview">Überblick</router-link>
      <ul>
        <li class="sidelist">
          <router-link to="/documentation/overview/start">Start</router-link>
        </li>

        <li class="sidelist">
          <router-link to="/documentation/overview/classes">CSS Klassen</router-link>
        </li>

        <li class="sidelist">
          <router-link to="/documentation/overview/modifiers">Syntax der Modifikatoren</router-link>
        </li>

        <li class="sidelist">
          <router-link to="/documentation/overview/modular">Modularität</router-link>
        </li>

        <li class="sidelist">
          <router-link to="/documentation/overview/responsiveness">Empfänglichkeit</router-link>
        </li>
        <li class="sidelist">
          <router-link to="/documentation/overview/colors">Farben</router-link>
        </li>

      </ul>
    </li>

    <li class="sidelist parent">
      <router-link to="/documentation/customize">Individualisieren</router-link>
      <ul>
        <li class="sidelist">
          <router-link to="/documentation/customize/concepts">Konzepte</router-link>
        </li>

        <li class="sidelist">
          <router-link to="/documentation/customize/variables">Variablen</router-link>
        </li>

        <li class="sidelist">
          <router-link to="/documentation/customize/withNodeSass">Mit Node-Sass</router-link>
        </li>

        <li class="sidelist">
          <router-link to="/documentation/customize/withSassCli">Mit sass-cli</router-link>
        </li>

        <li class="sidelist">
          <router-link to="/documentation/customize/withWebpack">Mit Webpack</router-link>
        </li>
      </ul>
    </li>

    <li class="sidelist parent">
      <router-link to="/documentation/customize">Dienstprogramme</router-link>
      <ul>
        <li class="sidelist">
          <router-link to="/documentation/utilities/mixins">Mixins</router-link>
        </li>
        <li class="sidelist">
          <router-link to="/documentation/utilities/responsive-mixins">Responsive mixins</router-link>
        </li>

        <li class="sidelist">
          <router-link to="/documentation/utilities/form-control-mixins">Form Control mixins</router-link>
        </li>

        <li class="sidelist">
          <router-link to="/documentation/utilities/functions">Functions</router-link>
        </li>
        <li class="sidelist">
          <router-link to="/documentation/utilities/dxtends">Extends</router-link>
        </li>
      </ul>
    </li>

    <li class="sidelist parent">
      <router-link to="/documentation/columns">Säulen</router-link>
      <ul>
        <li class="sidelist">
          <router-link to="/documentation/columns/basics">Basics</router-link>
        </li>

        <li class="sidelist">
          <router-link to="/documentation/columns/sizes">Größen</router-link>
        </li>

        <li class="sidelist">
          <router-link to="/documentation/columns/responsiveness">Empfänglichkeit</router-link>
        </li>

        <li class="sidelist">
          <router-link to="/documentation/columns/nesting">Nesting</router-link>
        </li>

        <li class="sidelist">
          <router-link to="/documentation/columns/gap">Lücke</router-link>
        </li>
        <li class="sidelist">
          <router-link to="/documentation/columns/options">Optionen</router-link>
        </li>
      </ul>
    </li>

    <li class="sidelist parent">
      <router-link to="/documentation/elements">Elemnts</router-link>
      <ul>
        <li class="sidelist">
          <router-link to="/documentation/elements/box">Box</router-link>
        </li>

        <li class="sidelist">
          <router-link to="/documentation/elements/button">Button</router-link>
        </li>

        <li class="sidelist">
          <router-link to="/documentation/elements/delete">Delete</router-link>
        </li>

        <li class="sidelist">
          <router-link to="/documentation/elements/icon">Icon</router-link>
        </li>

        <li class="sidelist">
          <router-link to="/documentation/elements/image">Image</router-link>
        </li>
        <li class="sidelist">
          <router-link to="/documentation/elements/progress">Progress</router-link>
        </li>
        <li class="sidelist">
          <router-link to="/documentation/elements/table">Table</router-link>
        </li>
        <li class="sidelist">
          <router-link to="/documentation/elements/tag">Tag</router-link>
        </li>
        <li class="sidelist">
          <router-link to="/documentation/elements/title">Title</router-link>
        </li>

      </ul>
    </li>

    <li class="sidelist parent">
      <router-link to="/documentation/components">Komponenten</router-link>
      <ul>
        <li class="sidelist">
          <router-link to="/documentation/components/breadcrumb">Breadcrumb</router-link>
        </li>

        <li class="sidelist">
          <router-link to="/documentation/components/card">Card</router-link>
        </li>

        <li class="sidelist">
          <router-link to="/documentation/components/dropdown">Dropdown</router-link>
        </li>

        <li class="sidelist">
          <router-link to="/documentation/components/menu">Menu</router-link>
        </li>

        <li class="sidelist">
          <router-link to="/documentation/components/message">Message</router-link>
        </li>
        <li class="sidelist">
          <router-link to="/documentation/components/modal">Modal</router-link>
        </li>
        <li class="sidelist">
          <router-link to="/documentation/components/modal">Navbar</router-link>
        </li>
        <li class="sidelist">
          <router-link to="/documentation/components/modal">Pagination</router-link>
        </li>
        <li class="sidelist">
          <router-link to="/documentation/components/modal">Panel</router-link>
        </li>
        <li class="sidelist">
          <router-link to="/documentation/components/modal">Tabs</router-link>
        </li>

      </ul>
    </li>

    <li class="sidelist parent">
      <router-link to="/documentation/form">Form</router-link>
      <ul>
        <li class="sidelist">
          <router-link to="/documentation/form/general">General</router-link>
        </li>

        <li class="sidelist">
          <router-link to="/documentation/form/input">Input</router-link>
        </li>

        <li class="sidelist">
          <router-link to="/documentation/form/select">Select</router-link>
        </li>

        <li class="sidelist">
          <router-link to="/documentation/form/checkbox">Checkbox</router-link>
        </li>

        <li class="sidelist">
          <router-link to="/documentation/form/radio">Radio</router-link>
        </li>
        <li class="sidelist">
          <router-link to="/documentation/form/file">File</router-link>
        </li>
      </ul>
    </li>

    <li class="sidelist parent">
      <router-link to="/documentation/layout">Layout</router-link>
      <ul>
        <li class="sidelist">
          <router-link to="/documentation/layout/container">Container</router-link>
        </li>

        <li class="sidelist">
          <router-link to="/documentation/layout/Llevel">Level</router-link>
        </li>

        <li class="sidelist">
          <router-link to="/documentation/layout/media-object">Media Object</router-link>
        </li>

        <li class="sidelist">
          <router-link to="/documentation/layout/hero">Hero</router-link>
        </li>

        <li class="sidelist">
          <router-link to="/documentation/layout/section">Section</router-link>
        </li>
        <li class="sidelist">
          <router-link to="/documentation/layout/footer">Footer</router-link>
        </li>
        <li class="sidelist">
          <router-link to="/documentation/layout/tiles">Tiles</router-link>
        </li>
      </ul>
    </li>

    <li class="sidelist parent">
      <router-link to="/documentation/helpers">Helfer</router-link>
      <ul>
        <li class="sidelist">
          <router-link to="/documentation/helpers/colors">Colors</router-link>
        </li>

        <li class="sidelist">
          <router-link to="/documentation/helpers/spacing">Spacing</router-link>
        </li>

        <li class="sidelist">
          <router-link to="/documentation/helpers/typography">Typography</router-link>
        </li>

        <li class="sidelist">
          <router-link to="/documentation/helpers/visibility">Visibility</router-link>
        </li>

        <li class="sidelist">
          <router-link to="/documentation/helpers/flexbox">Flexbox</router-link>
        </li>
        <li class="sidelist">
          <router-link to="/documentation/helpers/other">Other</router-link>
        </li>
      </ul>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    openMenu() {
      this.isActive = true;
    }
  }
}
</script>
        