import React, { useEffect } from 'react';
import { useState } from 'react';
import axios  from 'axios';

const EditTutorial = ({editData,editTutorial}) => {
    const { id, title, description } = editData;
    console.log(title,description);
    const [newtitle, setTitle] = useState("");
    const [newdescription, setDesc] = useState("");
    useEffect(()=>{
         setTitle(title);
        setDesc(description);
    },[editData]);
 
    // useEffect(()=>{
    //     console.log("render var")
    // },[]);
 
    const handleSubmit = (e) => {
        e.preventDefault();
        // const item = {id,title, description};
        editTutorial(id,newtitle,newdescription);
        setTitle("");
        setDesc("");
      };

  
    
      
    return (

        <div>
            {/* Modal */}

            <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                Modal title
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="modal-body">
                                <div className="container text-center mt-4">
                                    <h1 className="display-6 text-danger">Add Your Tutorial</h1>
                                    <div className="mb-3">
                                        <label htmlFor="title" className="form-label">
                                            Title
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="title"
                                            placeholder="Enter your title"
                                            value={newtitle}
                                            onChange={(e) => setTitle(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="desc" className="form-label">
                                            Description
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="desc"
                                            placeholder="Enter your Description"
                                            value={newdescription}
                                            onChange={(e) => setDesc(e.target.value)}
                                            required
                                        />
                                    </div>

                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                                <button type="submit" className="btn btn-danger mb-4">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}


export default EditTutorial;