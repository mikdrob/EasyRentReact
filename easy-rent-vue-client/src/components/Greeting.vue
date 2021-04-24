<template>
    <div>{{hello}} {{name}}</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
    components: {},
    props: {
        name: String,
    },
})
export default class Greeting extends Vue {
    name!: string;
    hello = "greetings, ";
}
</script>
