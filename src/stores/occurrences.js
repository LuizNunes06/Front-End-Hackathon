import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
import ObservationService from '@/services/occurrences'

export const useOccurrencesStore = defineStore('occurrence', () => {
  const state = reactive({
    occurrences: []
  })

  const occurrences = computed(() => state.occurrences)

  const getAllOccurrences = async () => {
    const data = await ObservationService.getAllOccurrences()
    state.occurrences = data
  }
  
  return { occurrences, getAllOccurrences }
})