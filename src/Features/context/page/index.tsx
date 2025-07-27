import React from "react";
import {BasicContextWrapper} from "../store/basic.context.tsx";
import BasicComponent from "../component/Basic";

const ContextHome: React.FC = () => {
    return <BasicContextWrapper>
        <BasicComponent/>
    </BasicContextWrapper>
}

export default ContextHome