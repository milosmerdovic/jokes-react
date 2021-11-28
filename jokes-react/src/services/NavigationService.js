import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'

function BackButton() {
    const navigation = useNavigate();

    return (
        <Button>
            navigation('jokes');
        </Button>
    )
}