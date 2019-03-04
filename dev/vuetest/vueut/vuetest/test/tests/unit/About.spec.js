import {mount} from '@vue/test-utils';
import {expect} from 'chai';
import about from '../../src/views/About'

describe('test',()=>{
	it('测试h1是否渲染',()=>{
		const wrapper = mount(about);
		expect(wrapper.find('h1').text()).to.equal('This is an about page');
	})

	it('测试age是否变成100',()=>{
		const wrapper = mount(about);
		// 获取按钮
		const changeBtn = wrapper.find('#btnChangeValue');
		changeBtn.trigger('click');
		const ageValue = Number(wrapper.find('#age').element.value);
		expect(ageValue).to.equal(100);
	})

	it('是否清除age',()=>{
		const wrapper = mount(about);
		const cleanBtn = wrapper.find('#btnCleanAge');
		cleanBtn.trigger('click');
		const ageValue = wrapper.find('#age').element
		.value;
		expect(ageValue).to.equal('');
	})
})