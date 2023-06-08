import { type FC } from 'react';

import { AnchorLink, Image } from '@components/elements';

import * as S from '../styles';

const SectionMadeForWho: FC = () => {
  const descriptionImage = 'Aperto de mão amigável - illustration by @Storyset';

  return (
    <S.SectionContainer id='who-was-it-made-for?'>
      <S.TextContainer>
        <S.Subtitle>
          Foi feito <S.UppercaseText>pensando</S.UppercaseText> <br />
          em <S.UnderlinedText>quem</S.UnderlinedText>?
        </S.Subtitle>
        <S.Text>
          Para qualquer pessoa que esteja genuinamente interessada em contribuir para a construção de um mundo melhor. A plataforma acolhe indivíduos de diferentes idades, origens e habilidades, desde estudantes apaixonados por questões ambientais, profissionais engajados em causas sociais, até ativistas experientes que buscam amplificar seu impacto.
        </S.Text>
        <S.Text>
          Se você se preocupa com o meio ambiente, está comprometido com a justiça social e deseja tomar medidas concretas para promover mudanças positivas, o Earth Community é o lugar ideal para você. Independentemente de sua localização geográfica, é possível que pessoas de todo o Brasil se conectem e se envolvam em uma comunidade virtual engajada.
        </S.Text>
        <S.Text>
          O Earth Community valoriza a diversidade de perspectivas e incentiva a participação ativa de todos os membros. Seja você um defensor dos direitos humanos, um entusiasta da conservação da natureza, um empreendedor social ou simplesmente alguém que deseja aprender mais e agir.
        </S.Text>
        <AnchorLink elementId='what-are-the-SDG?' />
      </S.TextContainer>
      <Image
        src='/illustrations/people/friendly-handshake.svg'
        alt={descriptionImage}
        title={descriptionImage}
        width='600'
        height='400'
        fill
      />
    </S.SectionContainer>
  );
};

export default SectionMadeForWho;
