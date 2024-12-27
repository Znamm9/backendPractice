import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateStudentDTO } from './dtos/create-student.dto';
import { StudentRepository } from './students.repository';
import { StudentService } from './student.service';

@Controller('students')
export class StudentsController {

  studentService: StudentService;

  constructor() { 
    this.studentService = new StudentService();
  }

  @Get()
  listStudents() {
    return this.studentService.findAll();
  }

  @Post()
  addStudent(@Body() body: CreateStudentDTO) { 
    return this.studentService.create(body)
  }

  @Get("/:id")
  getStudent(@Param() id: string) { 
    return this.studentService.findOne(id)
  }
}
