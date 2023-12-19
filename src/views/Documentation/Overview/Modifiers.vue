<template>

<div class="container">
        

        <section class="hero bd-hero bd-is-basic">
          <div class="hero-body">
            
              <div class="container">
                
        <div class="bd-hero-body">
          <div class="bd-hero-heading">
            <h1 class="title algolia-lvl0">
              
              <p>Modifiers syntax</p>
        
            </h1>
            <div class="subtitle is-4 algolia-lvl1">
              <p>Most Bulma elements have <strong>alternative</strong> styles. To apply them, you only need to append one of the <strong>modifier classes</strong>. They all start with <code>is-</code> or <code>has-</code>.</p>
        
            </div>
            
          </div>
        </div>
        
              </div>
            
          </div>
        </section>
        
        
        <div class="bd-docs-body">
          <div class="bd-docs-content bd-content algolia-content">
            
        
        
        
        
        
        
        
        
        
        
        
        <div class="columns">
          <div class="column">
            <p>Let's start with a simple <strong>button</strong> that uses the <code>"button"</code> CSS class:</p>
          </div>
          <div class="column">
            <p>
              
        <button class="button">
          Button
        </button>
        
            </p>
          </div>
          <div class="column is-half">
            <figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;button</span> <span class="na">class=</span><span class="s">"button"</span><span class="nt">&gt;</span>
          Button
        <span class="nt">&lt;/button&gt;</span></code></pre><button class="button bd-copy">Copy</button></figure>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <p>By <strong>adding</strong> the <code>"is-primary"</code> CSS class, you can modify the <strong>color</strong>:</p>
          </div>
          <div class="column">
            <p>
              
        <button class="button is-primary">
          Button
        </button>
        
            </p>
          </div>
          <div class="column is-half">
            <figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;button</span> <span class="na">class=</span><span class="s">"button is-primary"</span><span class="nt">&gt;</span>
          Button
        <span class="nt">&lt;/button&gt;</span></code></pre><button class="button bd-copy">Copy</button></figure>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <div class="content">
              <p>You can use one of the <strong>6 main colors</strong>:</p>
              <ul>
                <li><code>is-primary</code></li>
                <li><code>is-link</code></li>
                <li><code>is-info</code></li>
                <li><code>is-success</code></li>
                <li><code>is-warning</code></li>
                <li><code>is-danger</code></li>
              </ul>
            </div>
          </div>
          <div class="column">
            <p class="field">
              <button class="button is-primary">Button</button>
            </p>
            <p class="field">
              <button class="button is-link">Button</button>
            </p>
            <p class="field">
              <button class="button is-info">Button</button>
            </p>
            <p class="field">
              <button class="button is-success">Button</button>
            </p>
            <p class="field">
              <button class="button is-warning">Button</button>
            </p>
            <p class="field">
              <button class="button is-danger">Button</button>
            </p>
          </div>
          <div class="column is-half">
            <div class="bd-highlight-full">
              <figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;button</span> <span class="na">class=</span><span class="s">"button is-primary"</span><span class="nt">&gt;</span>
          Button
        <span class="nt">&lt;/button&gt;</span>
        <span class="nt">&lt;button</span> <span class="na">class=</span><span class="s">"button is-link"</span><span class="nt">&gt;</span>
          Button
        <span class="nt">&lt;/button&gt;</span>
        <span class="nt">&lt;button</span> <span class="na">class=</span><span class="s">"button is-info"</span><span class="nt">&gt;</span>
          Button
        <span class="nt">&lt;/button&gt;</span>
        <span class="nt">&lt;button</span> <span class="na">class=</span><span class="s">"button is-success"</span><span class="nt">&gt;</span>
          Button
        <span class="nt">&lt;/button&gt;</span>
        <span class="nt">&lt;button</span> <span class="na">class=</span><span class="s">"button is-warning"</span><span class="nt">&gt;</span>
          Button
        <span class="nt">&lt;/button&gt;</span>
        <span class="nt">&lt;button</span> <span class="na">class=</span><span class="s">"button is-danger"</span><span class="nt">&gt;</span>
          Button
        <span class="nt">&lt;/button&gt;</span></code></pre><button class="button bd-copy">Copy</button></figure>
            </div>
          </div>
        </div>
        
        <div class="columns">
          <div class="column">
            <div class="content">
              <p>You can also alter the <strong>size</strong>:</p>
              <ul>
                <li><code>is-small</code></li>
                <li><code>is-medium</code></li>
                <li><code>is-large</code></li>
              </ul>
            </div>
          </div>
          <div class="column">
            <p class="field">
              <button class="button is-small">Button</button>
            </p>
            <p class="field">
              <button class="button">Button</button>
            </p>
            <p class="field">
              <button class="button is-medium">Button</button>
            </p>
            <p class="field">
              <button class="button is-large">Button</button>
            </p>
          </div>
          <div class="column is-half">
            <figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;button</span> <span class="na">class=</span><span class="s">"button is-small"</span><span class="nt">&gt;</span>
          Button
        <span class="nt">&lt;/button&gt;</span>
        <span class="nt">&lt;button</span> <span class="na">class=</span><span class="s">"button"</span><span class="nt">&gt;</span>
          Button
        <span class="nt">&lt;/button&gt;</span>
        <span class="nt">&lt;button</span> <span class="na">class=</span><span class="s">"button is-medium"</span><span class="nt">&gt;</span>
          Button
        <span class="nt">&lt;/button&gt;</span>
        <span class="nt">&lt;button</span> <span class="na">class=</span><span class="s">"button is-large"</span><span class="nt">&gt;</span>
          Button
        <span class="nt">&lt;/button&gt;</span></code></pre><button class="button bd-copy">Copy</button></figure>
          </div>
        </div>
        
        <div class="columns">
          <div class="column">
            <div class="content">
              <p>Or the <strong>style</strong> or <strong>state</strong>:</p>
              <ul>
                <li><code>is-outlined</code></li>
                <li><code>is-loading</code></li>
                <li><code>[disabled]</code></li>
              </ul>
            </div>
          </div>
          <div class="column">
            <p class="field">
              <button class="button is-primary is-outlined">Button</button>
            </p>
            <p class="field">
              <button class="button is-loading">Button</button>
            </p>
            <p class="field">
              <button class="button" disabled="">Button</button>
            </p>
          </div>
          <div class="column is-half">
            <figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;button</span> <span class="na">class=</span><span class="s">"button is-primary is-outlined"</span><span class="nt">&gt;</span>
          Button
        <span class="nt">&lt;/button&gt;</span>
        <span class="nt">&lt;button</span> <span class="na">class=</span><span class="s">"button is-loading"</span><span class="nt">&gt;</span>
          Button
        <span class="nt">&lt;/button&gt;</span>
        <span class="nt">&lt;button</span> <span class="na">class=</span><span class="s">"button"</span> <span class="na">disabled</span><span class="nt">&gt;</span>
          Button
        <span class="nt">&lt;/button&gt;</span></code></pre><button class="button bd-copy">Copy</button></figure>
          </div>
        </div>
        
        <div class="columns">
          <div class="column">
            <div class="content">
              As a result, it's very easy to <strong>combine modifiers:</strong>
            </div>
          </div>
          <div class="column">
            <p class="field">
              <button class="button is-primary is-small" disabled="">Button</button>
            </p>
            <p class="field">
              <button class="button is-info is-loading">Button</button>
            </p>
            <p class="field">
              <button class="button is-danger is-outlined is-large">Button</button>
            </p>
          </div>
          <div class="column is-half">
            <figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;button</span> <span class="na">class=</span><span class="s">"button is-primary is-small"</span> <span class="na">disabled</span><span class="nt">&gt;</span>
          Button
        <span class="nt">&lt;/button&gt;</span>
        <span class="nt">&lt;button</span> <span class="na">class=</span><span class="s">"button is-info is-loading"</span><span class="nt">&gt;</span>
          Button
        <span class="nt">&lt;/button&gt;</span>
        <span class="nt">&lt;button</span> <span class="na">class=</span><span class="s">"button is-danger is-outlined is-large"</span><span class="nt">&gt;</span>
          Button
        <span class="nt">&lt;/button&gt;</span></code></pre><button class="button bd-copy">Copy</button></figure>
          </div>
        </div>
        
          </div>
        
          
        
        
        
        
        
        
        
        
        
        
        
        
        <!-- Previous link -->
        <!-- If first index in list -->
        
        
        <!-- Next link -->
        <!-- If last index in list -->
        
        
        
          
            <nav class="bd-docs-pagination bd-pagination-links">
              
                
                <a class="button bd-fat-button is-primary is-light bd-pagination-prev" href="https://bulma.io/documentation/overview/classes/" title="CSS classes">
                  <i>←</i>
                  <span>
                    <em>overview:</em>
                    <strong>CSS classes</strong>
                  </span>
                </a>
              
        
              
                
                <a class="button bd-fat-button is-primary is-light bd-pagination-next" href="https://bulma.io/documentation/overview/modular/" title="Modularity">
                  <span>
                    <em>overview:</em>
                    <strong>Modularity</strong>
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
            <a class="has-text-grey" href="https://github.com/jgthms/bulma/blob/master/docs/documentation/overview/modifiers.html" style="border-bottom: 1px solid currentColor;">
              Improve this page on GitHub
            </a>
          </p>
        </div>
        
        </div>
        
              </div>
</template>
<script lang="ts">
export default {
  setup() {},
};
</script>
