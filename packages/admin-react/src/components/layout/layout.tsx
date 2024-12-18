import { AppSidebar } from '@/components/layout/app-sidebar';
import { Separator } from '@/components/ui/separator';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { Outlet } from 'react-router-dom';
import { ModeToggle } from '../shared/mode-toggle';
import { DynamicBreadcrumbs } from './dynamic-breadcrumbs';
import { SearchBar } from '../shared/search-bar';

export function Layout() {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 px-4">
                    <div className="flex items-center gap-2 pr-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator orientation="vertical" className="mr-2 h-4" />
                        <DynamicBreadcrumbs />
                    </div>
                    <div className="flex items-center gap-2">
                        <SearchBar />
                        <ModeToggle />
                    </div>
                </header>
                <Outlet />
            </SidebarInset>
        </SidebarProvider>
    );
}
