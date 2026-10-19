function Feedback() {
  return (
    <section className="rounded-xl border-l-4 border-brand bg-white p-6 shadow-md">
      <h2 className="mb-3 text-2xl font-semibold text-brand">Зворотний зв'язок</h2>

      <div className="flex flex-col gap-2 sm:flex-row sm:gap-8">
        <p>Телефон: +380673766879</p>
        <a
          href="https://github.com/xSabakin"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-brand underline-offset-4 hover:text-rose-600 hover:underline"
        >
          Мій GitHub
        </a>
        <p>Email: vasyl.vizichkanych.kb.2025@lpnu.ua</p>
      </div>

      <form action="#" method="post" className="mt-4 flex flex-col gap-2 sm:flex-row">
        <label htmlFor="email" className="sr-only">Ваш email</label>
        <input
          id="email"
          type="email"
          placeholder="name@example.com"
          className="flex-1 rounded-lg border-2 border-slate-300 px-3 py-2 focus:border-brand focus:outline-none focus:ring-2 focus:ring-teal-300"
        />
        <button
          type="submit"
          className="rounded-lg bg-brand px-5 py-2 text-white transition hover:bg-brand-dark active:scale-95"
        >
          Надіслати
        </button>
      </form>
    </section>
  );
}

export default Feedback;
