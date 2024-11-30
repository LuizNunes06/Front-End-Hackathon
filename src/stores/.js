import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
import ObservationService from '@/services/observations'

export const useObservationsStore = defineStore('observation', () => {
  const state = reactive({
    observations: []
  })

  const observations = computed(() => state.observations)

  const getAllObservations = async () => {
    const data = await ObservationService.getAllObservations()
    state.observations = data
  }
  
  return { observations, getAllObservations }
})