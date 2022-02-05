import React from "react";
import { render } from "@testing-library/react-native";

import C from "src/constants";
import { Input } from "../Input";
import { KeyboardType } from "react-native";

describe("Component: Input", () => {
  it("renders default case", () => {
    const mockProps = {
      label: 'Label',
      placeholder: 'Placeholder',
      onChangeText: jest.fn(),
    };

    const component = (
      <Input
        label={mockProps.label}
        placeholder={mockProps.placeholder}
        onChangeText={mockProps.onChangeText}
      />
    );

    const { getAllByText, getByPlaceholderText } = render(component);

    expect(getAllByText(mockProps.label).length).toBe(1);
    getByPlaceholderText(mockProps.placeholder);
  });

  it("renders label, placeholder and currency for keyboardType numeric", () => {
    const mockProps = {
      label: C.strings.addObject.value,
      placeholder: C.strings.addObject.valuePlaceholder,
      currency: C.specific.currency.symbol,
      onChangeText: jest.fn(),
      keyboardType: "numeric" as KeyboardType,
    };

    const component = (
      <Input
        label={mockProps.label}
        placeholder={mockProps.placeholder}
        keyboardType={mockProps.keyboardType}
        onChangeText={mockProps.onChangeText}
        currency={mockProps.currency}
      />
    );

    const { getAllByText, getByPlaceholderText } = render(component);

    expect(getAllByText(mockProps.label).length).toBe(1);
    getByPlaceholderText(mockProps.placeholder);
  });
});

// changes styles when focused
