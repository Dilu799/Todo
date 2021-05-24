import React,{useState,useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function EditTask({modal,toggle,updateTask,taskObj}) {



    const [taskName, setTaskName] = useState('') 
    const [description, setDescription] = useState('') 

    const handleChange = (e) =>{

        const {name, value} = e.target;

        if(name === 'taskName'){
            setTaskName(value)
        }else{
            setDescription(value)
        }

    }

    useEffect(()=>{
        setTaskName(taskObj.Name)
        setDescription(taskObj.Description)
    },[])

    const handleUpdate = (e)=>{
        e.preventDefault();
        let tempObj = {}
        tempObj['Name'] = taskName
        tempObj['Description'] = description
        updateTask(tempObj)
    }

    return (
        <Modal isOpen={modal} toggle={toggle} >
            <ModalHeader toggle={toggle}>Update Task</ModalHeader>
            <ModalBody>
                <form action="">
                    <div className="form-group">
                        <label >Task Name</label>
                        <input type="text" onChange={handleChange} className='form-control' value={taskName} name='taskName'/>
                    </div>
                    <div className="form-group mt-3">
                        <label >Description</label>
                        <textarea onChange={handleChange} rows="5" className='form-control' name='description' value={description}>

                        </textarea>
                    </div>
                </form>
                </ModalBody>
            <ModalFooter>
                <Button color="success" onClick={handleUpdate}>Update</Button>{' '}
                <Button color="danger" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    )
}

export default EditTask
