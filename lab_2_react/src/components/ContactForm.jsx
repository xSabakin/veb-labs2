import { useEffect, useState } from 'react';

// замініть на свій endpoint із Formspree
const FORM_ACTION = 'https://formspree.io/f/xeaapjoa';

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // якщо користувач уже закрив вікно в цій сесії — не показуємо повторно
    if (sessionStorage.getItem('feedbackModalClosed')) return;

    const timer = setTimeout(() => setIsOpen(true), 60000);
    return () => clearTimeout(timer); // очищення при розмонтуванні
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('feedbackModalClosed', '1');
  };

  if (!isOpen) return null;

  const field =
    'w-full rounded-lg border-2 border-gray-300 p-2 text-gray-900 focus:ring-2 focus:ring-brand focus:outline-none';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="relative w-full max-w-md rounded-xl bg-white p-6 text-gray-900 shadow-xl">
        <button
          type="button"
          onClick={handleClose}
          className="absolute right-3 top-2 text-3xl leading-none hover:text-brand"
          aria-label="Закрити"
        >
          ×
        </button>

        <h2 className="mb-4 font-display text-2xl text-brand">Форма зворотного зв’язку</h2>

        <form action={FORM_ACTION} method="POST" className="space-y-3">
          <input className={field} type="text" name="name" placeholder="Ім’я" required />
          <input className={field} type="email" name="email" placeholder="Email" required />
          <input
            className={field}
            type="tel"
            name="phone"
            placeholder="Номер телефону"
            pattern="[0-9+()\s-]{7,20}"
            required
          />
          <textarea
            className={field}
            name="message"
            rows="4"
            placeholder="Повідомлення"
            required
          />
          <div className="flex gap-3">
            <button
              type="submit"
              className="rounded-lg bg-brand px-4 py-2 text-white hover:bg-brand-dark active:scale-95"
            >
              Надіслати
            </button>
            <button
              type="button"
              onClick={handleClose}
              className="rounded-lg border-2 border-brand px-4 py-2 text-brand hover:bg-brand hover:text-white active:scale-95"
            >
              Закрити
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
