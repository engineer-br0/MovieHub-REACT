import React from "react";

const DeleteFavourite = () => {

    return(
        <div onClick={props.deleteaHandler()} className="">
           <div>Delete from favourites</div>
           
        </div>
    );
}

export default DeleteFavourite;