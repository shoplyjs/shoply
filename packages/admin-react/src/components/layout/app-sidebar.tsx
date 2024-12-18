import * as React from 'react';
import {
    AudioWaveform,
    BookOpen,
    Bot,
    Command,
    Frame,
    Map,
    PieChart,
    Settings2,
    Shirt,
    ShoppingCart,
    SquareTerminal,
} from 'lucide-react';

import { NavMain } from '../navigation/nav-main';
import { NavUser } from '../navigation/nav-user';
import { TeamSwitcher } from '../shared/team-switcher';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from '@/components/ui/sidebar';

// This is sample data.
const data = {
    user: {
        name: 'shadcn',
        email: 'm@example.com',
        avatar: '/avatars/shadcn.jpg',
    },
    teams: [
        {
            name: 'My Store',
            logo: ShoppingCart,
            plan: 'Free',
        },
        {
            name: 'Acme Corp.',
            logo: AudioWaveform,
            plan: 'Startup',
        },
        {
            name: 'Evil Corp.',
            logo: Command,
            plan: 'Free',
        },
    ],
    navMain: [
        {
            title: 'Orders',
            url: '/orders',
            icon: ShoppingCart,
            isActive: true,
            items: [
                {
                    title: 'History',
                    url: '/',
                },
                {
                    title: 'Starred',
                    url: '/',
                },
                {
                    title: 'Settings',
                    url: '#',
                },
            ],
        },
        {
            title: 'Products',
            url: '/products',
            icon: Shirt,
            items: [
                {
                    title: 'Genesis',
                    url: '#',
                },
                {
                    title: 'Explorer',
                    url: '#',
                },
                {
                    title: 'Quantum',
                    url: '#',
                },
            ],
        },
        {
            title: 'Settings',
            url: '#',
            icon: Settings2,
            items: [
                {
                    title: 'General',
                    url: '#',
                },
                {
                    title: 'Team',
                    url: '#',
                },
                {
                    title: 'Billing',
                    url: '#',
                },
                {
                    title: 'Limits',
                    url: '#',
                },
            ],
        },
    ],
    projects: [
        {
            name: 'Design Engineering',
            url: '#',
            icon: Frame,
        },
        {
            name: 'Sales & Marketing',
            url: '#',
            icon: PieChart,
        },
        {
            name: 'Travel',
            url: '#',
            icon: Map,
        },
    ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <TeamSwitcher teams={data.teams} />
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
                {/* <NavProjects projects={data.projects} /> */}
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
