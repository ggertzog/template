import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MainPage } from './pages/MainPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { FormPage } from './pages/FormPage';
import MyProvider from './utils/context';
import { Helmet } from 'react-helmet';

export default function App() {
  return (
    <MyProvider>
      <Helmet>
        <title>Template | SEO</title>
        <meta name="description" content="Template for Job" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="Template, React, Typescript, Vite" />
        <meta name="author" content="Template" />
      </Helmet>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="*"
          element={
            <>
              <Helmet>
                <title>404 | Template</title>
                <meta name="description" content="Page not found" />
                <meta name="keywords" content="404, page not found" />
              </Helmet>
              <NotFoundPage />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Helmet>
                <title>Contact Us | Template</title>
                <meta name="description" content="Get in touch with us through our contact form." />
                <meta name="keywords" content="contact, form, support" />
              </Helmet>
              <FormPage />
            </>
          }
        />
      </Routes>
      <Footer />
    </MyProvider>
  );
}
