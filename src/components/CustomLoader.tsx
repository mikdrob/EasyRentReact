import { EPageStatus } from "../types/EPageStatus";
import Loader from "react-loader-spinner";

const CustomLoader = (props: {pageStatus: EPageStatus, statusCode: number}) => {
    if (props.pageStatus === EPageStatus.Loading){
        return (
            <Loader
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={3000} //3 secs
            />
          );
    }
    if (props.pageStatus === EPageStatus.Error){
        return <div className="alert alert-danger" role="alert">Error.. {props.statusCode}</div>
    }
    return <></>
}

export default CustomLoader;