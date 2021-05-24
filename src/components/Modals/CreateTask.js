import React,{useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function CreateTask({modal,toggle,save}) {

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

    const handleSave = ()=>{
        let taskObj = {}
        taskObj['Name'] = taskName
        taskObj['Description'] = description
        save(taskObj)
    }

    return (
        <Modal isOpen={modal} toggle={toggle} >
            <ModalHeader toggle={toggle}>Create Task</ModalHeader>
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
                <Button color="success" onClick={handleSave}>Create</Button>{' '}
                <Button color="danger" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    )
}

export default CreateTask
