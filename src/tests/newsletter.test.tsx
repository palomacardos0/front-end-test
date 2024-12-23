jest.mock("axios", () => ({
  post: jest.fn(() => Promise.resolve({ status: 200 })),
}));

import { render, screen, fireEvent } from "@testing-library/react";
import { Newsletter } from "../components/Newsletter";

describe("Newsletter Component - Validation Tests", () => {
  it("shows an error when the name field is empty", async () => {
    render(<Newsletter />);

    fireEvent.change(screen.getByPlaceholderText("Digite seu email"), {
      target: { value: "test@example.com" },
    });

    fireEvent.click(screen.getByText("Eu quero!"));

    expect(
      await screen.findByText("Preencha com seu nome completo")
    ).toBeInTheDocument();
  });

  it("shows an error when the email field is empty", () => {
    render(<Newsletter />);
    fireEvent.change(screen.getByPlaceholderText("Digite seu nome"), {
      target: { value: "Test User" },
    });
    fireEvent.click(screen.getByText("Eu quero!"));

    expect(
      screen.getByText("Preencha com um e-mail válido")
    ).toBeInTheDocument();
  });

  it("shows an error when the email format is invalid", async () => {
    render(<Newsletter />);

    fireEvent.change(screen.getByPlaceholderText("Digite seu nome"), {
      target: { value: "Test User" },
    });

    fireEvent.change(screen.getByPlaceholderText("Digite seu email"), {
      target: { value: "invalid-email" },
    });

    fireEvent.click(screen.getByText("Eu quero!"));

    expect(
      await screen.findByText("Formato de e-mail inválido")
    ).toBeInTheDocument();
  });

  it("does not show errors when both name and email are valid", () => {
    render(<Newsletter />);
    fireEvent.change(screen.getByPlaceholderText("Digite seu nome"), {
      target: { value: "Test User" },
    });
    fireEvent.change(screen.getByPlaceholderText("Digite seu email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.click(screen.getByText("Eu quero!"));

    expect(
      screen.queryByText("Preencha com seu nome completo")
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText("Preencha com um e-mail válido")
    ).not.toBeInTheDocument();
  });
});
