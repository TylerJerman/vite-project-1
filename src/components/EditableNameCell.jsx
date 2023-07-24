import './TeamBuilder.css';

const EditableNameCell = ({value, isEditing, onValueChange}) => {

  
  return isEditing ? (
    <td>
      Name: <input type='text' value={value} onChange={(e) => onValueChange(e.target.value)}/>
    </td>
  ) : (
    <td>{value}</td>
  )
}
export default EditableNameCell