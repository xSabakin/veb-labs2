function Skills() {
  return (
    <section className="rounded-xl border-2 border-slate-200 bg-white p-6 shadow-md transition hover:shadow-xl">
      <h2 className="mb-3 border-b-2 border-teal-200 pb-2 text-2xl font-semibold text-brand">
        Навички
      </h2>
      <ul className="flex flex-wrap gap-2">
        <li className="rounded-full bg-teal-100 px-4 py-1 text-sm font-medium text-teal-800 transition hover:bg-brand hover:text-white">
          HTML5 / CSS3
        </li>
        <li className="rounded-full bg-teal-100 px-4 py-1 text-sm font-medium text-teal-800 transition hover:bg-brand hover:text-white">
          JavaScript / React
        </li>
        <li className="rounded-full bg-teal-100 px-4 py-1 text-sm font-medium text-teal-800 transition hover:bg-brand hover:text-white">
          C# / .NET
        </li>
        <li className="rounded-full bg-teal-100 px-4 py-1 text-sm font-medium text-teal-800 transition hover:bg-brand hover:text-white">
          Git / GitHub
        </li>
      </ul>
    </section>
  );
}

export default Skills;
