import projects from "../data/projects";

export default function Projects() {
return (
    <div>
    <h1>Projects</h1>

    {projects.map((project) => (
        <div key={project.id}>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        </div>
    ))}
    </div>
);
}