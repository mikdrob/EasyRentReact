<template src ='./Login.html'>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import store from "@/store/index"

@Options({
    components: {},
    props: {},
})
export default class Login extends Vue {
    email: string = "";
    password: string = "";

    async loginClicked(event: Event): Promise<void> {
        event.preventDefault();

        store.dispatch('logIn', { email: this.email, password: this.password });
    }
}
</script>
