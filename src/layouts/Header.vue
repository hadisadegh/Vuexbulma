<template>
   <nav class="is-sticky-top navbar navigation" role="navigation" aria-label="main navigation">
      <div class="container">
         <div class="navbar-brand">
            <a class="navbar-item" href="index.html">
               <img class="img-fluid" src="images/logo.png" alt="godocs" width="155px">
            </a>

            <a role="button" class="navbar-burger burger" aria-expanded="false" data-target="navbar-links">
               <span aria-hidden="true"></span>
               <span aria-hidden="true"></span>
               <span aria-hidden="true"></span>
            </a>
         </div>

         <div id="navbar-links" class="navbar-menu">
            <div class="navbar-start ml-auto"><router-link to="/" class="navbar-item">Home</router-link>

               <a class="navbar-item" href="search.html">Search Page</a>
            </div>

            <div class="navbar-end ml-0">
               <div class="navbar-item py-0">
                  <form class="search-wrapper hide-on-desktop my-3" action="search.html">
                     <input id="search-by" name="s" type="search" class="input" placeholder="Search here ...">
                     <button class="border-0 bg-white p-3" type="submit"><i class="ti-search"></i></button>
                  </form>

                  <a href="changelog.html" class="btn btn-sm btn-outline-primary ml-4">changelog</a>
                  <a href="contact.html" class="btn btn-sm btn-primary ml-4">contact</a>
               </div>
            </div>
         </div>
         <form class="search-wrapper is-hidden show-on-desktop" action="search.html">
            <input id="search-by" name="s" type="search" class="input" placeholder="Search here ...">
            <button class="border-0 bg-white p-3" type="submit"><i class="ti-search"></i></button>
         </form>
      </div>
   </nav>
</template>