const IconRemoveCard = ({ratio = "50px"}) => {
    return <>
    <img style={{
                    height: ratio,
                    width: ratio
                }} src={import.meta.env.VITE_BASE + "/icons/other/minus.png"}/>
    </>
}

export default IconRemoveCard