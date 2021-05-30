import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CustomLoader from "../../components/CustomLoader";
import { AppContext } from "../../context/AppContext";
import { IHouseType } from "../../domain/IHouseType";
import { BaseService } from "../../services/base-service";
import { EPageStatus } from "../../types/EPageStatus";
import { IRouteId } from "../../types/IRouteId";



const HouseTypeDetails = () => {
    let {id} = useParams() as IRouteId;
    const appState = useContext(AppContext);

    const loadData = async () => {
        if (appState.token){
        let result = await BaseService.get<IHouseType>('/propertytypes', id, appState.token);
        if (result.ok && result.data) {
            console.log(result)
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
                    </dd>
                    <dt className="col-sm-4">
                        House Type Count
        </dt>
                    <dd className="col-sm-8">
                    </dd>
                </dl>
            </div>
        </>

    );
}

export default HouseTypeDetails;

