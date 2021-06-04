import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CustomLoader from "../../components/CustomLoader";
import { IHouse } from "../../domain/IHouse";
import { IHousePicture } from "../../domain/IHousePicture";
import { IHouseType } from "../../domain/IHouseType";
import { BaseService } from "../../services/base-service";
import { EPageStatus } from "../../types/EPageStatus";


const RowDisplay = (props: { houseType: IHouseType }) => (
    <tr>
       
    </tr>
);

const HouseIndex = () => {
    //const [houseTypes, setHouseTypes] = useState([] as IHouseType[]);
    const [pageStatus, setPageStatus] = useState({ pageStatus: EPageStatus.Loading, statusCode: -1 });


    const loadData = async () => {
        let houses = await BaseService.getAll<IHouse>('/properties/house_with_media');
        if (houses.ok && houses.data) {
            setPageStatus({ pageStatus: EPageStatus.Ok, statusCode: 0 });
            console.log(houses.data[0].propertyPictures[0].pictureUrl);
           // setHouseTypes(result.data);
        }
        else {
            setPageStatus({ pageStatus: EPageStatus.Error, statusCode: houses.statusCode })
        }
    }

    useEffect(() => {
        loadData();
    }, [])
    return (
        <>
            <h1>Rent Now</h1>
            <table className="table">
                
            </table>
            <div className="d-flex justify-content-center">
                <CustomLoader {...pageStatus} />
            </div>
        </>

    );
}

export default HouseIndex;
