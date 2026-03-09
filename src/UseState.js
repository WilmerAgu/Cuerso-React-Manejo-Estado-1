import React from 'react';

function UseState( { name} ){
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    React.useEffect( () => {
        console.log("Empezando el edecto");


        console.log("terminando el efecto")
    }, [loading]);

     return(           
        <div>
            <h2>Eliminar {name}</h2>

            <p>Por favor, escribeme el codigo de seguridad.</p>

            {error && (
                <p>Error: el codigo es incorrecto</p>
            )}
            {loading && (
                <p>Loading...</p>
            )}

            <input placeholder="Codigo de seguridad" />
            <button
                onClick={() => setLoading(true)}
            >Comprobar</button>
        </div>    
    )
     
}

export { UseState };