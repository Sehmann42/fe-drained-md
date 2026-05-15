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

function PageRouter() {
    const navigate = useNavigate()

    const [session, setSession] = useState(null)

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

                <ProtectedRoute>
                    <Route
                        path={Pages.COLLECTION}
                        element={<CollectionPage />}
                    />
                </ProtectedRoute>
                
                <ProtectedRoute>
                    <Route
                        path={Pages.PACK_SIM}
                        element={<PacksimPage />}
                    />
                </ProtectedRoute>
            </Routes>
        </Suspense>
    </>
}

export default PageRouter