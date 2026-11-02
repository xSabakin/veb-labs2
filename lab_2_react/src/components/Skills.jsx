function Skills() {
  return (
    <section className="rounded-xl border border-teal-700 bg-[#cfece7] p-6 transition hover:shadow-lg dark:border-teal-200 dark:bg-slate-800">
      <h2 className="mb-3 border-b border-teal-700/50 pb-2 text-2xl font-semibold text-teal-800 dark:border-teal-200 dark:text-teal-50">
        Навички
      </h2>

      <ul className="flex flex-wrap gap-2">
        <li className="rounded-full bg-white/70 px-4 py-1 text-sm font-medium !text-teal-900 transition hover:bg-brand hover:!text-white
         dark:bg-teal-200 dark:!text-teal-950 dark:hover:bg-brand dark:hover:!text-white">
          HTML5 / CSS3
        </li>
        <li className="rounded-full bg-white/70 px-4 py-1 text-sm font-medium !text-teal-900 transition hover:bg-brand hover:!text-white
         dark:bg-teal-200 dark:!text-teal-950 dark:hover:bg-brand dark:hover:!text-white">
          JavaScript / React
        </li>
        <li className="rounded-full bg-white/70 px-4 py-1 text-sm font-medium !text-teal-900 transition hover:bg-brand hover:!text-white
         dark:bg-teal-200 dark:!text-teal-950 dark:hover:bg-brand dark:hover:!text-white">
          C# / .NET
        </li>
        <li className="rounded-full bg-white/70 px-4 py-1 text-sm font-medium !text-teal-900 transition hover:bg-brand hover:!text-white
         dark:bg-teal-200 dark:!text-teal-950 dark:hover:bg-brand dark:hover:!text-white">
          Git / GitHub
        </li>
      </ul>
    </section>
  );
}

export default Skills;

