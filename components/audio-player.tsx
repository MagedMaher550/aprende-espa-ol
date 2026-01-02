"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Pause, RotateCcw, Volume2, VolumeX } from "lucide-react";
import { useCurrentAudio } from "@/hooks/use-current-audio";

interface AudioPlayerProps {
  src: string;
  title?: string;
  autoPlay?: boolean;
  showTitle?: boolean;
  compact?: boolean;
  playbackRate?: number; // external control
  onPlaybackRateChange?: (rate: number) => void; // callback when changed
}

export function AudioPlayer({
  src,
  title,
  autoPlay = false,
  showTitle = true,
  compact = false,
  playbackRate: playbackRateProp,
  onPlaybackRateChange,
}: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const seekTimeoutRef = useRef<number | null>(null);
  const { currentAudio, setAudio } = useCurrentAudio();

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [error, setError] = useState(false);
  const [isSeeking, setIsSeeking] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(playbackRateProp ?? 1);

  const speeds = [0.5, 0.75, 1, 1.25, 1.5];

  // sync external playbackRate prop
  useEffect(() => {
    if (playbackRateProp !== undefined) {
      setPlaybackRate(playbackRateProp);
    }
  }, [playbackRateProp]);

  // update audio playback rate whenever state changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  // pause this audio if another audio starts playing
  useEffect(() => {
    if (!audioRef.current) return;
    if (currentAudio && currentAudio !== audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, [currentAudio]);

  // ensure audio element volume/mute reflects state
  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    a.volume = isMuted ? 0 : volume;
  }, [volume, isMuted]);

  // attach audio event listeners
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onLoaded = () => {
      const d = isFinite(audio.duration) ? audio.duration : 0;
      setDuration(d);
    };

    const onTimeUpdate = () => {
      if (!isSeeking) {
        setCurrentTime(audio.currentTime);
      }
    };

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };
    const onError = () => setError(true);

    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("ended", onEnded);
    audio.addEventListener("error", onError);

    if (audio.readyState >= 1) {
      onLoaded();
    }

    return () => {
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("error", onError);
    };
  }, [src, isSeeking]);

  // RAF fallback for smoother UI updates while playing
  useEffect(() => {
    let rafId: number | null = null;
    const step = () => {
      const a = audioRef.current;
      if (a && !isSeeking) {
        setCurrentTime(a.currentTime);
      }
      rafId = requestAnimationFrame(step);
    };

    if (isPlaying) {
      rafId = requestAnimationFrame(step);
    }

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [isPlaying, isSeeking]);

  // cleanup seek timeout
  useEffect(() => {
    return () => {
      if (seekTimeoutRef.current) {
        window.clearTimeout(seekTimeoutRef.current);
        seekTimeoutRef.current = null;
      }
    };
  }, []);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setAudio(null);
      setIsPlaying(false);
    } else {
      if (currentAudio && currentAudio !== audio) {
        try {
          currentAudio.pause();
        } catch {}
      }

      try {
        await audio.play();
        setAudio(audio);
        setIsPlaying(true);
      } catch {
        setError(true);
      }
    }
  };

  const restart = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = 0;
    setCurrentTime(0);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleSeek = (value: number[]) => {
    const audio = audioRef.current;
    if (!audio) return;

    const pct = value[0] ?? 0;
    const newTime = (pct / 100) * (duration || 0);
    audio.currentTime = newTime;
    setCurrentTime(newTime);

    setIsSeeking(true);
    if (seekTimeoutRef.current) window.clearTimeout(seekTimeoutRef.current);
    seekTimeoutRef.current = window.setTimeout(() => {
      setIsSeeking(false);
      seekTimeoutRef.current = null;
    }, 150);
  };

  const handleVolumeChange = (value: number[]) => {
    const newVolume = (value[0] ?? 100) / 100;
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
    const audio = audioRef.current;
    if (audio) {
      audio.volume = newVolume;
    }
  };

  const handleSpeedChange = (newRate: number) => {
    setPlaybackRate(newRate);
    if (onPlaybackRateChange) {
      onPlaybackRateChange(newRate);
    }
  };

  const formatTime = (time: number) => {
    if (!isFinite(time) || time <= 0) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  if (error) {
    return <p className="text-red-600 text-sm">No audio found</p>;
  }

  const sliderValue =
    duration && isFinite(duration) ? [(currentTime / duration) * 100] : [0];

  if (compact) {
    return (
      <div className="flex items-center gap-2">
        <Button size="sm" variant="outline" onClick={togglePlay}>
          {isPlaying ? (
            <Pause className="h-4 w-4" />
          ) : (
            <Play className="h-4 w-4" />
          )}
        </Button>
        <audio ref={audioRef} src={src} preload="metadata" />
      </div>
    );
  }

  return (
    <Card>
      <CardContent className="p-4">
        <audio
          ref={audioRef}
          src={src}
          preload="metadata"
          autoPlay={autoPlay}
          className="w-full"
        />

        {showTitle && title && (
          <h3 className="font-semibold mb-4 text-center sm:text-left">
            {title}
          </h3>
        )}

        <div className="space-y-4">
          {/* Progress Bar */}
          <div className="space-y-2">
            <Slider
              value={sliderValue}
              onValueChange={handleSeek}
              max={100}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Play/Restart */}
            <div className="flex items-center gap-2">
              <Button size="sm" variant="outline" onClick={restart}>
                <RotateCcw className="h-4 w-4" />
              </Button>
              <Button size="sm" onClick={togglePlay}>
                {isPlaying ? (
                  <Pause className="h-4 w-4" />
                ) : (
                  <Play className="h-4 w-4" />
                )}
              </Button>
            </div>

            {/* Volume */}
            <div className="flex items-center gap-2">
              <Button size="sm" variant="outline" onClick={toggleMute}>
                {isMuted ? (
                  <VolumeX className="h-4 w-4" />
                ) : (
                  <Volume2 className="h-4 w-4" />
                )}
              </Button>
              <Slider
                value={[isMuted ? 0 : volume * 100]}
                onValueChange={handleVolumeChange}
                max={100}
                step={1}
                className="w-24 sm:w-20"
              />
            </div>

            {/* Speed Control */}
            <div className="w-full sm:w-auto">
              <select
                className="w-full sm:w-auto border rounded px-2 py-1 text-sm"
                style={{ backgroundColor: "#121212" }}
                value={playbackRate}
                onChange={(e) => handleSpeedChange(parseFloat(e.target.value))}
              >
                {speeds.map((s) => (
                  <option key={s} value={s}>
                    {s}x
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
