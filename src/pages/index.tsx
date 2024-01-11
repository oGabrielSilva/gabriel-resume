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
            <Link href="https://linkedin.com/in/ogabriel-henrique" target="_blank">
              <i className="bi bi-linkedin" /> | <span>in/ogabriel-henrique</span>
            </Link>
            <Link href="https://wa.me/qr/27ZUCU5ASJVUJ1" target="_blank">
              <i className="bi bi-whatsapp" /> | <span>{'(87) 9 9649-4152'}</span>
            </Link>
            <Link href="https://github.com/oGabrielSilva" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github" /> | <span>GitHub</span>
            </Link>
          </div>
          <div id="title">
            <h1 className={styles.h1}>Gabriel Silva</h1>
            <small>Gabriel Henrique da Silva</small>
            <h2>Gestor de TI & Desenvolvedor FullStack</h2>
          </div>
        </section>
        <section id="body" className={styles.body}>
          <div id="part2" className={styles.part2}>
            <div className={styles.file2}>
              <h2>Resumo</h2>
              <p>
                Atuo no campo da Tecnologia da Informação como programador web, abrangendo tanto
                Frontend quanto Backend, além de possuir experiência em desenvolvimento mobile para
                Android. Desde 2019, venho aprimorando minhas habilidades em programação. Em 2021,
                decidi ampliar meu conhecimento ao ingressar em um curso superior na área, optando
                por Gestão de TI. A escolha por este curso se deve à minha busca por um entendimento
                mais profundo em gestão, uma área em que possuo menos familiaridade.
              </p>
              <p>
                Estou em constante busca por oportunidades que me permitam expandir ainda mais
                minhas habilidades, seja aprofundando conhecimentos em gestão ou explorando novos
                nichos dentro da TI. Com uma base sólida em programação e o comprometimento
                adquirido ao longo dos anos, estou preparado para enfrentar desafios e contribuir de
                forma significativa em ambas as áreas.
              </p>
            </div>
            <div className={styles.file}>
              <h2>Ensino superior</h2>
              <ol className={styles.education}>
                <li>
                  <div>
                    <strong>Gestão da Tecnologia da Informação</strong>
                  </div>
                  <div>
                    <span>Instituto Federal do Sertão Pernambucano</span>
                  </div>
                  <div>
                    <span>
                      IFSertãoPE <i>campus</i> Floresta | 2021 - cursando
                    </span>
                  </div>
                </li>
              </ol>
            </div>
            <div id="employment" className={styles.file2}>
              <h2>Histórico profissional</h2>
              <ul>
                <li>
                  <div>
                    <h3>UP! Solução Digital</h3>
                    <span>Desenvolvedor FullStack - estágio, Floresta (PE) | 2023</span>
                  </div>
                  <div>
                    <p>
                      A empresa UP! iniciou um projeto interno e constituiu uma equipe composta por
                      5 estagiários. Dentre eles, fui designado como líder, uma escolha de extrema
                      importância, visto que desempenhei um papel fundamental no progresso do
                      projeto. Coordenei reuniões de validação e alinhamento tanto com a empresa
                      quanto com os estagiários. Além disso, assumi a responsabilidade pela seleção
                      das tecnologias utilizadas no projeto e prestei assistência aos demais membros
                      da equipe, garantindo um desenvolvimento sem contratempos para todos.
                    </p>
                    <div>
                      <span>
                        <strong>Tecnologias utilizadas: </strong> JavaScript; TypeScript; Node.js;
                        Express; e Firebase.
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div>
                    <h3>Correios</h3>
                    <span>Carteiro, Inajá (PE) | 2020</span>
                  </div>
                  <div>
                    <p>
                      Através de uma tercerização, obtive um contrato para trabalhar nos Correios
                      por tempo determinado. Durante minha atuação, desempenhei diversas funções
                      como carteiro, além de gerenciamento de encomendas e outros serviços.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div id="projects" className={styles.file2}>
              <h2>Participação em projetos</h2>
              <ul>
                <li>
                  <div>
                    <h3>Projeto Pescape</h3>
                    <span>Desenvolvedor FullStack, Floresta (PE) | 2023</span>
                    <div>
                      <strong>GitHub:</strong>{' '}
                      <Link target="_blank" href="https://github.com/oGabrielSilva/pescape">
                        https://github.com/oGabrielSilva/pescape
                      </Link>{' '}
                      | <strong>Projeto: </strong>
                      <Link target="_blank" href="https://pescape.vercel.app/">
                        https://pescape.vercel.app
                      </Link>
                    </div>
                  </div>
                  <div>
                    <p>
                      Similar ao projeto Caprinu, o Pescape também foi uma iniciativa do IFSertãoPE,
                      contudo, caracterizando-se como um projeto de pesquisa. Fui escolhido pelo
                      orientador que já estava familiarizado com minhas habilidades. O objetivo
                      principal era desenvolver uma ferramenta para o registro de crimes ambientais
                      na pesca em Pernambuco. Assumi a responsabilidade total pelo desenvolvimento
                      do sistema, tendo a liberdade de escolher todas as tecnologias envolvidas. Ao
                      término do projeto, apresentamos os resultados em um evento anual do
                      instituto, e um artigo correspondente foi elaborado. No momento desta redação,
                      o referido artigo encontra-se em processo de análise em uma revista
                      especializada.
                    </p>
                  </div>
                  <div>
                    <span>
                      <strong>Tecnologias utilizadas: </strong> TypeScript; Next.js; React.js;
                      MongoDB; e Vercel
                    </span>
                  </div>
                </li>
                <li>
                  <div>
                    <h3>Projeto Caprinu</h3>
                    <span>Desenvolvedor FullStack, Floresta (PE) | 2021 - 2022</span>
                  </div>
                  <div>
                    <p>
                      Caprinu foi um projeto de extensão promovido pelo IFSertãoPE, a instituição
                      onde estou matriculado. Seu propósito era desenvolver uma plataforma online
                      que integrasse informações e unificasse o sistema de caprinovinocultores da
                      região. No meu segundo semestre na faculdade, fui indicado por um dos
                      professores que percebeu minha habilidade como desenvolvedor e reconheceu que
                      eu possuía o conhecimento necessário para contribuir significativamente ao
                      projeto. A aceitação foi rápida, e inicialmente, fui designado para o
                      desenvolvimento do backend. No entanto, em pouco tempo, passei a desempenhar
                      um papel mais abrangente, participando ativamente da construção de toda a
                      plataforma. Além disso, conduzi reuniões com clientes e potenciais clientes,
                      contribuí na elaboração do artigo científico e apresentei pitches para
                      promover o projeto. Essa experiência ampliou minha visão prática e habilidades
                      além do desenvolvimento, proporcionando uma participação abrangente no ciclo
                      de vida do projeto.
                    </p>
                  </div>
                  <div>
                    <span>
                      <strong>Tecnologias utilizadas: </strong> JavaScript; Babel; Webpack; Python;
                      Django; e PostgreSQL
                    </span>
                  </div>
                </li>
                <li>
                  <div>
                    <h3>Cifra Apollo</h3>
                    <span>Desenvolvedor FullStack, Floresta (PE) | 2022</span>
                    <div>
                      <strong>GitHub:</strong>{' '}
                      <Link target="_blank" href="https://github.com/oGabrielSilva/cifra_apollo">
                        https://github.com/oGabrielSilva/cifra_apollo
                      </Link>{' '}
                      | <strong>Projeto:</strong>{' '}
                      <Link target="_blank" href="https://apollocifra.web.app/">
                        https://apollocifra.web.app
                      </Link>
                    </div>
                  </div>
                  <div>
                    <p>
                      Desenvolvi o Cifra Apollo a partir de um desafio proposto por meu professor na
                      área de segurança: criar um sistema capaz de criptografar uma frase e
                      descriptografar usando a Cifra de César ou algo semelhante, com um prazo de um
                      dia. No dia seguinte, apresentei um sistema extremamente simples. Basta
                      escolher um número e escrever a mensagem; o sistema realiza a criptografia com
                      base em um cálculo vinculado à cifra, resultando em uma sequência de
                      caracteres incomuns. A decifração pode ser realizada utilizando o mesmo número
                      escolhido anteriormente.
                    </p>
                  </div>
                  <div>
                    <span>
                      <strong>Tecnologias utilizadas: </strong> TypeScript; Next.js; React.js;
                      MongoDB; e Vercel
                    </span>
                  </div>
                </li>
                <li>
                  <div>
                    <h3>Jogos com JavaScript/TypeScript</h3>
                    <span>Desenvolvedor, Floresta (PE) | 2022</span>
                    <div>
                      <strong>GitHub:</strong>{' '}
                      <Link target="_blank" href="https://github.com/oGabrielSilva/js_fight_game">
                        https://github.com/oGabrielSilva/js_fight_game
                      </Link>
                    </div>
                  </div>
                  <div>
                    <p>
                      No meu perfil do GitHub, compartilhei alguns jogos simples que desenvolvi para
                      a web, sendo o destaque disponível no link acima. Embora não seja um
                      desenvolvedor especializado em jogos, decidi explorar um pouco desse universo.
                      Inclusive, criei uma engine completa para jogos 2D com TypeScript, mas,
                      lamentavelmente, não a encontrei em meu repositório. Isso sugere que, ou não a
                      salvei em um repositório específico, ou, por algum motivo, não consigo
                      identificar qual repositório é o correto. Contudo, estou empenhado em
                      localizar a engine e disponibilizá-la no GitHub assim que possível.
                    </p>
                  </div>
                  <div>
                    <span>
                      <strong>Tecnologias utilizadas: </strong> JavaScript; e TypeScript
                    </span>
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
