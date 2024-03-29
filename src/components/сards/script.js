import { mapActions, mapGetters } from "vuex";

export default {
	methods: {
		...mapActions(["updateAlbum", "updateView"]),
		setAlbum(album, page) {
			this.updateAlbum(album);
			this.updateView("links");
			this.$router.push(page);
		},
	},
	computed: {
		...mapGetters(["getHobbyLinks", "getHandmadeLinks", "getPhotosLinks"]),

	}
};