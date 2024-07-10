import '@testing-library/jest-dom'
import { mount, shallowMount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing'
import MainPage from "../ui";

const wrapper = mount(MainPage, {
  global: {
    plugins: [createTestingPinia()],
  },
})

describe('Компонент MainPage', () => {
  let component;

  beforeEach(() => {
    component = shallowMount(MainPage);
  });

  it('отображается', () => {
    expect(component.isVisible()).toBe(true)
  })
})