import React from "react";
import "App.css";
import { Suspense } from "react";
import { Link, Routes, Route } from "react-router-dom";

const Home = React.lazy(() => import("pages/Home"));

const App = () => {
  return (
    <div>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
