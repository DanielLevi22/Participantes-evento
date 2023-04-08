import { Text, View,TextInput, TouchableOpacity, ScrollView , FlatList, Alert} from "react-native"
import { styles } from "./styles"
import { Particpante } from "../../components/Participante"
import { useState } from "react"


export function Home() {
 const [participantes, setParticipantes] = useState<string[]>([])
  const [participanteName, setParticipanteName] = useState('')

  function handleParticpantAdd() {
   if(participantes.includes(participanteName)){
    return  Alert.alert("Participante existe", "ja existe particpante na lista com esse nome")
   }else if(!participanteName){
    return  Alert.alert("Campo Vazio", "Preencha o campo e  adicione um usuario!!!")
   }

   setParticipantes(prevState => [...prevState, participanteName])
   setParticipanteName('')
  }
  function handleParticpantRemove(name: string) {
    return  Alert.alert("Remover Participante", `Voce deseja remover o participante ${name}`, [
      {
        text: 'Sim',
        onPress: ()=> setParticipantes(prevState => prevState.filter(participante => participante !== name) )
      },
      {
        text: 'Nao',
        style: 'cancel',
      }
    ])

  }
  return(
    <View style={styles.container}>
    <Text style={styles.eventName}>Nome do Evento</Text>
    <Text style={styles.eventDate}>
      Dia 15 do 1 de 1995. Comecando a codar em React Native.
    </Text>

    <View style={styles.form}>
      <TextInput style={styles.input}
        placeholder="Nome do Participante"
        placeholderTextColor="#6b6b6b"
        onChangeText={setParticipanteName}
        value={participanteName}
      />
      <TouchableOpacity style={styles.button} onPress={handleParticpantAdd}>
       <Text style={styles.buttonText}>+</Text>
       </TouchableOpacity>
    </View>
    <FlatList 
      data={participantes}
      keyExtractor={ item => item}
      renderItem={({ item })=>{
        return (
          <Particpante 
             key={item} 
             name={item}
             onRemove={() => handleParticpantRemove(item)}
             />
             )
      }}
       showsHorizontalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmpetyText}>
            Niguem Chegou no evento ainda? Adicione um participante.
          </Text>
      )}


     />



    </View>
  )
}