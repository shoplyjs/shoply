'use client';

import { ChevronRight, type LucideIcon } from 'lucide-react';
import { useLocation } from 'react-router-dom';

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import { Link } from 'react-router-dom';

export function NavMain({
    items,
}: {
    items: {
        title: string;
        url: string;
        icon?: LucideIcon;
        items?: {
            title: string;
            url: string;
        }[];
    }[];
}) {
    const location = useLocation();

    const isRouteActive = (url: string) => location.pathname.startsWith(url);

    return (
        <SidebarGroup>
            {/* <SidebarGroupLabel>Platform</SidebarGroupLabel> */}
            <SidebarMenu>
                {items.map(item => {
                    const isActive = isRouteActive(item.url);

                    return (
                        <Collapsible
                            key={item.title}
                            asChild
                            open={isActive} // Controlled open state
                            className="group/collapsible"
                        >
                            <SidebarMenuItem>
                                {isActive ? (
                                    // Active items do not allow collapse
                                    <SidebarMenuButton tooltip={item.title}>
                                        {item.icon && <item.icon />}
                                        <Link to={item.url} className="flex items-center w-full">
                                            <span>{item.title}</span>
                                        </Link>
                                        {/* <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" /> */}
                                    </SidebarMenuButton>
                                ) : (
                                    // Non-active items can toggle
                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuButton tooltip={item.title}>
                                            {item.icon && <item.icon />}
                                            <Link to={item.url} className="flex items-center w-full">
                                                <span>{item.title}</span>
                                            </Link>
                                            {/* <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" /> */}
                                        </SidebarMenuButton>
                                    </CollapsibleTrigger>
                                )}
                                <CollapsibleContent>
                                    <SidebarMenuSub>
                                        {item.items?.map(subItem => (
                                            <SidebarMenuSubItem key={subItem.title}>
                                                <SidebarMenuSubButton asChild>
                                                    <Link to={subItem.url}> {subItem.title} </Link>
                                                </SidebarMenuSubButton>
                                            </SidebarMenuSubItem>
                                        ))}
                                    </SidebarMenuSub>
                                </CollapsibleContent>
                            </SidebarMenuItem>
                        </Collapsible>
                    );
                })}
            </SidebarMenu>
        </SidebarGroup>
    );
}
