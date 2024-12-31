import { readFile, writeFile } from 'fs/promises';
import { CreateStudentDTO } from './dtos/create-student.dto';

export class StudentRepository {
  async findOne(id: string) {
    const contents = await readFile('students.json', 'utf8');
    const messages = JSON.parse(contents);
    
    return messages[id];
  }

  async findAll() {
    const contents = await readFile('students.json', 'utf8');
    const messages = JSON.parse(contents);

    return messages;
  }

  async create(content: CreateStudentDTO) {
    const contents = await readFile('students.json', 'utf8');
    const student = JSON.parse(contents);

    const id = Math.floor(Math.random() * 999);

    student[id] = { name : content.name, email : content.email };

    await writeFile('students.json', JSON.stringify(student));
  }
}
