import React from "react";

type PageWrapperProps = {
    children: React.ReactNode;
};

export const PageWrapper = ({ children }: PageWrapperProps) => {
    return (
        <div className="container mx-auto px-4 py-8 text-white">{children}</div>
    );
};
