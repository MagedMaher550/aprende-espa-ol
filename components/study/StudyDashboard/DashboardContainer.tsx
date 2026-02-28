import React from 'react'

export default function DashboardContainer({ children }: { children: React.ReactElement[]}) {
    return (
        <div className="space-y-8">
            {children}
        </div>
    )
}
