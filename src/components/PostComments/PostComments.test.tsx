import { render, screen, fireEvent } from '@testing-library/react';
import PostComments from '.';

describe('PostComments', () => {
    it('Deve permitir adicionar dois comentários na lista', () => {
        render(<PostComments />);

        const textarea = screen.getByTestId('comment-textarea');
        const button = screen.getByTestId('comment-button');

        fireEvent.change(textarea, { target: { value: 'Primeiro comentário' } });
        fireEvent.click(button);


        fireEvent.change(textarea, { target: { value: 'Segundo comentário' } });
        fireEvent.click(button);

 
        const commentItems = screen.getAllByTestId('comment-item');
        expect(commentItems).toHaveLength(2);

        expect(commentItems[0]).toHaveTextContent('Primeiro comentário');
        expect(commentItems[1]).toHaveTextContent('Segundo comentário');
    });
});
