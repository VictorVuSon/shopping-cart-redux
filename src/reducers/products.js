var initialState = [
	{
		id: 1,
		name: 'iPhone 6s',
		image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
		description: 'Available space is less and varies due to many factors. A standard configuration uses approximately 8GB to 11GB of space (including iOS and preinstalled apps) depending on the model and settings. Preinstalled apps use about 4GB, and you can delete these apps and restore them',
		price: 800,
		inventory: '',
	},
	{
		id: 2,
		name: 'iPhone 7',
		image: 'https://store.storeimages.cdn-apple.com/4975/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/black/iphone7-black-select-2016?wid=470&hei=556&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1472430037379',
		description: 'Available space is less and varies due to many factors. A standard configuration uses approximately 8GB to 11GB of space (including iOS and preinstalled apps) depending on the model and settings. Preinstalled apps use about 4GB, and you can delete these apps and restore them',
		price: 1000,
		inventory: '',
	},
	{
		id: 3,
		name: 'Samsung S7',
		image: 'https://ae01.alicdn.com/kf/HTB1xVy0a7fb_uJkHFCcq6xagFXak/Unlocked-Samsung-Galaxy-S7-Smartphone-5-1-4GB-RAM-32GB-ROM-Quad-Core-NFC-12MP-4G.jpg_640x640.jpg',
		description: 'Available space is less and varies due to many factors. A standard configuration uses approximately 8GB to 11GB of space (including iOS and preinstalled apps) depending on the model and settings. Preinstalled apps use about 4GB, and you can delete these apps and restore them',
		price: 500,
		inventory: '',
	}
];

const products = (state = initialState, action) => {
	switch (action) {
		default:
			return [ ...state ];
	}
};

export default products;