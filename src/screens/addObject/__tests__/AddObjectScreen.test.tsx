import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { AddObjectScreen } from "../AddObjectScreen";
import { NavigationContainer } from "@react-navigation/native";
import C from "src/constants";

describe("Component: AddObjectScreen", () => {
  it("renders cancel button", () => {
    const component = (
      <NavigationContainer>
        <AddObjectScreen />
      </NavigationContainer>
    );
    const { getByTestId } = render(component);
    const targetTestID = "AddObjectScreen.TextButton.Cancel";
    const foundCancelButton = getByTestId(targetTestID);

    expect(foundCancelButton).toBeTruthy();
  });

  it("renders add button", () => {
    const component = (
      <NavigationContainer>
        <AddObjectScreen />
      </NavigationContainer>
    );
    const { getByTestId } = render(component);
    const targetTestID = "AddObjectScreen.TextButton.Add";
    const foundAddButton = getByTestId(targetTestID);

    expect(foundAddButton).toBeTruthy();
  });

  it("validates value input", () => {
    const component = (
      <NavigationContainer>
        <AddObjectScreen />
      </NavigationContainer>
    );
    const targetTestID = "AddObjectScreen.TextInput.Value";

    const { getByTestId, getByText } = render(component);

    const foundValueInput = getByTestId(targetTestID);
    expect(foundValueInput).toBeTruthy();

    // Exceeding
    fireEvent.changeText(
      foundValueInput,
      (C.specific.maximumInventoryValue + 1).toString()
    );
    const foundWarning = getByText(C.strings.addObject.valueWarning, {
      exact: false,
    });
    expect(foundWarning).toBeTruthy();
  });
});
