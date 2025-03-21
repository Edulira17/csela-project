import {
  HistoryContainer,
  HistoryContent,
  Illustration,
  TextContainer,
  TitleContainer,
  TitleHistory,
} from "./style";
import IllustrationHourglass from "./assets/hourglass-time-watch-svgrepo-com.svg";

const History = () => {
  return (
    <HistoryContainer>
      <HistoryContent>
        <TitleContainer>
          <Illustration src={IllustrationHourglass} alt="" />
          <TitleHistory>
            Centro Social e Educacional do Lago do Aleixo
          </TitleHistory>
        </TitleContainer>
        <TextContainer>
          <article className="text-history">
            <section>
              <strong>
                O Centro Social e Educacional do Lago do Aleixo (CSELA)
              </strong>{" "}
              é uma instituição que nasceu da união e do desejo de transformação
              social dos moradores do bairro Lago do Aleixo. Fundado em 24 de
              abril de 1972, o CSELA surgiu como uma resposta às necessidades
              sociais locais, marcando uma trajetória de compromisso comunitário e
              solidariedade.
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
              O CSELA, desde sua fundação, sempre teve como missão principal oferecer suporte educacional, social e cultural às famílias em situação de vulnerabilidade do Lago do Aleixo. Nos primeiros anos de atuação, a instituição enfrentou desafios estruturais e financeiros, contando com o engajamento da comunidade e de voluntários para viabilizar suas atividades.
              <br />
              <br />
              Com o passar das décadas, o CSELA expandiu suas iniciativas, implementando programas voltados para a educação infantil, qualificação profissional e assistência social. Projetos como reforço escolar, oficinas culturais e esportivas, além de capacitação para jovens e adultos, consolidaram o papel da instituição como um pilar fundamental no desenvolvimento da região.
            </section>
          </article>
        </TextContainer>
      </HistoryContent>

      <HistoryContent>
        <TitleContainer>
          <TitleHistory>Espaço Cidadão de Arte e Educação (ECAE)</TitleHistory>
        </TitleContainer>
        <TextContainer>
          <article className="text-history">
            <section>
              O Espaço Cidadão de Arte e Educação <strong>(ECAE)</strong> surgiu em 2003 como uma extensão das atividades do Centro Social e Educacional do Lago do Aleixo (CSELA), com o objetivo de oferecer suporte educacional e cultural a crianças e adolescentes da comunidade. A iniciativa nasceu da necessidade de atender alunos que enfrentavam dificuldades na leitura e na escrita, proporcionando-lhes um ambiente de aprendizado mais dinâmico e acessível.
            </section>
            <br />
            <br />
            <section>
              Desde sua fundação, o ECAE estruturou-se como um espaço de educação complementar, promovendo oficinas de leitura e arte que são planejadas anualmente para atender às necessidades dos estudantes. Essas atividades não apenas auxiliam no desenvolvimento acadêmico, mas também incentivam a criatividade e a expressão cultural, contribuindo para a formação cidadã dos participantes.
            </section>
          </article>
        </TextContainer>
      </HistoryContent>
    </HistoryContainer>
  );
};

export default History;
