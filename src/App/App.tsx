import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NxWelcome from './nx-welcome';
import { TestPage } from './Test/Page';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NxWelcome title="nx-react-2024-06-01" />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </BrowserRouter>
  );
}
