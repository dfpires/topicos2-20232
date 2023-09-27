import Constants from "expo-constants";
import {useState, useEffect} from "react"
import {SafeAreaView, View, Text, ActivityIndicator, StyleSheet, FlatList, } from 'react-native'
import {getNews} from './api'
import Article from './article'

export default function WorldNews() {
  const [isLoading, setIsLoading] = useState(true)
  const [articles, setArticles] = useState([])

  const fetchData = async () => {
    const newArticles = await getNews() // busca as notícia
    // alimenta o vetor
    setArticles( (previousNews) => previousNews.concat(newArticles))
    setIsLoading(false)
  }
  // executado toda vez que carregar a página
  useEffect(() => {
    fetchData()
  }, )

  const renderArticle = ({item}) => <Article item={item} />

  const renderDivider = () => <View style={styles.articleSeparator}></View>

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.headlines}> Brasil News </Text>
          { isLoading ? (
            <View style={styles.center}>
              <ActivityIndicator size="large" color="#e74c3c"/>
            </View>
          ) : (
            <FlatList
              data={articles}
              renderItem={renderArticle}
              keyExtractor={(item) => item.url}
              showsVerticalScrollIndicator={true}
              ItemSeparatorComponent={renderDivider}
              />
          )
          }
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1, paddingTop: Constants.statusBarHeight
  },
  content: {
    flex: 1, padding: 15
  },
  headlines: {
    fontSize: 32, fontWeight: "bold", lineHeight: 50, color: "#e74c3c"
  },
  center: {
    flex: 1, justifyContent: "center", alignItems: "center"
  },
  articleSeparator: {
    borderBottomWidth: 1,
    borderBottomColor: "#ed7669",
  }
})