type NewComponentPropsType = {
    students: Array<StudentType>
}

type StudentType = {
    id: number
    name: string
    age: number
}

export const NewComponent = (props: NewComponentPropsType) => {
    return (
        <ul>
            {
                props.students.map(student => {
                    return (
                        <li key={student.id}>
                            <span>{student.name}</span>
                            <span> age: {student.age}</span>
                        </li>
                    )
                })
            }

        </ul>
    )
}