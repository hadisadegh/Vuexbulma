<template>
  <div class="container">
        

        <section class="hero bd-hero bd-is-basic">
          <div class="hero-body">
            
              <div class="container">
                
        <div class="bd-hero-body">
          <div class="bd-hero-heading">
            <h1 class="title algolia-lvl0">
              
              <p>Responsiveness</p>
        
            </h1>
            <div class="subtitle is-4 algolia-lvl1">
              <p>Bulma is a <strong>mobile-first</strong> framework</p>
        
            </div>
            
          </div>
        </div>
        
              </div>
            
          </div>
        </section>
        
        
        <div class="bd-docs-body">
          <div class="bd-docs-content bd-content algolia-content">
            
        
        <h3 id="vertical-by-default" class="title is-4 is-spaced bd-anchor-title">
          <span class="bd-anchor-name">
            Vertical by default
          </span>
          <a class="bd-anchor-link" href="#vertical-by-default">
            #
          </a>
          
        </h3>
        
        
        <div class="content">
          <p>
            Every element in Bulma is <strong>mobile-first</strong> and optimizes for <strong>vertical reading</strong>, so by default on mobile:
          </p>
          <ul>
            <li><code>columns</code> are stacked vertically</li>
            <li>the <code>level</code> component will show its children stacked vertically</li>
            <li>the <code>nav</code> menu will be hidden</li>
          </ul>
          <p>You can however enforce the <strong>horizontal</strong> layout for both <code>columns</code> or <code>level</code> by appending the <code>is-mobile</code> modifier.</p>
        </div>
        
        <h3 id="breakpoints" class="title is-4 is-spaced bd-anchor-title">
          <span class="bd-anchor-name">
            Breakpoints
          </span>
          <a class="bd-anchor-link" href="#breakpoints">
            #
          </a>
          
        </h3>
        
        
        
        
        
        <div class="content">
          <p>Bulma has <a href="https://github.com/jgthms/bulma/blob/master/sass/utilities/initial-variables.sass#L56,L64" target="_blank">4 breakpoints</a> which defines <strong>5 screen sizes</strong>:</p>
          <ul>
            
              
              <li><code>mobile</code>: up to <code>768px</code></li>
            
              
              <li><code>tablet</code>: from <code>769px</code></li>
            
              
              <li><code>desktop</code>: from <code>1024px</code></li>
            
              
              <li><code>widescreen</code>: from <code>1216px</code></li>
            
              
              <li><code>fullhd</code>: from <code>1408px</code></li>
            
          </ul>
        
          <p>To make use of these breakpoints, Bulma provides <a href="https://bulma.io/documentation/utilities/responsive-mixins/">9 responsive mixins</a>.</p>
        </div>
        
        <div class="table-container">
          <table class="table is-bordered">
            <thead>
              <tr>
                
                  
                  <th style="width: 20%;">
                    Mobile<br>
                    
                      Up to <code>768px</code>
                    
                  </th>
                
                  
                  <th style="width: 20%;">
                    Tablet<br>
                    
                      Between <code>769px</code> and <code>1023px</code>
                    
                  </th>
                
                  
                  <th style="width: 20%;">
                    Desktop<br>
                    
                      Between <code>1024px</code> and <code>1215px</code>
                    
                  </th>
                
                  
                  <th style="width: 20%;">
                    Widescreen<br>
                    
                      Between <code>1216px</code> and <code>1407px</code>
                    
                  </th>
                
                  
                  <th style="width: 20%;">
                    FullHD<br>
                    
                      <code>1408px</code> and above
                    
                  </th>
                
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p class="notification is-primary">mobile</p>
                </td>
                <td colspan="4">
                  <p class="notification">-</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p class="notification">-</p>
                </td>
                <td colspan="4">
                  <p class="notification is-primary">tablet</p>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <p class="notification">-</p>
                </td>
                <td colspan="3">
                  <p class="notification is-primary">desktop</p>
                </td>
              </tr>
              <tr>
                <td colspan="3">
                  <p class="notification">-</p>
                </td>
                <td colspan="2">
                  <p class="notification is-primary">widescreen</p>
                </td>
              </tr>
              <tr>
                <td colspan="4">
                  <p class="notification">-</p>
                </td>
                <td>
                  <p class="notification is-primary">fullhd</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p class="notification">-</p>
                </td>
                <td>
                  <p class="notification is-primary">tablet-only</p>
                </td>
                <td colspan="3">
                  <p class="notification">-</p>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <p class="notification">-</p>
                </td>
                <td>
                  <p class="notification is-primary">desktop-only</p>
                </td>
                <td colspan="2">
                  <p class="notification">-</p>
                </td>
              </tr>
              <tr>
                <td colspan="3">
                  <p class="notification">-</p>
                </td>
                <td>
                  <p class="notification is-primary">widescreen-only</p>
                </td>
                <td>
                  <p class="notification">-</p>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <p class="notification is-primary">touch</p>
                </td>
                <td colspan="3">
                  <p class="notification">-</p>
                </td>
              </tr>
              <tr>
                <td colspan="3">
                  <p class="notification is-primary">until-widescreen</p>
                </td>
                <td colspan="2">
                  <p class="notification">-</p>
                </td>
              </tr>
              <tr>
                <td colspan="4">
                  <p class="notification is-primary">until-fullhd</p>
                </td>
                <td colspan="1">
                  <p class="notification">-</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        
        
        
        <div class="content">
          <p>
            To simplify using these breakpoints, Bulma provides <a href="https://bulma.io/documentation/utilities/responsive-mixins/">easy-to-use responsive mixins</a>.
          </p>
        </div>
        
        
        
        
        
        <h3 id="disabling-breakpoints" class="title is-4 is-spaced bd-anchor-title">
          <span class="bd-anchor-name">
            Disabling breakpoints
          </span>
          <a class="bd-anchor-link" href="#disabling-breakpoints">
            #
          </a>
          
        </h3>
        
        
        <div class="content">
          <p>
            By default, the <code>$widescreen</code> and <code>$fullhd</code> breakpoints are <strong>enabled</strong>. You can disable them by setting the corresponding Sass boolean to <code>false</code>:
          </p>
        </div>
        
        <div class="bd-highlight-full">
          <figure class="highlight"><pre><code class="language-sass" data-lang="sass"><span class="c1">// Disable the widescreen breakpoint</span>
        <span class="nv">$widescreen-enabled</span><span class="p">:</span> <span class="bp">false</span>
        
        <span class="c1">// Disable the fullhd breakpoint</span>
        <span class="nv">$fullhd-enabled</span><span class="p">:</span> <span class="bp">false</span></code></pre><button class="button bd-copy">Copy</button></figure>
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
          <div class="bd-var-name"><figure class="highlight"><pre><code class="language-css" data-lang="css"><span class="err">$</span><span class="nt">gap</span></code></pre><button class="button bd-copy">Copy</button></figure></div>
          <div class="bd-var-type bd-is-size">size</div>
          <div class="bd-var-value"><figure class="highlight"><pre><code class="language-css" data-lang="css"><span class="err">32</span><span class="nt">px</span></code></pre><button class="button bd-copy">Copy</button></figure></div>
          <div class="bd-var-computed-value"><figure class="highlight"><pre><code class="language-css" data-lang="css"></code></pre><button class="button bd-copy">Copy</button></figure></div>
          <div class="bd-var-computed-type bd-is-"></div>
        </div>
        
              
                
                <div class="bd-var bd-is-body">
          <div class="bd-var-name"><figure class="highlight"><pre><code class="language-css" data-lang="css"><span class="err">$</span><span class="nt">tablet</span></code></pre><button class="button bd-copy">Copy</button></figure></div>
          <div class="bd-var-type bd-is-size">size</div>
          <div class="bd-var-value"><figure class="highlight"><pre><code class="language-css" data-lang="css"><span class="err">769</span><span class="nt">px</span></code></pre><button class="button bd-copy">Copy</button></figure></div>
          <div class="bd-var-computed-value"><figure class="highlight"><pre><code class="language-css" data-lang="css"></code></pre><button class="button bd-copy">Copy</button></figure></div>
          <div class="bd-var-computed-type bd-is-"></div>
        </div>
        
              
                
                <div class="bd-var bd-is-body">
          <div class="bd-var-name"><figure class="highlight"><pre><code class="language-css" data-lang="css"><span class="err">$</span><span class="nt">desktop</span></code></pre><button class="button bd-copy">Copy</button></figure></div>
          <div class="bd-var-type bd-is-computed">computed</div>
          <div class="bd-var-value"><figure class="highlight"><pre><code class="language-css" data-lang="css"><span class="err">960</span><span class="nt">px</span> <span class="o">+</span> <span class="o">(</span><span class="err">2</span> <span class="o">*</span> <span class="err">$</span><span class="nt">gap</span><span class="o">)</span></code></pre><button class="button bd-copy">Copy</button></figure></div>
          <div class="bd-var-computed-value"><figure class="highlight"><pre><code class="language-css" data-lang="css"></code></pre><button class="button bd-copy">Copy</button></figure></div>
          <div class="bd-var-computed-type bd-is-"></div>
        </div>
        
              
                
                <div class="bd-var bd-is-body">
          <div class="bd-var-name"><figure class="highlight"><pre><code class="language-css" data-lang="css"><span class="err">$</span><span class="nt">widescreen</span></code></pre><button class="button bd-copy">Copy</button></figure></div>
          <div class="bd-var-type bd-is-computed">computed</div>
          <div class="bd-var-value"><figure class="highlight"><pre><code class="language-css" data-lang="css"><span class="err">1152</span><span class="nt">px</span> <span class="o">+</span> <span class="o">(</span><span class="err">2</span> <span class="o">*</span> <span class="err">$</span><span class="nt">gap</span><span class="o">)</span></code></pre><button class="button bd-copy">Copy</button></figure></div>
          <div class="bd-var-computed-value"><figure class="highlight"><pre><code class="language-css" data-lang="css"></code></pre><button class="button bd-copy">Copy</button></figure></div>
          <div class="bd-var-computed-type bd-is-"></div>
        </div>
        
              
                
                <div class="bd-var bd-is-body">
          <div class="bd-var-name"><figure class="highlight"><pre><code class="language-css" data-lang="css"><span class="err">$</span><span class="nt">fullhd</span></code></pre><button class="button bd-copy">Copy</button></figure></div>
          <div class="bd-var-type bd-is-computed">computed</div>
          <div class="bd-var-value"><figure class="highlight"><pre><code class="language-css" data-lang="css"><span class="err">1344</span><span class="nt">px</span> <span class="o">+</span> <span class="o">(</span><span class="err">2</span> <span class="o">*</span> <span class="err">$</span><span class="nt">gap</span><span class="o">)</span></code></pre><button class="button bd-copy">Copy</button></figure></div>
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
              
                
                <a class="button bd-fat-button is-primary is-light bd-pagination-prev" href="https://bulma.io/documentation/overview/modular/" title="Modularity">
                  <i>←</i>
                  <span>
                    <em>overview:</em>
                    <strong>Modularity</strong>
                  </span>
                </a>
              
        
              
                
                <a class="button bd-fat-button is-primary is-light bd-pagination-next" href="https://bulma.io/documentation/overview/colors/" title="Colors">
                  <span>
                    <em>overview:</em>
                    <strong>Colors</strong>
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
            <a class="has-text-grey" href="https://github.com/jgthms/bulma/blob/master/docs/documentation/overview/responsiveness.html" style="border-bottom: 1px solid currentColor;">
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
