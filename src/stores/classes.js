import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
import ClassService from '@/services/classes'

export const useClassesStore = defineStore('class', () => {
  const state = reactive({
    classes: []
  })

  const classes = computed(() => state.classes)

  const getAllClasses = async () => {
    const data = await ClassService.getAllClasses()
    state.classes = data
  }
  
  return { classes, getAllClasses }
})