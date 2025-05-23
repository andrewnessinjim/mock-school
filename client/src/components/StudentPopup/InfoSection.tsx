import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Image from "next/image";
import styled from "styled-components";

interface Props {
  age: number;
  className: string;
  id: number;
}

function InfoSection({ age, className, id }: Props) {
  return (
    <Wrapper>
      <h3>
        <VisuallyHidden>Info</VisuallyHidden>
      </h3>
      <Image
        src={`https://randomuser.me/api/portraits/lego/${
          (id ? id : 0) % 10
        }.jpg`}
        width={200}
        height={200}
        alt={`Profile photo`}
      />
      <dl>
        <dt>Age</dt>
        <dd>{age}</dd>

        <dt>Class</dt>
        <dd>{className}</dd>
      </dl>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  grid-area: info;
  justify-self: start;

  dl {
    display: grid;
    grid-template-columns: max-content auto;
    row-gap: 0.25rem;
    column-gap: 0.5rem;
    color: #f0f0f0;
  }

  dt {
    font-weight: bold;
    &::after {
      content: ":";
      margin-right: 0.25rem;
    }
  }

  dd {
    margin: 0;
  }
`;
export default InfoSection;
