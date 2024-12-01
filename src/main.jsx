import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./website/pages/Home";
import "./components/button.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./website/pages/services.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./website/pages/SignUp";
import Login from "./website/pages/Login";
import BuldingMuscle from "./website/pages/BuldingMuscle";
import LosingWeight from "./website/pages/LosingWeight";
import TraningInHome from "./website/pages/TraningInHome";
import GymPlane from "./website/pages/GymPlane";
import CalorieCalculator from "./website/pages/CalorieCalculator";
import BMIcalculator from "./website/pages/BMIcalculator";
import WaterIntakeCalculator from "./website/pages/WaterIntakeCalculator";
import MacronutrionCalculator from "./website/pages/MacronutrionCalculator";
import Trainer from "./website/pages/Trainer";
import Blog from "./website/pages/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/service/bulding muscle",
    element: <BuldingMuscle />,
  },
  {
    path: "/service/losing weight",
    element: <LosingWeight />,
  },
  {
    path: "/service/traning in home",
    element: <TraningInHome />,
  },
  {
    path: "/service/gym plane",
    element: <GymPlane />,
  },
  {
    path: "/tool/calorie calculator",
    element: <CalorieCalculator/>,
  },
  {
    path: "/tool/BMI calculator",
    element: <BMIcalculator />,
  },
  {
    path: "/tool/water intake calculator",
    element: <WaterIntakeCalculator />,
  },
  {
    path: "/tool/macronutrion calculator",
    element: <MacronutrionCalculator />,
  },
  {
    path: "/trainer/:id",
    element: <Trainer />,
  },
  {
    path: "/blog/:id",
    element: <Blog />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
