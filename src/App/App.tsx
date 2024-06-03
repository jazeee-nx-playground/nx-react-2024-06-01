import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { TestPage } from './Test/Page';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Link to="/test">Go to Test Page</Link>} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </BrowserRouter>
  );
}
