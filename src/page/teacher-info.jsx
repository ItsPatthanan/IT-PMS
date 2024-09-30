import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Button,
} from "@mui/material";
import AccountBoxTwoToneIcon from '@mui/icons-material/AccountBoxTwoTone'; // นำเข้าไอคอนที่ต้องการ
import axios from "axios";

const TeacherCards = () => {
  const [teachers, setTeachers] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await axios.get("http://localhost:3333/teachers");
        setTeachers(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchTeachers();
  }, []);

  const handleClickOpen = (teacher) => {
    setSelectedTeacher(teacher);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedTeacher(null);
  };

  return (
    <div style={{ padding: 20 }}>
      <Grid container spacing={2}>
        {teachers.map((teacher) => (
          <Grid item xs={12} sm={6} md={4} key={teacher.teacher_id}>
            <Card onClick={() => handleClickOpen(teacher)} style={{ cursor: "pointer" }}>
              {teacher.teacher_image ? (
                <CardMedia
                  component="img"
                  height="140"
                  image={teacher.teacher_image}
                  alt={teacher.teacher_name}
                />
              ) : (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 140 }}>
                  <AccountBoxTwoToneIcon style={{ fontSize: 60, color: 'gray' }} />
                </div>
              )}
              <CardContent>
                <Typography variant="h6">{teacher.teacher_name}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{selectedTeacher?.teacher_name}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <strong>Phone:</strong> {selectedTeacher?.teacher_phone}
          </DialogContentText>
          <DialogContentText>
            <strong>Email:</strong> {selectedTeacher?.teacher_email}
          </DialogContentText>
          <DialogContentText>
            <strong>Bio:</strong> {selectedTeacher?.teacher_bio}
          </DialogContentText>
          {selectedTeacher?.teacher_image ? (
            <img
              src={selectedTeacher.teacher_image}
              alt={selectedTeacher.teacher_name}
              style={{ width: '100%', height: 'auto' }}
            />
          ) : (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 200 }}>
              <AccountBoxTwoToneIcon style={{ fontSize: 100, color: 'gray' }} />
            </div>
          )}
        </DialogContent>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </Dialog>
    </div>
  );
};

export default TeacherCards;
