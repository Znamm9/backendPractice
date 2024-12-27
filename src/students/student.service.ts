import { CreateStudentDTO } from "./dtos/create-student.dto";
import { StudentRepository } from "./students.repository";


export class StudentService { 

  studentRepo: StudentRepository;

  constructor() { 
    this.studentRepo = new StudentRepository();
  }

  findAll() { 
    return this.studentRepo.findAll();
  }

  findOne(id: string) { 
    return this.studentRepo.findOne(id);
  }

  create(content: CreateStudentDTO) {
    return this.studentRepo.create(content);
  }


}