const pageBase = import.meta.env.VITE_BASE

export const Pages = {
    LOGIN: pageBase + "/",
    COLLECTION: pageBase + "/collection",
    PACK_SIM: pageBase + "/simulator",
    DECKBUILDER: pageBase + "/builder",
    DECKSELECTOR: pageBase + "/deckselector",
    PACKSELECTOR: pageBase + "/packselector",
    CREDITS: pageBase + "/credits",
    CAMPAIGNS: pageBase + "/campaigns",
    SECRET: pageBase + "/pfanne"
}