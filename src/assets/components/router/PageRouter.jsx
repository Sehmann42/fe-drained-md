import { Suspense, useEffect } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"

import LoadingPage from '../loading_blocks/LoadingPage'
import PacksimPage from '../pages/packsim/PacksimPage'
import LoginPage from '../pages/login/LoginPage'
import CollectionPage from '../pages/collection/CollectionPage'

import { Pages } from '../../enums/EnumsPages'

import "../../css/main.css"

function PageRouter() {
    const navigate = useNavigate()

    useEffect(() => {
        
        
        navigate(Pages.LOGIN)

        return () => {
        // clear tokens
        }
    }, [])

    return <>
        <Suspense fallback={<LoadingPage />}>
            <Routes>
            <Route
                path={Pages.LOGIN}
                element={<LoginPage />}
            />

            <Route
                path={Pages.COLLECTION}
                element={<CollectionPage />}
            />

            <Route
                path={Pages.PACK_SIM}
                element={<PacksimPage />}
            />
            </Routes>
        </Suspense>
    </>
}

export default PageRouter