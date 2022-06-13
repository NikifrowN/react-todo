import { screen, render } from '@testing-library/react';
import { Todo } from '../component';

const testTodo = {
   text: 'todo',
   id: 1,
   completed: false,
}

describe('test Todo component', () => {
   it('should correct render', () =>{
      render(<Todo todo={testTodo} />);

      expect(screen.getByText('todo')).toBeInTheDocument();
   });
})