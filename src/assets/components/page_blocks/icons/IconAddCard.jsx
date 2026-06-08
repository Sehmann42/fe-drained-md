const IconAddCard = ({ratio = "50px"}) => {
    return <>
        <img style={{   height: ratio,
                        width: ratio
                    }} src={import.meta.env.VITE_BASE + "/icons/other/add.png"} />
    </>
}

export default IconAddCard