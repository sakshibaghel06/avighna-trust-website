"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import styles from "./site-interactions.module.css";

const galleryItems = [
  {
    id: "education-support",
    title: "Educational support",
    category: "Education",
    src: "/images/ssssss.jpeg",
    alt: "A young woman and two adults with a laptop in front of an Avighna Foundation banner.",
    width: 900,
    height: 1600,
  },
  {
    id: "community-handover",
    title: "Community support",
    category: "Community",
    src: "/images/ssss.jpeg",
    alt: "A group of adults and a child holding a cheque in front of an Avighna Foundation banner.",
    width: 1600,
    height: 900,
  },
  {
    id: "community-moment",
    title: "Community moment",
    category: "Community",
    src: "/images/WhatsApp Image 2026-10-17 at 10.04.12 AM.jpeg",
    alt: "Three adults and a child holding a cheque in front of a foundation banner.",
    width: 900,
    height: 1600,
  },
  {
    id: "foundation-identity",
    title: "Avighna Foundation identity",
    category: "Foundation",
    src: "/images/WhatsApp Image 2026-10-16 at 10.29.45 AM.jpeg",
    alt: "The blue Avighna Foundation logo on a white background.",
    width: 753,
    height: 443,
  },
];

const filters = ["All", "Education", "Community", "Foundation"];

const speechVideos = [
  {
    filename: "Immanuel Mother Speach Video (1) (online-video-cutter.com).mp4",
    title: "Immanuel Mother — Speech",
  },
  {
    filename: "Ms. Varshitha Speach Video (3) (online-video-cutter.com).mp4",
    title: "Ms. Varshitha — Speech",
  },
];

export function GalleryExplorer() {
  const [filter, setFilter] = useState("All");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [unavailableIds, setUnavailableIds] = useState<Set<string>>(new Set());
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);

  const visibleItems = useMemo(
    () =>
      filter === "All"
        ? galleryItems
        : galleryItems.filter((item) => item.category === filter),
    [filter],
  );
  const selectedIndex = visibleItems.findIndex((item) => item.id === selectedId);
  const selectedItem = selectedIndex < 0 ? null : visibleItems[selectedIndex];

  useEffect(() => {
    if (!selectedItem) return;

    closeRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedId(null);
        requestAnimationFrame(() => triggerRef.current?.focus());
      } else if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        event.preventDefault();
        const direction = event.key === "ArrowRight" ? 1 : -1;
        const nextIndex = (selectedIndex + direction + visibleItems.length) % visibleItems.length;
        setSelectedId(visibleItems[nextIndex].id);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedId, selectedIndex, selectedItem, visibleItems]);

  function closeDialog() {
    setSelectedId(null);
    requestAnimationFrame(() => triggerRef.current?.focus());
  }

  function markUnavailable(id: string) {
    setUnavailableIds((previous) => new Set(previous).add(id));
  }

  function moveSelection(direction: -1 | 1) {
    if (selectedIndex < 0 || visibleItems.length < 2) return;
    const nextIndex = (selectedIndex + direction + visibleItems.length) % visibleItems.length;
    setSelectedId(visibleItems[nextIndex].id);
  }

  return (
    <>
      <div className={styles.toolbar} aria-label="Filter gallery photographs">
        {filters.map((item) => (
          <button
            aria-pressed={filter === item}
            className={styles.filterButton}
            key={item}
            onClick={() => {
              setFilter(item);
              setSelectedId(null);
            }}
            type="button"
          >
            {item}
          </button>
        ))}
      </div>
      <div className={styles.galleryGrid}>
        {visibleItems.map((item) => (
          <button
            aria-haspopup="dialog"
            aria-label={`${item.title}, ${item.category}. Open full-size preview`}
            className={styles.galleryCard}
            key={item.id}
            onClick={(event) => {
              triggerRef.current = event.currentTarget;
              setSelectedId(item.id);
            }}
            type="button"
          >
            <span className={styles.galleryArt}>
              {unavailableIds.has(item.id) ? (
                <span className={styles.mediaFallback}>Image unavailable</span>
              ) : (
                <Image
                  alt={item.alt}
                  className={styles.galleryImage}
                  fill
                  loading="lazy"
                  onError={() => markUnavailable(item.id)}
                  sizes="(max-width: 480px) 90vw, (max-width: 700px) 44vw, 30vw"
                  src={item.src}
                />
              )}
            </span>
            <span className={styles.galleryCardTitle}>
              {item.title}
              <span aria-hidden="true">↗</span>
            </span>
            <small>{item.category}</small>
          </button>
        ))}
      </div>
      <p className={styles.disclaimer}>
        Images are presented as supplied, without additional dates or claims.
      </p>
      {selectedItem && (
        <div
          className={styles.dialogBackdrop}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeDialog();
          }}
        >
          <section
            aria-labelledby="gallery-dialog-title"
            aria-modal="true"
            className={styles.dialog}
            onKeyDown={(event) => {
              if (event.key !== "Tab") return;
              const focusable = Array.from(
                event.currentTarget.querySelectorAll<HTMLButtonElement>("button:not(:disabled)"),
              );
              const first = focusable[0];
              const last = focusable[focusable.length - 1];
              if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last?.focus();
              } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first?.focus();
              }
            }}
            role="dialog"
          >
            <button
              aria-label="Close gallery preview"
              className={styles.dialogClose}
              onClick={closeDialog}
              ref={closeRef}
              type="button"
            >
              ×
            </button>
            <div className={styles.dialogArt}>
              {unavailableIds.has(selectedItem.id) ? (
                <span className={styles.mediaFallback}>Image unavailable</span>
              ) : (
                <Image
                  alt={selectedItem.alt}
                  className={styles.dialogImage}
                  height={selectedItem.height}
                  onError={() => markUnavailable(selectedItem.id)}
                  src={selectedItem.src}
                  width={selectedItem.width}
                />
              )}
            </div>
            <div className={styles.dialogCaption}>
              <span>
                <strong id="gallery-dialog-title">{selectedItem.title}</strong>
                <br />
                {selectedItem.alt}
              </span>
              <span className={styles.dialogControls}>
                <button
                  aria-label="Previous gallery photograph"
                  className={styles.calendarButton}
                  onClick={() => moveSelection(-1)}
                  type="button"
                >
                  ←
                </button>
                <button
                  aria-label="Next gallery photograph"
                  className={styles.calendarButton}
                  onClick={() => moveSelection(1)}
                  type="button"
                >
                  →
                </button>
              </span>
            </div>
          </section>
        </div>
      )}
    </>
  );
}

export function SpeechVideos() {
  return (
    <div className={styles.videoGrid}>
      {speechVideos.map((video) => {
        const src = `/videos/${encodeURIComponent(video.filename)}`;
        return (
          <article className={styles.videoCard} key={video.filename}>
            <h3>{video.title}</h3>
            <video
              aria-label={`${video.title} video`}
              className={styles.speechVideo}
              controls
              playsInline
              preload="metadata"
            >
              <source src={src} type="video/mp4" />
              Your browser does not support embedded video.{" "}
              <a href={src}>Open the speech video</a>.
            </video>
            <p>Use the video controls to play or pause.</p>
          </article>
        );
      })}
    </div>
  );
}
