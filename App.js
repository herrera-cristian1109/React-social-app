import {useState} from 'react';
import './App.css';
import UserCard from './components/UserCard.js';


function App() {
  
  

  const [users,setUSers] = useState([]);

  useEffect(() => {
    
    const getUsers = async () => {
      let url = 'https://6624556e04457d4aaf9c1522.mockapi.io/users';
    let response = await axios.get(url);
    setUSers(response.data)
    }
    
    getUsers();
  
  },[])
  
  const showUsers = users.map(user => <UserCard key={user.id} user={user} />)

  return (
    <div className="App-header">
      Social Page

      <div className="container"> 
        {showUsers}
      </div>
      
    </div>
  );
}

export default App;
