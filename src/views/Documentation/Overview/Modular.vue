<template>
  <div class="container">


    <section class="hero bd-hero bd-is-basic">
      <div class="hero-body">

        <div class="container">

          <div class="bd-hero-body">
            <div class="bd-hero-heading">
              <h1 class="title algolia-lvl0">

                <p>Modularity</p>

              </h1>
              <div class="subtitle is-4 algolia-lvl1">
                <p>Just import what you <strong>need</strong></p>

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
            Bulma consists of <strong>39</strong> <code>.sass</code> files that you can import
            <strong>individually.</strong>
          </p>
          <p>
            For example, let's say you only want the Bulma <strong>columns.</strong>
            <br>
            The file is located in the <code>bulma/sass/grid</code> folder.
            <br>
            Simply <strong>import</strong> the utilities dependencies, and then the files you need directly:
          </p>
          <figure class="highlight">
            <pre><code class="language-sass" data-lang="sass"><span class="k">@import</span> <span class="s">"bulma/sass/utilities/_all.sass"</span>
        <span class="k">@import</span> <span class="s">"bulma/sass/grid/columns.sass"</span></code></pre><button
              class="button bd-copy">Copy</button>
          </figure>
          <p>
            Now you can use the classes <code>.columns</code> (for the container) and <code>.column</code> directly:
          </p>
          <figure class="highlight">
            <pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"columns"</span><span class="nt">&gt;</span>
          <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"column"</span><span class="nt">&gt;</span>1<span class="nt">&lt;/div&gt;</span>
          <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"column"</span><span class="nt">&gt;</span>2<span class="nt">&lt;/div&gt;</span>
          <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"column"</span><span class="nt">&gt;</span>3<span class="nt">&lt;/div&gt;</span>
          <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"column"</span><span class="nt">&gt;</span>4<span class="nt">&lt;/div&gt;</span>
          <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"column"</span><span class="nt">&gt;</span>5<span class="nt">&lt;/div&gt;</span>
        <span class="nt">&lt;/div&gt;</span></code></pre><button class="button bd-copy">Copy</button>
          </figure>

          <hr>

          <p>
            What if you only want the <strong>button</strong> styles instead?
          </p>
          <figure class="highlight">
            <pre><code class="language-sass" data-lang="sass"><span class="k">@import</span> <span class="s">"bulma/sass/utilities/_all.sass"</span>
        <span class="k">@import</span> <span class="s">"bulma/sass/elements/button.sass"</span></code></pre><button
              class="button bd-copy">Copy</button>
          </figure>
          <p>
            You can now use the <code>.button</code> class, and all its modifiers:
          </p>
          <ul>
            <li>
              <code>.is-active</code>
            </li>
            <li>
              <code>.is-primary</code>,
              <code>.is-info</code>,
              <code>.is-success</code>...
            </li>
            <li>
              <code>.is-small</code>,
              <code>.is-medium</code>,
              <code>.is-large</code>
            </li>
            <li>
              <code>.is-outlined</code>,
              <code>.is-inverted</code>,
              <code>.is-link</code>
            </li>
            <li>
              <code>.is-loading</code>,
              <code>[disabled]</code>
            </li>
          </ul>

          <figure class="highlight">
            <pre><code class="language-html" data-lang="html"><span class="nt">&lt;button</span> <span class="na">class=</span><span class="s">"button"</span><span class="nt">&gt;</span>
          Button
        <span class="nt">&lt;/button&gt;</span>
        
        <span class="nt">&lt;button</span> <span class="na">class=</span><span class="s">"button is-primary"</span><span class="nt">&gt;</span>
          Primary button
        <span class="nt">&lt;/button&gt;</span>
        
        <span class="nt">&lt;button</span> <span class="na">class=</span><span class="s">"button is-large"</span><span class="nt">&gt;</span>
          Large button
        <span class="nt">&lt;/button&gt;</span>
        
        <span class="nt">&lt;button</span> <span class="na">class=</span><span class="s">"button is-loading"</span><span class="nt">&gt;</span>
          Loading button
        <span class="nt">&lt;/button&gt;</span></code></pre><button class="button bd-copy">Copy</button>
          </figure>
        </div>

      </div>














      <!-- Previous link -->
      <!-- If first index in list -->


      <!-- Next link -->
      <!-- If last index in list -->




      <nav class="bd-docs-pagination bd-pagination-links">


        <a class="button bd-fat-button is-primary is-light bd-pagination-prev"
          href="https://bulma.io/documentation/overview/modifiers/" title="Modifiers syntax">
          <i>←</i>
          <span>
            <em>overview:</em>
            <strong>Modifiers syntax</strong>
          </span>
        </a>




        <a class="button bd-fat-button is-primary is-light bd-pagination-next"
          href="https://bulma.io/documentation/overview/responsiveness/" title="Responsiveness">
          <span>
            <em>overview:</em>
            <strong>Responsiveness</strong>
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
            href="https://github.com/jgthms/bulma/blob/master/docs/documentation/overview/modular.html"
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
