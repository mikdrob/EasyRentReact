<template src='./HouseType.html'>
</template>

<script lang='ts'>
import BaseController from "@/api/base-controller";
import { IPropertyType } from "@/domain/IPropertyType";
import { Vue } from "vue-class-component";

export default class HouseType extends Vue {
    private api: BaseController<IPropertyType> = new BaseController<IPropertyType>("https://localhost:5001/api/v1/propertytypes");
    objectItems: IPropertyType[] = [];
    async mounted(): Promise<void> {
        const response = await this.api.getAll();
        if (response.data) {
            this.objectItems = response.data;
        }
    }
}
</script>
