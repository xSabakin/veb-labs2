import { useEffect, useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Feedback from './components/Feedback';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import ThemeToggle from './components/ThemeToggle';

// день: 07:00–21:00, у решту часу — ніч
const getThemeByTime = () => {
  const hours = new Date().getHours();
  return hours >= 7 && hours < 21 ? 'light' : 'dark';
};

function App() {
  const [theme, setTheme] = useState('light');

  // автоматичний вибір теми при початковому завантаженні
  useEffect(() => {
    setTheme(getThemeByTime());
  }, []);

  // застосування класу dark до <html>
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-200">
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
      <Header />
      <main className="mx-auto grid max-w-5xl gap-6 p-6 md:grid-cols-2">
        <div className="md:col-span-2">
          <About />
        </div>

        <div className="flex flex-col gap-6">
          <Education />
          <Skills />
        </div>

        <Experience />

        <div className="md:col-span-2">
          <Feedback />
        </div>

        <div className="md:col-span-2">
          <Reviews />
        </div>
      </main>
      <Footer />
      <ContactForm />
    </div>
  );
}

export default App;
