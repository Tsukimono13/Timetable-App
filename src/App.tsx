import { MainLayout } from "./shared/layouts/MainLayout";
import { Navbar } from "./widgets/Navbar";
import { Sidebar } from "./widgets/Sidebar";
import { MainPage } from "./pages/MainPage";
import { HStack } from "./shared/UI/Stack";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RoutePath } from "./shared/config/routeConfig/routeConfig";
import { TimetablePage } from "./pages/TimetablePage";
import { Suspense } from "react";

function App() {
  return (
    <HStack max justify="center">
      <MainLayout
        header={<Navbar />}
        sidebar={<Sidebar />}
        content={
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path={RoutePath.main} element={<MainPage />} />
              <Route path={RoutePath.timetable} element={<TimetablePage />} />
            </Routes>
          </Suspense>
        }
      />
    </HStack>
  );
}

export default App;
