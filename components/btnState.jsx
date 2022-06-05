const btnState = (estado) => {
    
    switch (estado) {
        case 'idle':
            return '#c1c1c1';

        case 'focus':

            return '#62A0EA';

        case 'error':
            return '#ed4250'
    }


}

export default btnState;