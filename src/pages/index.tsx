import Head from 'next/head';
import styles from '@/styles/index.module.css';
import Link from 'next/link';

export default function Index() {
  return (
    <>
      <Head>
        <title>Currículo - Gabriel Henrique da Silva</title>
      </Head>
      <main>
        <section className={styles.presentation} id="presentation">
          <div className={styles.info} id="info">
            <Link target="_blank" href="https://gabrielsilva.vercel.app/">
              <i className="bi bi-globe2" /> | <span>https://gabrielsilva.vercel.app</span>
            </Link>
            <Link href="mailto:gabriel04gh1.gh@gmail.com" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-envelope-at" /> | <span>gabriel04gh1.gh@gmail.com</span>
            </Link>
            <Link href="mailto:odev.gabriel@gmail.com" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-envelope-at" /> | <span>odev.gabriel@gmail.com</span>
            </Link>
            <Link href="https://wa.me/qr/27ZUCU5ASJVUJ1" target="_blank">
              <i className="bi bi-whatsapp" /> | <span>{'(87) 9 9649-4152'}</span>
            </Link>
            <Link href="https://linkedin.com/in/ogabriel-henrique" target="_blank">
              <i className="bi bi-linkedin" /> | <span>ogabriel-henrique</span>
            </Link>
          </div>
          <div id="title">
            <h1 className={styles.h1}>Gabriel Silva</h1>
            <small>Gabriel Henrique da Silva</small>
            <h2>Gestor de TI & Desenvolvedor FullStack</h2>
          </div>
        </section>
        <section id="body" className={styles.body}>
          <div id="profile" className={styles.profile}>
            <div className={styles.file}>
              <h2>Proeficiências</h2>
              <ol>
                <li>Desenovolvimento web</li>
                <li>Desenvolvimento mobile</li>
                <li>Gestão de projetos</li>
                <li>Gestão de pessoas</li>
                <li>Gestão de TI</li>
                <li>Spring Boot</li>
                <li>Kotlin</li>
                <li>Java</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>Node.js</li>
                <li>React</li>
              </ol>
            </div>
            <div className={styles.file}>
              <h2>Formação Acadêmica</h2>
              <ol className={styles.education}>
                <li>
                  <div>
                    <strong>Gestão da Tecnologia da Informação</strong>
                  </div>
                  <div>
                    <small>
                      <span>Instituto Federal do Sertão Pernambucano</span>
                    </small>
                  </div>
                  <div>
                    <small>
                      <span>
                        IFSertãoPE <i>campus</i> Floresta | 2021 - 2024
                      </span>
                    </small>
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Introdução à Ciência da Computação com Python</strong>
                  </div>
                  <div>
                    <small>
                      <span>Universidade de São Paulo</span>
                    </small>
                  </div>
                  <div>
                    <small>
                      <span>USP - Coursera | 2023</span>
                    </small>
                  </div>
                </li>
                <li>
                  <div>
                    <strong>React.js e Next.js</strong>
                  </div>
                  <div>
                    <small>
                      <span>Luiz Otávio Miranda</span>
                    </small>
                  </div>
                  <div>
                    <small>
                      <span>Udemy | 2022</span>
                    </small>
                  </div>
                </li>
              </ol>
            </div>
          </div>
          <div id="part2" className={styles.part2}>
            <div className={styles.file2}>
              <h2>Resumo</h2>
              <p>
                Além da minha atuação como Gestor de TI, desempenho o papel de desenvolvedor de
                software, buscando constantemente aprimorar minhas habilidades. Adquiri uma valiosa
                experiência não apenas em gestão e tecnologia da informação, mas também na
                colaboração em equipes de desenvolvimento. Além de funções de liderança, o que
                ampliou minhas perspectivas.
              </p>
            </div>
            <div id="employment" className={styles.file2}>
              <h2>Histórico</h2>
              <ul>
                <li>
                  <div>
                    <h3>Desenvolvedor web FullStack</h3>
                    <span>UP! Solução Digital, Floresta (PE) | 2023</span>
                  </div>
                  <div>
                    <p>
                      Assumi a posição de líder em uma equipe de desenvolvimento web, onde enfrentei
                      o desafio de aplicar os conhecimentos adquiridos ao longo do curso de Gestão
                      de Tecnologia da Informação. A responsabilidade de liderar a equipe no
                      desenvolvimento proporcionou uma valiosa oportunidade para integrar teoria e
                      prática, consolidando, dessa forma, minha formação.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3>Desenvolvedor web FullStack</h3>
                    <span>Projeto Caprinu, Floresta (PE) | 2021 - 2022</span>
                  </div>
                  <div>
                    <p>
                      Como um dos responsáveis pelo desenvolvimento tanto do backend quanto do
                      frontend da plataforma Caprinu, um projeto de extensão, exerci o papel de
                      desenvolvedor FullStack. Além das responsabilidades técnicas, desempenhei um
                      papel crucial nas reuniões com clientes, participando ativamente de encontros
                      de validação e alinhamento.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3>Carteiro</h3>
                    <span> Correios, Inajá (PE) | 2020</span>
                  </div>
                  <div>
                    <p>
                      Através da Algo a Mais Serviços Temporários, obtive um contrato para trabalhar
                      nos Correios por tempo determinado. Durante minha atuação, desempenhei
                      diversas funções como carteiro, além de gerenciamento de encomendas e outros
                      serviços.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
