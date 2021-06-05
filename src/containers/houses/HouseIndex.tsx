import { useEffect, useState } from "react";
import CustomLoader from "../../components/CustomLoader";
import { IHouse } from "../../domain/IHouse";
import { BaseService } from "../../services/base-service";
import { EPageStatus } from "../../types/EPageStatus";


const BlockDisplay = (props: { house: IHouse }) => (
    <div className="card mt-5">
        <div className="card-horizontal">
            <div className="col-md-4 px-0">
                <img src={props.house.propertyPictures[0].pictureUrl} className="img-fluid" alt="card" />
            </div>
            <div className="card-body">
                <h4 className="card-title">{props.house.title}</h4>
                <p className="card-text">{props.house.description}</p>
                <p className="font-weight-bold">{new Intl.NumberFormat("en-GB", {
                    style: "currency",
                    currency: "EUR"
                }).format(props.house.price)}</p>
            </div>
        </div>
        <div className="card-footer">
            <small className="text-muted">Posted on {new Date(props.house.createAt).toLocaleDateString()}</small>
        </div>
    </div>
);

const HouseIndex = () => {
    const [house, setHouseTypes] = useState([] as IHouse[]);
    const [pageStatus, setPageStatus] = useState({ pageStatus: EPageStatus.Loading, statusCode: -1 });


    const loadData = async () => {
        let houses = await BaseService.getAll<IHouse>('/properties/house_with_media');
        if (houses.ok && houses.data) {
            setPageStatus({ pageStatus: EPageStatus.Ok, statusCode: 0 });
            setHouseTypes(houses.data);
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

            {house.map(house =>
                <BlockDisplay house={house} key={house.id} />)
            }
            <div className="d-flex justify-content-center">
                <CustomLoader {...pageStatus} />
            </div>
        </>

    );
}

export default HouseIndex;
