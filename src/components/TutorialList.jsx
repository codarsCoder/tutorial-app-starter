import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import EditTutorial from "./EditTutorial";
import { useState } from "react";
import './TutorialList.css';


const TutorialList = ({tutorials, getTutorials}) => {
  const [editData, setEditData] = useState([])
  const deleteTutorial = async(id) => {
    const url = "https://tutorials-api-cw.herokuapp.com/api/tutorials";
    try {
      await axios.delete(`${url}/${id}`);
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  }

  const editTutorial = async(id,title,description) => {
           
    const url = "https://tutorials-api-cw.herokuapp.com/api/tutorials";
    try {
        await axios.put(`${url}/${id}`,{title, description});

    } catch (error) {
      console.log(error);
    }
    getTutorials();
  }
 

  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col" className="text-center">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {tutorials?.map((item) => {
            const { id, title, description } = item;
            return (
              <tr key={id}>
                <th>{id}</th>
                <td>{title}</td>
                <td>{description}</td>
                <td className="text-center text-nowrap">
                  <FaEdit
                    size={20}
                    type="button"           
                    onClick={() => setEditData(item)}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    className="me-2 text-warning"
                  />
                  <AiFillDelete
                    size={22}
                    type="button"
                    className="text-danger "
                    onClick={() => deleteTutorial(id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
          <EditTutorial editData={editData}
                        editTutorial={editTutorial}
                        />
    </div>
  );
};

export default TutorialList;
