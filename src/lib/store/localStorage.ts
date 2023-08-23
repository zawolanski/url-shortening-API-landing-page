import { writable } from 'svelte/store';
import { browser } from "$app/environment"
import type { URL } from '$lib/types';

const LS_KEY = 'shortly_urls';
const value: URL[] = browser && localStorage.getItem(LS_KEY) && JSON.parse(localStorage.getItem(LS_KEY) ?? '') || [];

export const urls = writable(value);
urls.subscribe(v => {
  if (browser) localStorage.setItem(LS_KEY, JSON.stringify(v))
});
