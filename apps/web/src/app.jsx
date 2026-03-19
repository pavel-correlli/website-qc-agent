import React, { useState } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'sonner';
import ScrollToTop from './components/ScrollToTop.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import BookDemoModal from './components/BookDemoModal.jsx';
import HomePage from './pages/HomePage.jsx';
import { LanguageProvider } from './context/LanguageContext.jsx';

function App() {
  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false);

  const handleBookDemo = () => {
    setIsBookDemoOpen(true);
  };

  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
          <Header onBookDemo={handleBookDemo} />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage onBookDemo={handleBookDemo} />} />
              <Route path="*" element={<HomePage onBookDemo={handleBookDemo} />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <BookDemoModal open={isBookDemoOpen} onOpenChange={setIsBookDemoOpen} />
        <Toaster position="top-center" />
      </Router>
    </LanguageProvider>
  );
}

export default App;