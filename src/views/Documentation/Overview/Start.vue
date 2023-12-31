<template>
    <div class="container">


        <section class="hero bd-hero bd-is-basic">
            <div class="hero-body">

                <div class="container">

                    <div class="bd-hero-body">
                        <div class="bd-hero-heading">
                            <h1 class="title algolia-lvl0">

                                <p>Getting started with Bulma</p>

                            </h1>
                            <div class="subtitle is-4 algolia-lvl1">
                                <p>You only need <strong>1 CSS file</strong> to use Bulma</p>

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
                        Bulma is a <strong>CSS library</strong>. This means it provides CSS classes to help you style your
                        HTML code.
                        <br>
                        To use Bulma, you can either use the pre-compiled <code>.css</code> file or install the
                        <code>.sass</code> files so you can customize it to your needs.
                    </p>
                </div>

                <div class="bd-options">
                    <div class="bd-option">
                        <div class="block media is-align-items-center">
                            <div class="media-left">
                                <span class="icon is-flex is-large has-text-link">
                                    <i class="fab fa-css3 fa-2x"></i>
                                </span>
                            </div>

                            <div class="media-content">
                                <p class="title is-4">Get the Bulma <strong class="has-text-link">CSS</strong> file</p>
                                <p class="subtitle">A single <code>.css</code> file that includes all of Bulma</p>
                            </div>
                        </div>

                        <div class="bd-option-item">
                            <p class="bd-option-title block has-text-grey-light is-size-5">
                                <span class="button bd-fat-button is-success is-light is-pulled-right">Recommended</span>
                                Option 1. <strong>Use a CDN</strong>
                            </p>

                            <p class="block">
                                You can import the CSS file directly from <a
                                    href="https://www.jsdelivr.com/package/npm/bulma" target="_blank">jsDelivr</a>:
                            </p>





                            <div class="bd-tabs">
                                <nav class="bd-tabs-nav">
                                    <button class="bd-is-active">CSS @import</button>
                                    <button>HTML &lt;link&gt;</button>

                                </nav>

                                <div class="bd-tabs-items">
                                    <div class="bd-tabs-item bd-is-active">

                                        <figure class="highlight">
                                            <pre><code class="language-css" data-lang="css"><span class="k">@import</span> <span class="s1">"https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"</span><span class="p">;</span></code></pre>
                                            <button class="button bd-copy">Copy</button>
                                        </figure>

                                    </div>
                                    <div class="bd-tabs-item">

                                        <figure class="highlight">
                                            <pre><code class="language-html" data-lang="html"><span class="nt">&lt;link</span> <span class="na">rel=</span><span class="s">"stylesheet"</span> <span class="na">href=</span><span class="s">"https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"</span><span class="nt">&gt;</span></code></pre>
                                            <button class="button bd-copy">Copy</button>
                                        </figure>

                                    </div>

                                </div>
                            </div>


                            <p class="block">
                                The <strong>RTL version</strong> is also available:
                            </p>





                            <div class="bd-tabs">
                                <nav class="bd-tabs-nav">
                                    <button class="bd-is-active">CSS @import</button>
                                    <button>HTML &lt;link&gt;</button>

                                </nav>

                                <div class="bd-tabs-items">
                                    <div class="bd-tabs-item bd-is-active">

                                        <figure class="highlight">
                                            <pre><code class="language-css" data-lang="css"><span class="k">@import</span> <span class="s1">"https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma-rtl.min.css"</span><span class="p">;</span></code></pre>
                                            <button class="button bd-copy">Copy</button>
                                        </figure>

                                    </div>
                                    <div class="bd-tabs-item">

                                        <figure class="highlight">
                                            <pre><code class="language-html" data-lang="html"><span class="nt">&lt;link</span> <span class="na">rel=</span><span class="s">"stylesheet"</span> <span class="na">href=</span><span class="s">"https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma-rtl.min.css"</span><span class="nt">&gt;</span></code></pre>
                                            <button class="button bd-copy">Copy</button>
                                        </figure>

                                    </div>

                                </div>
                            </div>


                            <p class="block">
                                Bulma is also available via <a href="https://cdnjs.com/libraries/bulma"
                                    target="_blank">cdnjs</a>.
                            </p>
                        </div>

                        <div class="bd-option-item">
                            <p class="bd-option-title block has-text-grey-light is-size-5">
                                Option 2. <strong>Download the Github release</strong>
                            </p>

                            <div class="block">
                                You can get the latest Bulma release as a <code>.zip</code> from GitHub:
                            </div>

                            <a class="button bd-fat-button is-primary is-light"
                                href="https://github.com/jgthms/bulma/releases/download/0.9.4/bulma-0.9.4.zip">
                                Download v0.9.4
                            </a>
                        </div>
                    </div>

                    <div class="bd-option-or">
                        <p>Or</p>
                    </div>

                    <div class="bd-option">
                        <div class="block media is-align-items-center">
                            <div class="media-left">
                                <span class="icon is-flex is-large has-text-sass">
                                    <i class="fab fa-sass fa-2x"></i>
                                </span>
                            </div>

                            <div class="media-content">
                                <p class="title is-4">Get the Bulma <strong class="has-text-sass">Sass</strong> library</p>
                                <p class="subtitle">A collection of <code>.sass</code> files to build your own version of
                                    Bulma</p>
                            </div>
                        </div>

                        <div class="bd-option-item">
                            <p class="bd-option-title block has-text-grey-light is-size-5">
                                <span class="button bd-fat-button is-success is-light is-pulled-right">Recommended</span>
                                Option 1. <strong>Install the NPM package</strong>
                            </p>

                            <p class="block">
                                Bulma is available through <a href="https://www.npmjs.com/package/bulma"
                                    target="_blank">npm</a>:
                            </p>





                            <div class="bd-tabs">
                                <nav class="bd-tabs-nav">
                                    <button class="bd-is-active">npm</button>
                                    <button>yarn</button>

                                </nav>

                                <div class="bd-tabs-items">
                                    <div class="bd-tabs-item bd-is-active">

                                        <figure class="highlight">
                                            <pre><code class="language-bash" data-lang="bash">npm <span class="nb">install </span>bulma</code></pre>
                                            <button class="button bd-copy">Copy</button>
                                        </figure>

                                    </div>
                                    <div class="bd-tabs-item">

                                        <figure class="highlight">
                                            <pre><code class="language-bash" data-lang="bash">yarn add bulma</code></pre>
                                            <button class="button bd-copy">Copy</button>
                                        </figure>

                                    </div>

                                </div>
                            </div>


                            <p class="block">
                                Bulma is also available via <a href="https://cdnjs.com/libraries/bulma"
                                    target="_blank">cdnjs</a>.
                            </p>
                        </div>

                        <div class="bd-option-item">
                            <p class="bd-option-title block has-text-grey-light is-size-5">
                                Option 2. <strong>Clone the GitHub repository</strong>
                            </p>

                            <p class="block">
                                Bulma is available on <a href="https://github.com/jgthms/bulma" target="_blank">GitHub</a>:
                            </p>







                            <div class="bd-tabs">
                                <nav class="bd-tabs-nav">
                                    <button class="bd-is-active">SSH</button>
                                    <button>HTTPS</button>

                                    <button>GitHub CLI</button>

                                </nav>

                                <div class="bd-tabs-items">
                                    <div class="bd-tabs-item bd-is-active">

                                        <figure class="highlight">
                                            <pre><code class="language-bash" data-lang="bash">git clone git@github.com:jgthms/bulma.git</code></pre>
                                            <button class="button bd-copy">Copy</button>
                                        </figure>

                                    </div>
                                    <div class="bd-tabs-item">

                                        <figure class="highlight">
                                            <pre><code class="language-bash" data-lang="bash">git clone https://github.com/jgthms/bulma.git</code></pre>
                                            <button class="button bd-copy">Copy</button>
                                        </figure>

                                    </div>

                                    <div class="bd-tabs-item">

                                        <figure class="highlight">
                                            <pre><code class="language-bash" data-lang="bash">gh repo clone jgthms/bulma</code></pre>
                                            <button class="button bd-copy">Copy</button>
                                        </figure>

                                    </div>

                                </div>
                            </div>


                            <div class="message is-warning">
                                <div class="message-body">
                                    Note that the GitHub repository also includes this documentation, so it’s significantly
                                    bigger than the NPM package.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h3 id="code-requirements" class="title is-4 is-spaced bd-anchor-title">
                    <span class="bd-anchor-name">
                        Code requirements
                    </span>
                    <a class="bd-anchor-link" href="#code-requirements">
                        #
                    </a>

                </h3>


                <div class="content">
                    <p>
                        For Bulma to work correctly, you need to make your webpage <strong>responsive</strong>.
                    </p>
                </div>

                <article class="media is-large">
                    <div class="media-left">
                        <p class="title is-5">1</p>
                    </div>
                    <div class="media-content">
                        <p class="title is-5">
                            Use the <strong>HTML5 doctype</strong>
                        </p>
                        <figure class="highlight">
                            <pre><code class="language-html" data-lang="html"><span class="cp">&lt;!DOCTYPE html&gt;</span></code></pre>
                            <button class="button bd-copy">Copy</button>
                        </figure>
                    </div>
                </article>

                <article class="media is-large">
                    <div class="media-left">
                        <p class="title is-5">2</p>
                    </div>
                    <div class="media-content">
                        <p class="title is-5">
                            Add the responsive <strong>viewport</strong> meta tag
                        </p>
                        <figure class="highlight">
                            <pre><code class="language-html" data-lang="html"><span class="nt">&lt;meta</span> <span class="na">name=</span><span class="s">"viewport"</span> <span class="na">content=</span><span class="s">"width=device-width, initial-scale=1"</span><span class="nt">&gt;</span></code></pre>
                            <button class="button bd-copy">Copy</button>
                        </figure>
                    </div>
                </article>

                <h3 id="starter-template" class="title is-4 is-spaced bd-anchor-title">
                    <span class="bd-anchor-name">
                        Starter template
                    </span>
                    <a class="bd-anchor-link" href="#starter-template">
                        #
                    </a>

                </h3>


                <div class="content">
                    <p>
                        If you want to get started <strong>right away</strong>, you can use this <strong>HTML starter
                            template</strong>. Just copy/paste this code in a file and save it on your computer.
                    </p>
                </div>

                <div class="bd-example bd-highlight-full">
                    <figure class="highlight">
                        <pre><code class="language-html" data-lang="html"><span class="cp">&lt;!DOCTYPE html&gt;</span>
        <span class="nt">&lt;html&gt;</span>
          <span class="nt">&lt;head&gt;</span>
            <span class="nt">&lt;meta</span> <span class="na">charset=</span><span class="s">"utf-8"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;meta</span> <span class="na">name=</span><span class="s">"viewport"</span> <span class="na">content=</span><span class="s">"width=device-width, initial-scale=1"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;title&gt;</span>Hello Bulma!<span class="nt">&lt;/title&gt;</span>
            <span class="nt">&lt;link</span> <span class="na">rel=</span><span class="s">"stylesheet"</span> <span class="na">href=</span><span class="s">"https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"</span><span class="nt">&gt;</span>
          <span class="nt">&lt;/head&gt;</span>
          <span class="nt">&lt;body&gt;</span>
          <span class="nt">&lt;section</span> <span class="na">class=</span><span class="s">"section"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"container"</span><span class="nt">&gt;</span>
              <span class="nt">&lt;h1</span> <span class="na">class=</span><span class="s">"title"</span><span class="nt">&gt;</span>
                Hello World
              <span class="nt">&lt;/h1&gt;</span>
              <span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"subtitle"</span><span class="nt">&gt;</span>
                My first website with <span class="nt">&lt;strong&gt;</span>Bulma<span class="nt">&lt;/strong&gt;</span>!
              <span class="nt">&lt;/p&gt;</span>
            <span class="nt">&lt;/div&gt;</span>
          <span class="nt">&lt;/section&gt;</span>
          <span class="nt">&lt;/body&gt;</span>
        <span class="nt">&lt;/html&gt;</span></code></pre><button class="button bd-copy">Copy</button>
                    </figure>
                </div>

                <h3 id="bulma-start" class="title is-4 is-spaced bd-anchor-title">
                    <span class="bd-anchor-name">
                        bulma-start
                    </span>
                    <a class="bd-anchor-link" href="#bulma-start">
                        #
                    </a>

                </h3>


                <div class="content">
                    <p>
                        <code><a href="https://bulma.io/bulma-start/">bulma-start</a></code> is a tiny npm package that
                        includes the <code>npm</code> dependencies you need to build your own website with Bulma.
                    </p>
                    <p>
                        <a class="button is-link" href="https://bulma.io/bulma-start/">Check it out</a>
                    </p>
                </div>

            </div>














            <!-- Previous link -->
            <!-- If first index in list -->


            <!-- Next link -->
            <!-- If last index in list -->




            <nav class="bd-docs-pagination bd-pagination-links">


                <a class="button bd-fat-button is-primary is-light bd-pagination-prev"
                    href="https://bulma.io/documentation/helpers/other-helpers/" title="Other">
                    <i>←</i>
                    <span>
                    <em>helpers:</em>
                    <strong>Other</strong>
                </span>
            </a>




            <a class="button bd-fat-button is-primary is-light bd-pagination-next"
                href="https://bulma.io/documentation/overview/classes/" title="CSS classes">
                <span>
                    <em>overview:</em>
                    <strong>CSS classes</strong>
                </span>
                <i>→</i>
            </a>

        </nav>




        <div id="typo" class="bd-docs-typo">
            <p class="has-text-grey-light">
                <a class="is-pulled-right" href="https://bulma.io/made-with-bulma/">
                    <img src="https://bulma.io/images/made-with-bulma.png" alt="Made with Bulma" width="128"
                        height="24">
                </a>
                This page is <strong class="has-text-grey">open source</strong>.
                Noticed a typo? Or something unclear?
                <br>
                <a class="has-text-grey"
                    href="https://github.com/jgthms/bulma/blob/master/docs/documentation/overview/start.html"
                    style="border-bottom: 1px solid currentColor;">
                    Improve this page on GitHub
                </a>
            </p>
        </div>

    </div>

</div></template>
<script lang="ts">

export default {

}
</script>
