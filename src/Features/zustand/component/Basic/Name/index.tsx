import React from "react";
import {useBasicStore} from "../../../store/basicStore.ts";


const NameComponent: React.FC = () => {

    /**
     * HOOKS
     */
        // const {setName, name} = useBasicStore(store=>store)
    const setName = useBasicStore((store) => store.setName)
    const name = useBasicStore((store) => store.name)

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