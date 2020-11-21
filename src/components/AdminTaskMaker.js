import React from 'react'
import { connect } from 'react-redux'
import '../index.css';
import '../App.css';

export const AdminTaskMaker = () => {
    return (
        <div>
            <p>Create tasks for your volunteers</p>
            <form>
                <input
                name="task"
                />
            </form>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})


export default connect(mapStateToProps, {})(AdminTaskMaker)

