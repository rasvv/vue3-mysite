import tarifJson from '../db/Tarif.json'

export const tarifModule = {
    state: () => ({
        tarifJson: tarifJson
    }),
	mutations: {
		updateActiveRouter(state, activeRouter) {
			state.activeRouter = activeRouter
		}
	},
	getters: {
		getTarif: state => state.tarifJson,
		getLastTarif: state => state.tarifJson.filter(rec => rec.NPP == state.tarifJson.length) 
	}
}