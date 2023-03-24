import { fireEvent, render, screen } from '@testing-library/react'
import React from "react"
import { ChakraProvider } from "@chakra-ui/react";
import Header from "../src/sections/Header.jsx"
import { userEvent } from '@testing-library/user-event';

describe("Header renders", () => {
    beforeEach(() => {
        render(<ChakraProvider><Header /></ChakraProvider>);
    })

    it("renders title", () => {
        expect(screen.getByText(/keebstore/i)).toBeInTheDocument();
    })

    it("renders the 'shop' link", () => {
        expect(screen.getByText(/shop/i)).toBeInTheDocument();
    })

    it("changes color theme", () => {
        const button = screen.getByRole("button")

        expect(document.body).toHaveClass("chakra-ui-light")

        fireEvent.click(button)

        expect(document.body).toHaveClass("chakra-ui-dark")
    })

    it("matches snapshot", () => {
        const { container } = render(<ChakraProvider><Header /></ChakraProvider>);
        expect(container).toMatchSnapshot();
    })
})
