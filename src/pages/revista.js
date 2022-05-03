import { useEffect, useState } from "react";
import css from "../style/catalogo.module.css";

export default function Catalogo() {
    const [productos, setProductos] = useState([]);
    console.log(productos)

    useEffect(() => {
        fetch("/api/getQRs")
            .then((response) => response.json())
            .then((data) => setProductos(data));
    }, []);
    
    return (
        <main className={css.main}>
            <h1>Revista: AR visions</h1>
            <section className={css.products}>
            {
                productos.map((producto) => (
                    <div className={css.product} key={producto.id}>
                        <div className={css.card_revista_image}>
                            <img src={producto.image} alt={producto.name} />
                        </div>
                        <div className={css.card_revista_description}>
                            <h2 className={css.card_revista_name}>{producto.name}</h2>
                            <p className={css.description_revista_card}>{producto.description}</p>
                            <p>
                                Category: {
                                    producto.magazineCategory.map(category => (
                                        <span key={category.magazineId + category.category.name} className={css.card_revista_category}>{category.category.name}</span>
                                    ))
                                }
                            </p>
                            <button className="btn btn-primary">Ver mas</button>
                        </div>
                    </div>
                ))
            }
            </section>
        </main>
    );
}