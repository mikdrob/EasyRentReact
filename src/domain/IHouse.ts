import { IHousePicture } from "./IHousePicture";

export interface IHouse {
    id: string,
    title: string,
    price: number,
    description: string,
    bedroomCount: number,
    tenantsCount: number,
    erUserId: string,
    propertyTypeId: string,
    propertyPictures: IHousePicture[],
    createAt: Date
}