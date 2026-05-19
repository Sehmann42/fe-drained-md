import { Suspense, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"

import LoadingPage from '../loading_blocks/LoadingPage'
import PacksimPage from '../pages/packsim/PacksimPage'
import LoginPage from '../pages/login/LoginPage'
import CollectionPage from '../pages/collection/CollectionPage'

import { Pages } from '../../enums/EnumsPages'

import "../../css/main.css"
import { StorageCookies } from '../../enums/EnumsCookies'
import ProtectedRoute from '../services/ProtectedRoute'
import Cookies from 'js-cookie'
import PackSelectorPage from '../pages/packsim/PackSelecterPage'
import DeckSelectorPage from '../pages/collection/DeckSelectorPage'
import { GetSessionToken } from '../services/TokenStorage'

function PageRouter() {
    const navigate = useNavigate()

    useEffect(() => {
        navigate(Pages.LOGIN)
        
        

        if (GetSessionToken()){
            navigate(Pages.COLLECTION)
        }

        return () => {
        // clear tokens
            //Cookies.remove(StorageCookies.SESSION)
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
                    element={
                        <ProtectedRoute>
                            <CollectionPage />
                        </ProtectedRoute>}
                />
            
                <Route
                    path={Pages.PACK_SIM}
                    element={
                    <ProtectedRoute>
                        <PacksimPage />
                    </ProtectedRoute>}
                />

                <Route
                    path={Pages.PACKSELECTOR}
                    element={
                    <ProtectedRoute>
                        <PackSelectorPage />
                    </ProtectedRoute>}
                />

                <Route
                    path={Pages.DECKSELECTOR}
                    element={
                    <ProtectedRoute>
                        <DeckSelectorPage />
                    </ProtectedRoute>}
                />
            </Routes>
        </Suspense>
    </>
}

export default PageRouter