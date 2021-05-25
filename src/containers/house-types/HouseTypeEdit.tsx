import { useParams } from "react-router-dom";
import { IRouteId } from "../../types/IRouteId";

const HouseTypeEdit = () => {
    let {id} = useParams() as IRouteId;
    return (
            <div>
                HouseTypeEdit {id}
            </div>
    );
}

export default HouseTypeEdit;