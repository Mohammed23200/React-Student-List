import { Student } from "../utils/data";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect } from "react";
interface Props{
student:Student[];
checkMaxLimit : boolean;
}
export function StudentTable({student,checkMaxLimit}:Props){ {
    useEffect(()=>{
        if(student.length ===5&& checkMaxLimit){
        alert("Maximum number of students reached")

        }
    },[student,checkMaxLimit])
    return (
        <TableContainer component={Paper} sx={{ border: 2, backgroundColor: "#D4C9BE" }}>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Full Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>Class</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {student.map((item) => {
                        return (
                            <TableRow key={item.email}>
                                <TableCell>{item.fullName}</TableCell>
                                <TableCell>{item.email}</TableCell>
                                <TableCell>{item.age}</TableCell>
                                <TableCell>{item.class}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}}