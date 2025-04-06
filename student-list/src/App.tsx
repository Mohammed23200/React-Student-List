import { useState } from "react"
import { StudentTable } from "./components/StudentTable"
import { TextForm } from "./components/TextForm"
import { data } from "./utils/data";

function App() {
  const [student,setStudent] = useState(data);
  return (
    <>
    <StudentTable student={student} checkMaxLimit></StudentTable>
    <TextForm student={student} setStudent={setStudent}></TextForm>
    </>
  )
}

export default App
