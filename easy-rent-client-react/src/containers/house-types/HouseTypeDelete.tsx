import { useParams } from "react-router-dom";
import { IRouteId } from "../../types/IRouteId";

const HouseTypeDelete = () => {
    let {id} = useParams() as IRouteId;

    return (
            <div>
                HouseTypeDelete {id}
            </div>
    );
}

export default HouseTypeDelete;