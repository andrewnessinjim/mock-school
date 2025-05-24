import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Image from "next/image";
import { DefinitionDescription, Wrapper } from "./styles";

interface Props {
  age: number;
  className: string;
  id: number;
  showImage: boolean;
}

function InfoSection({ age, className, id, showImage = false }: Props) {
  return (
    <Wrapper>
      <h3>
        <VisuallyHidden>Info</VisuallyHidden>
      </h3>
      {showImage && (
        <Image
          src={`https://randomuser.me/api/portraits/lego/${
            (id ? id : 0) % 10
          }.jpg`}
          width={200}
          height={200}
          alt={`Profile photo`}
        />
      )}
      <dl>
        <dt>Age</dt>
        <dd>{age}</dd>

        <dt>Class</dt>
        <DefinitionDescription $italic={!className}>
          {className ?? "Not Assigned"}
        </DefinitionDescription>
      </dl>
    </Wrapper>
  );
}

export default InfoSection;
