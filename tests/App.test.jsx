import { render, screen } from '@testing-library/react'
import App from '../src/components/App.jsx'
import React from "react";
import { ChakraProvider } from '@chakra-ui/react';

describe("App test", () => {
    it("Render the app", () => {
        const { container } = render(<ChakraProvider><App /></ChakraProvider>);

        expect(container).toMatchSnapshot();

    })
})
