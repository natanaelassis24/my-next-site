import Link from 'next/link';

const Navbar = () => {
  return (
    <nav style={{ padding: '20px', background: '#222', color: 'white' }}>
      <Link href="/" style={{ marginRight: '20px', color: 'white' }}>Sobre</Link>
      <Link href="/projects" style={{ marginRight: '20px', color: 'white' }}>Projetos</Link>
      <Link href="/contact" style={{ color: 'white' }}>Contato</Link>
    </nav>
  );
};

export default Navbar;
