import { useState, useEffect } from "react";

let globalCurrentAudio: HTMLAudioElement | null = null;
let listeners: ((audio: HTMLAudioElement | null) => void)[] = [];

export function useCurrentAudio() {
    const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(
        globalCurrentAudio
    );

    useEffect(() => {
        const listener = (audio: HTMLAudioElement | null) => setCurrentAudio(audio);
        listeners.push(listener);

        return () => {
            listeners = listeners.filter((l) => l !== listener);
        };
    }, []);

    const setAudio = (audio: HTMLAudioElement | null) => {
        if (globalCurrentAudio && globalCurrentAudio !== audio) {
            globalCurrentAudio.pause();
        }
        globalCurrentAudio = audio;
        listeners.forEach((l) => l(audio));
    };

    return { currentAudio, setAudio };
}
