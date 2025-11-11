const projects = [
  {
    id: 1,
    title: 'Aluguel Manager Web',
    description: 'Sistema de gerenciamento de aluguel de imóveis.',
    image: '/images/aluguel-manager.png', // coloque o GIF na pasta public/videos
    link: 'https://github.com/natanaelassis24/aluguel-manager-web'
  },
  {
    id: 2,
    title: 'PetStyle',
    description: 'Projeto PetStyle - sistema relacionado a cuidados e serviços para pets.',
    image: '/videos/petstyle.gif', // coloque o GIF do PetStyle na pasta public/videos
    link: 'https://github.com/natanaelassis24/FullStack-studies/tree/main/Frontend/activity/activity_0.11'
  },
  {
    id: 3,
    title: 'Portfólio Pessoal',
    description: 'Meu portfólio desenvolvido com Next.js e React para apresentar meus projetos.',
    image: '/images/p.png', // coloque o GIF ou imagem na pasta public/videos
    link: 'https://github.com/natanaelassis24/FullStack-studies/tree/main/Frontend/activity/activity_0.22/microfront-practice',
  },
];

export default function Projects() {
  return (
    <section className="featured-projects">
      <h2>Meus Projetos</h2>
      <div className="projects-container">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} />
            </a>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
