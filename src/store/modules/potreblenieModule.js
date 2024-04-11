import potreblenieJson from '../db/Potreblenie.json'

export const potreblenieModule = {
    state: () => ({
        potreblenieJson: potreblenieJson
    }),
	mutations: {
		updateActiveRouter(state, activeRouter) {
			state.activeRouter = activeRouter
		}
	},
	getters: {
		getPotreblenie: state => state.potreblenieJson,
		getLastPotreblenie: state => state.potreblenieJson.filter(rec => rec.NPP == state.potreblenieJson.length)[0],
		getPrevPotreblenie: state => state.potreblenieJson.filter(rec => rec.NPP == state.potreblenieJson.length-1)[0],
	}
}