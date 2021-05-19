import { useState } from "react";

interface IFormValues {
    input: string,
    checkBox: boolean
}

export interface IFormProps {
    values: IFormValues,
    handleChange: (
        target: HTMLInputElement
    ) => void;
}

const FormView = (props: IFormProps) => {



    return (
        <form>
            <div className="form-group">
                <label htmlFor="formInputText">Text</label>
                <input value={props.values.input} onChange={(e) => props.handleChange(e.target)} type="text" className="form-control" id="formInputText" />
            </div>
            <div className="form-group form-check">
                <input checked={props.values.checkBox} onChange={(e) => props.handleChange(e.target)} type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

let initialFormValues : IFormValues = {
        input: "text",
        checkBox: true
}


const PageForm = () => {
    const [formValues, setFormValues] = useState(initialFormValues);
    const handleChange = (target: HTMLInputElement) => {
        if (target.id === 'formInputText'){
            setFormValues({...formValues, input: target.value});
        }
        if (target.id === 'exampleCheck1'){
            setFormValues({...formValues, checkBox: target.checked});
        }
    }
    return <FormView values={formValues} handleChange = {handleChange} />
};

export default PageForm;