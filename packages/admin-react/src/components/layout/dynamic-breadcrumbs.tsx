import { useMatches } from 'react-router-dom';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
    BreadcrumbPage,
} from '@/components/ui/breadcrumb';

export function DynamicBreadcrumbs() {
    const matches = useMatches();

    const breadcrumbs = matches
        .filter(match => match.handle?.breadcrumb) // Ensure the route defines a breadcrumb
        .map(match => ({
            name: match.handle.breadcrumb,
            href: match.pathname,
        }));

    return (
        <Breadcrumb>
            <BreadcrumbList>
                {breadcrumbs.map((crumb, index) => (
                    <BreadcrumbItem key={crumb.href}>
                        {index < breadcrumbs.length - 1 ? (
                            <>
                                <BreadcrumbLink href={crumb.href}>{crumb.name}</BreadcrumbLink>
                                <BreadcrumbSeparator />
                            </>
                        ) : (
                            <BreadcrumbPage>{crumb.name}</BreadcrumbPage>
                        )}
                    </BreadcrumbItem>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    );
}
