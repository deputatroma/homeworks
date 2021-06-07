import { render, fireEvent, screen } from '@testing-library/react';
import { Button } from '../components/Button';
import '../assets/Button.scss';

describe("All tests of button", () => {

    test('render Button', () => {
        render(<Button />);
    });

    test('render Button props', () => {
        const props = {
            className: "btn",
            text: "Add to cart",
            style: {},
            onClick: () => { },
        }
        render(<Button {...props} />);
    });

    test('check props Text on the Button', () => {
        const propsButtonText = 'Remove';
        const { getByText } = render(<Button
            text={propsButtonText}
        />)
        expect(getByText(propsButtonText)).toBeDefined();
    });

    test('check props onClick on the Button', () => {

        const handleClick = jest.fn();
        render(<Button onClick={handleClick} text="Remove" />);
        fireEvent.click(screen.getByText(/remove/i));
        expect(handleClick).toHaveBeenCalledTimes(1);
    })
});