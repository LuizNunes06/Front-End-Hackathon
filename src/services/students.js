import axios from "axios";

class StudentService {
    async getAllStudents(classId, course, name) {
        const response = await axios.get(`alunos/?turma__id=${classId? classId: ''}&turma__curso__id=${course? course: ''}&search=${name}`)
        return response.data
    }
}

export default new StudentService()