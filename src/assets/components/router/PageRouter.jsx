import { lazy, Suspense, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"

import "bootstrap/dist/css/bootstrap.min.css";

import LoadingPage from '../loading_blocks/LoadingPage'
const PacksimPage = lazy(() => import('../pages/packsim/PacksimPage'));
const LoginPage = lazy(() => import('../pages/login/LoginPage'));
const CollectionPage = lazy(() => import('../pages/collection/CollectionPage'));
const CreditsPage = lazy(() => import('../pages/credits/CreditsPage'));
const CampaignSelectionPage = lazy(() => import('../pages/campaign/CampaignSelectionPage'));
const PackSelectorPage = lazy(() => import('../pages/packsim/PackSelecterPage'));
const DeckSelectorPage = lazy(() => import('../pages/collection/DeckSelectorPage'));

import { Pages } from '../../enums/EnumsPages'

import "../../css/main.css"
import "../../css/Usability/scrollbar.css"
import { StorageCookies } from '../../enums/EnumsCookies'
import ProtectedRoute from '../services/ProtectedRoute'
import Cookies from 'js-cookie'

import { GetSessionToken } from '../services/TokenStorage'
import { LogoutUser } from '../services/AuthenticationServices';

function PageRouter() {
    const navigate = useNavigate()

    useEffect(() => {
        navigate(Pages.LOGIN)

        if (GetSessionToken()){
            navigate(Pages.CAMPAIGNS)
        }

        return () => {
        // clear tokens
            //Cookies.remove(StorageCookies.SESSION)
        }
    }, [])

    //On Close Event

    /*

    Added Alternativly Event handler on DB to Remove Expired Tokens therefore:
    Deprecated o7

    useEffect(() => {
        const handleBeforeUnload = () => {
            LogoutUser(GetSessionToken())
        }

        window.addEventListener("beforeunload", handleBeforeUnload);

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };

    })

    */

    return <>
        <Suspense fallback={<LoadingPage />}>
            <Routes>
                <Route
                    path={Pages.LOGIN}
                    element={<LoginPage />}
                />

                <Route
                    path={Pages.CAMPAIGNS}
                    element={
                        <ProtectedRoute>
                            <CampaignSelectionPage />
                        </ProtectedRoute>}
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

                <Route
                    path={Pages.CREDITS}
                    element={
                    <CreditsPage />
                    }
                />
            </Routes>
        </Suspense>
    </>
}

export default PageRouter