import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event"

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)

    const header = screen.getByText(/checkout form/i);
    expect(header).toHaveTextContent(/checkout form/i);
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)
    
    const firstNameLabel = screen.getByLabelText(/first name:/i);
    const lastNameLabel = screen.getByLabelText(/last name:/i);
    const addressLabel = screen.getByLabelText(/address:/i);
    const cityLabel = screen.getByLabelText(/city:/i);
    const stateLabel = screen.getByLabelText(/first name:/i);
    const zipLabel = screen.getByLabelText(/first name:/i);

    userEvent.type(firstNameLabel, "Urdnot");
    userEvent.type(lastNameLabel, "Wrex");
    userEvent.type(addressLabel, "000 Clan Leader Trash Chair");
    userEvent.type(cityLabel, "Clan Urdnot");
    userEvent.type(stateLabel, "Tuchanka");
    userEvent.type(zipLabel, "172330");

    const button = screen.getByRole("button");
    userEvent.click(button);

    const successMessage = screen.getByTestId(/successMessage/i);
    expect(successMessage).toHaveTextContent("You have ordered some plants! Woo-hoo!");
    expect(successMessage).toHaveTextContent("Urdnot");
    expect(successMessage).toHaveTextContent("Wrex"); 
    expect(successMessage).toHaveTextContent("000 Clan Leader Trash Chair");
    expect(successMessage).toHaveTextContent("Clan Urdnot"); 
    expect(successMessage).toHaveTextContent("Tuchanka"); 
    expect(successMessage).toHaveTextContent("172330");
});
