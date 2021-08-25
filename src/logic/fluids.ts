import { reactive, computed } from 'vue'

export const dog: any = reactive({
  weight: '',
  dehydration: '',
  ongoingLoss: '',
  bolusNumber: '',
  bolusVolume: computed(() => Math.round(dog.weight * 20)),
  maintRate: computed(() => Math.round((dog.weight ** 0.75 * 132) / 24)),
  deficitVolume: computed(() => Math.round(dog.weight * dog.dehydration * 10)),
  initialRate: computed(() => Math.round((dog.deficitVolume - dog.bolusVolume * dog.bolusNumber) / 2 / 6 + dog.maintRate + dog.ongoingLoss)),
  ongoingRate: computed(() => Math.round((dog.deficitVolume - dog.bolusVolume * dog.bolusNumber) / 2 / 18 + dog.maintRate + dog.ongoingLoss))
})

export const cat: any = reactive({
  weight: '',
  dehydration: '',
  ongoingLoss: '',
  bolusNumber: '',
  bolusVolume: computed(() => Math.round(cat.weight * 10)),
  maintRate: computed(() => Math.round((cat.weight ** 0.75 * 80) / 24)),
  deficitVolume: computed(() => Math.round(cat.weight * cat.dehydration * 10)),
  initialRate: computed(() => Math.round((cat.deficitVolume - cat.bolusVolume * cat.bolusNumber) / 2 / 6 + cat.maintRate + cat.ongoingLoss)),
  ongoingRate: computed(() => Math.round((cat.deficitVolume - cat.bolusVolume * cat.bolusNumber) / 2 / 18 + cat.maintRate + cat.ongoingLoss)),
})
