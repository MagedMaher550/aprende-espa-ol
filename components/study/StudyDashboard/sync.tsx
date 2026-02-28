import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { User } from 'firebase/auth'
import { AlertCircle, RefreshCw } from 'lucide-react'

interface SyncUserProps {
    firebaseReady: boolean
    user: User | null
    handleManualSync: () => Promise<void>
    signInWithGoogle: () => Promise<void>
    signOutUser: () => Promise<void>
    syncState: "idle" | "syncing" | "success" | "error"
    syncError: string | null
}

export default function SyncUser({ firebaseReady, user, handleManualSync, syncState, syncError, signInWithGoogle, signOutUser }: SyncUserProps) {
    return (
        <Card className="rounded-2xl shadow-sm border p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                    <div className="text-lg font-medium">Sync</div>
                    <div className="text-sm text-muted-foreground">
                        {firebaseReady ? (
                            user ? (
                                <>
                                    Signed in as <span className="font-medium text-foreground">{user.email ?? user.uid}</span>. Your data
                                    stays local-first; sync only merges SRS + settings + aggregates.
                                </>
                            ) : (
                                <>Sign in to sync progress across devices (optional). Anonymous users stay local-only.</>
                            )
                        ) : (
                            <>Firebase is not configured (missing `NEXT_PUBLIC_FIREBASE_*`). Local-first mode only.</>
                        )}
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 sm:justify-end">
                    {!firebaseReady ? null : user ? (
                        <>
                            <Button
                                variant="outline"
                                disabled={syncState === "syncing"}
                                onClick={() => void handleManualSync()}
                                className="gap-2 rounded-xl"
                            >
                                {syncState === "syncing" ? (
                                    <>
                                        <RefreshCw className="h-4 w-4 animate-spin" />
                                        Syncing...
                                    </>
                                ) : (
                                    <>
                                        <RefreshCw className="h-4 w-4" />
                                        Sync now
                                    </>
                                )}
                            </Button>
                            {syncState === "error" && syncError && (
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => void handleManualSync()}
                                    className="gap-1.5 text-xs rounded-xl"
                                >
                                    <AlertCircle className="h-3 w-3" />
                                    Retry
                                </Button>
                            )}
                            <Button variant="outline" disabled={syncState === "syncing"} onClick={() => void signOutUser()} className="rounded-xl">
                                Sign out
                            </Button>
                        </>
                    ) : (
                        <Button disabled={!firebaseReady} onClick={() => void signInWithGoogle()} className="w-full sm:w-auto rounded-xl">
                            Sign in with Google
                        </Button>
                    )}
                </div>
            </div>
        </Card>
    )
}
