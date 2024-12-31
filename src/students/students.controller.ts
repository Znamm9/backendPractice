import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
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
  async getStudent(@Param("id") id: string) { 
    
    // const reqbody = 
    const student = await this.studentService.findOne(id);

    if (!student) { 
      throw new NotFoundException("student not found");
    }

    return student;
  }
}
