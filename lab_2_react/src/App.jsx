import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';
import Feedback from './components/Feedback';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      <Header />
      <main className="mx-auto grid max-w-5xl gap-6 p-6 md:grid-cols-2">
        <Education />
        <Experience />
        <div className="md:col-span-2">
          <Feedback />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
