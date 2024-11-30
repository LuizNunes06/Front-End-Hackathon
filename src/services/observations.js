import axios from "axios";

class ObservationService {
    async getAllObservations(user) {
        const response = await axios.get(`alunos/?aluno__id=${user? user: ''}`)
        return response.data
    }
}

export default new ObservationService()