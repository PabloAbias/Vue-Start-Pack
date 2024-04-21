// MyComponent.test.js
import { mount } from "@vue/test-utils";
import { suite, expect, test } from "vitest";

import { createPinia } from "pinia";

import { HelloWorldComponent as ComponenteTeste } from "./index.ts";

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

suite("Setup", async () => {
  const pinia = await createPinia();
  const wrapper = mount(ComponenteTeste, {
    global: {
      plugins: [pinia],
    },
    props: {},
  });

  test("Init Created.", async () => {
    expect(wrapper.text()).to.toContain("Este é um projeto");
  });
  test("Valor inicial do ALERT.", async () => {
    expect(wrapper.text()).to.toContain("Alertas: []");
  });
  test("Adicionar ALERTA.", async () => {
    wrapper.vm.addAlert({ type: "E", message: "Hello World!" });
    await wrapper.vm.$nextTick();
    expect(wrapper.text()).to.toContain('"type": "E"');
  });
});
