import React from "react";
import NameComponent from "./Name";
import EmailComponent from "./Email";

const BasicComponent: React.FC = () => {
    return <>
        <div className="flex gap-[4px] flex-wrap p-8 justify-center">
            <NameComponent/>
            <EmailComponent/>
        </div>
    </>
}


export default BasicComponent