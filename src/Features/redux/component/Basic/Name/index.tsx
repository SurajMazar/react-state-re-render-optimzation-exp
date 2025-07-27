import React from "react";
import {useDispatch, useSelector} from "react-redux";
import type {ReduxStoreState} from "../../../store";
import BasicSlice from "../../../store/basic.slice.ts";


const NameComponent: React.FC = () => {

    /**
     * REDUX SELECTOR
     */
    const {name} = useSelector((store: ReduxStoreState) => {
        return store?.basic
    })
    /**
     * HOOKS
     */
    const dispatch = useDispatch()

    /**
     * METHODS
     */
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(BasicSlice.actions.setName(e.target.value ?? ''))
    }

    return <>
        <div className={"p-3 shadow-md border-[1px] border-grey-100 rounded-md flex flex-col gap-2"}>
            <label className={'mb-2'}>Name</label>
            <input type="text" className={'p-2 border-[1px] border-grey-300'} value={name} onChange={handleNameChange}/>
        </div>
    </>
}

export default NameComponent