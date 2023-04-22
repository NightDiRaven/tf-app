
import { shallowMount } from '@vue/test-utils'
import BaseButton from '@/components/Base/BaseButton.vue'

describe('BaseButton.vue', () => {
  it('renders slot when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(BaseButton, {
      slots: { default: msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})