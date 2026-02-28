import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Settings2, Zap, RefreshCw, CheckCircle2, XCircle } from "lucide-react";
import type { User } from "firebase/auth";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { StudySettingsModal } from "../StudySettingsModal";
import { FlattenedVocabWord, VocabTag } from "@/lib/vocabulary/flatten";
import { StudySettings } from "@/lib/study/settings";


interface StudyDashboardHeader {
    syncState: "idle" | "syncing" | "success" | "error"
    firebaseReady: boolean
    level: number
    user: User | null
    settings: {
        vocab: FlattenedVocabWord[];
        availableTags: VocabTag[];
        settings: StudySettings;
        onSettingsChange: (s: StudySettings) => void;
        onDataRefresh: () => Promise<void>;
    }
}

export default function StudyDashboardHeader({ firebaseReady, level, syncState, user, settings }: StudyDashboardHeader) {

    const [settingsOpen, setSettingsOpen] = useState(false);


    return (
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">

            <div className="space-y-3">
                <div className="flex items-center gap-3 flex-wrap">
                    <h1 className="text-3xl font-semibold tracking-tight">Study</h1>
                    <Badge variant="secondary" className="gap-1.5 rounded-full px-3 py-1">
                        <Zap className="h-3.5 w-3.5" />
                        Level {level}
                    </Badge>
                    {firebaseReady && user && (
                        <div className="flex items-center gap-2">
                            {syncState === "syncing" && (
                                <Badge variant="outline" className="gap-1.5 text-xs rounded-full">
                                    <RefreshCw className="h-3 w-3 animate-spin" />
                                    Syncing...
                                </Badge>
                            )}
                            {syncState === "success" && (
                                <Badge variant="outline" className="gap-1.5 text-xs bg-green-50 dark:bg-green-950/20 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800 rounded-full">
                                    <CheckCircle2 className="h-3 w-3" />
                                    Synced
                                </Badge>
                            )}
                            {syncState === "error" && (
                                <Badge variant="outline" className="gap-1.5 text-xs bg-red-50 dark:bg-red-950/20 text-red-700 dark:text-red-400 border-red-200 dark:border-red-800 rounded-full">
                                    <XCircle className="h-3 w-3" />
                                    Sync failed
                                </Badge>
                            )}
                        </div>
                    )}
                </div>
                <p className="text-base text-muted-foreground max-w-2xl">
                    Anki-like spaced repetition, local-first and offline-capable. Your progress is stored on this device and can
                    sync to Firebase when you sign in.
                </p>


            </div>

            <Dialog open={settingsOpen} onOpenChange={setSettingsOpen}>
                <DialogTrigger asChild>
                    <Button variant="outline" className="gap-2 rounded-xl w-full sm:w-auto">
                        <Settings2 className="h-4 w-4" />
                        Settings
                    </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl">
                    <DialogHeader>
                        <DialogTitle className="text-xl font-semibold">Study Settings</DialogTitle>
                    </DialogHeader>
                    <StudySettingsModal
                        vocab={settings.vocab}
                        availableTags={settings.availableTags}
                        settings={settings.settings}
                        onSettingsChange={settings.onSettingsChange}
                        onClose={() => setSettingsOpen(false)}
                        onDataRefresh={settings.onDataRefresh}
                    />
                </DialogContent>
            </Dialog>
        </div>
    )
}
