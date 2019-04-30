import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Fibonacci from '@/views/Fibonacci.vue'

describe('Fibonacci.vue', () => {
  it('suceción de Fibonacci exitosa', () => {
    const wrapper = shallowMount(Fibonacci)
    expect(wrapper.vm.fib(3)).to.equal(2);
  })
})
