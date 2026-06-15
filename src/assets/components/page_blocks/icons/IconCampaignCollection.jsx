const IconCampaignCollection = ({ratio = "50px"}) => {

    return <>
        <img style={{width: ratio, height: ratio}} src={import.meta.env.VITE_BASE + "/icons/other/campaign.png"} />
    </>
}

export default IconCampaignCollection
