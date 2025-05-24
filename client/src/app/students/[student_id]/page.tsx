import apolloClient from "@/apolloClient";
import StudentPopup from "@/components/StudentPopup";
import { gql } from "@apollo/client";

interface Props {
  params: Promise<{ student_id: string }>;
}

const GET_STUDENT = gql`
  query Student($studentId: Int!) {
    student(id: $studentId) {
      id
      name
      age
      class {
        id
        description
      }
      subjects {
        id
        name
      }
      attendance {
        date
        status
      }
    }
  }
`;

async function StudentPage({ params }: Props) {
  const { student_id } = await params;
  const result = await apolloClient.query({
    query: GET_STUDENT,
    variables: {
      studentId: parseInt(student_id),
    },
  });

  console.log(result.data.student);

  return <StudentPopup student={result.data.student} />;
}



export default StudentPage;
