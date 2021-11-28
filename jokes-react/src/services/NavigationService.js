import { Button } from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom'

function BackButton() {
    const navigation = useNavigate();

    return (
        <Button>
            navigation('jokes'); {/* TODO: find how to solve this */}
        </Button>
    )
}

