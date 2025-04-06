import { Button, Paper, TextField } from "@mui/material";
import { ChangeEvent, Dispatch, useEffect, useState } from "react";
import { Student } from "../utils/data";

interface Props {
    student: Student[];
    setStudent: Dispatch<React.SetStateAction<Student[]>>;
}

export function TextForm({ setStudent, student }: Props) {
    const [formData, setFormData] = useState({
        id: Date.now(), // Generate a unique ID
        fullName: "",
        email: "",
        class: "",
        age: 0,
    });

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit() {
        setStudent([...student, { ...formData, id: Date.now() }]); // Ensure unique ID
        setFormData({ id: Date.now(), fullName: "", email: "", class: "", age: 0 }); // Reset form
    }

    useEffect(() => {
        if (formData.fullName === "Admin") {
            alert("Admin is not allowed as a name");
        }
    }, [formData]);

    return (
        <Paper sx={{ gap: 2, width: 300, marginTop: "25px", display: "flex", flexDirection: "column" }}>
            <TextField
                onChange={handleChange}
                value={formData.fullName}
                id="outlined-basic"
                label="Full Name"
                name="fullName"
                variant="outlined"
            />
            <TextField
                onChange={handleChange}
                value={formData.email}
                id="outlined-basic"
                label="Email"
                name="email"
                variant="outlined"
            />
            <TextField
                onChange={handleChange}
                value={formData.class}
                id="outlined-basic"
                label="Class"
                name="class"
                variant="outlined"
            />
            <TextField
                onChange={handleChange}
                value={formData.age}
                id="outlined-basic"
                label="Age"
                name="age"
                type="number"
                variant="outlined"
            />
            <Button onClick={handleSubmit} variant="contained">
                Submit
            </Button>
        </Paper>
    );
}