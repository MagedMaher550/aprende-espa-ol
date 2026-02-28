import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Command, CommandInput, CommandItem, CommandList, CommandEmpty } from "@/components/ui/command";
import { VocabTag } from '@/lib/vocabulary/flatten';
import { Dispatch, SetStateAction } from 'react';
import { AppDispatch } from '@/lib/redux/store';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { StudyMode } from '@/lib/study/modeEngine';

interface PracticeModesProps {
    start: (
        mode:
            | "learn-new"
            | "review-due"
            | "weak-words"
            | "mastery-push"
            | "custom-tag"
            | "random-practice"
            | "timed",
        tag?: string
    ) => void
    newPerDay: number
    stats: {
        due: number;
        weak: number;
        learned: number;
        total: number;
        seen: number;
        fresh: number;
    },
    timedModeDuration: number
    customTagSlug: string | undefined
    availableTags: VocabTag[]
    tagSearch: string
    setTagSearch: Dispatch<SetStateAction<string>>
    filteredTags: VocabTag[]
    dispatch: AppDispatch
    setMode: ActionCreatorWithPayload<{
        mode: StudyMode
        customTagSlug?: string
    }>
}

export default function PracticeModes({
    start,
    newPerDay,
    stats,
    timedModeDuration,
    customTagSlug,
    availableTags,
    tagSearch,
    setTagSearch,
    filteredTags,
    dispatch,
    setMode

}: PracticeModesProps) {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="rounded-2xl shadow-sm border p-6">
                <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                        <div className="text-xl font-medium">Core modes</div>
                        <div className="text-sm text-muted-foreground">Fast start based on what matters most.</div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                    <Button onClick={() => start("learn-new")} className="justify-between rounded-xl h-auto py-3 hover:scale-[1.02] transition-transform duration-200">
                        <span className="font-medium">Learn New</span>
                        <span className="text-xs opacity-70">cap {newPerDay}/day</span>
                    </Button>
                    <Button variant="secondary" onClick={() => start("review-due")} className="justify-between rounded-xl h-auto py-3 hover:scale-[1.02] transition-transform duration-200">
                        <span className="font-medium">Review Due</span>
                        <span className="text-xs opacity-70">{stats.due}</span>
                    </Button>
                    <Button variant="secondary" onClick={() => start("weak-words")} className="justify-between rounded-xl h-auto py-3 hover:scale-[1.02] transition-transform duration-200">
                        <span className="font-medium">Weak Words</span>
                        <span className="text-xs opacity-70">{stats.weak}</span>
                    </Button>
                    <Button variant="secondary" onClick={() => start("mastery-push")} className="justify-between rounded-xl h-auto py-3 hover:scale-[1.02] transition-transform duration-200">
                        <span className="font-medium">Mastery Push</span>
                        <span className="text-xs opacity-70">familiar/weak</span>
                    </Button>
                </div>
            </Card>

            <Card className="rounded-2xl shadow-sm border p-6">
                <div className="space-y-1">
                    <div className="text-xl font-medium">Custom & practice</div>
                    <div className="text-sm text-muted-foreground">Target a collection tag or just drill randomly.</div>
                </div>

                <div className="mt-6 grid gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <Button variant="secondary" onClick={() => start("random-practice")} className="rounded-xl h-auto py-3 hover:scale-[1.02] transition-transform duration-200">
                            Full random
                        </Button>
                        <Button variant="secondary" onClick={() => start("timed")} className="rounded-xl h-auto py-3 hover:scale-[1.02] transition-transform duration-200">
                            Timed ({timedModeDuration}s)
                        </Button>
                        <Button variant="outline" onClick={() => start("review-due")} className="rounded-xl h-auto py-3 hover:scale-[1.02] transition-transform duration-200">
                            Mixed review
                        </Button>
                    </div>

                    <div className="rounded-xl border border-border/60 p-4 bg-muted/30">
                        <div className="text-xs font-medium text-muted-foreground mb-3 uppercase tracking-wide">
                            Custom by tag
                        </div>

                        <div className="flex flex-col gap-3">

                            {/* Select + Start */}
                            <div className="flex flex-col sm:flex-row gap-3 w-full">

                                <div className="flex-1">
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant="outline"
                                                className="w-full justify-between rounded-xl"
                                            >
                                                {customTagSlug
                                                    ? availableTags.find(t => t.slug === customTagSlug)?.title
                                                    : "Pick a collection tag..."}
                                            </Button>
                                        </PopoverTrigger>

                                        <PopoverContent
                                            align="start"
                                            className="w-[--radix-popover-trigger-width] p-0 rounded-xl"
                                        >
                                            <Command>
                                                <CommandInput
                                                    placeholder="Search collection tag..."
                                                    value={tagSearch}
                                                    onValueChange={setTagSearch}
                                                    className="h-9"
                                                />

                                                <CommandList className="max-h-60">
                                                    <CommandEmpty>No tags found</CommandEmpty>

                                                    {filteredTags.map((t) => (
                                                        <CommandItem
                                                            key={t.slug}
                                                            value={t.slug}
                                                            onSelect={(value) => {
                                                                dispatch(setMode({ mode: "custom-tag", customTagSlug: value }));
                                                            }}
                                                        >
                                                            {t.title}
                                                        </CommandItem>
                                                    ))}
                                                </CommandList>
                                            </Command>
                                        </PopoverContent>
                                    </Popover>
                                </div>

                                <Button
                                    disabled={!customTagSlug}
                                    onClick={() => start("custom-tag", customTagSlug)}
                                    className="sm:w-auto w-full shrink-0 rounded-xl"
                                >
                                    Start
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>

        </div>
    )
}
