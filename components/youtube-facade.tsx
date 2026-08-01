"use client";

import { useState } from "react";

type YouTubeFacadeProps = {
  /** The YouTube video ID (the v= value), e.g. "n1bqHP-DeD0". */
  videoId: string;
  /** Accessible title for the iframe — describes the video for screen readers. */
  title: string;
  /**
   * Local poster image path (under /public). Using a local image means no
   * request to any Google-owned host until the reader clicks play, which the
   * change order requires.
   */
  poster: string;
};

/**
 * Click-to-play YouTube embed (facade / "lite" pattern).
 *
 * Nothing from YouTube loads on render — we show a local poster and a play
 * button, and only inject the youtube-nocookie.com iframe once the reader
 * clicks. 16:9, responsive, constrained to the article's content column.
 * Autoplay is set only on the click-loaded iframe, so playback is always
 * reader-initiated, never on page load.
 */
export function YouTubeFacade({ videoId, title, poster }: YouTubeFacadeProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <figure className="my-8">
      <div className="relative aspect-video w-full overflow-hidden rounded border border-border bg-card">
        {playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play video: ${title}`}
            className="group absolute inset-0 h-full w-full cursor-pointer"
          >
            {/* Local poster — no third-party request on initial load. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={poster}
              alt=""
              className="h-full w-full object-cover transition-opacity group-hover:opacity-95"
              loading="lazy"
            />
            <span className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/30" />
            <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 shadow-lg transition-transform group-hover:scale-105">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="ml-1 h-7 w-7 fill-primary"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        )}
      </div>
    </figure>
  );
}
