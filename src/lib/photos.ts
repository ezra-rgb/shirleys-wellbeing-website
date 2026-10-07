import type { ImageMetadata } from 'astro';
import { photoSlots, type PhotoSlotName } from '../config/photos';

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/photos/*.{jpg,jpeg,png,webp,avif}', { eager: true });

/** Returns the supplied photograph for a slot, or undefined when none exists yet. */
export function getPhoto(slot: PhotoSlotName) {
  const entry = Object.entries(files).find(([path]) => path.split('/').pop()!.replace(/\.[^.]+$/, '') === slot);
  if (!entry) return undefined;
  return { src: entry[1].default, ...photoSlots[slot] };
}

export const hasPhoto = (slot: PhotoSlotName) => getPhoto(slot) !== undefined;
