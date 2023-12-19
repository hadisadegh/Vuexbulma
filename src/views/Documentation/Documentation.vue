<template>
  <div class="container">
    <section class="hero bd-hero bd-is-basic">
      <div class="hero-body">
        <div class="container">
          <div class="bd-hero-body">
            <div class="bd-hero-heading">
              <h1 class="title algolia-lvl0">
                <p>Dokumentation</p>
              </h1>
              <div class="subtitle is-4 algolia-lvl1">
                <p>

                  Alles, was Sie zum <strong>Erstellen einer Website</strong> mit Bulma benötigen
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="bd-docs-body">
      <div class="bd-docs-content bd-content algolia-content">
        <nav class="bd-links">

          <router-link class="bd-link" to="/documentation/overview">
            <span class="icon bd-link-icon">
              <i class="fas fa-eye"></i>
            </span>

            <div class="bd-link-body">
              <h2 class="bd-link-title algolia-lvl1">Überblick</h2>

              <div class="bd-link-subtitle">

                Ein Überblick darüber, worum es bei Bulma als <strong>Framework</strong> geht
              </div>
            </div>

          </router-link>

          <router-link class="bd-link" to="/documentation/utilities">
            <span class="icon bd-link-icon">
              <i class="fas fa-tools"></i>
            </span>

            <div class="bd-link-body">
              <h2 class="bd-link-title algolia-lvl1">Dienstprogramme</h2>

              <div class="bd-link-subtitle">
                Sass-Tools, die von Bulma verwendet werden und für Sie verfügbar sind
              </div>
            </div>
          </router-link>

          <router-link class="bd-link" to="/documentation/customize">
            <span class="icon bd-link-icon">
              <i class="fas fa-paint-brush"></i>
            </span>

            <div class="bd-link-body">
              <h2 class="bd-link-title algolia-lvl1">Individualisieren</h2>

              <div class="bd-link-subtitle">

                Erstellen Sie <strong>Ihr eigenes Theme</strong> einem einfachen Satz
                <strong>Variablen</strong>
              </div>
            </div>
          </router-link>

          <router-link class="bd-link" to="/documentation/helper">
            <span class="icon bd-link-icon">
              <i class="fas fa-medkit"></i>
            </span>

            <div class="bd-link-body">
              <h2 class="bd-link-title algolia-lvl1">Helfer</h2>

              <div class="bd-link-subtitle">

                Wenden Sie <strong>Helfer klassen</strong> auf fast jedes Element an, um deren Stil zu ändern
              </div>
            </div>
          </router-link>

          <router-link class="bd-link" to="/documentation/columns">
            <span class="icon bd-link-icon">
              <i class="fas fa-columns"></i>
            </span>

            <div class="bd-link-body">
              <h2 class="bd-link-title algolia-lvl1">Säulen</h2>

              <div class="bd-link-subtitle">

                Die Leistung von <strong>Flexbox</strong> in einer einfachen Benutzeroberfläche
              </div>
            </div>
          </router-link>

          <router-link class="bd-link" to="/documentation/layout">
            <span class="icon bd-link-icon">
              <i class="fas fa-warehouse"></i>
            </span>

            <div class="bd-link-body">
              <h2 class="bd-link-title algolia-lvl1">Layout</h2>

              <div class="bd-link-subtitle">

                Gestalten Sie die <strong>Struktur</strong> Ihrer Webseite mit diesen CSS-Klassen
              </div>
            </div>
          </router-link>

          <router-link class="bd-link" to="/documentation/form">
            <span class="icon bd-link-icon">
              <i class="fab fa-wpforms"></i>
            </span>

            <div class="bd-link-body">
              <h2 class="bd-link-title algolia-lvl1">Form</h2>

              <div class="bd-link-subtitle">

                The indispensable <strong>Formularsteuerelemente</strong>, designed for
                maximum clarity
              </div>
            </div>
          </router-link>

          <router-link class="bd-link" to="/documentation/elements">
            <span class="icon bd-link-icon">
              <i class="fas fa-cube"></i>
            </span>

            <div class="bd-link-body">
              <h2 class="bd-link-title algolia-lvl1">Elements</h2>

              <div class="bd-link-subtitle">

                Wesentliche Schnittstellenelemente, die
                <strong>nur eine einzige CSS-Klasse</strong>erfordern
              </div>
            </div>
          </router-link>
          <router-link class="bd-link" to="/documentation/components">
        
            <span class="icon bd-link-icon">
              <i class="fas fa-cubes"></i>
            </span>

            <div class="bd-link-body">
              <h2 class="bd-link-title algolia-lvl1">Komponenten</h2>

              <div class="bd-link-subtitle">
                Fortschrittliche mehrteilige Komponenten mit vielen Möglichkeiten
              </div>
            </div>
          </router-link>
        </nav>
      </div>

      <!-- Previous link -->
      <!-- If first index in list -->

      <!-- Next link -->
      <!-- If last index in list -->

      <div id="typo" class="bd-docs-typo">
        <p class="has-text-grey-light">
          <a class="is-pulled-right" href="https://bulma.io/made-with-bulma/">
            <img src="https://bulma.io/images/made-with-bulma.png" alt="Made with Bulma" width="128" height="24" />
          </a>
          This page is <strong class="has-text-grey">open source</strong>.
          Noticed a typo? Or something unclear?
          <br />
          <a class="has-text-grey" href="https://github.com/jgthms/bulma/blob/master/docs/documentation.html"
            style="border-bottom: 1px solid currentColor">
            Improve this page on GitHub
          </a>
        </p>
      </div>
    </div>
  </div>
</template>
  