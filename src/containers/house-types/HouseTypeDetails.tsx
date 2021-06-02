import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CustomLoader from "../../components/CustomLoader";
import { AppContext } from "../../context/AppContext";
import { IHouseType } from "../../domain/IHouseType";
import { BaseService } from "../../services/base-service";
import { EPageStatus } from "../../types/EPageStatus";
import { IRouteId } from "../../types/IRouteId";



const HouseTypeDetails = () => {
    const { id } = useParams() as IRouteId;
    const appState = useContext(AppContext);
    const [pageStatus, setPageStatus] = useState({ pageStatus: EPageStatus.Ok, statusCode: 0 });
    const [houseType, setHouseType] = useState({} as IHouseType);



    const loadData = async () => {
        if (appState.token) {
            let result = await BaseService.get<IHouseType>('/propertytypes', id, appState.token);
            if (result.ok && result.data) {
                setHouseType(result.data);
            }
            else {
                setPageStatus({ pageStatus: EPageStatus.Error, statusCode: result.statusCode })
            }
        }
        else {
            setPageStatus({ pageStatus: EPageStatus.NotAuthorised, statusCode: 500 })
        }
    }

    useEffect(() => {
        loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            <CustomLoader {...pageStatus} />
            <Link to={'/housetypes'}>Back to List</Link>
        </>

    );
}

export default HouseTypeDetails;

