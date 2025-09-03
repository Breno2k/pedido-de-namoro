import './App.css'

// Components
import Mensagens from './components/Mensagens'

// Imagens
import img1 from './assets/snoopy_coracao.gif'
import img2 from './assets/imagem2.jpg'
import img5 from './assets/imagem5.jpg'
import img6 from './assets/imagem6.jpg'
import img7 from './assets/imagem7.jpg'
import img8 from './assets/imagem8.jpg'
import img14 from './assets/imagem14.jpg'
import img10 from './assets/imagem10.jpg'
import img11 from './assets/imagem11.jpg'
import img12 from './assets/imagem12.jpg'
import img13 from './assets/imagem13.jpg'
import img15 from './assets/imagem15.jpg'
import video2 from './assets/Video2.mp4'

function App() {

  return (
    <>
      <Mensagens text="De: Breno Melo" />
      <Mensagens text="Para: Layla Batinga" />
      <Mensagens text="Antes de mais nada..." />
      <Mensagens text="Gostaria de dizer que você é uma pessoa muito especial para mim" img={img1} />
      <Mensagens text="Desde que te conheci, você tem iluminado os meus dias cada vez mais" img={img2} />
      <Mensagens text="Sempre trazendo amor, paz, alegria e um brilho que só você sabe trazer" img={img5} />
      <Mensagens text="Estar ao seu lado, se tornou a minha parte favorita do dia" img={img8} />
      <Mensagens text="O seu sorriso é o lugar aonde eu encotro paz e tranquilidade" img={img7} />
      <Mensagens text="E também é uma das coisas mais lindas que eu já vi em alguém." img={img6} />

      <Mensagens text="Sério..." />
      <Mensagens text="Olha que menina linda..." img={img10} />
      <Mensagens text="Você transformou minha rotina em algo muito mais especial" img={img15} />
      <Mensagens text="Sempre serei grato por compartilhar tantos momentos de felicidade com você" video={video2} />
      <Mensagens text="Nunca pensei que alguém pudesse me completar assim." img={img13} />
      <Mensagens text="Espero poder dividir muitos capítulos da minha vida com você" img={img14} />
      <Mensagens text="E obrigado por me fazer lembrar o que é amar alguém de verdade" img={img11} />
      <Mensagens text="Depois de tantos momentos juntos, percebi que não há mais dúvidas sobre nós dois..." img={img12} />
      <Mensagens text="Layla" />
      <Mensagens text="Você aceita namorar comigo ?" />
    </>
  );
};

export default App;