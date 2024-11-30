import axios from "axios";

class ClassService {
    async getAllClasses() {
        const response = await axios.get('turmas')
        return response.data
    }
}

export default new ClassService()