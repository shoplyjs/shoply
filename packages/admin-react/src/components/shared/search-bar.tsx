import { Search } from 'lucide-react';
import { Button } from '../ui/button';

export function SearchBar() {
    return (
        <Button variant="outline" size="icon">
            <Search className="h-5 w-5" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}
