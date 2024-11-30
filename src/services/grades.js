import axios from "axios";
class GradeService {
    async getAllGrades(user) {
        const response = await axios.get(`alunos/?aluno__id=${user? user: ''}`)
        return response.data
    }
}

export default new GradeService()