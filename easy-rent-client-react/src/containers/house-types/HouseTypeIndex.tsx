import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IHouseType } from "../../domain/IHouseType";
import { BaseService } from "../../services/base-service";
import HouseTypeCreate from "./HouseTypeCreate";

const HouseTypeIndex = () => {
    const [houseTypes, setHouseTypes] = useState([] as IHouseType[]);

    const loadData = async () => {
        let result = await BaseService.getAll<IHouseType>('/propertytypes');
        if (result.ok && result.data) {
            setHouseTypes(result.data);
        }
    }

    useEffect(() => {
        loadData();
    }, [])
    return (
        <div className="container">
            <main role="main" className="pb-3">
                <h1>Index</h1>

                <p>
                    <Link to="/PropertyTypes/Create">Create New</Link>
                </p>
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
                        {houseTypes.map(houseType => (
                            <tr key={houseType.id}>
                                <td>
                                    {houseType.propertyTypeValue}
                                </td>
                                <td>
                                    {houseType.propertyCount}
                                </td>
                                <td>
                                    <Link to={'/PropertyTypes/' + houseType.id}>Details</Link> |
                                    <Link to={'/PropertyTypes/Edit/' + houseType.id}> Edit</Link> |
                                    <Link to={'/PropertyTypes/Delete/' + houseType.id}> Delete</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
        </div>
    );
}

export default HouseTypeIndex;