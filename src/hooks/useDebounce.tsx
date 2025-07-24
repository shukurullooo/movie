import { useEffect, useState } from 'react';

export default function useDebounce(text: string, delay: number = 800) {
  const [value, setValue] = useState('');

  useEffect(() => {
    const timerId = setTimeout(() => {
      setValue(text);
    }, delay);
    return () => {
      clearTimeout(timerId);
    };
  }, [text, delay]);
  return value;
}