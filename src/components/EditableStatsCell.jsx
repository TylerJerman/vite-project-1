import './TeamBuilder.css';

const EditableStatsCell = ({value, isEditing, onValueChange}) => {

  
  return isEditing ? (
    <td>
      Stats: <input type='text' value={value} onChange={(e) => onValueChange(e.target.value)}/>
    </td>
  ) : (
    <td>{value}</td>
  )
}
export default EditableStatsCell