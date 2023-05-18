import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Error, Main, SinglePost } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/post/:id" element={<SinglePost />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
