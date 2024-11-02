import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MainPage } from './pages/MainPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { FormPage } from './pages/FormPage';
import MyProvider from './utils/context';


export default function App() {
  return (
    <>
      <MyProvider>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/contact" element={<FormPage />} />
        </Routes>
        <Footer />
      </MyProvider>
    </>
  );
}
