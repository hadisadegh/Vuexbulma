<template>
  <div class="container">


    <section class="hero bd-hero bd-is-basic">
      <div class="hero-body">

        <div class="container">

          <div class="bd-hero-body">
            <div class="bd-hero-heading">
              <h1 class="title algolia-lvl0">

                <p>Colors</p>

              </h1>
              <div class="subtitle is-4 algolia-lvl1">
                <p>The <strong>colors</strong> that <strong>style</strong> most Bulma elements and components</p>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>


    <div class="bd-docs-body">
      <div class="bd-docs-content bd-content algolia-content">
        <div class="content">
          <p>
            Most elements and components have color variations thanks to <strong>modifiers</strong> with syntax
            <code>.is-$color</code>, like <code>is-primary</code> or <code>is-dark</code>.
          </p>
          <p>
            This is thanks to the <code>$colors</code> <strong>Sass map</strong>, through which Bulma cycles to grab all
            the colors and their inverts.
          </p>
        </div>

        <div class="table-container">
          <table class="table">
            <thead>
              <tr>
                <th>Color</th>
                <th>Variable</th>
                <th>Value</th>
                <th>Computed value</th>
                <th>Invert value</th>
                <th>Computed invert value</th>
              </tr>
            </thead>
            <tbody>



              <tr>
                <td>
                  <strong>White</strong>
                </td>
                <td>
                  <code>$white</code>
                </td>
                <td>
                  <code>$white</code>
                </td>
                <td>
                  <span class="bd-color" style="background: hsl(0, 0%, 100%);"></span>
                  <code>hsl(0, 0%, 100%)</code>

                </td>


                <td>
                  <code>$black</code>
                </td>
                <td>
                  <span class="bd-color" style="background: hsl(0, 0%, 4%);"></span>
                  <code>hsl(0, 0%, 4%)</code>

                </td>

              </tr>



              <tr>
                <td>
                  <strong>Black</strong>
                </td>
                <td>
                  <code>$black</code>
                </td>
                <td>
                  <code>$black</code>
                </td>
                <td>
                  <span class="bd-color" style="background: hsl(0, 0%, 4%);"></span>
                  <code>hsl(0, 0%, 4%)</code>

                </td>


                <td>
                  <code>$white</code>
                </td>
                <td>
                  <span class="bd-color" style="background: hsl(0, 0%, 100%);"></span>
                  <code>hsl(0, 0%, 100%)</code>

                </td>

              </tr>



              <tr>
                <td>
                  <strong>Light</strong>
                </td>
                <td>
                  <code>$light</code>
                </td>
                <td>
                  <code>$white-ter</code>
                </td>
                <td>
                  <span class="bd-color" style="background: hsl(0, 0%, 96%);"></span>
                  <code>hsl(0, 0%, 96%)</code>

                </td>


                <td>
                  <code>$grey-darker</code>
                </td>
                <td>
                  <span class="bd-color" style="background: hsl(0, 0%, 21%);"></span>
                  <code>hsl(0, 0%, 21%)</code>

                </td>

              </tr>



              <tr>
                <td>
                  <strong>Dark</strong>
                </td>
                <td>
                  <code>$dark</code>
                </td>
                <td>
                  <code>$grey-darker</code>
                </td>
                <td>
                  <span class="bd-color" style="background: hsl(0, 0%, 21%);"></span>
                  <code>hsl(0, 0%, 21%)</code>

                </td>


                <td>
                  <code>$white-ter</code>
                </td>
                <td>
                  <span class="bd-color" style="background: hsl(0, 0%, 96%);"></span>
                  <code>hsl(0, 0%, 96%)</code>

                </td>

              </tr>



              <tr>
                <td>
                  <strong>Primary</strong>
                </td>
                <td>
                  <code>$primary</code>
                </td>
                <td>
                  <code>$turquoise</code>
                </td>
                <td>
                  <span class="bd-color" style="background: hsl(171, 100%, 41%);"></span>
                  <code>hsl(171, 100%, 41%)</code>

                </td>

                <td>
                  <code>#fff</code>
                </td>
                <td>
                  <span class="bd-color" style="background: #fff;"></span>
                  <code>#fff</code>

                </td>

              </tr>



              <tr>
                <td>
                  <strong>Link</strong>
                </td>
                <td>
                  <code>$link</code>
                </td>
                <td>
                  <code>$blue</code>
                </td>
                <td>
                  <span class="bd-color" style="background: hsl(217, 71%, 53%);"></span>
                  <code>hsl(217, 71%, 53%)</code>

                </td>

                <td>
                  <code>#fff</code>
                </td>
                <td>
                  <span class="bd-color" style="background: #fff;"></span>
                  <code>#fff</code>

                </td>

              </tr>



              <tr>
                <td>
                  <strong>Info</strong>
                </td>
                <td>
                  <code>$info</code>
                </td>
                <td>
                  <code>$cyan</code>
                </td>
                <td>
                  <span class="bd-color" style="background: hsl(204, 86%, 53%);"></span>
                  <code>hsl(204, 86%, 53%)</code>

                </td>

                <td>
                  <code>#fff</code>
                </td>
                <td>
                  <span class="bd-color" style="background: #fff;"></span>
                  <code>#fff</code>

                </td>

              </tr>



              <tr>
                <td>
                  <strong>Success</strong>
                </td>
                <td>
                  <code>$success</code>
                </td>
                <td>
                  <code>$green</code>
                </td>
                <td>
                  <span class="bd-color" style="background: hsl(141, 53%, 53%);"></span>
                  <code>hsl(141, 53%, 53%)</code>

                </td>

                <td>
                  <code>#fff</code>
                </td>
                <td>
                  <span class="bd-color" style="background: #fff;"></span>
                  <code>#fff</code>

                </td>

              </tr>



              <tr>
                <td>
                  <strong>Warning</strong>
                </td>
                <td>
                  <code>$warning</code>
                </td>
                <td>
                  <code>$yellow</code>
                </td>
                <td>
                  <span class="bd-color" style="background: hsl(48, 100%, 67%);"></span>
                  <code>hsl(48, 100%, 67%)</code>

                </td>

                <td>
                  <code>rgba(0, 0, 0, 0.7)</code>
                </td>
                <td>
                  <span class="bd-color" style="background: rgba(0, 0, 0, 0.7);"></span>
                  <code>rgba(0, 0, 0, 0.7)</code>

                </td>

              </tr>



              <tr>
                <td>
                  <strong>Danger</strong>
                </td>
                <td>
                  <code>$danger</code>
                </td>
                <td>
                  <code>$red</code>
                </td>
                <td>
                  <span class="bd-color" style="background: hsl(348, 100%, 61%);"></span>
                  <code>hsl(348, 100%, 61%)</code>

                </td>

                <td>
                  <code>#fff</code>
                </td>
                <td>
                  <span class="bd-color" style="background: #fff;"></span>
                  <code>#fff</code>

                </td>

              </tr>

            </tbody>
          </table>
        </div>

        <div class="content">
          <p>
            Bulma also provides a <code>$shades</code> <strong>Sass map</strong>, that only contains shades of grey
            between black and white.
          </p>
        </div>

        <div class="table-container">
          <table class="table">
            <thead>
              <tr>
                <th>Color</th>
                <th>Variable</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>


              <tr>
                <td>
                  <strong>Black bis</strong>
                </td>
                <td>
                  <code>$black-bis</code>
                </td>
                <td>
                  <span class="bd-color" style="background: hsl(0, 0%, 7%);"></span>
                  <code>hsl(0, 0%, 7%)</code>

                </td>
              </tr>


              <tr>
                <td>
                  <strong>Black ter</strong>
                </td>
                <td>
                  <code>$black-ter</code>
                </td>
                <td>
                  <span class="bd-color" style="background: hsl(0, 0%, 14%);"></span>
                  <code>hsl(0, 0%, 14%)</code>

                </td>
              </tr>


              <tr>
                <td>
                  <strong>Grey darker</strong>
                </td>
                <td>
                  <code>$grey-darker</code>
                </td>
                <td>
                  <span class="bd-color" style="background: hsl(0, 0%, 21%);"></span>
                  <code>hsl(0, 0%, 21%)</code>

                </td>
              </tr>


              <tr>
                <td>
                  <strong>Grey dark</strong>
                </td>
                <td>
                  <code>$grey-dark</code>
                </td>
                <td>
                  <span class="bd-color" style="background: hsl(0, 0%, 29%);"></span>
                  <code>hsl(0, 0%, 29%)</code>

                </td>
              </tr>


              <tr>
                <td>
                  <strong>Grey light</strong>
                </td>
                <td>
                  <code>$grey-light</code>
                </td>
                <td>
                  <span class="bd-color" style="background: hsl(0, 0%, 71%);"></span>
                  <code>hsl(0, 0%, 71%)</code>

                </td>
              </tr>


              <tr>
                <td>
                  <strong>Grey lighter</strong>
                </td>
                <td>
                  <code>$grey-lighter</code>
                </td>
                <td>
                  <span class="bd-color" style="background: hsl(0, 0%, 86%);"></span>
                  <code>hsl(0, 0%, 86%)</code>

                </td>
              </tr>


              <tr>
                <td>
                  <strong>White ter</strong>
                </td>
                <td>
                  <code>$white-ter</code>
                </td>
                <td>
                  <span class="bd-color" style="background: hsl(0, 0%, 96%);"></span>
                  <code>hsl(0, 0%, 96%)</code>

                </td>
              </tr>


              <tr>
                <td>
                  <strong>White bis</strong>
                </td>
                <td>
                  <code>$white-bis</code>
                </td>
                <td>
                  <span class="bd-color" style="background: hsl(0, 0%, 98%);"></span>
                  <code>hsl(0, 0%, 98%)</code>

                </td>
              </tr>

            </tbody>
          </table>
        </div>

      </div>














      <!-- Previous link -->
      <!-- If first index in list -->


      <!-- Next link -->
      <!-- If last index in list -->




      <nav class="bd-docs-pagination bd-pagination-links">


        <a class="button bd-fat-button is-primary is-light bd-pagination-prev"
          href="https://bulma.io/documentation/overview/responsiveness/" title="Responsiveness">
          <i>←</i>
          <span>
            <em>overview:</em>
            <strong>Responsiveness</strong>
          </span>
        </a>




        <a class="button bd-fat-button is-primary is-light bd-pagination-next"
          href="https://bulma.io/documentation/customize/concepts/" title="Concepts">
          <span>
            <em>customize:</em>
            <strong>Concepts</strong>
          </span>
          <i>→</i>
        </a>

      </nav>




      <div id="typo" class="bd-docs-typo">
        <p class="has-text-grey-light">
          <a class="is-pulled-right" href="https://bulma.io/made-with-bulma/">
            <img src="https://bulma.io/images/made-with-bulma.png" alt="Made with Bulma" width="128" height="24">
          </a>
          This page is <strong class="has-text-grey">open source</strong>.
          Noticed a typo? Or something unclear?
          <br>
          <a class="has-text-grey"
            href="https://github.com/jgthms/bulma/blob/master/docs/documentation/overview/colors.html"
            style="border-bottom: 1px solid currentColor;">
            Improve this page on GitHub
          </a>
        </p>
      </div>

    </div>

  </div>
</template>
<script lang="ts">
export default {
  setup() { },
};
</script>
