import { screen, render, fireEvent } from '@testing-library/react';
import { Tab } from '../component';

describe('test Tab component', () => {
   it('should correct render', () =>{
      render(<Tab label='label'/>);

      expect(screen.getByText('label')).toBeInTheDocument();
   });

   it("should invoke onClick", () => {
      const functionMock = jest.fn();

      render(<Tab label='label' onClick={functionMock} />);

      const buttonElement = screen.getByText('label');

      fireEvent(
         buttonElement,
         new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
         })
      );

      expect(functionMock).toHaveBeenCalledTimes(1);
   });
})