import { useEffect, useState } from 'react';

export default function Footer() {
  const [info, setInfo] = useState({});

  useEffect(() => {
    //Зчитуємо дані про систему та браузер
    const n = navigator;
    const data = {
      userAgent: n.userAgent,
      platform: n.platform,
      language: n.language,
      cookieEnabled: String(n.cookieEnabled),
      hardwareConcurrency: String(n.hardwareConcurrency),
      screenSize: `${screen.width}x${screen.height}`,
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    };

    //Зберігаємо в localStorage
    Object.entries(data).forEach(([key, value]) => {
      localStorage.setItem(`sys_${key}`, value);
    });

  
    const stored = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      stored[key] = localStorage.getItem(key);
    }
    setInfo(stored);
  }, []);

  return (
    <footer className="mt-8 bg-brand-dark p-6 text-sm text-white">
      <h3 className="mb-2 font-display text-lg tracking-wide">
        Інформація про систему (localStorage)
      </h3>
      <ul className="space-y-1 break-all">
        {Object.entries(info).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
    </footer>
  );
}
