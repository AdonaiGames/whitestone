engine.start({
	resources: {
		path: '/test/resources',
		locators: [
			'Kal16.png',
			'Kal256.png'
		]
	},	
	scenes: [ 
		{
			entities: [
				{
					renderable: {
						image: 0,
						sx: 0,
						sy: 0,
						sw: 16,
						sh: 16,
						dx: 100,
						dy: 100,
						dw: 16,
						dh: 16
					}
				}
			]
		}
	]
});