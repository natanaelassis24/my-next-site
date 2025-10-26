import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Aluguel Manager Web',
    description: 'Sistema de gerenciamento de aluguel de imóveis.',
    image: '/images/aluguel-manager.png',
    link: 'https://github.com/natanaelassis24/aluguel-manager-web',
  },
  {
    id: 2,
    title: 'PetStyle',
    description: 'Sistema relacionado a cuidados e serviços para pets.',
    image: '/images/petstyle.png',
    link: 'https://github.com/natanaelassis24/FullStack-studies/tree/main/Frontend/activity/activity_0.11',
  },
];

export default function Home() {
  return (
    <div>
      {/* Banner */}
      <section className="banner">
        <Image
          src="/images/banner.jpg"
          alt="Banner"
          width={1920}
          height={600}
          style={{ width: '100%', height: 'auto' }}
          priority
        />
      </section>

      {/* Sobre mim */}
      <section className="about">
        <div className="about-content">
          <h2>Sobre Mim</h2>
          <p>
            Sou desenvolvedor Full Stack, apaixonado por tecnologia e inovação. Tenho experiência em
            projetos web modernos, utilizando Next.js, React, Firebase e outras tecnologias. Meu
            objetivo é criar produtos digitais que unam funcionalidade e design de alta qualidade.
          </p>
        </div>
      </section>

      {/* Projetos em destaque */}
      <section className="featured-projects">
        <h2>Projetos em Destaque</h2>
        <div className="projects-container">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={200}
                  style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
                />
              </a>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
