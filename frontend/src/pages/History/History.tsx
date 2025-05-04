import {
  HistoryContainer,
  HistoryContent,
  TextContainer,
  TitleHistory,
} from "./style";

const History = () => {
  return (
    <HistoryContainer>
      <HistoryContent>
        <TitleHistory color="#b22222">
          Centro Social e Educacional do Lago do Aleixo
        </TitleHistory>
        <TextContainer>
          <article>
            <section>
              <strong>
                O Centro Social e Educacional do Lago do Aleixo (CSELA)
              </strong>{" "}
              é uma instituição que nasceu da união e do desejo de transformação
              social dos moradores do bairro Lago do Aleixo. Fundado em 24 de
              abril de 1972, o CSELA surgiu como uma resposta às necessidades
              sociais locais, marcando uma trajetória de compromisso comunitário
              e solidariedade.
              <br />
              <br />
              Ao longo de sua trajetória, o CSELA contou com o apoio da Igreja
              Católica e de importantes figuras, como o saudoso Pe. Lodovico
              Crimella, que foi fundamental para a consolidação da estrutura
              física e administrativa da instituição. Sua dedicação inspirou
              outros líderes, como o Pe. José Maria Fumagalli, que trouxe
              inovações e adequações para garantir que as atividades da
              organização continuassem atendendo às necessidades emergentes da
              população.
            </section>
            <section>
              O CSELA, desde sua fundação, sempre teve como missão principal
              oferecer suporte educacional, social e cultural às famílias em
              situação de vulnerabilidade do Lago do Aleixo. Nos primeiros anos
              de atuação, a instituição enfrentou desafios estruturais e
              financeiros, contando com o engajamento da comunidade e de
              voluntários para viabilizar suas atividades.
              <br />
              <br />
              Com o passar das décadas, o CSELA expandiu suas iniciativas,
              implementando programas voltados para a educação infantil,
              qualificação profissional e assistência social. Projetos como
              reforço escolar, oficinas culturais e esportivas, além de
              capacitação para jovens e adultos, consolidaram o papel da
              instituição como um pilar fundamental no desenvolvimento da
              região.
            </section>
          </article>
        </TextContainer>
        {/*Part 2*/}
        <TitleHistory color="#D2691E">
          Espaço Cidadão de Arte e Educação (ECAE)
        </TitleHistory>
        <TextContainer>
          <article>
            <section>
              Desde a sua fundação, o Espaço de Cultura, Arte e Educação (ECAE)
              em Manaus tem se consolidado como um importante centro de educação
              complementar voltado ao fortalecimento do aprendizado, da
              expressão artística e do desenvolvimento social de crianças e
              adolescentes. Criado com o propósito de ampliar as oportunidades
              educacionais oferecidas aos estudantes da rede pública, o ECAE
              surgiu como uma resposta à necessidade de integrar práticas
              pedagógicas inovadoras com atividades culturais e criativas.
              <br />
              <br />
              Ao longo dos anos, o ECAE estruturou-se como um ambiente acolhedor
              e inspirador, oferecendo oficinas planejadas anualmente com foco
              em leitura, artes visuais, teatro, música e outras formas de
              expressão. Essas ações são organizadas por educadores
              comprometidos com a formação integral dos participantes, buscando
              atender às demandas específicas de cada comunidade escolar.
              <br />
              <br />
              Mais do que um espaço de reforço escolar, o ECAE tornou-se um polo
              de valorização da cultura local e de estímulo à cidadania. Suas
              oficinas promovem o desenvolvimento de habilidades cognitivas e
              socioemocionais, contribuindo de maneira significativa para a
              melhoria do desempenho escolar e para o fortalecimento da
              autoestima dos estudantes.
            </section>
          </article>
        </TextContainer>
      </HistoryContent>
    </HistoryContainer>
  );
};

export default History;
