import { useEffect, useRef, useState } from "react";

export function useVisivel({ limite = 0.4 } = {}) {
    const referencia = useRef(null);
    const [estaVisivel, setEstaVisivel] = useState(false);

    useEffect(() => {
        const elemento = referencia.current;
        if (!elemento) return;

        const observador = new IntersectionObserver(
            ([entrada]) => {
                if (entrada.isIntersecting) {
                    setEstaVisivel(true);
                    observador.unobserve(elemento);
                }
            },
            { threshold: limite }
        );

        observador.observe(elemento);
        return () => observador.disconnect();
    }, [limite]);

    return [referencia, estaVisivel];
}