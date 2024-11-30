import axios from "axios";
class GradeService {
    async getAllGrades(user) {
        const response = await axios.get(`notas/?aluno__id=${user? user: ''}`)
        return response.data
    }
}

export default new GradeService()