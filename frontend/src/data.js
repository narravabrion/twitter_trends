let woeidList = [
	{ country: "Worldwide", woeid: 1 },
	{ country: "Canada", woeid: 2972 },
	{ country: "United Kingdom", woeid: 12723 },
	{ country: "Dominican Republic", woeid: 76456 },
	{ country: "Guatemala", woeid: 83123 },
	{ country: "Mexico", woeid: 110978 },
	{ country: "Argentina", woeid: 332471 },
	{ country: "Chile", woeid: 349859 },
	{ country: "Colombia", woeid: 368148 },
	{ country: "Ecuador", woeid: 375732 },
	{ country: "Venezuela", woeid: 395269 },
	{ country: "Peru", woeid: 418440 },
	{ country: "Brazil", woeid: 455819 },
	{ country: "Argentina", woeid: 466861 },
	{ country: "Venezuela", woeid: 468382 },
	{ country: "Poland", woeid: 493417 },
	{ country: "Austria", woeid: 551801 },
	{ country: "Ireland", woeid: 560472 },
	{ country: "France", woeid: 580778 },
	{ country: "Germany", woeid: 638242 },
	{ country: "Italy", woeid: 711080 },
	{ country: "Netherlands", woeid: 726874 },
	{ country: "Spain", woeid: 753692 },
	{ country: "Switzerland", woeid: 782538 },
	{ country: "Belarus", woeid: 824382 },
	{ country: "Latvia", woeid: 854823 },
	{ country: "Norway", woeid: 857105 },
	{ country: "Sweden", woeid: 890869 },
	{ country: "Ukraine", woeid: 918981 },
	{ country: "Greece", woeid: 946738 },
	{ country: "Indonesia", woeid: 1030077 },
	{ country: "Singapore", woeid: 1062617 },
	{ country: "Australia", woeid: 1098081 },
	{ country: "Japan", woeid: 1110809 },
	{ country: "Korea", woeid: 1130853 },
	{ country: "Malaysia", woeid: 1141268 },
	{ country: "Philippines", woeid: 1167715 },
	{ country: "Thailand", woeid: 1225448 },
	{ country: "Vietnam", woeid: 1236594 },
	{ country: "Algeria", woeid: 1253079 },
	{ country: "Ghana", woeid: 1326075 },
	{ country: "Nigeria", woeid: 1387660 },
	{ country: "Egypt", woeid: 1521643 },
	{ country: "Kenya", woeid: 1528335 },
	{ country: "South Africa", woeid: 1580913 },
	{ country: "Saudi Arabia", woeid: 1937801 },
	{ country: "United Arab Emirates", woeid: 1940119 },
	{ country: "Israel", woeid: 1967449 },
	{ country: "Jordan", woeid: 1968902 },
	{ country: "Russia", woeid: 1997422 },
	{ country: "Russia", woeid: 2124298 },
	{ country: "Pakistan", woeid: 2211096 },
	{ country: "Oman", woeid: 2268284 },
	{ country: "India", woeid: 2282863 },
	{ country: "Turkey", woeid: 2323778 },
	{ country: "Japan", woeid: 2345896 },
	{ country: "Korea", woeid: 2345975 },
	{ country: "New Zealand", woeid: 2348079 },
	{ country: "United States", woeid: 2352824 },
	{ country: "Algeria", woeid: 23424740 },
	{ country: "Argentina", woeid: 23424747 },
	{ country: "Australia", woeid: 23424748 },
	{ country: "Austria", woeid: 23424750 },
	{ country: "Bahrain", woeid: 23424753 },
	{ country: "Belgium", woeid: 23424757 },
	{ country: "Belarus", woeid: 23424765 },
	{ country: "Brazil", woeid: 23424768 },
	{ country: "Canada", woeid: 23424775 },
	{ country: "Chile", woeid: 23424782 },
	{ country: "Colombia", woeid: 23424787 },
	{ country: "Denmark", woeid: 23424796 },
	{ country: "Dominican Republic", woeid: 23424800 },
	{ country: "Ecuador", woeid: 23424801 },
	{ country: "Egypt", woeid: 23424802 },
	{ country: "Ireland", woeid: 23424803 },
	{ country: "France", woeid: 23424819 },
	{ country: "Ghana", woeid: 23424824 },
	{ country: "Germany", woeid: 23424829 },
	{ country: "Greece", woeid: 23424833 },
	{ country: "Guatemala", woeid: 23424834 },
	{ country: "Indonesia", woeid: 23424846 },
	{ country: "India", woeid: 23424848 },
	{ country: "Israel", woeid: 23424852 },
	{ country: "Italy", woeid: 23424853 },
	{ country: "Japan", woeid: 23424856 },
	{ country: "Jordan", woeid: 23424860 },
	{ country: "Kenya", woeid: 23424863 },
	{ country: "Korea", woeid: 23424868 },
	{ country: "Kuwait", woeid: 23424870 },
	{ country: "Lebanon", woeid: 23424873 },
	{ country: "Latvia", woeid: 23424874 },
	{ country: "Oman", woeid: 23424898 },
	{ country: "Mexico", woeid: 23424900 },
	{ country: "Malaysia", woeid: 23424901 },
	{ country: "Nigeria", woeid: 23424908 },
	{ country: "Netherlands", woeid: 23424909 },
	{ country: "Norway", woeid: 23424910 },
	{ country: "New Zealand", woeid: 23424916 },
	{ country: "Peru", woeid: 23424919 },
	{ country: "Pakistan", woeid: 23424922 },
	{ country: "Poland", woeid: 23424923 },
	{ country: "Panama", woeid: 23424924 },
	{ country: "Portugal", woeid: 23424925 },
	{ country: "Qatar", woeid: 23424930 },
	{ country: "Philippines", woeid: 23424934 },
	{ country: "Puerto Rico", woeid: 23424935 },
	{ country: "Russia", woeid: 23424936 },
	{ country: "Saudi Arabia", woeid: 23424938 },
	{ country: "South Africa", woeid: 23424942 },
	{ country: "Singapore", woeid: 23424948 },
	{ country: "Spain", woeid: 23424950 },
	{ country: "Sweden", woeid: 23424954 },
	{ country: "Switzerland", woeid: 23424957 },
	{ country: "Thailand", woeid: 23424960 },
	{ country: "Turkey", woeid: 23424969 },
	{ country: "United Kingdom", woeid: 23424975 },
	{ country: "Ukraine", woeid: 23424976 },
	{ country: "United States", woeid: 23424977 },
	{ country: "Venezuela", woeid: 23424982 },
	{ country: "Vietnam", woeid: 23424984 },
	{ country: "Malaysia", woeid: 56013632 },
	{ country: "Malaysia", woeid: 56013645 },
	{ country: "Saudi Arabia", woeid: 56120136 },

]
export default woeidList
