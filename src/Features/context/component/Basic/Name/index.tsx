import React, {useContext} from "react";
import {BasicContext} from "../../../store/basic.context.tsx";


const NameComponent: React.FC = () => {

    /**
     * REDUX SELECTOR
     */
    const {name, setName} = useContext(BasicContext)

    /**
     * METHODS
     */
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value ?? '')
    }

    return <div className={"p-3 shadow-md border-[1px] border-grey-100 rounded-md flex flex-col gap-2"}>
        <label className={'mb-2'}>Name</label>
        <input type="text" className={'p-2 border-[1px] border-grey-300'} value={name} onChange={handleNameChange}/>
    </div>
}

export default NameComponent