import React from 'react';

export default function Breadcrumb({ items }) {
    return (
        <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm font-medium">
                {items.map((crumb, index) => (
                    <React.Fragment key={index}>
                        {crumb.active ? (
                            <li className="text-slate-900">{crumb.label}</li>
                        ) : (
                            <>
                                <li>
                                    <a className="text-slate-500 hover:text-primary transition-colors" href={crumb.href}>
                                        {crumb.label}
                                    </a>
                                </li>
                                <li className="text-slate-300">/</li>
                            </>
                        )}
                    </React.Fragment>
                ))}
            </ol>
        </nav>
    );
}
