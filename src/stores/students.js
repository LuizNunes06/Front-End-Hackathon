import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
import StudentService from '@/services/students'

export const useStudentsStore = defineStore('student', () => {
  const state = reactive({
    students: [],
    currentStudent:[] 
  })
  const students = computed(() => state.students)

  const getAllStudents = async (classId, course, name) => {
    const data = await StudentService.getAllStudents(classId, course, name)
    state.students = data
  }

  return { students, getAllStudents }
})