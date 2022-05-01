import { useEffect, useState } from "react";
import css from "../style/catalogo.module.css";

export default function Catalogo() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch("/api/getQRs")
            .then((response) => response.json())
            .then((data) => setProductos(data));
    }, []);
    
    return (
        <main>
            <h1>Catalogo</h1>
            <section className={css.products}>
            {
                productos.map((producto) => (
                    <div className={css.product} key={producto.id}>
                        <h2>{producto.name}</h2>
                        <img src={producto.image} alt={producto.name} />
                        <img src={producto.qr} alt={producto.name} />
                        <p>{producto.description}</p>
                        <p>Category: <b>{producto.category}</b></p>
                        <p>Type: <b>{producto.type}</b></p>
                    </div>
                ))
            }
            </section>
        </main>
    );
}