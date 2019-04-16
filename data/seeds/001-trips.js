exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('trip')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('trip').insert([
				{
					id: 1,
					user_id: '2',
					adventure_type: 'a lot of things',
					date: 'Apr 15 2018',
					description:
						"California's most-visited national park stands out for its bevy of impressive waterfalls, such as Vernal Fall and Bridalveil Fall, as well as unique granite rock formations like the Half Dome and El Capitan. Whatever your itinerary may be, make sure to stop by the breathtaking Tunnel View Outlook",
					duration: '5 days',
					location: 'Yosemite National Park',
					professional: true,
					title: 'Yosemite Sam'
				},
				{
					id: 2,
					user_id: '2',
					adventure_type: 'Eco Tour',
					date: 'Apr 15 2018',
					description:
						"Even if Yellowstone didn't hold the incredible distinction of the world's first national park, the 2.2 million-acre park could easily stand on its own for its unique natural attractions and diverse geography. Here, travelers can get lost in the splendor of Yellowstone's many lakes, mountains, buffalo-filled valleys and, of course, its unmatched geysers and hot springs.",
					duration: '7 days',
					location: 'Yellowstone',
					professional: true,
					title: 'Eco Tour Adventures'
				},
				{
					id: 3,
					user_id: '2',
					adventure_type: 'Hiking ',
					date: 'Apr 15 2018',
					description:
						"Water and mountains define this park, which spans three mountain ranges and includes more than 700 lakes across Montana. Take advantage of the park's expansive hiking trails and be sure to hit traveler favorites like the Trail of the Cedars and Iceberg Lake Trail. Other scenic spots to explore include the Apgar Nature Center and the Waterton-Glacier International Peace Park, a UNESCO World Heritage site.",
					duration: '4 days',
					location: 'Glacier National Park',
					professional: true,
					title: '#1 in Best Places to Hike in North America'
				},
				{
					id: 4,
					user_id: '2',
					adventure_type: 'a lot of things',
					date: 'Apr 15 2018',
					description:
						"The Grand Canyon is so magnificent that even the highest quality photos don't do the park's beauty justice – you have to see it in person. The 18-by-277-mile UNESCO World Heritage site offers endless hiking opportunities as well as the chance to raft the Colorado River. The turquoise waters of the Havasu Falls are also a must-see attraction.",
					duration: '3 days',
					location: 'Grand Canyon',
					professional: false,
					title: 'Best Adventure Vacations'
				},
				{
					id: 5,
					user_id: '2',
					adventure_type: 'Hiking',
					date: 'July 3 2017',
					description:
						"The Rockies earn lots of points for their convenience. Sitting just 70 miles north of Denver, the area makes for an easy daytrip. But you could spend days exploring this park. The Rockies' magnificent landscape is one for the books, featuring 355 miles of scenic trails, around 150 lakes and 77 mountains taller than 12,000 feet.",
					duration: '9 days',
					location: 'Rocky Mountain National Park',
					professional: false,
					title: 'Best Places to Visit in July'
				},
				{
					id: 6,
					user_id: '2',
					adventure_type: 'Boating',
					date: 'Apr 15 2018',
					description:
						"Washington State's Olympic National Park, located on the Olympic Peninsula, offers something for every kind of nature lover, from hikers to stargazers to boaters to photographers. Among its nearly 1 million acres, visitors can explore glacier-capped mountains, trek through old-growth temperate rainforests and marvel at more than 70 miles of wild coastline.",
					duration: '2 days',
					location: 'Olympic National Park',
					professional: false,
					title: 'Best Day Trips from Seattle'
				}
			]);
		});
};
