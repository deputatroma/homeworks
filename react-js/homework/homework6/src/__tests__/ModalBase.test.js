import { render, screen } from '@testing-library/react';
import { Button } from '../components/Button';
import { ModalBase } from '../components/ModalBase';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

describe("All tests of ModalBase", () => {

    configure({ adapter: new Adapter() });

    test('render Modal', () => {
        const props = {

            header: "Adding to cart!",
            text: "Selected  product will be added to cart.",
            textConfirm: "Add to cart?",
            closeButton: true,
            bgColorHeader: "seaGreen",
            bgColorBody: "mediumSeaGreen",
            bgColorFooter: "mediumSeaGreen",
            bgInfo: "forestGreen",
            onClose: () => { },
            onConfirm: () => { },
        }
        render(<ModalBase {...props} />);
    });

    test('render ModalBase', () => {
        const props = {
            header: "Adding to cart!",
            text: "Selected  product will be added to cart.",
            textConfirm: "Add to cart?",
            closeButton: true,
            bgColorHeader: "seaGreen",
            bgColorBody: "mediumSeaGreen",
            bgColorFooter: "mediumSeaGreen",
            bgInfo: "forestGreen",
            onClose: () => { },
            onConfirm: () => { },
        }
        render(<ModalBase {...props} />);
        const modalBase = screen.getByText('Selected product will be added to cart.')
        expect(modalBase).toBeDefined();
        expect(modalBase).toBeTruthy();
    });

    test('check two button in Modal', () => {
        const wrapper = shallow(<ModalBase />);
        expect(wrapper.find(Button)).toHaveLength(2);
    })
});