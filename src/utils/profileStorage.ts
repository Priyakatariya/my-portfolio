// src/utils/profileStorage.ts
import { codingProfiles } from '../data/codingProfiles';
import type { CodingProfile } from '../data/codingProfiles';

const STORAGE_KEY = 'portfolio_coding_profiles';

export const loadCodingProfiles = (): CodingProfile[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      return JSON.parse(data);
    }
  } catch (e) {
    console.error("Failed to load coding profiles from localStorage", e);
  }
  return codingProfiles;
};

export const saveCodingProfiles = (profiles: CodingProfile[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profiles));
    window.dispatchEvent(new CustomEvent('portfolio_profiles_updated'));
  } catch (e) {
    console.error("Failed to save coding profiles to localStorage", e);
  }
};

export const resetCodingProfiles = (): CodingProfile[] => {
  try {
    localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new CustomEvent('portfolio_profiles_updated'));
  } catch (e) {
    console.error("Failed to reset coding profiles in localStorage", e);
  }
  return codingProfiles;
};

export const getProfileStat = (platform: string, fallback: string): { stat: string; label: string } => {
  const profiles = loadCodingProfiles();
  const found = profiles.find(p => p.platform.toLowerCase() === platform.toLowerCase());
  return found ? { stat: found.stat, label: found.statLabel } : { stat: fallback, label: '' };
};
