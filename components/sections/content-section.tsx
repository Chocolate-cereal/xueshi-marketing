import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

type ContentSectionProps = React.ComponentProps<"section"> & {
  containerClassName?: string;
};

export function ContentSection({
  className,
  containerClassName,
  children,
  ...props
}: ContentSectionProps) {
  return (
    <Section className={className} {...props}>
      <Container className={containerClassName}>{children}</Container>
    </Section>
  );
}
