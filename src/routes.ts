import { createBrowserRouter } from "react-router";
import { RootLayout } from "./layouts/RootLayout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { TimelinePage } from "./pages/TimelinePage";
import { ExperiencePage } from "./pages/ExperiencePage";
import { SkillsPage } from "./pages/SkillsPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ContactPage } from "./pages/ContactPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "a-propos", Component: AboutPage },
      { path: "parcours", Component: TimelinePage },
      { path: "experiences", Component: ExperiencePage },
      { path: "competences", Component: SkillsPage },
      { path: "projets", Component: ProjectsPage },
      { path: "contact", Component: ContactPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);
