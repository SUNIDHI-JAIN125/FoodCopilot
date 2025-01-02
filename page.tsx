import Feature from "@/app/home-page/features"
import Hero from "@/app/home-page/hero"
import { Container, Main, Section } from "@/components/craft"


export default function Page() {
  return (
    <Main className="main-container">
      <Section>
        <Container>
          <Hero />
          <Feature />
        
        </Container>
      </Section>
    </Main>
  )
}
