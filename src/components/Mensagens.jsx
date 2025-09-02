import styles from './Mensagens.module.css'
import { useEffect } from "react"
import ScrollReveal from "scrollreveal"

const Mensagens = ({ text, img, video }) => {

    useEffect(() => {
        // Configuração do ScrollReveal para efeito de sobreposição
        ScrollReveal().reveal(".reveal", {
            duration: 1000,   // tempo da animação (ms)
            distance: "100px", // distância que o elemento "vem"
            origin: "bottom", // de onde o elemento aparece
            easing: "ease-in-out",
            reset: true,      // reset true para repetir a animação
            opacity: 0,       // começa invisível
            viewFactor: 0.3,  // porcentagem do elemento visível para trigger
            beforeReveal: (el) => {
                // Remove a classe de fade out do elemento anterior se existir
                const previousElement = el.previousElementSibling;
                if (previousElement && previousElement.classList.contains('reveal')) {
                    previousElement.style.opacity = '0';
                    previousElement.style.transition = 'opacity 0.5s ease';
                }
            }
        });
    }, [])

    return (
        <div className={styles.mensagensContainer}>
            <div className={`${styles.mensagens} reveal`}>
                <h1>{text}</h1>
                {img && <img src={img} alt="foto" />}
                {video &&
                    <video controls width="100%" autoPlay loop muted>
                        <source src={video} type="video/mp4"></source>
                    </video>
                }
            </div>
        </div>
    )
}

export default Mensagens