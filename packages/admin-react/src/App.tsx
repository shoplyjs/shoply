import { RouterProvider } from 'react-router-dom';
import { router } from './lib/routes.tsx';
import { ThemeProvider } from './components/layout/theme-provider.tsx';

export default function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}
