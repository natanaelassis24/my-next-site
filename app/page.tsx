import Image from 'next/image';

const projects = [
  { id: 1, title: 'Projeto 1', description: 'Descrição do projeto 1', image: '/images/projeto1.png' },
  { id: 2, title: 'Projeto 2', description: 'Descrição do projeto 2', image: '/images/projeto2.png' },
];

export default function Home() {
  return (
    <div>
      {/* Banner */}
      <section className="banner">
        <Image src="/images/banner.jpg" alt="Banner" fill style={{ objectFit: 'cover' }} />
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
        <div className="about-image">
          <Image
            src="/images/foto-perfil.png"
            alt="Natanael"
            width={250}
            height={250}
            style={{ borderRadius: '50%' }}
          />
        </div>
      </section>

      {/* Projetos em destaque */}
      <section className="featured-projects">
        <h2>Projetos em Destaque</h2>
        <div className="projects-container">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <Image src={project.image} alt={project.title} width={300} height={200} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
