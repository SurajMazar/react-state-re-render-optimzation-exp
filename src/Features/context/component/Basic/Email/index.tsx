import React, {useContext} from "react";
import {BasicContext} from "../../../store/basic.context.tsx";


const EmailComponent: React.FC = () => {

    /**
     * REDUX SELECTOR
     */
    const {email, setEmail} = useContext(BasicContext)

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