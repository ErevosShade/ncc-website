import React, { useEffect } from 'react';

/**
 * Headless Audio Controller
 * Zero visual UI: Listens for keyboard commands in the background.
 * - Typing 'play' or 'amrit' plays the song
 * - Typing 'stop' stops the song
 */
export default function AudioPlayer() {
  useEffect(() => {
    let typedBuffer = '';

    const handleKeyDown = (e) => {
      // Ignore when user is typing inside form elements
      const activeEl = document.activeElement;
      const tag = activeEl ? activeEl.tagName.toLowerCase() : '';
      if (tag === 'input' || tag === 'textarea' || activeEl?.isContentEditable) {
        return;
      }

      if (e.key && e.key.length === 1) {
        typedBuffer += e.key.toLowerCase();
        if (typedBuffer.length > 20) {
          typedBuffer = typedBuffer.slice(-20);
        }

        const audio = document.getElementById('ncc-bg-anthem');
        if (!audio) return;

        // 'play' or 'amrit' triggers playback
        if (typedBuffer.endsWith('play') || typedBuffer.endsWith('amrit')) {
          audio.volume = 0.85;
          audio.play().catch(() => {});
          typedBuffer = '';
        } 
        // 'stop' stops playback
        else if (typedBuffer.endsWith('stop')) {
          audio.pause();
          audio.currentTime = 0;
          typedBuffer = '';
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Completely invisible: Zero visual display
  return null;
}
