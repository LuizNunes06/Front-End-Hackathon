import axios from "axios";

class CourseService {
    async getAllCourses() {
        const response = await axios.get('cursos')
        return response.data
    }
}

export default new CourseService()