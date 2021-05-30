import { useContext, useEffect, useState } from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import CustomLoader from "../../components/CustomLoader";
import { AppContext } from "../../context/AppContext";
import { IHouseType } from "../../domain/IHouseType";
import { BaseService } from "../../services/base-service";
import { EPageStatus } from "../../types/EPageStatus";
import { IRouteId } from "../../types/IRouteId";



const HouseTypeDetails = () => {
    let { id } = useParams() as IRouteId;
    const appState = useContext(AppContext);

    const [houseType, setHouseType] = useState({} as IHouseType);



    const loadData = async () => {
        if (appState.token) {
            let result = await BaseService.get<IHouseType>('/propertytypes', id, appState.token);
            if (result.ok && result.data) {
                setHouseType(result.data);
            }
            else {
                console.log("error")
            }
        }
    }

    useEffect(() => {
        loadData();
    }, [])
    return (
        <>
            <h1>Details</h1>

            <div>
                <h4>House Type</h4>
                <hr />
                <dl className="row">
                    <dt className="col-sm-4">
                        House Type
        </dt>
                    <dd className="col-sm-8">
                        {houseType.propertyTypeValue}
                    </dd>
                    <dt className="col-sm-4">
                        House Type Count
        </dt>
                    <dd className="col-sm-8">
                        {houseType.propertiesCount}
                    </dd>
                </dl>
            </div>
            <Link to={'/housetypes'}>Back to List</Link>
        </>

    );
}

export default HouseTypeDetails;

