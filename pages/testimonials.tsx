import Container from "components/Layout/Container";
import { TestimonialList } from "components/TestimonialList";

export default function Testimonials() {
  return (
    <Container title="Testimonials - Sushanth Kummitha">
      <h1>Testimonials</h1>
      <p>
        Here are what just a few of my colleagues had to say:
      </p>
      <TestimonialList />
    </Container>
  );
}
