import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
import GradeService from '@/services/grades'

export const useGradesStore = defineStore('grade', () => {
  const state = reactive({
    grades: []
  })

  const grades = computed(() => state.grades)

  const getAllGrades = async () => {
    const data = await GradeService.getAllGrades()
    state.grades = data
  }
  
  return { grades, getAllGrades }
})