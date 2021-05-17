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
    urlEndPoint: string = 'https://easyrentproj.azurewebsites.net/api/v1/Account/Login';

    async loginClicked(event: Event): Promise<void> {
        event.preventDefault();

        store.dispatch('logIn', { email: this.email, password: this.password, url: this.urlEndPoint });
    }
}
</script>
