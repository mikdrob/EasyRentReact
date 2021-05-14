import { useParams } from "react-router-dom";
import { IRouteId } from "../../types/IRouteId";

const HouseTypeDetails = () => {
    let {id} = useParams() as IRouteId;
    return (
            <div>
                HouseTypeDetails {id}
            </div>
    );
}

export default HouseTypeDetails;