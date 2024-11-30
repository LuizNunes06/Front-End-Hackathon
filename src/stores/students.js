import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
import StudentService from '@/services/students'

export const useStudentsStore = defineStore('student', () => {
  const state = reactive({
    students: []
  })

  const students = computed(() => state.students)

  const getAllStudents = async () => {
    const data = await StudentService.getAllStudents()
    state.students = data
  }
  
  return { students, getAllStudents }
})