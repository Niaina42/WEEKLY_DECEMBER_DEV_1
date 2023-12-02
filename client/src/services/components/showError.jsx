import React from 'react';

const ShowError = ({error} ) => {
    if(error != undefined){
        return (
            <div className="alert alert-danger" role="alert">
                { error }
            </div>
        );
    }
    if(error == ""){
        return(
            <div></div>
        );
    }
    return(
        <div></div>
    );
}
export default ShowError;