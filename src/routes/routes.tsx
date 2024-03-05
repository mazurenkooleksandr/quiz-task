import { createBrowserRouter } from "react-router-dom";

import { StartPage } from "@/pages/StartPage";
import { Quiz } from "@/pages/Quiz";
import { EmailPage } from "@/pages/EmailPage";
import { ThankYouPage } from "@/pages/ThankYouPage";
import { NotFoundPage } from "@/pages/NotFoundPage/component";
import { App } from "@/App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <StartPage />,
        index: true,
      },
      {
        path: "/quiz/:id",
        element: <Quiz />,
      },
      {
        path: "/email",
        element: <EmailPage />,
      },
      {
        path: "/thank-you",
        element: <ThankYouPage />,
      },
      {
        element: <NotFoundPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
