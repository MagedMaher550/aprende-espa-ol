import { Card } from '@/components/ui/card'

interface StatusesProps {
    stats: {
        due: number;
        weak: number;
        learned: number;
        total: number;
        seen: number;
        fresh: number;
    },
    totalXP: number
}

export default function Statuses({ stats, totalXP }: StatusesProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

            <Card className="rounded-2xl shadow-sm border p-6 hover:shadow-md transition-shadow duration-200">
                <div className="text-sm font-medium text-muted-foreground mb-1">Due today</div>
                <div className="text-3xl font-semibold mt-2">{stats.due}</div>
            </Card>
            <Card className="rounded-2xl shadow-sm border p-6 hover:shadow-md transition-shadow duration-200">
                <div className="text-sm font-medium text-muted-foreground mb-1">Weak words</div>
                <div className="text-3xl font-semibold mt-2">{stats.weak}</div>
            </Card>
            <Card className="rounded-2xl shadow-sm border p-6 hover:shadow-md transition-shadow duration-200">
                <div className="text-sm font-medium text-muted-foreground mb-1">New words available</div>
                <div className="text-3xl font-semibold mt-2">{stats.fresh}</div>
            </Card>
            <Card className="rounded-2xl shadow-sm border p-6 hover:shadow-md transition-shadow duration-200">
                <div className="text-sm font-medium text-muted-foreground mb-1">Total XP</div>
                <div className="text-3xl font-semibold mt-2">{totalXP}</div>
            </Card>

        </div>
    )
}
