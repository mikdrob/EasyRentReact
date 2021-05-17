import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader";
import { IHouseType } from "../../domain/IHouseType";
import { BaseService } from "../../services/base-service";
import { EPageStatus } from "../../types/EPageStatus";


const RowDisplay = (props: { houseType: IHouseType }) => (
    <tr>
        <td>
            {props.houseType.propertyTypeValue}
        </td>
        <td>
            {props.houseType.propertyCount}
        </td>
        <td>
            <Link to={'/PropertyTypes/' + props.houseType.id} >Details</Link> |
        <Link to={'/PropertyTypes/Edit/' + props.houseType.id}> Edit</Link> |
        <Link to={'/PropertyTypes/Delete/' + props.houseType.id}> Delete</Link>
        </td>
    </tr>
);

const HouseTypeIndex = () => {
    const [houseTypes, setHouseTypes] = useState([] as IHouseType[]);
    const [pageStatus, setPageStatus] = useState({ pageStatus: EPageStatus.Loading, statusCode: -1 });


    const loadData = async () => {
        let result = await BaseService.getAll<IHouseType>('/propertytypes');
        if (result.ok && result.data) {
            setPageStatus({ pageStatus: EPageStatus.Ok, statusCode: 0 });
            setHouseTypes(result.data);
        }
        else {
            setPageStatus({ pageStatus: EPageStatus.Error, statusCode: result.statusCode })
        }
    }

    useEffect(() => {
        loadData();
    }, [])
    return (
        <>
            <h1>Index</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>
                            House Type
                        </th>
                        <th>
                            PropertiesCount
                        </th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {houseTypes.map(houseType =>
                        <RowDisplay houseType={houseType} key={houseType.id} />)
                    }
                </tbody>
            </table>
            <Loader {...pageStatus} />
        </>

    );
}

export default HouseTypeIndex;
