import React from "react";
import { render,fireEvent,screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
        render(<CheckoutForm></CheckoutForm>)
        const header = screen.getByText("Checkout Form")
        expect(header).toBeInDocument;
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm></CheckoutForm>)

    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const addressInput = screen.getByLabelText(/address/i);
    const cityInput = screen.getByLabelText(/city/i);
    const stateInput = screen.getByLabelText(/state/i);
    const zipInput = screen.getByLabelText(/zip/i);
    const submitButton = screen.getByRole("button", { name: /checkout/i });
  
    fireEvent.change(firstNameInput, {
      target: { name: "firstName", value: "Hung" },
    });
    fireEvent.change(lastNameInput, {
      target: { name: "lastName", value: "Thong" },
    });
    fireEvent.change(addressInput, {
      target: { name: "address", value: "9999 Nine Dr" },
    });
    fireEvent.change(cityInput, {
      target: { name: "city", value: "Reno" },
    });
    fireEvent.change(stateInput, {
      target: { name: "state", value: "Nevada" },
    });
    fireEvent.change(zipInput, {
      target: { name: "zip", value: "99999" },
    });
    fireEvent.click(submitButton);
    const success = screen.getByTestId(/successMessage/i);
    expect(success).toBeInDocument;
  
});
