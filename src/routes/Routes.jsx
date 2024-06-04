import { RootLayout } from "./RootLayout";
import ProfilePage from "../pages/ProfilePage";
import HomePage from "../pages/HomePage";

const routes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
    ],
  },
];
export default routes;
