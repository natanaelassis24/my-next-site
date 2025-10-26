const projects = [
  { id: 1, title: 'Projeto 1', description: 'Descrição do projeto 1', image: '/images/projeto1.png' },
  { id: 2, title: 'Projeto 2', description: 'Descrição do projeto 2', image: '/images/projeto2.png' },
];

export default function Projects() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Meus Projetos</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        {projects.map(project => (
          <div key={project.id} style={{ border: '1px solid #ccc', padding: '10px', width: '200px' }}>
            <img src={project.image} alt={project.title} style={{ width: '100%' }} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
