import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Fibonacci from '@/components/Fibonacci.vue'

describe('Fibonacci.vue', () => {
    it('suceción de Fibonacci con la variable resultado y un número grande', () => {
      const wrapper = shallowMount(Fibonacci)
      wrapper.vm.numero = 25
      wrapper.vm.calc()
      expect(wrapper.vm.resultado).to.equal(75025);
    })
})