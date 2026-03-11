// Contador.test.jsx
import { render, screen, fireEvent } from "@testing-library/react";
import { expect, test } from "vitest";
import Contador from "./Contador";

test("deve incrementar o valor ao clicar no botão", () => {
  render(<Contador />);
  const botao = screen.getByRole("button");
  const valor = screen.getByTestId("valor-contador");

  fireEvent.click(botao);

  // O teste passa se o texto mudar de 0 para 1
  expect(valor.textContent).toBe("1");
});
