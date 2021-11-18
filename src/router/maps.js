const paasMaps = [{
	path: '/index',
	name: 'index',
	component: resolve => require(["@/views/index/index"],resolve)
},
{
  path: '/control',
  name: 'control',
  component: resolve => require(["@/views/control/index"],resolve)
}];

export const maps = {
	paasMaps
}