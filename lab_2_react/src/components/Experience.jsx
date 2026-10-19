function Experience() {
  return (
    <section className="rounded-xl border-2 border-slate-200 bg-white p-6 shadow-md transition hover:scale-105 hover:shadow-xl">
      <h2 className="mb-3 border-b-2 border-teal-200 pb-2 text-2xl font-semibold text-brand">
        Досвід роботи та проєкти
      </h2>

      <article className="mb-4">
        <h3 className="mb-1 text-lg font-bold">Проєкти</h3>
        <ul className="list-disc space-y-1 pl-5">
          <li>Консольний калькулятор на C#</li>
          <li>Написання БД на Python</li>
        </ul>
      </article>

      <article>
        <h3 className="mb-1 text-lg font-bold">Робота</h3>
        <ul className="list-disc pl-5">
          <li>
            <strong>6 місяців</strong> — Працівник Сільпо: посада Центральний касир
          </li>
        </ul>
      </article>
    </section>
  );
}

export default Experience;
