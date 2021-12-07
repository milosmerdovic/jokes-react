import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function BackButton() {
    const navigation = useNavigate();

    return (
        <Button variant='primary' onClick={navigation('jokes')}>
            Back
        </Button>
    )
}