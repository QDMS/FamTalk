import {StyleSheet, Text, View, FlatList} from 'react-native';
import Comment from '../../components/Comment';
import comments from '../../assets/data/comments.json';
import Input from './../../components/Comment/Input';


const CommentsScreen = () => {
  return (
    <View style={{flex: 1}}>
      <FlatList 
      data={comments}
      renderItem={({item}) => <Comment comment={item} includeDetails/>}
      style={styles.commentFlatList}
      />
      <Input />
    </View>
  );
};

export default CommentsScreen;

const styles = StyleSheet.create({
  commentFlatList: {
    padding: 10,
    backgroundColor: '#f5f5dc'
  }
});
