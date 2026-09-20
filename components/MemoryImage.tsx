"use client";
import Image from "next/image";
import { useState } from "react";
import { Sparkles } from "lucide-react";
import { birthdayData } from "@/data/birthdayData";
import type { Memory } from "@/data/birthdayData";
export function MemoryImage({
  memory,
  modal = false,
}: {
  memory: Memory;
  modal?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const valid =
    memory.image.startsWith("/memories/") && !memory.image.includes("..");
  return (
    <div className={"memory-image " + (modal ? "modal-image" : "")}>
      {failed || !valid ? (
        <div className="memory-placeholder" role="img" aria-label={memory.alt}>
          <Sparkles size={34} strokeWidth={0.8} />
          <span>{birthdayData.copy.memoryFallback}</span>
        </div>
      ) : (
        <Image
          src={memory.image}
          alt={memory.alt}
          fill
          sizes={
            modal
              ? "(max-width: 768px) 90vw, 800px"
              : "(max-width: 639px) 85vw, (max-width: 1023px) 42vw, 350px"
          }
          className={modal ? "object-contain" : "object-cover"}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
