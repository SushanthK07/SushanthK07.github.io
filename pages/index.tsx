import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import { Timeline } from "components/Timeline";
import { Projects } from "components/Projects";
import Container from "components/Layout/Container";
import { StringProps } from "lib/types";
import { devices } from "lib/displayDevice";

import { Flex } from "components/Layout/Container/styles";

import ProfilePicture from "public/assets/jpg/profile.jpg";

export default function Home() {
  return (
    <Container>
      <HeroFlex align="flex-start">
        <ContentWrapper>
          <h1>Sushanth Kummitha</h1>
          <h2>Full Stack Developer</h2>
          <h2>React JS | Node JS | Next JS | Python</h2>
          <p>
            Passionate Full Stack Developer with more than a year of experience
            in building production ready effective and efficient web
            applications with typescript, and proactive in feature optimization,
            performance improvement and debugging.
          </p>
        </ContentWrapper>
        <RoundImage
          src={ProfilePicture}
          alt="Profile Picture"
          width="250px"
          height="250px"
        />
      </HeroFlex>
      <Projects />
      <Timeline />
    </Container>
  );
}

export const ContentWrapper = styled.div<StringProps>`
  padding-right: 2rem;

  h1,
  h2 {
    margin: 0;
  }

  h2 {
    margin: 1rem 0;
    font-size: 1.25rem;
  }

  p {
    max-width: 65ch;
  }

  @media ${devices.mobileL} {
    margin-top: 2rem;
  }
`;

export const RoundImage = styled(Image)`
  border-radius: 50%;
`;

const HeroFlex = styled(Flex)`
  @media ${devices.mobileL} {
    flex-direction: column-reverse;
  }
`;
