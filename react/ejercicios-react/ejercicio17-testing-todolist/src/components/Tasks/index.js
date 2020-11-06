import Task from '../Task';

function Tasks({tasks}){
  return(
    <>
      {tasks.map((task, key) => {
        return(
          <ul>
            <Task task={task} key={key} />
          </ul>
        )
      })}
    </>
  )
}

export default Tasks;