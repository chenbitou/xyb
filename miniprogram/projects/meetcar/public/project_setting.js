module.exports = { //meetcar
	PROJECT_COLOR: '#FFB531',
	NAV_COLOR: '#000000',
	NAV_BG: '#FFB531',

	// setup
	SETUP_CONTENT_ITEMS: [
		{ title: '关于我们', key: 'SETUP_CONTENT_ABOUT' },
	],

	// 用户
	USER_REG_CHECK: false,
	USER_FIELDS: [
	],

	NEWS_NAME: '通知公告',
	NEWS_CATE: [
		{ id: 1, title: '通知公告', style: 'leftpic' },
	],
	NEWS_FIELDS: [

	],

	ENROLL_NAME: '车辆',
	ENROLL_CATE: [
		{ id: 1, title: '小车' },
		{ id: 2, title: '中巴' },
		{ id: 3, title: '大巴' },
		{ id: 4, title: '货车' },
		{ id: 5, title: '其他' }, 
	],
	ENROLL_FIELDS: [


	],
	ENROLL_JOIN_FIELDS: [
		{ mark: 'name', type: 'text', title: '联系人', must: true, min: 2, max: 30, edit: false },
		{ mark: 'phone', type: 'text', len: 11, title: '手机号', must: true, edit: false },
		{ mark: 'num', type: 'text', max: 50, title: '使用人数', must: true, edit: false },
		{ mark: 'dest', type: 'text', max: 50, title: '使用事项', must: true, edit: false },
	],

	ENROLL_TIME_NODE: {
		mark: 'mark-no',
		start: 6, //开始
		end: 23, // 结束
		price: 0, //价格 
		succ: false //是否已预订 
	},
	ENROLL_DAY_NODE: [
		{
			mark: 'mark-no',
			start: 6, //开始
			end: 23, // 结束
			price: 0,
			succ: false
		},
	],


}