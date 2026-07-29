const ACTIVE_CASE_KEY = 'nyayabot.activeCaseId'
const ANALYSIS_KEY = 'nyayabot.latestAnalysis'

export const localStore = {
  getCaseId: () => localStorage.getItem(ACTIVE_CASE_KEY),
  setCaseId: (id: string) => localStorage.setItem(ACTIVE_CASE_KEY, id),
  getAnalysis: () => {
    const value = localStorage.getItem(ANALYSIS_KEY)
    return value ? JSON.parse(value) : null
  },
  setAnalysis: (value: unknown) =>
    localStorage.setItem(ANALYSIS_KEY, JSON.stringify(value)),
}
