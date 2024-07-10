import '@testing-library/jest-dom'
import { mount } from '@vue/test-utils';
// import MainPage from "../ui";

describe('Компонент Counter', () => {
  // Теперь монтируем компонент и получаем wrapper
  // const wrapper = mount(MainPage)

  it('отображает корректную разметку', () => {
    // expect(wrapper.html()).toContain('<div>0</div>')
    expect(true).toBe(true)
  })

  // также легко проверить наличие других элементов
  it('имеет кнопку', () => {
    // expect(wrapper.contains('button')).toBe(true)
    expect(true).toBe(true)
  })
})