<template src='./App.html'>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import store from "./store/index"

@Options({
    components: {},
})
export default class App extends Vue {
    get token(): string | null{
        return store.state.token;
    }

    logOut(): void {
        store.commit("logOut");
        this.$router.push('/');
    }
}
</script>
<style scoped src="./static/site.css">
</style>
