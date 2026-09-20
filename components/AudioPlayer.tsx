"use client";

import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Attempt to autoplay on mount
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Gentle volume
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((err) => {
            // Autoplay prevented, user must click to play
            console.log("Autoplay prevented:", err);
          });
      }
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/memories/background.ogg"
        loop
      />
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.5, duration: 0.8, ease: "easeOut" }}
        onClick={togglePlay}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-white shadow-lg transition-all hover:bg-black/40 hover:scale-105 active:scale-95"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </motion.button>
    </>
  );
}
