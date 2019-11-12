const defaultStore = localStorage.news ? JSON.parse(localStorage.news) : [
	{
	id: 1,
	text: 'news1'
	}
];		

const reducer = (store=defaultStore, { type, payload }) => {
	switch(type) {
		case 'ADD_NEWS': {
			localStorage.news = JSON.stringify([payload, ...store]);
			return [payload, ...store];					
		}
		default: {
			return store;
		}
	}
};

export default reducer;