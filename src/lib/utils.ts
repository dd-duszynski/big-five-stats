import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function fetchAPISports<T>(url: string): Promise<T | undefined> {
  const apiKey = process.env.X_APISPORTS_KEY;
  const myHeaders = new Headers();
  if (typeof apiKey === 'string') {
    myHeaders.append('x-apisports-key', apiKey);
  }
  const requestOptions: RequestInit = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };
  try {
    const response = await fetch(
      'https://v3.football.api-sports.io/' + url,
      requestOptions
    );
    if (!response.ok) {
      throw new Error('Failed to fetch data from API:' + url);
    }
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

// ENG 39
// ESP 140
// FRA 61
// GER 78
// ITA 135
// POL 16
// POR 94
