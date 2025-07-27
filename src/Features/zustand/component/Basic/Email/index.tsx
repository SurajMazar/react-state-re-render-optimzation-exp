import React from "react";
import {useBasicStore} from "../../../store/basicStore.ts";
import {useShallow} from "zustand/react/shallow";


const EmailComponent: React.FC = () => {

    /**
     * HOOKS
     */
        // const {setEmail, email} = useBasicStore(store=>store)
    const {setEmail, email} = useBasicStore(useShallow(store => {
            const {setEmail, email} = store
            return {setEmail, email}
        }))

    /**
     * METHODS
     */
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value ?? '')
    }

    return <div className={"p-3 shadow-md border-[1px] border-grey-100 rounded-md flex flex-col gap-2"}>
        <label className={'mb-2'}>Email</label>
        <input type="text" className={'p-2 border-[1px] border-grey-300'} value={email} onChange={handleEmailChange}/>
    </div>
}

export default EmailComponent