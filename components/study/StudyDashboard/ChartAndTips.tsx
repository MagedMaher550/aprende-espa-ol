import { Card } from '@/components/ui/card'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { Bar, CartesianGrid, XAxis, YAxis, BarChart } from 'recharts'

interface ChartAndTipsProps {
    dailyStreak: number
    wordsLearned: number
    last7Days: {
        key: string;
        label: string;
        xp: number;
    }[]
}

export default function ChartAndTips({ dailyStreak, wordsLearned, last7Days }: ChartAndTipsProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="rounded-2xl shadow-sm border p-6">
                <div className="flex items-center justify-between">
                    <div className="space-y-1">
                        <div className="text-xl font-medium">Progress</div>
                        <div className="text-sm text-muted-foreground">
                            Streak: <span className="font-semibold text-foreground">{dailyStreak}</span> days • Words learned:{" "}
                            <span className="font-semibold text-foreground">{wordsLearned}</span>
                        </div>
                    </div>
                </div>
                <div className="mt-6">
                    <ChartContainer
                        className="h-[220px] w-full"
                        config={{
                            xp: { label: "XP", color: "hsl(var(--accent))" },
                        }}
                    >
                        <BarChart data={last7Days} margin={{ left: 8, right: 8, top: 10, bottom: 0 }}>
                            <CartesianGrid vertical={false} strokeDasharray="3 3" className="stroke-muted" />
                            <XAxis dataKey="label" tickLine={false} axisLine={false} className="text-xs" />
                            <YAxis tickLine={false} axisLine={false} width={28} className="text-xs" />
                            <ChartTooltip content={<ChartTooltipContent />} />
                            <Bar dataKey="xp" fill="var(--color-xp)" radius={[8, 8, 0, 0]} />
                        </BarChart>
                    </ChartContainer>
                </div>
            </Card>
            <Card className="rounded-2xl shadow-sm border p-6">
                <div className="text-xl font-medium mb-4">Tips</div>
                <div className="text-sm text-muted-foreground space-y-3">
                    <div>
                        - Use <span className="font-medium text-foreground">Again</span> sparingly; it drops confidence faster and schedules a quick relearn.
                    </div>
                    <div>
                        - Smart direction gradually shifts you toward <span className="font-medium text-foreground">recall</span> for known words.
                    </div>
                    <div>- Keep sessions short and consistent to build streaks.</div>
                </div>
            </Card>
        </div>
    )
}
