import React, { Suspense } from 'react';
import { Spin } from 'antd';

const withLoading = (Component) => (props) => (
    <Suspense fallback={<Spin size="large" />}>
        <Component {...props} />
    </Suspense>
);

export default withLoading;