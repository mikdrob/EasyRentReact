<template>
<header>
    <nav class="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
        <div class="container">
            <a class="navbar-brand" href="/">WebApp</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                <ul class="navbar-nav flex-grow-1">
                        <li class="nav-item">
                            <a class="nav-link text-dark" href="/PropertyTypes">PropertyTypes</a>
                        </li>
<li class="nav-item dropdown">
    <a class="nav-link text-dark dropdown-toggle text-dark" href="#" id="navbarDrobdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        EN
    </a>
    <div class="dropdown-menu" aria-labelledby="dropdownMenu">
        <a class="dropdown-item text-dark" href="/Home/SetLanguage?culture=et&amp;returnUrl=%2F">eesti</a>
        <a class="dropdown-item text-dark" href="/Home/SetLanguage?culture=en&amp;returnUrl=%2F">English</a>
    </div>
</li>

                </ul>
            </div>
        </div>
    </nav>
</header>
<div class="container">
    <main role="main" class="pb-3">
          <router-view />
    </main>
</div>

<footer class="border-top footer text-muted">
    <div class="container">
      Vue test
    </div>
</footer>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
    components: {
    },
})
export default class App extends Vue {}
</script>
