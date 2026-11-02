export default function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="fixed right-4 top-4 z-40 rounded-full bg-brand px-4 py-2 text-sm text-white shadow-md hover:bg-brand-dark focus:ring-2 active:scale-95"
    >
      {theme === 'dark' ? ' Денна тема' : ' Нічна тема'}
    </button>
  );
}
