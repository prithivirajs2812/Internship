

const List = () => {

    const courses=["react","Springboot","java"]

  return (
    <div>
        <ul>
            {courses.map((course,index)=>(
                <li key={index}>{course}</li>
            ))}
        </ul>
    </div>
  )
}

export default List