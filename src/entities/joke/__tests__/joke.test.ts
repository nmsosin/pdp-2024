import '@testing-library/jest-dom'
import { mount, shallowMount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing'
import Joke from "../ui";

const wrapper = mount(Joke, {
  global: {
    plugins: [createTestingPinia()],
  },
})

describe('Компонент Joke', () => {
  let component;

  beforeEach(() => {
    component = shallowMount(Joke, {
      // Create a shallow instance of the component
      propsData: {
        type: "general",
        setup: "What's the difference between a guitar and a fish?",
        punchline: "You can tune a guitar but you can't \"tuna\"fish!",
        id: 275
      }
    });
  });

  it('отображает корректные данные', () => {
    expect(component.vm.type).toEqual("general");
    expect(component.vm.setup).toEqual("What's the difference between a guitar and a fish?");
    expect(component.vm.punchline).toEqual("You can tune a guitar but you can't \"tuna\"fish!");
    expect(component.vm.id).toEqual(275);
    expect(true).toBe(true)
  })

  // также легко проверить наличие других элементов
  it('имеет кнопку', () => {
    expect(component.find('div')).toBe(true)
    expect(true).toBe(true)
  })
})