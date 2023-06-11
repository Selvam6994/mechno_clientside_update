import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrolltoTop() {
  const {pathName} = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathName])
    
}

export default ScrolltoTop