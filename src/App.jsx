import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Examples from "./components/Examples/Examples";
import MultipleRequests from "./components/MultipleRequests/MultipleRequests";
import Navbar from "./components/Navbar/Navbar";
import Profiles from "./components/Profiles/Profiles";
import SingleProfile from "./components/SingleProfile/SingleProfile";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Profiles />} />
        <Route path="/singleProfile/:profileId" element={<SingleProfile />} />
        <Route path="/examples" element={<Examples />} />
        <Route path="/multiple-requests" element={<MultipleRequests />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
