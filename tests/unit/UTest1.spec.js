import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Fibonacci from '@/components/Fibonacci.vue'

describe('Fibonacci.vue', () => {
  it('suceción de Fibonacci', () => {
    const wrapper = shallowMount(Fibonacci)
    expect(wrapper.vm.fib(3)).to.equal(2);
  })
})