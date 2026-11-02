import { useEffect, useState } from 'react';

const VARIANT = 1; // ваш номер у журналі групи

export default function Reviews() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${VARIANT}/comments`)
      .then(response => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json();
      })
      .then(data => setComments(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []); // [] — запит виконується лише один раз, при монтуванні

  return (
    <section
      id="reviews"
      className="rounded-xl border-2 border-brand p-6 shadow-md md:col-span-2"
    >
      <h2 className="mb-4 font-display text-2xl tracking-wide text-brand">
        Відгуки попередніх роботодавців
      </h2>

      {loading && <p>Завантаження відгуків…</p>}
      {error && <p className="text-red-600">Не вдалося завантажити відгуки: {error}</p>}

      <div className="grid gap-4 md:grid-cols-2">
        {comments.map(c => (
          <article
            key={c.id}
            className="rounded-xl border p-4 shadow-sm transition hover:shadow-xl"
          >
            <h3 className="font-semibold capitalize">{c.name}</h3>
            <p className="mb-2 text-sm text-gray-500">{c.email}</p>
            <p>{c.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
