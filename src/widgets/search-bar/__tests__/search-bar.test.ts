import '@testing-library/jest-dom'
import { mount, shallowMount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing'
import SearchBar from "../ui";

const wrapper = mount(SearchBar, {
  global: {
    plugins: [createTestingPinia()],
  },
})

describe('Компонент SearchBar', () => {
  let component;

  beforeEach(() => {
    component = shallowMount(SearchBar);
  });

  it('отображается', () => {
    expect(component.isVisible()).toBe(true)
  })

  it('содержит текст', () => {
    expect(component.find('#typeInput').text()).toContain("Find by type:");
    expect(component.find('#idInput').text()).toContain("Find by ID:");
  })
})


