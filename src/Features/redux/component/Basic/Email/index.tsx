import React from "react";
import {useDispatch, useSelector} from "react-redux";
import type {ReduxStoreState} from "../../../store";
import BasicSlice from "../../../store/basic.slice.ts";


const EmailComponent: React.FC = () => {

    /**
     * REDUX SELECTOR
     */
    const email = useSelector((store: ReduxStoreState) => {
        return store?.basic?.email
    })
    /**
     * HOOKS
     */
    const dispatch = useDispatch()

    /**
     * METHODS
     */
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(BasicSlice.actions.setEmail(e.target.value ?? ''))
    }

    return <div className={"p-3 shadow-md border-[1px] border-grey-100 rounded-md flex flex-col gap-2"}>
        <label className={'mb-2'}>Email</label>
        <input type="text" className={'p-2 border-[1px] border-grey-300'} value={email} onChange={handleEmailChange}/>
    </div>
}

export default EmailComponent