import BaseLayout from '@/layouts/base';
import Head from 'next/head';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

const Layout = ({ children}: Props) => {
    return (
        <>
      
            <BaseLayout>{children}</BaseLayout>
        </>
    );
};

export default Layout;
