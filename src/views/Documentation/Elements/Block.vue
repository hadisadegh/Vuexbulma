<template>
  <div class="container">
        

        <section class="hero bd-hero bd-is-basic">
          <div class="hero-body">
            
              <div class="container">
                
        <div class="bd-hero-body">
          <div class="bd-hero-heading">
            <h1 class="title algolia-lvl0">
              
              <p>Block</p>
        
            </h1>
            <div class="subtitle is-4 algolia-lvl1">
              <p>Bulma's most basic standoff <strong>block</strong></p>
        
            </div>
            
          </div>
        </div>
        
              </div>
            
          </div>
        </section>
        
        
        <div class="bd-docs-body">
          <div class="bd-docs-content bd-content algolia-content">
            
        
        
        
        
        
        
        
        
        
        <!--  -->
        
        <div class="content">
          <p>
            The <code>block</code> element is a simple <strong>spacer tool</strong>. It allows <strong>sibling</strong> HTML elements to have a consistent margin between them:
          </p>
        </div>
        
        <div class="
          bd-snippet
          bd-is-vertical
          
          
          bd-is-size-1
          ">
          <div class="bd-snippet-example">
            <p class="bd-snippet-title">
              <span class="bd-snippet-tag bd-is-example">Example</span>
            </p>
        
            <div class="bd-snippet-preview">
              
                
        <div class="block">
          This text is within a <strong>block</strong>.
        </div>
        <div class="block">
          This text is within a <strong>second block</strong>. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
        </div>
        <div class="block">
          This text is within a <strong>third block</strong>. This block has no margin at the bottom.
        </div>
        
              
            </div>
          </div>
        
          <div class="bd-snippet-source">
            <p class="bd-snippet-title">
              <span class="bd-snippet-tag bd-is-html">HTML</span>
            </p>
        
            <div class="
                bd-snippet-code
                bd-highlight-full
                
              ">
              <figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"block"</span><span class="nt">&gt;</span>
          This text is within a <span class="nt">&lt;strong&gt;</span>block<span class="nt">&lt;/strong&gt;</span>.
        <span class="nt">&lt;/div&gt;</span>
        <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"block"</span><span class="nt">&gt;</span>
          This text is within a <span class="nt">&lt;strong&gt;</span>second block<span class="nt">&lt;/strong&gt;</span>. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
        <span class="nt">&lt;/div&gt;</span>
        <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"block"</span><span class="nt">&gt;</span>
          This text is within a <span class="nt">&lt;strong&gt;</span>third block<span class="nt">&lt;/strong&gt;</span>. This block has no margin at the bottom.
        <span class="nt">&lt;/div&gt;</span></code></pre><button class="button bd-copy">Copy</button></figure>
            </div>
          </div>
        </div>
        
        
        <div class="content">
          <p>
            As you can see, the first two blocks have a <code>margin-bottom</code> applied, but <strong>not the third one.</strong>. That is because Bulma applies a space on all blocks, <strong>except the last one</strong>. This means you can use as many blocks as you want, the spacing will only appear <strong>between them</strong>.
          </p>
          <p>
            Without using <code>block</code>, the HTML elements would have no space between them:
          </p>
        </div>
        
        <div class="
          bd-snippet
          bd-is-vertical
          
          
          bd-is-size-1
          ">
          <div class="bd-snippet-example">
            <p class="bd-snippet-title">
              <span class="bd-snippet-tag bd-is-example">Example</span>
            </p>
        
            <div class="bd-snippet-preview">
              
                
        <div>
          This text is <em>not</em> within a <strong>block</strong>.
        </div>
        <div>
          This text <em>isn't</em> within a <strong>block</strong> either. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
        </div>
        <div>
          This text is also <em>not</em> within a <strong>block</strong>.
        </div>
        
              
            </div>
          </div>
        
          <div class="bd-snippet-source">
            <p class="bd-snippet-title">
              <span class="bd-snippet-tag bd-is-html">HTML</span>
            </p>
        
            <div class="
                bd-snippet-code
                bd-highlight-full
                
              ">
              <figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div&gt;</span>
          This text is <span class="nt">&lt;em&gt;</span>not<span class="nt">&lt;/em&gt;</span> within a <span class="nt">&lt;strong&gt;</span>block<span class="nt">&lt;/strong&gt;</span>.
        <span class="nt">&lt;/div&gt;</span>
        <span class="nt">&lt;div&gt;</span>
          This text <span class="nt">&lt;em&gt;</span>isn't<span class="nt">&lt;/em&gt;</span> within a <span class="nt">&lt;strong&gt;</span>block<span class="nt">&lt;/strong&gt;</span> either. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
        <span class="nt">&lt;/div&gt;</span>
        <span class="nt">&lt;div&gt;</span>
          This text is also <span class="nt">&lt;em&gt;</span>not<span class="nt">&lt;/em&gt;</span> within a <span class="nt">&lt;strong&gt;</span>block<span class="nt">&lt;/strong&gt;</span>.
        <span class="nt">&lt;/div&gt;</span></code></pre><button class="button bd-copy">Copy</button></figure>
            </div>
          </div>
        </div>
        
        
        <!--  -->
        
        <h3 id="you-re-already-using-it" class="title is-4 is-spaced bd-anchor-title">
          <span class="bd-anchor-name">
            You're already using it
          </span>
          <a class="bd-anchor-link" href="#you-re-already-using-it">
            #
          </a>
          
        </h3>
        
        
        
        <div class="content">
          <p>
            As a matter of fact, you're <strong>already using</strong> the <code>block</code> without knowing it. Its CSS properties are <strong>shared</strong> across several Bulma elements and components:
          </p>
        
          <ul>
            <li><code>breadcrumb</code></li>
            <li><code>level</code></li>
            <li><code>message</code></li>
            <li><code>pagination</code></li>
            <li><code>tabs</code></li>
            <li><code>box</code></li>
            <li><code>content</code></li>
            <li><code>notification</code></li>
            <li><code>other</code></li>
            <li><code>progress</code></li>
            <li><code>table</code></li>
            <li><code>title</code></li>
          </ul>
        
          <p>
            This is thanks to the <code>@extend %block</code> Sass placeholder feature.
          </p>
        
          <p>
            Here's how it would look like in comparison:
          </p>
        </div>
        
        <div class="columns is-size-6">
          <div class="column">
            
        <p class="title mb-0">Without block</p>
        <div class="block mb-0">
          <div class="field is-grouped">
            <div class="control is-expanded">
              <input class="input" type="text" placeholder="Text input">
            </div>
            <div class="control">
              <button class="button is-primary">Button</button>
            </div>
          </div>
        </div>
        <nav class="pagination mb-0" role="navigation" aria-label="pagination">
          <a class="pagination-previous" title="This is the first page" disabled="">Previous</a>
          <a class="pagination-next">Next page</a>
          <ul class="pagination-list">
            <li>
              <a class="pagination-link is-current" aria-label="Page 1" aria-current="page">1</a>
            </li>
            <li>
              <a class="pagination-link" aria-label="Goto page 2">2</a>
            </li>
            <li>
              <a class="pagination-link" aria-label="Goto page 3">3</a>
            </li>
          </ul>
        </nav>
        <progress class="progress is-success mb-0" value="30" max="100">30%</progress>
        <div class="notification is-warning mb-0">
          <button class="delete"></button>
          Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.
        </div>
        <article class="message is-danger mb-0">
          <div class="message-header">
            <p>Error</p>
            <button class="delete" aria-label="delete"></button>
          </div>
          <div class="message-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
          </div>
        </article>
        
          </div>
          <div class="column">
            
        <p class="title">With block</p>
        <div class="block">
          <div class="field is-grouped">
            <div class="control is-expanded">
              <input class="input" type="text" placeholder="Text input">
            </div>
            <div class="control">
              <button class="button is-primary">Button</button>
            </div>
          </div>
        </div>
        <nav class="pagination" role="navigation" aria-label="pagination">
          <a class="pagination-previous" title="This is the first page" disabled="">Previous</a>
          <a class="pagination-next">Next page</a>
          <ul class="pagination-list">
            <li>
              <a class="pagination-link is-current" aria-label="Page 1" aria-current="page">1</a>
            </li>
            <li>
              <a class="pagination-link" aria-label="Goto page 2">2</a>
            </li>
            <li>
              <a class="pagination-link" aria-label="Goto page 3">3</a>
            </li>
          </ul>
        </nav>
        <progress class="progress is-success" value="30" max="100">30%</progress>
        <div class="notification is-warning">
          <button class="delete"></button>
          Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.
        </div>
        <article class="message is-danger">
          <div class="message-header">
            <p>Error</p>
            <button class="delete" aria-label="delete"></button>
          </div>
          <div class="message-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
          </div>
        </article>
        
          </div>
        </div>
        
        <div class="content">
          <p>
            No matter which Bulma elements and components you are using, and no matter their order, they will have a <strong>consistent space</strong> between them.
          </p>
        </div>
        
        <!--  -->
        
        <h3 id="one-line-of-css" class="title is-4 is-spaced bd-anchor-title">
          <span class="bd-anchor-name">
            One line of CSS
          </span>
          <a class="bd-anchor-link" href="#one-line-of-css">
            #
          </a>
          
        </h3>
        
        
        <div class="content">
          <p>
            As you can see, the CSS of the <code>block</code> is very simple: it applies a <code>margin-bottom</code> on all siblings, <strong>except the last one</strong>.
          </p>
        </div>
        
        <figure class="highlight"><pre><code class="language-css" data-lang="css"><span class="nc">.block</span><span class="nd">:not</span><span class="o">(</span><span class="nd">:last-child</span><span class="o">)</span> <span class="p">{</span>
          <span class="nl">margin-bottom</span><span class="p">:</span> <span class="m">1.5rem</span><span class="p">;</span>
        <span class="p">}</span></code></pre><button class="button bd-copy">Copy</button></figure>
        
        <div class="content">
          <p>
            This prevents the last sibling from adding unnecessary space at the bottom.
          </p>
        </div>
        
        
        
        
        
        
        
        
        
          </div>
        
          
        
        
        
        
        
        
        
        
        
        
        
        
        <!-- Previous link -->
        <!-- If first index in list -->
        
        
        <!-- Next link -->
        <!-- If last index in list -->
        
        
        
          
            <nav class="bd-docs-pagination bd-pagination-links">
              
                
                <a class="button bd-fat-button is-primary is-light bd-pagination-prev" href="https://bulma.io/documentation/columns/options/" title="Options">
                  <i>←</i>
                  <span>
                    <em>columns:</em>
                    <strong>Options</strong>
                  </span>
                </a>
              
        
              
                
                <a class="button bd-fat-button is-primary is-light bd-pagination-next" href="https://bulma.io/documentation/elements/box/" title="Box">
                  <span>
                    <em>elements:</em>
                    <strong>Box</strong>
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
            <a class="has-text-grey" href="https://github.com/jgthms/bulma/blob/master/docs/documentation/elements/block.html" style="border-bottom: 1px solid currentColor;">
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
