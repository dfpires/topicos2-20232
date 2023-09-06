import {FlatList} from 'react-native'
import Story from './Story'

export default function Stories({stories, profile}){

  function renderItem({item, index}){
    if (index == 0){ {/* é o primeiro article */}
      return ( // monta o avatar do profile e depois o primeiro article
        <>
          <Story 
            name="Fulano de tal" 
            avatar={profile.avatar}
            isCreateStory={true}
          />
          <Story name={item.name} avatar={item.avatar} isSeen={item.isSeen}/>
        </>
      )
    }
    else { // monta o segundo article em diante
      return (
        <Story name={item.name} avatar={item.avatar} isSeen={item.isSeen}/>
      )
    }
  }
  return (
    <FlatList
      data={stories}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      horizontal={true}
      />
  )
}