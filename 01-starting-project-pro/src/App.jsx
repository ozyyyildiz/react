import { useState } from "react";

import SideBar from "./components/SideBar";
import ProjectForm from "./components/ProjectForm";
import NoContext from "./components/NoContext";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProject: undefined,
    projects: [],
  });

  function selectProject(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProject: id,
      };
    });
  }

  function startAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProject: null,
      };
    });
  }

  function cancelAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProject: undefined,
      };
    });
  }

  function addProject(projectData) {
    setProjectsState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };

      return {
        ...prevState,
        selectedProject: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProject
  );

  let content = <SelectedProject project={selectedProject} />;

  if (projectsState.selectedProject === null) {
    content = (
      <ProjectForm onAddProject={addProject} onCancelAdd={cancelAddProject} />
    );
  } else if (projectsState.selectedProject === undefined) {
    content = <NoContext onStartAddProject={startAddProject} />;
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <SideBar
          onStartAddProject={startAddProject}
          projects={projectsState.projects}
          onSelectProject={selectProject}
          selectedProjectId={selectedProject}
        />
        {content}
      </main>
    </>
  );
}

export default App;
