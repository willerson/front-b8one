import Card from '../components/Card';
import styles from '../styles/Home.module.scss';
export default function Home() {
  const produtos = [
    {
      id: 1,
      fotos: {
        titulo: "Monitor LED 27'' Gamer Curvo Samsung",
        src: '/img/monitor.jpg',
      },
      preco: {
        total: 2813.39,
        desconto: 2599.99,
      },
      nome: "Monitor LED 27'' Gamer Curvo Samsung 1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50",
    },
    {
      id: 2,
      fotos: {
        titulo: 'Notebook Gamer Predator Helios 300',
        src: '/img/notebook.jpg',
      },
      preco: {
        total: 8264.05,
        desconto: 8098.76,
      },
      nome: "Notebook Gamer Predator Helios 300 PH315-53-75N8 Intel Core i7 16GB 512GB ssd rtx 2060 15,6' Windows 10",
    },
  ];

  return (
    <main className={styles.App}>
      <section className={styles.section}>
        {produtos.map(({ id, fotos, nome, preco }) => {
          return (
            <Card
              key={id}
              src={fotos.src}
              titulo={fotos.titulo}
              nome={nome}
              precoTotal={preco.total.toLocaleString('pt-BR')}
              precoDesconto={preco.desconto.toLocaleString('pt-BR')}
              parcelamento={preco.desconto}
            />
          );
        })}
      </section>

      <footer className={styles.footer}>
        Desenvolvido por Will Miranda para o teste da b8one
      </footer>
    </main>
  );
}
