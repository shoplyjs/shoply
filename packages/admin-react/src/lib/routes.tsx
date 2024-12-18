import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../components/layout/layout';
import { Home } from '../pages/home';
import { Orders } from '@/pages/orders';
import { Products } from '@/pages/products';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
                handle: { breadcrumb: 'Dashboard' },
            },
            {
                path: 'orders',
                element: <Orders />,
                handle: { breadcrumb: 'Orders' },
            },
            {
                path: 'products',
                element: <Products />,
                handle: { breadcrumb: 'Products' },
            },
        ],
    },
]);
