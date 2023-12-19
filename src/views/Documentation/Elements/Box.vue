<template>
  <div class="container">
        

        <section class="hero bd-hero bd-is-basic">
          <div class="hero-body">
            
              <div class="container">
                
        <div class="bd-hero-body">
          <div class="bd-hero-heading">
            <h1 class="title algolia-lvl0">
              
              <p>Box</p>
        
            </h1>
            <div class="subtitle is-4 algolia-lvl1">
             
              <p>Ein weißes <strong>box</strong> zur Aufnahme anderer Elemente</p>
        
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
            The <code>box</code> element is a simple container with a white background, some padding, and a box shadow.
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
              
                
        <div class="box">
          I'm in a box.
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
              <figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"box"</span><span class="nt">&gt;</span>
          I'm in a box.
        <span class="nt">&lt;/div&gt;</span></code></pre><button class="button bd-copy">Copy</button></figure>
            </div>
          </div>
        </div>
        
        
        <div class="content">
          <p>
            Because it acts as a container, you can easily include other components, like <strong>form elements</strong>:
          </p>
        </div>
        
        <div class="
          bd-snippet
          bd-is-vertical
          
          
          bd-is-size-2
          ">
          <div class="bd-snippet-example">
            <p class="bd-snippet-title">
              <span class="bd-snippet-tag bd-is-example">Example</span>
            </p>
        
            <div class="bd-snippet-preview">
              
                
        <form class="box">
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input class="input" type="email" placeholder="e.g. alex@example.com">
            </div>
          </div>
        
          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input class="input" type="password" placeholder="********">
            </div>
          </div>
        
          <button class="button is-primary">Sign in</button>
        </form>
        
              
            </div>
          </div>
        
          <div class="bd-snippet-source">
            <p class="bd-snippet-title">
              <span class="bd-snippet-tag bd-is-html">HTML</span>
            </p>
        
            <div class="
                bd-snippet-code
                bd-highlight-full
                bd-is-more bd-is-more-clipped
              "><button class="button is-small bd-show"><span class="icon"><i class="fas fa-code"></i></span><strong>Show code</strong></button>
              <figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;form</span> <span class="na">class=</span><span class="s">"box"</span><span class="nt">&gt;</span>
          <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"field"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;label</span> <span class="na">class=</span><span class="s">"label"</span><span class="nt">&gt;</span>Email<span class="nt">&lt;/label&gt;</span>
            <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"control"</span><span class="nt">&gt;</span>
              <span class="nt">&lt;input</span> <span class="na">class=</span><span class="s">"input"</span> <span class="na">type=</span><span class="s">"email"</span> <span class="na">placeholder=</span><span class="s">"e.g. alex@example.com"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;/div&gt;</span>
          <span class="nt">&lt;/div&gt;</span>
        
          <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"field"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;label</span> <span class="na">class=</span><span class="s">"label"</span><span class="nt">&gt;</span>Password<span class="nt">&lt;/label&gt;</span>
            <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"control"</span><span class="nt">&gt;</span>
              <span class="nt">&lt;input</span> <span class="na">class=</span><span class="s">"input"</span> <span class="na">type=</span><span class="s">"password"</span> <span class="na">placeholder=</span><span class="s">"********"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;/div&gt;</span>
          <span class="nt">&lt;/div&gt;</span>
        
          <span class="nt">&lt;button</span> <span class="na">class=</span><span class="s">"button is-primary"</span><span class="nt">&gt;</span>Sign in<span class="nt">&lt;/button&gt;</span>
        <span class="nt">&lt;/form&gt;</span></code></pre><button class="button bd-copy">Copy</button></figure>
            </div>
          </div>
        </div>
        
        
        <div class="content">
          <p>
            Or a  <code>media</code> object:
          </p>
        </div>
        
        <div class="
          bd-snippet
          bd-is-vertical
          
          
          bd-is-size-2
          ">
          <div class="bd-snippet-example">
            <p class="bd-snippet-title">
              <span class="bd-snippet-tag bd-is-example">Example</span>
            </p>
        
            <div class="bd-snippet-preview">
              
                
        <div class="box">
          <article class="media">
            <div class="media-left">
              <figure class="image is-64x64">
                <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                  <br>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                </p>
              </div>
              <nav class="level is-mobile">
                <div class="level-left">
                  <a class="level-item" aria-label="reply">
                    <span class="icon is-small">
                      <i class="fas fa-reply" aria-hidden="true"></i>
                    </span>
                  </a>
                  <a class="level-item" aria-label="retweet">
                    <span class="icon is-small">
                      <i class="fas fa-retweet" aria-hidden="true"></i>
                    </span>
                  </a>
                  <a class="level-item" aria-label="like">
                    <span class="icon is-small">
                      <i class="fas fa-heart" aria-hidden="true"></i>
                    </span>
                  </a>
                </div>
              </nav>
            </div>
          </article>
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
                bd-is-more bd-is-more-clipped
              "><button class="button is-small bd-show"><span class="icon"><i class="fas fa-code"></i></span><strong>Show code</strong></button>
              <figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"box"</span><span class="nt">&gt;</span>
          <span class="nt">&lt;article</span> <span class="na">class=</span><span class="s">"media"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"media-left"</span><span class="nt">&gt;</span>
              <span class="nt">&lt;figure</span> <span class="na">class=</span><span class="s">"image is-64x64"</span><span class="nt">&gt;</span>
                <span class="nt">&lt;img</span> <span class="na">src=</span><span class="s">"https://bulma.io/images/placeholders/128x128.png"</span> <span class="na">alt=</span><span class="s">"Image"</span><span class="nt">&gt;</span>
              <span class="nt">&lt;/figure&gt;</span>
            <span class="nt">&lt;/div&gt;</span>
            <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"media-content"</span><span class="nt">&gt;</span>
              <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"content"</span><span class="nt">&gt;</span>
                <span class="nt">&lt;p&gt;</span>
                  <span class="nt">&lt;strong&gt;</span>John Smith<span class="nt">&lt;/strong&gt;</span> <span class="nt">&lt;small&gt;</span>@johnsmith<span class="nt">&lt;/small&gt;</span> <span class="nt">&lt;small&gt;</span>31m<span class="nt">&lt;/small&gt;</span>
                  <span class="nt">&lt;br&gt;</span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                <span class="nt">&lt;/p&gt;</span>
              <span class="nt">&lt;/div&gt;</span>
              <span class="nt">&lt;nav</span> <span class="na">class=</span><span class="s">"level is-mobile"</span><span class="nt">&gt;</span>
                <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"level-left"</span><span class="nt">&gt;</span>
                  <span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"level-item"</span> <span class="na">aria-label=</span><span class="s">"reply"</span><span class="nt">&gt;</span>
                    <span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"icon is-small"</span><span class="nt">&gt;</span>
                      <span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fas fa-reply"</span> <span class="na">aria-hidden=</span><span class="s">"true"</span><span class="nt">&gt;&lt;/i&gt;</span>
                    <span class="nt">&lt;/span&gt;</span>
                  <span class="nt">&lt;/a&gt;</span>
                  <span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"level-item"</span> <span class="na">aria-label=</span><span class="s">"retweet"</span><span class="nt">&gt;</span>
                    <span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"icon is-small"</span><span class="nt">&gt;</span>
                      <span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fas fa-retweet"</span> <span class="na">aria-hidden=</span><span class="s">"true"</span><span class="nt">&gt;&lt;/i&gt;</span>
                    <span class="nt">&lt;/span&gt;</span>
                  <span class="nt">&lt;/a&gt;</span>
                  <span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"level-item"</span> <span class="na">aria-label=</span><span class="s">"like"</span><span class="nt">&gt;</span>
                    <span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"icon is-small"</span><span class="nt">&gt;</span>
                      <span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fas fa-heart"</span> <span class="na">aria-hidden=</span><span class="s">"true"</span><span class="nt">&gt;&lt;/i&gt;</span>
                    <span class="nt">&lt;/span&gt;</span>
                  <span class="nt">&lt;/a&gt;</span>
                <span class="nt">&lt;/div&gt;</span>
              <span class="nt">&lt;/nav&gt;</span>
            <span class="nt">&lt;/div&gt;</span>
          <span class="nt">&lt;/article&gt;</span>
        <span class="nt">&lt;/div&gt;</span></code></pre><button class="button bd-copy">Copy</button></figure>
            </div>
          </div>
        </div>
        
        
        
        
        
        
        
        
          <div class="bd-vars">
            <h3 id="variables" class="title is-4 is-spaced bd-anchor-title">
          <span class="bd-anchor-name">
            Variables
          </span>
          <a class="bd-anchor-link" href="#variables">
            #
          </a>
          
        </h3>
        
        
            <div class="bd-var bd-is-head">
              <div class="bd-var-name">
                Name
              </div>
              <div class="bd-var-type">
                Type
              </div>
              <div class="bd-var-value">
                Value
              </div>
              <div class="bd-var-computed-value">
                Computed Value
              </div>
              <div class="bd-var-computed-type">
                Computed Type
              </div>
            </div>
            
              
                
                <div class="bd-var bd-is-body">
          <div class="bd-var-name"><figure class="highlight"><pre><code class="language-css" data-lang="css"><span class="err">$</span><span class="nt">box-color</span></code></pre><button class="button bd-copy">Copy</button></figure></div>
          <div class="bd-var-type bd-is-variable">variable</div>
          <div class="bd-var-value"><figure class="highlight"><pre><code class="language-css" data-lang="css"><span class="err">$</span><span class="nt">text</span></code></pre><button class="button bd-copy">Copy</button></figure></div>
          <div class="bd-var-computed-value"><figure class="highlight"><pre><code class="language-css" data-lang="css"><span class="nt">hsl</span><span class="o">(</span><span class="err">0</span><span class="o">,</span> <span class="err">0</span><span class="o">%,</span> <span class="err">29</span><span class="o">%)</span></code></pre><button class="button bd-copy">Copy</button></figure></div>
          <div class="bd-var-computed-type bd-is-color">color</div>
        </div>
        
              
                
                <div class="bd-var bd-is-body">
          <div class="bd-var-name"><figure class="highlight"><pre><code class="language-css" data-lang="css"><span class="err">$</span><span class="nt">box-background-color</span></code></pre><button class="button bd-copy">Copy</button></figure></div>
          <div class="bd-var-type bd-is-variable">variable</div>
          <div class="bd-var-value"><figure class="highlight"><pre><code class="language-css" data-lang="css"><span class="err">$</span><span class="nt">scheme-main</span></code></pre><button class="button bd-copy">Copy</button></figure></div>
          <div class="bd-var-computed-value"><figure class="highlight"><pre><code class="language-css" data-lang="css"><span class="nt">hsl</span><span class="o">(</span><span class="err">0</span><span class="o">,</span> <span class="err">0</span><span class="o">%,</span> <span class="err">100</span><span class="o">%)</span></code></pre><button class="button bd-copy">Copy</button></figure></div>
          <div class="bd-var-computed-type bd-is-color">color</div>
        </div>
        
              
                
                <div class="bd-var bd-is-body">
          <div class="bd-var-name"><figure class="highlight"><pre><code class="language-css" data-lang="css"><span class="err">$</span><span class="nt">box-radius</span></code></pre><button class="button bd-copy">Copy</button></figure></div>
          <div class="bd-var-type bd-is-variable">variable</div>
          <div class="bd-var-value"><figure class="highlight"><pre><code class="language-css" data-lang="css"><span class="err">$</span><span class="nt">radius-large</span></code></pre><button class="button bd-copy">Copy</button></figure></div>
          <div class="bd-var-computed-value"><figure class="highlight"><pre><code class="language-css" data-lang="css"><span class="err">6</span><span class="nt">px</span></code></pre><button class="button bd-copy">Copy</button></figure></div>
          <div class="bd-var-computed-type bd-is-size">size</div>
        </div>
        
              
                
                <div class="bd-var bd-is-body">
          <div class="bd-var-name"><figure class="highlight"><pre><code class="language-css" data-lang="css"><span class="err">$</span><span class="nt">box-shadow</span></code></pre><button class="button bd-copy">Copy</button></figure></div>
          <div class="bd-var-type bd-is-variable">variable</div>
          <div class="bd-var-value"><figure class="highlight"><pre><code class="language-css" data-lang="css"><span class="err">$</span><span class="nt">shadow</span></code></pre><button class="button bd-copy">Copy</button></figure></div>
          <div class="bd-var-computed-value"><figure class="highlight"><pre><code class="language-css" data-lang="css"><span class="err">0</span> <span class="err">0</span><span class="o">.</span><span class="err">5</span><span class="nt">em</span> <span class="err">1</span><span class="nt">em</span> <span class="nt">-0</span><span class="o">.</span><span class="err">125</span><span class="nt">em</span> <span class="nt">rgba</span><span class="o">(</span><span class="err">$</span><span class="nt">scheme-invert</span><span class="o">,</span> <span class="err">0</span><span class="o">.</span><span class="err">1</span><span class="o">),</span> <span class="err">0</span> <span class="err">0</span><span class="nt">px</span> <span class="err">0</span> <span class="err">1</span><span class="nt">px</span> <span class="nt">rgba</span><span class="o">(</span><span class="err">$</span><span class="nt">scheme-invert</span><span class="o">,</span> <span class="err">0</span><span class="o">.</span><span class="err">02</span><span class="o">)</span></code></pre><button class="button bd-copy">Copy</button></figure></div>
          <div class="bd-var-computed-type bd-is-shadow">shadow</div>
        </div>
        
              
                
                <div class="bd-var bd-is-body">
          <div class="bd-var-name"><figure class="highlight"><pre><code class="language-css" data-lang="css"><span class="err">$</span><span class="nt">box-padding</span></code></pre><button class="button bd-copy">Copy</button></figure></div>
          <div class="bd-var-type bd-is-size">size</div>
          <div class="bd-var-value"><figure class="highlight"><pre><code class="language-css" data-lang="css"><span class="err">1</span><span class="o">.</span><span class="err">25</span><span class="nt">rem</span></code></pre><button class="button bd-copy">Copy</button></figure></div>
          <div class="bd-var-computed-value"><figure class="highlight"><pre><code class="language-css" data-lang="css"></code></pre><button class="button bd-copy">Copy</button></figure></div>
          <div class="bd-var-computed-type bd-is-"></div>
        </div>
        
              
                
                <div class="bd-var bd-is-body">
          <div class="bd-var-name"><figure class="highlight"><pre><code class="language-css" data-lang="css"><span class="err">$</span><span class="nt">box-link-hover-shadow</span></code></pre><button class="button bd-copy">Copy</button></figure></div>
          <div class="bd-var-type bd-is-shadow">shadow</div>
          <div class="bd-var-value"><figure class="highlight"><pre><code class="language-css" data-lang="css"><span class="err">0</span> <span class="err">0</span><span class="o">.</span><span class="err">5</span><span class="nt">em</span> <span class="err">1</span><span class="nt">em</span> <span class="nt">-0</span><span class="o">.</span><span class="err">125</span><span class="nt">em</span> <span class="nt">rgba</span><span class="o">(</span><span class="err">$</span><span class="nt">scheme-invert</span><span class="o">,</span> <span class="err">0</span><span class="o">.</span><span class="err">1</span><span class="o">),</span> <span class="err">0</span> <span class="err">0</span> <span class="err">0</span> <span class="err">1</span><span class="nt">px</span> <span class="err">$</span><span class="nt">link</span></code></pre><button class="button bd-copy">Copy</button></figure></div>
          <div class="bd-var-computed-value"><figure class="highlight"><pre><code class="language-css" data-lang="css"></code></pre><button class="button bd-copy">Copy</button></figure></div>
          <div class="bd-var-computed-type bd-is-"></div>
        </div>
        
              
                
                <div class="bd-var bd-is-body">
          <div class="bd-var-name"><figure class="highlight"><pre><code class="language-css" data-lang="css"><span class="err">$</span><span class="nt">box-link-active-shadow</span></code></pre><button class="button bd-copy">Copy</button></figure></div>
          <div class="bd-var-type bd-is-shadow">shadow</div>
          <div class="bd-var-value"><figure class="highlight"><pre><code class="language-css" data-lang="css"><span class="nt">inset</span> <span class="err">0</span> <span class="err">1</span><span class="nt">px</span> <span class="err">2</span><span class="nt">px</span> <span class="nt">rgba</span><span class="o">(</span><span class="err">$</span><span class="nt">scheme-invert</span><span class="o">,</span> <span class="err">0</span><span class="o">.</span><span class="err">2</span><span class="o">),</span> <span class="err">0</span> <span class="err">0</span> <span class="err">0</span> <span class="err">1</span><span class="nt">px</span> <span class="err">$</span><span class="nt">link</span></code></pre><button class="button bd-copy">Copy</button></figure></div>
          <div class="bd-var-computed-value"><figure class="highlight"><pre><code class="language-css" data-lang="css"></code></pre><button class="button bd-copy">Copy</button></figure></div>
          <div class="bd-var-computed-type bd-is-"></div>
        </div>
        
              
            
          </div>
        
        
        
          </div>
        
          
        
        
        
        
        
        
        
        
        
        
        
        
        <!-- Previous link -->
        <!-- If first index in list -->
        
        
        <!-- Next link -->
        <!-- If last index in list -->
        
        
        
          
            <nav class="bd-docs-pagination bd-pagination-links">
              
                
                <a class="button bd-fat-button is-primary is-light bd-pagination-prev" href="https://bulma.io/documentation/elements/block/" title="Block">
                  <i>←</i>
                  <span>
                    <em>elements:</em>
                    <strong>Block</strong>
                  </span>
                </a>
              
        
              
                
                <a class="button bd-fat-button is-primary is-light bd-pagination-next" href="https://bulma.io/documentation/elements/button/" title="Button">
                  <span>
                    <em>elements:</em>
                    <strong>Button</strong>
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
            <a class="has-text-grey" href="https://github.com/jgthms/bulma/blob/master/docs/documentation/elements/box.html" style="border-bottom: 1px solid currentColor;">
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
