import { studies, experiences } from "../data/resume";

export default function Resume() {
return (
    <div>
    <h1>Resume</h1>

    <h2>Experiencia</h2>
    {experiences.map((exp) => (
        <p key={exp.id}>
    {exp.title} - {exp.company}
        </p>
    ))}

    <h2>Educación</h2>
    {studies.map((study) => (
        <p key={study.id}>
        {study.title} - {study.institution}
        </p>
    ))}
    </div>
);
}