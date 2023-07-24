import './TeamBuilderAdd'

const TeamBuilderAdd = ({onAddClick}) => {
  return (
    <tr>
      <td></td>
      <td colSpan='4'>
        <button onClick={onAddClick}>Add Character</button>
      </td>
    </tr>
  )
}

export default TeamBuilderAdd