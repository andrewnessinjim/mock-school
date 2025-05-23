interface Props {
  params: Promise<{ student_id: string }>;
}

async function StudentPopup({ params }: Props) {
  const { student_id } = await params;
  return <div>{student_id}</div>;
}

export default StudentPopup;
