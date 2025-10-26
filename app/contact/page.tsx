export default function Contact() {
  return (
    <section className="contact">
      <div className="contact-container" style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '60px 20px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        background: 'linear-gradient(135deg, #2a0f0f, #10122a)',
        borderRadius: '10px'
      }}>
        <h1 style={{ color: '#ff4c4c', marginBottom: '20px' }}>Contato</h1>
        
        <p>Email: <a href="mailto:natanaelassis77@gmail.com">natanaelassis77@gmail.com</a></p>
        <p>Telefone: <a href="tel:+5512988935703">+55 (12) 98893-5703</a></p>
        <p>WhatsApp: <a href="https://wa.me/5512988935703" target="_blank" rel="noopener noreferrer">Clique para conversar</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/natanael-a-de-assis-a6ab54301" target="_blank" rel="noopener noreferrer">linkedin.com/in/natanael-a-de-assis</a></p>
        <p>GitHub: <a href="https://github.com/natanaelassis24" target="_blank" rel="noopener noreferrer">github.com/natanaelassis24</a></p>
      </div>
    </section>
  );
}
