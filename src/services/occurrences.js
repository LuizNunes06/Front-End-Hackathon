import axios from "axios";
class OccurrenceService {
    async getAllOccurrences(user) {
        const response = await axios.get(`alunos/?aluno__id=${user? user: ''}`)
        return response.data
    }
}

export default new OccurrenceService()