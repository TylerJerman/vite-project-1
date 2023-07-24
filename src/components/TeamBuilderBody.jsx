import './TeamBuilder.css';
import { useState } from 'react';
import axios from 'axios'; // You need to import axios to use it

import EditableImgCell from './EditableImgCell';
import EditableModeButtons from './EditableModeButtons';
import EditableNameCell from './EditableNameCell';
import EditableStatsCell from './EditableStatsCell';

const TeamBuilderBody = ({initialCardData, initialIsEditing, onDeleteClick}) => {
  
  const [isEditing, setIsEditing] = useState(initialIsEditing)

  const [name, setName] = useState(initialCardData.name)

  const [stats, setStats] = useState(initialCardData.stats)

  const [imgUrl, setImgUrl] = useState(initialCardData.imgUrl)

  const setEditMode = () => setIsEditing(true)

  const setNormalMode = async () => {
    const {data} = await axios.post(`/api/cards/${initialCardData.id}`, { // You should be sending the ID of the card, not its name
      name, stats, imgUrl
    })
  
    if(!data.error){
      setName(data.name) 
      setStats(data.stats)
      setImgUrl(data.imgUrl) // You should update imgUrl instead of hours, which is not defined
    }

    setIsEditing(false)
  }

  return(
    <tr>
      <EditableModeButtons isEditing={isEditing} onEditClick={setEditMode} onSaveClick={setNormalMode} onDeleteClick={onDeleteClick}/>

      <EditableNameCell value={name} isEditing={isEditing} onValueChange={setName}/>

      <EditableStatsCell value={stats} isEditing={isEditing} onValueChange={setStats}/>

      <EditableImgCell value={imgUrl} isEditing={isEditing} onValueChange={setImgUrl}/>
    </tr>
  )
}

export default TeamBuilderBody;