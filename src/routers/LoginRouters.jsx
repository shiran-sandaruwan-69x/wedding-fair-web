import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import LoginFormComp from "../components/login_form/LoginFormComp";
import SignupFormComp from "../components/signup_form/SignupFormComp";
import withLoading from "./loading_form/LoadingFormRouters";
import LoadingFormRouters from "./loading_form/LoadingFormRouters";
import {Spin} from "antd";

const LazyLoginFormComp = React.lazy(() => import('../routers/loading_form/LoadingFormRouters'));

function LoginRouters(props) {
    return (
        <div>
            <Routes>
                <Route path="*" element={<Suspense fallback={<Spin size="large" />}><LoginFormComp /></Suspense>} />
                <Route path="/signup" element={<Suspense fallback={<Spin size="large" />}><SignupFormComp /></Suspense>} />
                <Route path="/signin" element={<Suspense fallback={<Spin size="large" />}><LoginFormComp /></Suspense>} />

            </Routes>
        </div>
    );
}

export default LoginRouters;