import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
import CourseService from '@/services/courses'

export const useCoursesStore = defineStore('course', () => {
  const state = reactive({
    courses: []
  })

  const courses = computed(() => state.courses)

  const getAllCourses = async () => {
    const data = await CourseService.getAllCourses()
    state.courses = data
  }
  
  return { courses, getAllCourses }
})