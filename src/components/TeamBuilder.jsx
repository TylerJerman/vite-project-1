import './TeamBuilder.css';
import {useState} from 'react';
import axios from 'axios';
import EditableModeButtons from './EditableModeButtons';
import EditableNameCell from './EditableNameCell';
import EditableStatsCell from './EditableStatsCell';
import EditableImgCell from './EditableImgCell';

import TeamBuilderHeader from './TeamBuilderHeader';
import TeamBuilderAdd from './TeamBuilderAdd';
import TeamBuilderBody from './TeamBuilderBody';
import characterList from '../utils/characterData';

let myId = 4

const TeamBuilder = ({initialTeamData}) => {

const [teamList, setTeamList] = useState(initialTeamData);

const newTeamList = async () => {
  const {data} = await axios.post('/api/cards', {name: ''})

  const newCard = {...data}
  setTeamList([...teamList, newCard])
  }

  const deleteCard = async (id) => {
    const {data} = await axios.post(`/api/cards/delete/${id}`)

    if(!data.error){
      const newCard = [...teamList]

      const index = teamList.findIndex((invoice) => invoice.id === id)
        const newTeamList = [...teamList];
        newTeamList.splice(index, 1) 
        setTeamList(newTeamList)

    }

    const cards = teamList.map((teamItem) => {
      const {id, name, stats, imgUrl, isEditing} = teamItem

      return(
        <TeamBuilderBody
        key={id}
        initialCardData={{name, stats, imgUrl}}
        initialIsEditing={isEditing}
        onDeleteClick={() => deleteCard(id)}
        />
      )
    })

    return (
      <table>
        <thead>
          <TeamBuilderHeader/>
        </thead>
        <tbody>
          {cards}
        </tbody>
        <tfoot>
          <TeamBuilderAdd onAddClick={newTeamList}/>
        </tfoot>
      </table>
    )
  }};

export default TeamBuilder