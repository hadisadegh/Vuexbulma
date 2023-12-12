<template>
  <div class="container">


    <section class="hero bd-hero bd-is-basic">
      <div class="hero-body">

        <div class="container">

          <div class="bd-hero-body">
            <div class="bd-hero-heading">
              <h1 class="title algolia-lvl0">

                <p>CSS classes</p>

              </h1>
              <div class="subtitle is-4 algolia-lvl1">
                <p>Bulma is simply a <strong>collection</strong> of CSS classes. Write the HTML code you want.</p>

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
            Bulma is a <strong>CSS</strong> framework, meaning that the end result is simply a <strong>single</strong>
            <code>.css</code> file:
            <br>
            <a
              href="https://github.com/jgthms/bulma/blob/master/css/bulma.css">https://github.com/jgthms<wbr>/bulma<wbr>/blob<wbr>/master<wbr>/css<wbr>/bulma.css</a>
          </p>
          <p>
            Because Bulma solely comprises CSS classes, the HTML code you write has <strong>no impact</strong> on the
            styling of your page. That's why <code>.input</code> exists as a class, so you can choose <em>which</em>
            <code>&lt;input type="text"&gt;</code> elements you want to style.
          </p>
          <p>
            Bulma only styles <strong>generic</strong> tags directly <strong>twice</strong>:
          </p>
          <ul>
            <li>
              <a href="https://github.com/jgthms/bulma/blob/master/sass/base/generic.sass"><code>generic.sass</code></a>
              to define a basic style for your page
            </li>
            <li>
              the <a href="https://bulma.io/documentation/elements/content/"><code>.content</code> class </a> to use for
              <em>any</em> textual content, like WYSIWYG
            </li>
          </ul>
        </div>

      </div>














      <!-- Previous link -->
      <!-- If first index in list -->


      <!-- Next link -->
      <!-- If last index in list -->




      <nav class="bd-docs-pagination bd-pagination-links">


        <a class="button bd-fat-button is-primary is-light bd-pagination-prev"
          href="https://bulma.io/documentation/overview/start/" title="Start">
          <i>←</i>
          <span>
            <em>overview:</em>
            <strong>Start</strong>
          </span>
        </a>




        <a class="button bd-fat-button is-primary is-light bd-pagination-next"
          href="https://bulma.io/documentation/overview/modifiers/" title="Modifiers syntax">
          <span>
            <em>overview:</em>
            <strong>Modifiers syntax</strong>
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
            href="https://github.com/jgthms/bulma/blob/master/docs/documentation/overview/classes.html"
            style="border-bottom: 1px solid currentColor;">
            Improve this page on GitHub
          </a>
        </p>
      </div>

  </div>

</div></template>
<script lang="ts">
export default {
  setup() { },
};
</script>
