function Header() {
  return (
    <header className="flex flex-col items-center bg-gradient-to-r from-brand to-teal-500 p-10 text-white shadow-lg">
      <h1 className="font-display text-4xl font-bold tracking-wide mb-2">
        Візічканич Василь
      </h1>
      <p className="text-xl opacity-90">Студент</p>
      <span className="mt-3 rounded-full border border-white/70 px-4 py-1 text-sm">
        Кібербезпека
      </span>
    </header>
  );
}

export default Header;
