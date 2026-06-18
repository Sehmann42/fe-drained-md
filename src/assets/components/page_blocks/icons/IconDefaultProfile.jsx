import { useEffect, useState } from "react"

const IconDefaultProfile = ({ratio = "15px", file, status}) => {
    const [statusColor, setStatusColor] = useState("red")

    useEffect(() => {
        
        const caseStatus = status ? status : "offline"

        switch(caseStatus.toLowerCase()){
            case "offline":
                setStatusColor("red")
                break;
            case "online":
                setStatusColor("green")
                break;
        }

        return () => {
            
        };
    }, []);

    return <>
        <div className=" position-relative">
            <img style={{width: ratio, height: ratio}} src={file} />
            <div style={{backgroundColor: statusColor}} name="statusBall">

            </div>
        </div>
        
    </>
}

export default IconDefaultProfile