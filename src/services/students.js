import axios from "axios";

class StudentService {
    async getAllStudents() {
        const response = await axios.get('alunos')
        return response.data
    }
}

export default new StudentService()